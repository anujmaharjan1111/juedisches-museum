<?php
if ( ! class_exists( "Collection_Filter" ) ) {
	class Collection_Filter {
		public $selected_material, $selected_medium, $selected_theme, $suche, $from, $to;

		public function __construct() {
			$this->selected_material = isset( $_GET["material"] ) && ! empty( $_GET["material"] ) ? $_GET["material"] : array();
			$this->selected_medium   = isset( $_GET["medium"] ) && ! empty( $_GET["medium"] ) ? $_GET["medium"] : array();
			$this->selected_theme    = isset( $_GET["themengebiet"] ) && ! empty( $_GET["themengebiet"] ) ? $_GET["themengebiet"] : array();
			$this->suche             = isset( $_GET["suche"] ) && ! empty( $_GET["suche"] ) ? $_GET["suche"] : "";
			$this->from              = isset( $_GET["from"] ) && ! empty( $_GET["from"] ) ? $_GET["from"] : "";
			$this->until                = isset( $_GET["until"] ) && ! empty( $_GET["until"] ) ? $_GET["until"] : "";
			add_action( 'pre_get_posts', array( $this, 'custom_query_vars' ) );
		}

		public function custom_query_vars( $query ) {
			if ( is_admin() || ! $query->is_main_query() || $query->get( 'post_type' ) != "museum-collection" ) {
				return;
			}
			$query->set('posts_per_page', 15);
			if ( ! empty( $this->selected_material ) || ! empty( $this->selected_medium ) || ! empty( $this->selected_theme ) ) {
				$tax_query             = array();
				$tax_query["relation"] = "AND";
				if ( ! empty( $this->selected_material ) ) {
					$tax_query[] = array(
						array(
							'taxonomy' => 'collection-material',
							'field'    => 'slug',
							'terms'    => $this->selected_material,
							'operator' => 'IN'
						)
					);
				}
				if ( ! empty( $this->selected_medium ) ) {
					$tax_query[] = array(
						array(
							'taxonomy' => 'collection-medium',
							'field'    => 'slug',
							'terms'    => $this->selected_medium,
							'operator' => 'IN'
						)
					);
				}
				if ( ! empty( $this->selected_theme ) ) {
					$tax_query[] = array(
						array(
							'taxonomy' => 'collection-theme',
							'field'    => 'slug',
							'terms'    => $this->selected_theme,
							'operator' => 'IN'
						)
					);
				}
				$query->set( 'tax_query', $tax_query );
			}

			if ( ! empty( $this->suche ) || ! empty( $this->from ) || ! empty( $this->until ) ) {
				$meta_query             = array();
				$meta_query["relation"] = "AND";
				if ( ! empty( $this->suche ) ) {
					$meta_query[] = array(
						"relation" => "OR",
						array(
							'key'     => 'collection_id',
							'compare' => 'LIKE',
							'value'   => $this->suche
						),
						array(
							'key'     => 'place',
							'compare' => 'LIKE',
							'value'   => $this->suche
						)
					);
				}
				if ( ! empty( $this->from ) ) {
					$meta_query[] =
						array(
							'key'     => 'dateearliest',
							'value'   => (int) $this->from,
							'type'    => 'numeric',
							'compare' => '>='
						);
				}
				if ( ! empty( $this->until ) ) {
					$meta_query[] =
						array(
							'key'     => 'datelatest',
							'value'   => (int) $this->until,
							'type'    => 'numeric',
							'compare' => '<='
						);
				}
				$query->set( 'meta_query', $meta_query );
			}
		}

		public function getSelectoptions( $taxonomy = "" ) {
			$terms = get_terms( [
				'taxonomy'   => $taxonomy,
				'hide_empty' => false,
			] );
			return ! is_wp_error( $terms ) ? $terms : array();
		}
	}

	global $Collection_Filter;
	$Collection_Filter = new Collection_Filter();
}


