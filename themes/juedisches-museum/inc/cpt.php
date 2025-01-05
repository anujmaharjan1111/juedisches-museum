<?php
// Register Custom Post Type
function jm_register_cpt() {

    $labels = array(
        'name'                  => _x( 'Products', 'Post type general name', 'juedisches-museum' ),
        'singular_name'         => _x( 'Product', 'Post type singular name', 'juedisches-museum' ),
        'menu_name'             => _x( 'Products', 'Admin Menu text', 'juedisches-museum' ),
        'name_admin_bar'        => _x( 'Product', 'Add New on Toolbar', 'juedisches-museum' ),
        'add_new'               => __( 'Add New', 'juedisches-museum' ),
        'add_new_item'          => __( 'Add New Product', 'juedisches-museum' ),
        'new_item'              => __( 'New Product', 'juedisches-museum' ),
        'edit_item'             => __( 'Edit Product', 'juedisches-museum' ),
        'view_item'             => __( 'View Product', 'juedisches-museum' ),
        'all_items'             => __( 'All products', 'juedisches-museum' ),
        'search_items'          => __( 'Search products', 'juedisches-museum' ),
        'parent_item_colon'     => __( 'Parent products:', 'juedisches-museum' ),
        'not_found'             => __( 'No products found.', 'juedisches-museum' ),
        'not_found_in_trash'    => __( 'No products found in Trash.', 'juedisches-museum' ),
        'featured_image'        => _x( 'Productk Cover Image', 'Overrides the “Featured Image” phrase for this post type. Added in 4.3', 'juedisches-museum' ),
        'set_featured_image'    => _x( 'Set cover image', 'Overrides the “Set featured image” phrase for this post type. Added in 4.3', 'juedisches-museum' ),
        'remove_featured_image' => _x( 'Remove cover image', 'Overrides the “Remove featured image” phrase for this post type. Added in 4.3', 'juedisches-museum' ),
        'use_featured_image'    => _x( 'Use as cover image', 'Overrides the “Use as featured image” phrase for this post type. Added in 4.3', 'juedisches-museum' ),
        'archives'              => _x( 'Product archives', 'The post type archive label used in nav menus. Default “Post Archives”. Added in 4.4', 'juedisches-museum' ),
        'insert_into_item'      => _x( 'Insert into product', 'Overrides the “Insert into post”/”Insert into page” phrase (used when inserting media into a post). Added in 4.4', 'juedisches-museum' ),
        'uploaded_to_this_item' => _x( 'Uploaded to this product', 'Overrides the “Uploaded to this post”/”Uploaded to this page” phrase (used when viewing media attached to a post). Added in 4.4', 'juedisches-museum' ),
        'filter_items_list'     => _x( 'Filter product list', 'Screen reader text for the filter links heading on the post type listing screen. Default “Filter posts list”/”Filter pages list”. Added in 4.4', 'juedisches-museum' ),
        'items_list_navigation' => _x( 'Products list navigation', 'Screen reader text for the pagination heading on the post type listing screen. Default “Posts list navigation”/”Pages list navigation”. Added in 4.4', 'juedisches-museum' ),
        'items_list'            => _x( 'Products list', 'Screen reader text for the items list heading on the post type listing screen. Default “Posts list”/”Pages list”. Added in 4.4', 'juedisches-museum' ),
    );

    $args = array(
        'labels'             => $labels,
        'public'             => true,
        'publicly_queryable' => true,
        'show_ui'            => true,
        'show_in_menu'       => true,
        'show_in_rest'       => true,
        'query_var'          => true,
        'rewrite'            => array( 'slug' => 'products' ),
        'capability_type'    => 'post',
        'has_archive'        => true,
        'hierarchical'       => false,
        'menu_position'      => null,
        'supports'           => array( 'title', 'editor', 'author', 'thumbnail', 'excerpt', 'comments' ),
    );
 
    register_post_type( 'products', $args );

}
add_action( 'init', 'jm_register_cpt' );

function jm_register_custom_taxonomy() {
 
    $labels = array(
        'name'              => _x( 'Product Caegories', 'taxonomy general name', 'juedisches-museum' ),
        'singular_name'     => _x( 'Product Category', 'taxonomy singular name', 'juedisches-museum' ),
        'search_items'      => __( 'Search Product Caegories', 'juedisches-museum' ),
        'all_items'         => __( 'All Product Caegories', 'juedisches-museum' ),
        'view_item'         => __( 'View Product Caegory', 'juedisches-museum' ),
        'parent_item'       => __( 'Parent Product Caegory', 'juedisches-museum' ),
        'parent_item_colon' => __( 'Parent Product Caegory:', 'juedisches-museum' ),
        'edit_item'         => __( 'Edit Product Caegory', 'juedisches-museum' ),
        'update_item'       => __( 'Update Product Caegory', 'juedisches-museum' ),
        'add_new_item'      => __( 'Add New Product Caegory', 'juedisches-museum' ),
        'new_item_name'     => __( 'New Product Caegory Name', 'juedisches-museum' ),
        'not_found'         => __( 'No Product Caegories Found', 'juedisches-museum' ),
        'back_to_items'     => __( 'Back to Product Caegories', 'juedisches-museum' ),
        'menu_name'         => __( 'Product Caegory', 'juedisches-museum' ),
    );
 
    $args = array(
        'labels'            => $labels,
        'hierarchical'      => true,
        'public'            => true,
        'show_ui'           => true,
        'show_admin_column' => true,
        'query_var'         => true,
        'rewrite'           => array( 'slug' => 'product-categories' ),
        'show_in_rest'      => true,
    );

    register_taxonomy( 'product-categories', 'products', $args );
 
}
add_action( 'init', 'jm_register_custom_taxonomy' );