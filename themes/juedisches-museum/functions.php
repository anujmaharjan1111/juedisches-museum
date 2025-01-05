<?php
/**
 * juedisches-museum functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package juedisches-museum
 */

if ( ! defined( '_S_VERSION' ) ) {
	// Replace the version number of the theme on each release.
	define( '_S_VERSION', '1.0.0' );
}

if ( ! function_exists( 'juedisches_museum_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function juedisches_museum_setup() {
		/*
		 * Make theme available for translation.
		 * Translations can be filed in the /languages/ directory.
		 * If you're building a theme based on juedisches-museum, use a find and replace
		 * to change 'juedisches-museum' to the name of your theme in all the template files.
		 */
		load_theme_textdomain( 'juedisches-museum', get_template_directory() . '/languages' );

		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support( 'title-tag' );

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support( 'post-thumbnails' );

		// This theme uses wp_nav_menu() in one location.
		register_nav_menus(
			array(
				'menu-1' => esc_html__( 'Primary', 'juedisches-museum' ),
				'menu-2' => esc_html__( 'Secondary', 'juedisches-museum' ),
			)
		);

		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support(
			'html5',
			array(
				'search-form',
				'comment-form',
				'comment-list',
				'gallery',
				'caption',
				'style',
				'script',
			)
		);

		// Set up the WordPress core custom background feature.
		add_theme_support(
			'custom-background',
			apply_filters(
				'juedisches_museum_custom_background_args',
				array(
					'default-color' => 'ffffff',
					'default-image' => '',
				)
			)
		);

		// Add theme support for selective refresh for widgets.
		add_theme_support( 'customize-selective-refresh-widgets' );

		/**
		 * Add support for core custom logo.
		 *
		 * @link https://codex.wordpress.org/Theme_Logo
		 */
		add_theme_support(
			'custom-logo',
			array(
				'height'      => 250,
				'width'       => 250,
				'flex-width'  => true,
				'flex-height' => true,
			)
		);
	}
endif;
add_action( 'after_setup_theme', 'juedisches_museum_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function juedisches_museum_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'juedisches_museum_content_width', 640 );
}

add_action( 'after_setup_theme', 'juedisches_museum_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function juedisches_museum_widgets_init() {
	register_sidebar(
		array(
			'name'          => esc_html__( 'Sidebar', 'juedisches-museum' ),
			'id'            => 'sidebar-1',
			'description'   => esc_html__( 'Add widgets here.', 'juedisches-museum' ),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h2 class="widget-title">',
			'after_title'   => '</h2>',
		)
	);
}

add_action( 'widgets_init', 'juedisches_museum_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function juedisches_museum_scripts() {

	$min = ( defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG == true ) ? '' : '.min';

	if ( is_singular( 'museum-collection' ) ) {
		wp_deregister_script( 'jquery' );
		// Change the URL if you want to load a local copy of jQuery from your own server.
		wp_register_script( 'jquery', "https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js", array(), '3.1.1' );
		wp_enqueue_script( 'jquery' );
	}

	wp_enqueue_style( 'juedisches-museum-style', get_stylesheet_uri(), array(), _S_VERSION );
	wp_style_add_data( 'juedisches-museum-style', 'rtl', 'replace' );

	wp_enqueue_style( 'juedisches-museum-css', get_template_directory_uri() . "/assets/css/main{$min}.css", array(), _S_VERSION );

	wp_enqueue_script( 'juedisches-museum-vendor', get_template_directory_uri() . "/assets/js/vendor{$min}.js", array( 'jquery' ), _S_VERSION, true );
	wp_enqueue_script( 'juedisches-museum-custom-js', get_template_directory_uri() . "/assets/js/main{$min}.js", array( 'jquery' ), _S_VERSION, true );
	global $Collection_Filter;
	$Collection_Filter = new Collection_Filter();
	wp_localize_script( 'juedisches-museum-custom-js', 'jm_object',
		array(
			'selected_material' => $Collection_Filter->selected_material,
			'selected_medium'   => $Collection_Filter->selected_medium,
			'selected_theme'    => $Collection_Filter->selected_theme
		)
	);

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}

	$args = array(
		'ajaxurl' => admin_url( 'admin-ajax.php' )
	);
	wp_localize_script( 'juedisches-museum-custom-js', 'JUESM', $args );
}

add_action( 'wp_enqueue_scripts', 'juedisches_museum_scripts' );

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/form-validations.php';

/**
 * Load Jetpack compatibility file.
 */
if ( defined( 'JETPACK__VERSION' ) ) {
	require get_template_directory() . '/inc/jetpack.php';
}

/**
 * Register custom post type
 */
require get_template_directory() . '/inc/cpt.php';

/**
 * Ajax callback
 */
require get_template_directory() . '/inc/ajax.php';

function desc_sort( $query ) {
	if ( $query->is_main_query() && ! is_admin() ) {
		$query->set( 'order', 'ASC' );
	}
}

add_action( 'pre_get_posts', 'desc_sort' );

//extend the collection importer functionality
if ( file_exists( get_template_directory() . "/inc/collection/class-collection-importer.php" ) ) {
	require_once get_template_directory() . "/inc/collection/class-collection-importer.php";
}
//extend the collection filter/listing functionality
if ( file_exists( get_template_directory() . "/inc/collection/class-collection-filter.php" ) ) {
	require_once get_template_directory() . "/inc/collection/class-collection-filter.php";
}

function array_depth( array $array ) { //check the array depth of any multidimensional array
	$max_depth = 1;

	foreach ( $array as $value ) {
		if ( is_array( $value ) ) {
			$depth = array_depth( $value ) + 1;

			if ( $depth > $max_depth ) {
				$max_depth = $depth;
			}
		}
	}

	return $max_depth;
}

add_action( 'init', function () {
	if ( isset( $_GET['action'] ) && 'download' === $_GET['action'] and isset( $_GET['file'] ) ) {
		$file_name = $_GET['file'];
		$url       = "https://mycolex.juedisches-museum.ch/pic/" . $file_name;

		// header("Content-type: application/pdf");
		header( "Content-Disposition: attachment; filename=" . $file_name );

		echo file_get_contents( $url );
		die;
	}
} );


//temporarily disable the auto updates
remove_action( 'admin_init', '_maybe_update_core' );
remove_action( 'admin_init', '_maybe_update_plugins' );
remove_action( 'admin_init', '_maybe_update_themes' );



add_filter('upload_mimes', function ($mime_types) {
	// Add SVG to the list of allowed mime types
	$mime_types['svg'] = 'image/svg+xml';
	$mime_types['svgz'] = 'image/svg+xml';
	return $mime_types;
});

