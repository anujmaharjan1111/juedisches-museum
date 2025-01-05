<?php
/**
 * The template for displaying product single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package juedisches-museum
 */

get_header();
?>
    <div class="site-wrapper bg-white">
		<?php
		if ( have_posts() ) {
			while ( have_posts() ) {
				the_post();
				$post_id    = get_the_ID();
				$images     = get_post_meta( $post_id, "images", true );
				$attributes = array(
					"place"       => __( 'Ort', 'juedisches-museum' ),
					"datetext"    => __( 'Datum', 'juedisches-museum' ),
					"technique"   => __( 'Material/Technik', 'juedisches-museum' ),
					"dimension"   => __( 'Masse', 'juedisches-museum' ),
					"acquisition" => __( 'Erwerb', 'juedisches-museum' ),
					"creditline"  => __( 'Creditline', 'juedisches-museum' ),
					"invnr_number"   => __( 'Inv.', 'juedisches-museum' )
				);
				$image_urls = array();

				$array_index = 0;
				if ( isset( $images["image"] ) && ! empty( $images["image"] ) ) {
					if ( array_depth( $images["image"] ) > 2 && count( $images["image"] ) > 1 ) { //in case of multiple image
						foreach ( $images["image"] as $image ) {
							if ( isset( $image["file"] ) && ! empty( $image["file"] ) ) {
								$image_urls[ $array_index ]["url"] = $image["file"];
							}
							if ( isset( $image["author"] ) && ! empty( $image["author"] ) ) {
								$image_urls[ $array_index ]["author"] = $image["author"];
							}
							$array_index ++;
						}
					} else {
						if ( isset( $images["image"]["file"] ) && ! empty( $images["image"]["file"] ) ) {
							$image_urls[ $array_index ]["url"] = $images["image"]["file"];
						}
						if ( isset( $images["image"]["author"] ) && ! empty( $images["image"]["author"] ) ) {
							$image_urls[ $array_index ]["author"] = $images["image"]["author"];
						}
					}
				}
				?>
                <section class="single-filter-product-section">
                    <div class="container">
                        <!-- main content -->
                        <div class="main-filter-prod-content">
                            <!-- Prev arrow  -->
                            <div class="left-prev-arrow">
                                <a href="<?php echo ( ! url_to_postid( wp_get_referer() ) ) || ( url_to_postid( wp_get_referer() ) && ! get_post_type( ( url_to_postid( wp_get_referer() ) ) ) == "museum-collection" ) ? wp_get_referer() : get_post_type_archive_link( "museum-collection" ); ?>"><img
                                            src="<?php echo get_template_directory_uri() ?>/images/icons/prev-arrow.svg"
                                            alt=""></a>
                            </div>
                            <!-- Filtrer prod popup List -->
                            <div class="filter-prod-popup-list">
								<?php
								foreach ( $image_urls as $key => $image ) {
									?>
                                    <!-- Pop up list -->
                                    <div class="modal popup-img-modal" id="modal-<?php echo $key; ?>">
                                        <div class="modal-content">
                                            <div class="modal-head d-flex justify-content-between">
                                                <div class="modal-prev-arrow">
                                                    <a href="#"><img
                                                                src="<?php echo get_template_directory_uri() ?>/images/icons/prev-arrow.svg"
                                                                alt=""></a>
                                                </div>
                                                <div class="modal-close">
                                                    <div data-dismiss="modal" class="modal-close-btn">
                                                        <img src="<?php echo get_template_directory_uri(); ?>/images/icons/close-dark.svg"
                                                             alt="">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="img-holder">
                                                <div class="inner-wrapper text-dark">
                                                    <div id="panzoom">
                                                        <img src="<?php echo "https://mycolex.juedisches-museum.ch" . "/pic/" . $image['url']; ?>"
                                                             alt="">
                                                    </div>
                                                    <!-- Pan zoon control -->
                                                    <div class="zoom-control">
                                                        <button class="zoom-in zoom-item">
                                                            <img src="<?php echo get_template_directory_uri(); ?>/images/icons/plus.svg"
                                                                 alt="">
                                                        </button>
                                                        <button class="zoom-out zoom-item">
                                                            <img src="<?php echo get_template_directory_uri(); ?>/images/icons/minus.svg"
                                                                 alt="">
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
									<?php
								}
								?>
                            </div>
                            <!-- Slider -->
                            <div class="filter-prod-slider">
								<?php
								foreach ( $image_urls as $key => $image ) {
									if ( empty( $image['url'] ) ) {
										continue;
									}
									?>
                                    <!-- Slider item -->
                                    <div class="slider-item">
                                        <div class="img-holder">
                                            <img src="<?php echo "https://mycolex.juedisches-museum.ch" . "/pic/" . $image['url']; ?>"
                                                 alt="">
                                            <!-- Popup opener -->
                                            <div class="modal-opener" data-toggle="modal"
                                                 data-target="#modal-<?php echo $key; ?>">
                                                <img src="<?php echo get_template_directory_uri(); ?>/images/icons/enlarge.svg"
                                                     alt="">
                                            </div>
                                        </div>
                                        <div class="down-img-cap-block">

                                            <div class="download text-center">

												<?php
												if ( isset( $image["author"] ) ) {
													?>
                                                    <!-- Img Cap -->
                                                    <div class="img-caption text-center">
                                                        <p><?php _e( "Foto", "juedisches-museum" ); ?>
                                                            : <?php echo $image["author"]; ?> </p>
                                                    </div>
													<?php
												}
												?>
                                                <a class="d-inline-block toggle-info" href="javascript:void(0);">
                                                    <img src="<?php echo get_template_directory_uri(); ?>/images/icons/download.svg"
                                                         alt="">
                                                </a>
                                                <div class="download-text">
                                                    <div class="relative-block position-relative">
                                                        <!-- <a class="d-inline-block collection-image-downloader" href="<?php echo "https://mycolex.juedisches-museum.ch" . "/pic/" . $image['url']; ?>" target="_blank"><?php _e( "Download", "juedisches-museum" ); ?></a> -->
                                                        <a class="d-inline-block collection-image-downloader"
                                                           href="<?php echo home_url( '/?action=download&file=' . $image['url'] ); ?>"
                                                           target="_blank"><?php _e( "Download", "juedisches-museum" ); ?></a>
                                                        <!-- Tooltip -->
                                                        <span class="tootltips">
                                                <div class="inner">
                                                   <div class="triangle">
                                                      <img src="<?php echo get_template_directory_uri(); ?>/images/icons/tootltip-triangle.svg"
                                                           alt="">
                                                   </div>
                                                    <?php
                                                    _e( "Die Nutzung des Bildes ist erlaubt. Bei einer Veröffentlichung geben Sie bitte den Bildnachweis an. 
Wir danken Ihnen, wenn Sie uns über die Veröffentlichung in Kenntnis setzen info@juedisches-museum.ch
", "juedisches-museum" ); ?>
                                                </div>
                                             </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
									<?php
								}
								?>
                            </div>
                            <!-- Download opener -->
                            <div class="slider-download-open-wrapper d-none justify-content-center">
                                <div class="down-opener">
                                    <img src="<?php echo get_template_directory_uri(); ?>/images/icons/download.svg"
                                         alt="">
                                </div>
                                <div class="slide-counter">
                                    <span class="text">1/5</span>
                                </div>
                            </div>
                            <!-- End of download openeer -->
                            <div class="product-list-content">
								<?php
								if ( get_the_title() ) {
									?>
                                    <h3 class="product-title"><?php the_title(); ?></h3>
									<?php
								}
								?>
                                <ul>
									<?php
									foreach ( $attributes as $key => $att ) {
										$value = get_post_meta( $post_id, $key, true );
										echo ! empty( $value ) ? "<li>" . $att . ": " . $value . "</li>" : "";
									}
									?>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
				<?php
				$invnr_cat = (string ) get_post_meta( $post_id, "invnr_cat", true );
				if ( ! empty( $invnr_cat ) ) {
					$args                      = array(
						'post__not_in'   => array( $post_id ),
						"post_type"      => "museum-collection",
						"post_status"    => "publish",
						"posts_per_page" => - 1,
						"meta_key"       => "invnr_cat",
						"meta_value"     => $invnr_cat
					);
					$query_related_collections = new WP_Query( $args );
					if ( $query_related_collections->have_posts() ) {
						?>
                        <!-- Related section -->
                        <section class="related-product-section">
                            <header class="section-header">
                                <div class="container">
                                    <h2 class="section-title"><?php _e( 'Weitere Objekte des Konvoluts', 'juedisches-museum' ); ?></h2>
                                </div>
                            </header>
                            <div class="container">
                                <div class="realated-filter-product-slider">
									<?php
									while ( $query_related_collections->have_posts() ) {
										$query_related_collections->the_post();
										get_template_part( 'template-parts/collection/list-single-slider' );
									}
									?>
                                </div>
                            </div>
                        </section>
						<?php
					}
					wp_reset_postdata();
				}
			} // End of the loop.
		}
		?>
    </div>
<?php
get_footer();