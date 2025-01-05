<?php
if ( ! class_exists( "Collection_Importer" ) ) {
	class Collection_Importer {
		public function __construct() {
			//add xml support to the media
			add_filter( 'upload_mimes', function ( $mimes ) {
				$mimes = array_merge( $mimes, array( 'xml' => 'application/xml' ) );

				return $mimes;
			} );
			//setup all the postypes and taxonomies
			add_action( 'init', array( $this, 'museumRegisterAllPostypeAndTaxonomies' ) );
			//setup admin page of xml importing UI
			$this->museumsSetupAdminOptionPage();

			// ajax response for non logged in users (while requesting to check status for import from xml)
			add_action( "wp_ajax_nopriv_check_before_import_collections_xml", array(
				$this,
				"responseForNonLoggedinUsers"
			) );
			// ajax response for logged in users (while requesting to import from xml)
			add_action( "wp_ajax_check_before_import_collections_xml", array(
				$this,
				"checkBeforeimportXmlCollectionListings"
			) );

			// ajax response for non logged in users (while requesting to import from xml)
			add_action( "wp_ajax_nopriv_import_collections_xml", array( $this, "responseForNonLoggedinUsers" ) );
			// ajax response for logged in users (while requesting to import from xml)
			add_action( "wp_ajax_import_collections_xml", array( $this, "importXmlCollectionListings" ) );
		}

		public function museumRegisterAllPostypeAndTaxonomies() {
			//register post type museum-collection
			register_post_type( 'museum-collection',
				// CPT Options
				array(
					'labels'      => array(
						'name'               => __( 'Museum Collections', 'museum' ),
						'singular_name'      => __( 'Museum Collections', 'museum' ),
						'menu_name'          => _x( 'Museum Collections', 'Admin Menu text', 'museum' ),
						'name_admin_bar'     => _x( 'Museum Collections', 'Add New on Toolbar', 'museum' ),
						'add_new'            => __( 'Add New', 'museum' ),
						'add_new_item'       => __( 'Add New Museum Collection', 'museum' ),
						'new_item'           => __( 'New Museum Collection', 'museum' ),
						'edit_item'          => __( 'Edit Museum Collection', 'museum' ),
						'view_item'          => __( 'View Museum Collection', 'museum' ),
						'all_items'          => __( 'All Museum Collections', 'museum' ),
						'search_items'       => __( 'Search Museum Collection', 'museum' ),
						'parent_item_colon'  => __( 'Parent Museum Collection:', 'museum' ),
						'not_found'          => __( 'No team Museum Collection found.', 'museum' ),
						'not_found_in_trash' => __( 'No team Museum Collection found in Trash.', 'museum' ),
					),
					'public'      => true,
					'has_archive' => true,
					'rewrite'     => array( 'slug' => 'museum-collection' ),
					//				'show_in_rest' => true,
					'supports'    => array( 'title', 'editor', 'custom-fields' ),
					//				'publicly_queryable'  => true // completely disable the single and the archive for this custom post type

				)
			);
			register_taxonomy( 'collection-material', 'museum-collection', array( //register taxonomy material for collection posts
				'label'        => __( 'Material', 'museum' ),
				'public'       => true,
				'rewrite'      => false,
				'hierarchical' => true
			) );
			register_taxonomy( 'collection-medium', 'museum-collection', array( //register taxonomy medium for collection posts
				'label'        => __( 'Medium', 'museum' ),
				'public'       => true,
				'rewrite'      => false,
				'hierarchical' => true
			) );
			register_taxonomy( 'collection-theme', 'museum-collection', array( //register taxonomy theme for collection posts
				'label'        => __( 'Themengebiet', 'museum' ),
				'public'       => true,
				'rewrite'      => false,
				'hierarchical' => true
			) );
		}

		public function museumsSetupAdminOptionPage() {
			add_action( 'admin_enqueue_scripts', function () {
				wp_enqueue_script( 'collection-importer-js', get_template_directory_uri() . '/inc/collection/assets/collection-importer.js', array(), "1.0" );
				wp_localize_script( 'collection-importer-js', 'collection_importer',
					array(
						'ajaxurl'                     => admin_url( 'admin-ajax.php' ),
						'import_collection_xml_nonce' => wp_create_nonce( "import_collection_xml_nonce" )
						// 'english_xml_url' => isset(get_field("collection_xml_files","option")["english"]["url"]) && !empty(get_field("collection_xml_files","option")["english"]["url"]) ? get_field("collection_xml_files","option")["english"]["url"] : "",'french_xml_url' => isset(get_field("collection_xml_files","option")["french"]["url"]) && !empty(get_field("collection_xml_files","option")["french"]["url"]) ? get_field("collection_xml_files","option")["french"]["url"] : "",'german_xml_url' => isset(get_field("collection_xml_files","option")["german"]["url"]) && !empty(get_field("collection_xml_files","option")["german"]["url"]) ? get_field("collection_xml_files","option")["german"]["url"] : "",
					)
				);
				wp_enqueue_style( 'font-awesome-css', "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css", array(), "1.0" );
				// wp_enqueue_script( 'progress-bar-css', get_template_directory_uri() . '/inc/collection/assets/progress-bar.css', array(), "1.0");
			} );
			if ( function_exists( 'acf_add_options_page' ) ) {
				acf_add_options_page( array(
					'page_title' => 'Collection Importer Options',
					'menu_title' => 'Collection Importer Options',
					'menu_slug'  => 'museum-collection-importer-setting',
					'capability' => 'edit_posts',
					'redirect'   => false
				) );
				add_action( 'toplevel_page_museum-collection-importer-setting', function () {
					if ( file_exists( get_template_directory() . "/inc/collection/views/tmpl-collection-import.php" ) ) {
						require_once get_template_directory() . "/inc/collection/views/tmpl-collection-import.php";
					}
				} );
			}
		}


		public function responseForNonLoggedinUsers() {
			die( json_encode( array( "status" => 0, "message" => "You must login" ) ) );
		}

		public function checkBeforeimportXmlCollectionListings() {
			if ( ! wp_verify_nonce( $_REQUEST['nonce'], "import_collection_xml_nonce" ) ) { // if ajax request with invalid nonce
				executeAjaxResponse( 0, "No naughty business" );
			}
			$xml_url            = array();
			$xml_url["english"] = isset( get_field( "collection_xml_files", "option" )["english"]["url"] ) && ! empty( get_field( "collection_xml_files", "option" )["english"]["url"] ) ? get_field( "collection_xml_files", "option" )["english"]["url"] : "";
			$xml_url["french"]  = isset( get_field( "collection_xml_files", "option" )["french"]["url"] ) && ! empty( get_field( "collection_xml_files", "option" )["french"]["url"] ) ? get_field( "collection_xml_files", "option" )["french"]["url"] : "";
			$xml_url["german"]  = isset( get_field( "collection_xml_files", "option" )["german"]["url"] ) && ! empty( get_field( "collection_xml_files", "option" )["german"]["url"] ) ? get_field( "collection_xml_files", "option" )["german"]["url"] : "";
			if ( $xml_url["english"] == "" || $xml_url["french"] == "" || $xml_url["german"] == "" ) {
//			if ( $xml_url["english"] == "" || $xml_url["german"] == "" ) {
				$this->executeAjaxResponse( 0, "Please select collection xml for each language" );
			}
			if ( @simplexml_load_file( $xml_url["english"] ) === false || @simplexml_load_file( $xml_url["french"] ) === false || @simplexml_load_file( $xml_url["german"] ) === false ) {
//			if ( @simplexml_load_file( $xml_url["english"] ) === false || @simplexml_load_file( $xml_url["german"] ) === false ) {
				$this->executeAjaxResponse( 0, "Please select the valid xml file for each language" );
			}
			$xml_data = $this->readXMLData( $xml_url );
			if ( $xml_data == false ) {
				$this->executeAjaxResponse( 0, "XML contains empty data" );
			}
			$this->executeAjaxResponse( 1, "", array( "total_collection" => count( $xml_data["german"] ) ) );
		}

		public function importXmlCollectionListings() {
			if ( ! wp_verify_nonce( $_REQUEST['nonce'], "import_collection_xml_nonce" ) ) { // if ajax request with invalid nonce
				executeAjaxResponse( 0, "No naughty business" );
			}
			if ( ! isset( $_REQUEST['offset'] ) ) { // if ajax request with invalid nonce
				executeAjaxResponse( 0, "Xml import Failed" );
			}
			$xml_url            = array();
			$xml_url["english"] = isset( get_field( "collection_xml_files", "option" )["english"]["url"] ) && ! empty( get_field( "collection_xml_files", "option" )["english"]["url"] ) ? get_field( "collection_xml_files", "option" )["english"]["url"] : "";
			$xml_url["french"]  = isset( get_field( "collection_xml_files", "option" )["french"]["url"] ) && ! empty( get_field( "collection_xml_files", "option" )["french"]["url"] ) ? get_field( "collection_xml_files", "option" )["french"]["url"] : "";
			$xml_url["german"]  = isset( get_field( "collection_xml_files", "option" )["german"]["url"] ) && ! empty( get_field( "collection_xml_files", "option" )["german"]["url"] ) ? get_field( "collection_xml_files", "option" )["german"]["url"] : "";
			if ( $xml_url["english"] == "" || $xml_url["french"] == "" || $xml_url["german"] == "" ) {
//			if ( $xml_url["english"] == "" || $xml_url["german"] == "" ) {
				$this->executeAjaxResponse( 0, "Please select collection xml for each language" );
			}
			if ( @simplexml_load_file( $xml_url["english"] ) === false || @simplexml_load_file( $xml_url["french"] ) === false || @simplexml_load_file( $xml_url["german"] ) === false ) {
//			if ( @simplexml_load_file( $xml_url["english"] ) === false || @simplexml_load_file( $xml_url["german"] ) === false ) {
				$this->executeAjaxResponse( 0, "Please select the valid xml file for each language" );
			}
			$xml_data = $this->readXMLData( $xml_url );
			if ( $xml_data == false ) {
				$this->executeAjaxResponse( 0, "XML contains empty data" );
			}

			$insert_count = 0;
			$update_count = 0;
			$failed_count = 0;

			$limits      = 5;
			$offset      = $_REQUEST['offset'];
			$next_offset = 0;
			for ( $i = $offset; $i < ( $offset + $limits ); $i ++ ) {
				$next_offset = $i + 1;
				if ( isset( $xml_data["german"][ $i ] ) ) {
					$row_gr = $xml_data["german"][ $i ];
					if ( ! isset( $row_gr["invnr"] ) || empty( $row_gr["invnr"] ) ) {
						$failed_count ++;
						if ( $next_offset >= count( $xml_data["german"] ) ) { //when it fails to insert/update any record/item, check first if it is last of the collection
							$completed = true;
							break; //break the loop if current record is the last of the xml
						}
						continue;
					}
					$fr_row_index = array_search( $row_gr["invnr"], array_column( $xml_data["french"], 'invnr' ) );
					$row_fr       = is_numeric( $fr_row_index ) ? $xml_data["french"][ $fr_row_index ] : array();

					$en_row_index = array_search( $row_gr["invnr"], array_column( $xml_data["english"], 'invnr' ) );
					$row_en       = is_numeric( $en_row_index ) ? $xml_data["english"][ $en_row_index ] : array();

					if ( $fr_row_index === false ) { // if corresponding french collection item(with same invnr) is not found in french xml
						$failed_count ++;
						if ( $next_offset >= count( $xml_data["german"] ) ) { //when it fails to insert/update any record/item, check first if it is last of the collection
							$completed = true;
							break; //break the loop if current record is the last of the xml
						}
						continue;
					}
					if ( $en_row_index === false ) { // if corresponding english collection item(with same invnr) is not found in english xml
						$failed_count ++;
						if ( $next_offset >= count( $xml_data["german"] ) ) { //when it fails to insert/update any record/item, check first if it is last of the collection
							$completed = true;
							break; //break the loop if current record is the last of the xml
						}
						continue;
					}

					$result = $this->insertUpdateSinlgeCollection( $row_gr, "de", 0 ); //insert/update english version of collection post
					if ( isset( $result[0] ) && $result[1] ) {
						if ( $result[0] > 0 && $result[1] == "insert" ) {
							$insert_count ++;
							$this->insertUpdateSinlgeCollection( $row_fr, "fr", $result[0] ); //insert/update french version of collection post
							$this->insertUpdateSinlgeCollection( $row_en, "en", $result[0] ); //insert/update english version of collection post
						} elseif ( $result[0] > 0 && $result[1] == "update" ) {
							$update_count ++;
							$this->insertUpdateSinlgeCollection( $row_fr, "fr", $result[0] ); //insert/update french version of collection post
							$this->insertUpdateSinlgeCollection( $row_en, "en", $result[0] ); //insert/update english version of collection post
						} else {
							$failed_count ++;
						}
					}
					if ( $next_offset >= count( $xml_data["german"] ) ) { //after successfully insert/update, check first if it is last of the collection
						$completed = true;
						break;
					}
				} else { //if array contains the invalid array key i.e associative array key, and not a default array index(numbers)
					$completed = true;
					break;
				}
			}

			$this->executeAjaxResponse( 1, "xml import completed", array(
				"inserted"  => $insert_count,
				"updated"   => $update_count,
				"failed"    => $failed_count,
				"offset"    => $next_offset,
				"completed" => isset( $completed ) ? 1 : 0
			) );
		}

		private function insertUpdateSinlgeCollection( $collection = array(), $lang = "de", $original_id = 0 ) {
			$status              = array();
			$invnr               = $collection["invnr"];
			$data                = $this->preprocessXmlRowData( $collection );
			$args                = array(
				'post_type'   => 'museum-collection',
				'fields'      => 'ids',
				//to prevent the insertion of multiple collection with the same collection_id, we need to check if post (with any status) exists
				'post_status' => array(
					'publish',
					'pending',
					'draft',
					'auto-draft',
					'future',
					'private',
					'inherit',
					'trash'
				),
				'meta_query'  => array(
					array(
						'key'     => 'collection_id',
						'value'   => (string) $lang . "-" . $invnr,
						'compare' => '=',
					)
				)
			);
			$post_already_exists = get_posts( $args );
			if ( empty( $post_already_exists ) ) {
				$post_id = wp_insert_post( array(   // insert the new post(collection) into our database
					'post_type'      => 'museum-collection',
					'post_title'     => is_string( $data["title"] ) ? esc_html( $data["title"] ) : "no-title",
					'post_content'   => is_string( $data["description"] ) ? esc_html( $data["description"] ) : "",
					'post_status'    => 'publish',
					'comment_status' => 'closed',   // if you prefer
					'ping_status'    => 'closed',      // if you prefer
				) );
				if ( is_wp_error( $post_id ) || $post_id < 1 ) {
					error_log( print_r( is_wp_error( $post_id ), true ) );
					$status = array( 0, "fail" );
				} else {
					if ( $original_id > 0 ) {
						$this->setCollectionLanguage( $post_id, $original_id, $lang );
					}
					update_post_meta( $post_id, 'collection_id', $lang . "-" . $invnr );
					$status = array( $post_id, "insert" );
				}

			} else {
				$post_id          = is_array( $post_already_exists ) ? reset( $post_already_exists ) : 0;
				$post_update_data = array(
					'ID'           => $post_id,
					'post_title'     => is_string( $data["title"] ) ? esc_html( $data["title"] ) : "no-title",
					'post_content'   => is_string( $data["description"] ) ? esc_html( $data["description"] ) : "",
					'post_status'  => 'publish'
				);
				wp_update_post( $post_update_data );
				if ( $original_id > 0 ) {
//					error_log( print_r( $original_id, true ) );
					$this->setCollectionLanguage( $post_id, $original_id, $lang );
				}
				$status = array( $post_id, "update" );
			}
			update_post_meta( $post_id, "datetext", is_string( $data["datetext"] ) ? $data["datetext"] : "" );
			update_post_meta( $post_id, "place", is_string( $data["place"] ) ? $data["place"] : "" );
			update_post_meta( $post_id, "dateearliest", is_string( $data["dateearliest"] ) ? $data["dateearliest"] : "" );
			update_post_meta( $post_id, "datelatest", is_string( $data["datelatest"] ) ? $data["datelatest"] : "" );
			update_post_meta( $post_id, "images", $data["images"] ? $data["images"] : "" );
			update_post_meta( $post_id, "technique", is_string( $data["technique"] ) ? $data["technique"] : "" );
			update_post_meta( $post_id, "dimension", is_string( $data["dimension"] ) ? $data["dimension"] : "" );
			update_post_meta( $post_id, "acquisition", is_string( $data["acquisition"] ) ? $data["acquisition"] : "" );
			update_post_meta( $post_id, "invnr_cat", ! empty( $invnr ) ? $invnr : "" );

			global $sitepress;
			$language_code = $lang;
			$original_lang = ICL_LANGUAGE_CODE;
			$sitepress->switch_lang( $language_code );
			if ( ! empty( $data["material"] ) ) {
				$material_ids = array();
				foreach ( $data["material"] as $material ) {
					$material_id = $this->_getTermIdOfTerm( is_string( $material ) && ! empty( $material ) ? $lang . "-" . sanitize_title( $material ) : "", "collection-material" );
//					echo "<br>";
					if ( $material_id > 0 ) {
						$material_ids[] = $material_id;
					}
				}
				wp_delete_object_term_relationships( $post_id, "collection-material" ); //clear before setting post terms
				wp_set_post_terms( $post_id, $material_ids, "collection-material" );
//				if($lang=="en"){
//					print_r($material_ids);
//					echo $post_id;
//					var_dump($result);
//				}
			}
			if ( ! empty( $data["medium"] ) ) {
				$medium_ids = array();
				foreach ( $data["medium"] as $medium ) {
					$medium_id = $this->_getTermIdOfTerm( is_string( $medium ) && ! empty( $medium ) ? $lang . "-" . sanitize_title( $medium ) : "", "collection-medium" );
					if ( $medium_id > 0 ) {
						$medium_ids[] = $medium_id;
					}
				}
				wp_delete_object_term_relationships( $post_id, "collection-medium" );
				wp_set_post_terms( $post_id, $medium_ids, "collection-medium" );
			}
			if ( ! empty( $data["theme"] ) ) {
				$theme_ids = array();
				foreach ( $data["theme"] as $theme ) {
					$theme_id = $this->_getTermIdOfTerm( is_string( $theme ) && ! empty( $theme ) ? $lang . "-" . sanitize_title( $theme ) : "", "collection-theme" );
					if ( $theme_id > 0 ) {
						$theme_ids[] = $theme_id;
					}
				}
				wp_delete_object_term_relationships( $post_id, "collection-theme" );
				wp_set_post_terms( $post_id, $theme_ids, "collection-theme" );
			}

			$sitepress->switch_lang( $original_lang );

			return $status;
		}

		private function setCollectionLanguage( $translated_post_id = 0, $original_post_id = 0, $lang ) {
			$wpml_element_type = apply_filters( 'wpml_element_type', get_post_type( $original_post_id ) );

			// get the language info of the original post
			$get_language_args           = array(
				'element_id'   => $original_post_id,
				'element_type' => get_post_type( $original_post_id )
			);
			$original_post_language_info = apply_filters( 'wpml_element_language_details', null, $get_language_args );
			$set_language_args           = array(
				'element_id'           => $translated_post_id,
				'element_type'         => $wpml_element_type,
				'trid'                 => $original_post_language_info->trid,
				'language_code'        => $lang,
				'source_language_code' => $original_post_language_info->language_code
			);

			do_action( 'wpml_set_element_language_details', $set_language_args );
		}


		private
		function executeAjaxResponse(
			$status = 0, $message = "", $data = array()
		) {
			die( json_encode( array( "status" => $status, "message" => $message, "data" => $data ) ) );
		}

		private
		function readXMLData(
			$xml_urls = array()
		) {
			$sanitized_xml_data = array();
			foreach ( $xml_urls as $key => $xml_url ) {
				if ( empty( $xml_url ) ) {
					continue;
				}
				$xml          = simplexml_load_file( $xml_url, 'SimpleXMLElement', LIBXML_NOCDATA ); // if file is not valid, send failed response
				$json         = json_encode( $xml );
				$xml_into_arr = json_decode( $json, true );
				if ( ! empty( $xml_into_arr ) ) {
					foreach ( $xml_into_arr as $xml_arr ) {
						if ( empty( $xml_arr ) ) {
							return false;
						}
						if ( empty( $sanitized_xml_data[ $key ] ) ) {
							$sanitized_xml_data[ $key ] = $xml_arr;
						} else {
							$sanitized_xml_data[ $key ] = array_merge( $sanitized_xml_data[ $key ], $xml_arr );
						}
					}
				}
			}

			return $sanitized_xml_data;
		}


		public
		function importAllCollections() {
			$file_url = get_template_directory_uri() . "/inc/collection/collection_Beispiel.xml";
			if ( filter_var( $file_url, FILTER_VALIDATE_URL ) === false ) {
				return;
			}
			$element = @simplexml_load_file( $file_url );
			if ( $element === false ) { //error reading file or invalid file url
				// error!
				echo "error reading file or invalid file url";
			} else {
				$xml          = simplexml_load_file( $file_url, 'SimpleXMLElement', LIBXML_NOCDATA ); // if file is not valid, send failed response
				$json         = json_encode( $xml );
				$xml_into_arr = json_decode( $json, true );
//				echo "<pre>";
//				print_r($xml_into_arr);
				if ( ! empty( $xml_into_arr ) ) {
					foreach ( $xml_into_arr as $xml_arr ) {
						if ( empty( $xml_arr ) ) {
							return;
						}

						foreach ( $xml_arr as $row ) {
							if ( ! isset( $row["@attributes"]["id"] ) ) { //if xml row data doesnot have id skip the iteration
								continue;
							}
							$collection_id = ! empty( $row["@attributes"]["eid"] ) ? $row["@attributes"]["eid"] : "";
							if ( $collection_id != "" ) {
								$data                = $this->preprocessXmlRowData( $row );
								$args                = array(
									'post_type'  => 'museum-collection',
									'fields'     => 'ids',
									'meta_query' => array(
										array(
											'key'     => 'collection_id',
											'value'   => (string) $collection_id,
											'compare' => '=',
										)
									)
								);
								$post_already_exists = get_posts( $args );
								if ( empty( $post_already_exists ) ) {
									$post_id = wp_insert_post( array(   // insert the new post(collection) into our database
										'post_type'      => 'museum-collection',
										'post_title'     => is_string( $data["title"] ) ? $data["title"] : "test",
										'post_content'   => is_string( $data["description"] ) ? $data["description"] : "",
										'post_status'    => 'publish',
										'comment_status' => 'closed',   // if you prefer
										'ping_status'    => 'closed',      // if you prefer
									) );
									if ( is_wp_error( $post_id ) || $post_id < 1 ) {
										//there was an error in the post insertion,
										// echo $post_id->get_error_message();
									} else {
										update_post_meta( $post_id, 'collection_id', $collection_id );

									}

								} else {
									$post_id          = is_array( $post_already_exists ) ? reset( $post_already_exists ) : 0;
									$post_update_data = array(
										'ID'           => $post_id,
										'post_content' => is_string( $data["description"] ) ? $data["description"] : "",
										'post_title'   => is_string( $data["title"] ) ? $data["title"] : "test"
									);
									wp_update_post( $post_update_data );
								}
								$material_id = $this->_getTermIdOfTerm( is_string( $data["material"] ) && ! empty( $data["material"] ) ? $data["material"] : "", "collection-material" );
								wp_set_post_terms( $post_id, $material_id, "collection-material" );

								$medium_id = $this->_getTermIdOfTerm( is_string( $data["medium"] ) && ! empty( $data["medium"] ) ? $data["medium"] : "", "collection-medium" );
								wp_set_post_terms( $post_id, $medium_id, "collection-medium" );

								$theme_id = $this->_getTermIdOfTerm( is_string( $data["theme"] ) && ! empty( $data["theme"] ) ? $data["theme"] : "", "collection-theme" );
								wp_set_post_terms( $post_id, $theme_id, "collection-theme" );

								update_post_meta( $post_id, "invnrr", is_string( $data["invnrr"] ) ? $data["invnrr"] : "" );
								update_post_meta( $post_id, "datetext", is_string( $data["datetext"] ) ? $data["datetext"] : "" );
								update_post_meta( $post_id, "place", is_string( $data["place"] ) ? $data["place"] : "" );
							}
						}
					}
				}

			}
		}

		private
		function _getTermIdOfTerm(
			$term, $taxonomy
		) { //function to get term id of term belonging to specific taxonomy.
			$term_id = 0;
			if ( taxonomy_exists( $taxonomy ) ) {
				$term_details = term_exists( $term, $taxonomy );
				if ( isset( $term_details["term_id"] ) ) {
					$term_id = $term_details["term_id"] > 0 ? $term_details["term_id"] : 0;
				}
			}

			return $term_id; // child term id to be used to set as post's term
		}

		private
		function preprocessXmlRowData(
			$row
		) {
			$arr                 = array();
			$arr["invnr"]        = isset( $row["invnr"] ) && ! empty( $row["invnr"] ) ? $row["invnr"] : "";
			$arr["datetext"]     = isset( $row["datetext"] ) && ! empty( $row["datetext"] ) ? $row["datetext"] : "";
			$arr["place"]        = isset( $row["content"]["place"] ) && ! empty( $row["content"]["place"] ) ? $row["content"]["place"] : "";
			$arr["dateearliest"] = isset( $row["dateearliest"] ) && ! empty( $row["dateearliest"] ) ? $row["dateearliest"] : "";
			$arr["datelatest"]   = isset( $row["datelatest"] ) && ! empty( $row["datelatest"] ) ? $row["datelatest"] : "";
			$arr["images"]       = isset( $row["images"] ) && ! empty( $row["images"] ) ? $row["images"] : "";
			$arr["title"]        = isset( $row["content"]["title"] ) && ! empty( $row["content"]["title"] ) ? $row["content"]["title"] : "title test";
			$arr["description"]  = isset( $row["content"]["description"] ) ? $row["content"]["description"] : "";
			$arr["technique"]    = isset( $row["content"]["technique"] ) ? $row["content"]["technique"] : "";
			$arr["dimension"]    = isset( $row["content"]["dimension"] ) ? $row["content"]["dimension"] : "";
			$arr["acquisition"]  = isset( $row["content"]["acquisition"] ) ? $row["content"]["acquisition"] : "";
			if ( isset( $row["content"]["categories"]["material"] ) && ! empty( $row["content"]["categories"]["material"] ) ) {
				if ( str_contains( $row["content"]["categories"]["material"], '|' ) ) {
					$arr["material"] = explode( "|", $row["content"]["categories"]["material"] );
				} else {
					$arr["material"] = array( $row["content"]["categories"]["material"] );
				}
			}
			if ( isset( $row["content"]["categories"]["medium"] ) && ! empty( $row["content"]["categories"]["medium"] ) ) {
				if ( str_contains( $row["content"]["categories"]["medium"], '|' ) ) {
					$arr["medium"] = explode( "|", $row["content"]["categories"]["medium"] );
				} else {
					$arr["medium"] = array( $row["content"]["categories"]["medium"] );
				}
			}
			if ( isset( $row["content"]["categories"]["theme"] ) && ! empty( $row["content"]["categories"]["theme"] ) ) {
				if ( str_contains( $row["content"]["categories"]["theme"], '|' ) ) {
					$arr["theme"] = explode( "|", $row["content"]["categories"]["theme"] );
				} else {
					$arr["theme"] = array( $row["content"]["categories"]["theme"] );
				}
			}

			return $arr;
		}

	}

	new Collection_Importer();
}

if ( function_exists( 'acf_add_options_page' ) ) {

	acf_add_options_page( [
		'page_title' => 'Permalink Manager Transfer',
		'menu_title' => 'Permalink Manager Transfer',
		'menu_slug'  => 'permalink-manager-transfer',
		'redirect'   => true
	] );

	acf_add_options_sub_page( [
		'page_title'  => 'Permalink Manager Transfer - Import',
		'menu_title'  => 'Import',
		'parent_slug' => 'permalink-manager-transfer',
	] );

	acf_add_options_sub_page( [
		'page_title'  => 'Permalink Manager Transfer - Export',
		'menu_title'  => 'Export',
		'parent_slug' => 'permalink-manager-transfer',
	] );

}
