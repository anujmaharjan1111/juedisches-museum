<?php
/**
 * Functions which enhance the theme by hooking into WordPress
 *
 * @package juedisches-museum
 */

/**
 * Adds custom classes to the array of body classes.
 *
 * @param array $classes Classes for the body element.
 * @return array
 */
function juedisches_museum_body_classes( $classes ) {
	// Adds a class of hfeed to non-singular pages.
	if ( ! is_singular() ) {
		$classes[] = 'hfeed';
	}

	// Adds a class of no-sidebar when there is no sidebar present.
	if ( ! is_active_sidebar( 'sidebar-1' ) ) {
		$classes[] = 'no-sidebar';
	}

	return $classes;
}
add_filter( 'body_class', 'juedisches_museum_body_classes' );

/**
 * Add a pingback url auto-discovery header for single posts, pages, or attachments.
 */
function juedisches_museum_pingback_header() {
	if ( is_singular() && pings_open() ) {
		printf( '<link rel="pingback" href="%s">', esc_url( get_bloginfo( 'pingback_url' ) ) );
	}
}
add_action( 'wp_head', 'juedisches_museum_pingback_header' );

/** 
 * Add theme option page  
 */
if( function_exists('acf_add_options_page') ) {
	
	acf_add_options_page(array(
		'page_title' 	=> 'General Settings',
		'menu_title'	=> 'General Settings',
		'menu_slug' 	=> 'theme-general-settings',
		'capability'	=> 'edit_posts',
		'redirect'		=> false
	));
	
}
/**
 * Get the id of the adjacent  post id
 * This was done to resolve the pagination issue due to post type order plugin
 * 
 * @param  $next 			bool		true if is for next post. Default: true
 * @return $adjacent_id 	string 		id of the adjacent post
 */
function jsm_post_ids( $adjacent = true ) {
	$list_posts = new WP_Query( array(
		'post_type' => 'post',
		'orderby' => 'menu_order',
		'order' => 'ASC',
		'posts_per_page' => -1,
		'fields' => 'ids'
	));
	
	$adjacent_id = '';
	
	foreach( $list_posts->posts as $key => $value ){
		if( $value == get_the_ID() ){
			if( $adjacent ){
				if( $key == 0 ) {
					$adjacent_id = '';
				} else {
					$adjacent_id = $list_posts->posts[$key - 1];
				}
				break;
			} else if( isset( $list_posts->posts[$key + 1] ) ) {
				$adjacent_id = $list_posts->posts[$key + 1];
				break;
			}
		} else {
			continue;
		}
	}

	return $adjacent_id;
}
/** 
 * Filter the next post link structure
*/
function jued_custom_next_post_link( $output, $format, $link, $post, $adjacent ) {
	
	$next_post = jsm_post_ids( true );

	// var_dump( $next_post->ID );
	if( "" != $next_post ) {
		$arrow_path = get_template_directory_uri() . '/images/icons/arrow.svg';
		return sprintf(
			'<div class="nav-next"><a href="%3$s">%1$s</a><img class="svg" src="%5$s"></img><span class="next" title="%2$s"><a href="%3$s">%2$s</a><p>%4$s</p></span></div>',
			get_the_post_thumbnail( $next_post, 'thumbnail' ),
			get_the_title( $next_post ),
			get_permalink( $next_post ),
			get_field( '_blog_secondary_title', $next_post ),
			$arrow_path
		);
	}
	
}
add_filter( 'next_post_link', 'jued_custom_next_post_link' , 12, 5 );

/** 
 * Filter the next post link structure
*/
function jued_custom_previous_post_link( $output, $format, $link, $post, $adjacent ) {
	
	$prev_post = jsm_post_ids( false );

	if( "" != $prev_post ) {
		$arrow_path = get_template_directory_uri() . '/images/icons/arrow.svg';
		return sprintf(
			'<div class="nav-previous"><a href="%3$s">%1$s</a><img class="svg" src="%5$s"></img><span class="previous" title="%2$s"><a href="%3$s">%2$s</a><p>%4$s</p></span></div>',
			get_the_post_thumbnail( $prev_post, 'thumbnail' ),
			get_the_title( $prev_post ),
			get_permalink( $prev_post ),
			get_field( '_blog_secondary_title', $prev_post ),
			$arrow_path
		);
	}
	
}
add_filter( 'previous_post_link', 'jued_custom_previous_post_link' , 12, 5 );

/**
 * Custom language switcher
 * @require WPML plugin
 * @return 	$returnval 	html string
 */
function jued_custom_lang_switcher( $items, $args ) {
	
	if ( $args->theme_location != 'menu-2' ) return $items;
	// getting lanugage defined in WPML
	$languages = apply_filters( 'wpml_active_languages', NULL , 'skip_missing=0&orderby=code&order=desc');
	ob_start();
	if( !empty( $languages ) ) {
		?>
		<li class="lang-whitcher menu-item">
			<?php
			foreach ( $languages as $l ) {
				$class  = $l['active'] ? ' class="active"' : NULL;
                $langs  =  '<a ' . $class . ' href="'. $l['url'] .'">' . $l['language_code'] . '</a>';
				$seperator = ( $l == end( $languages ) ) ? '' : '/';
				?>
				<?php echo $langs . $seperator; ?>
				<?php
			}
			?>
		</li>
		<?php
	}
	
	$items .= ob_get_clean();
	return $items;
}

add_filter( 'wp_nav_menu_items', 'jued_custom_lang_switcher', 1, 2 );


/**
 * Shows the museum open/close status
 */

function jsm_open_status() {
	
	$api_key  = 'AIzaSyAVKqz-EGgFEcay-7Salas8SSPrTn0P1Xg';
	$place_id = 'ChIJLx4Zx6u5kUcRYWCaY2DdT5Q';

	// request URL to Google API
	$curlURL = 'https://maps.googleapis.com/maps/api/place/details/json?place_id=' . $place_id . '&key=' . $api_key;

	$curl = curl_init( $curlURL );
	curl_setopt( $curl, CURLOPT_RETURNTRANSFER, 1 );
	$response = curl_exec( $curl );
    // return if empty response
	if( empty( $response ) ) return;

	$raw_schedule = json_decode( $response, true );

	// return if result has no opening hours details
	if ( empty( $raw_schedule['result']['opening_hours'] ) ) return;

	// check if is open now
	$is_open = $raw_schedule['result']['opening_hours']['open_now'];

	if( $is_open ) {
		return __( 'open now', 'juedisches-museum' );
	} else {
		return __( 'now closed', 'juedisches-museum' );
	}

}
