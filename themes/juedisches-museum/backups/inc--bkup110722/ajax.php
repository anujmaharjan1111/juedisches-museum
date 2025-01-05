<?php
/**
 * product filter callback
 */
function jm_product_filter() {

   $result_count = 0;

    $paged = ( get_query_var('paged') ) ? get_query_var('paged') : 1;

    $args = array(
        'post_type' => 'products',
        'post_status' => 'publish',
        'paged' => $paged,
        'orderby' => 'menu_order',
    );
    
    if( isset( $_POST['catID'] ) && '' != $_POST['catID'] ){
        $args['tax_query'] = array(
            array(
                'taxonomy'  => 'product-categories',
                'field'     => 'term_id',
                'terms'     => array( $_POST['catID'] ) 
            )
        );
    }

    $products = new WP_Query( $args );

    ob_start();
    if( $products->have_posts() ) {
       $result_count = $products->found_posts;
        ?>
        <div class="column-counter">
            <?php
            while( $products->have_posts() ) {
                $products->the_post();
                ?>
                <div class="cols">
                    <div class="img-holder">
                        <a href="<?php the_permalink(); ?>">
                            <?php the_post_thumbnail(); ?>
                        </a>
                    </div>
                    <div class="content">
                        <h3><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
                        <h3><a href="<?php the_permalink(); ?>"><?php echo get_field( '_pro_subtitle' ); // subtitle ?></a></h3>
                        <p><?php echo get_field( '_pro_intro_text' ); // intro text ?></p>
                    </div>
                </div>
            <?php
            } //endwhile
            wp_reset_postdata();
            ?>
        </div>
    <?php
    } else {
        ?>
        <p class="nothing-found">
            <?php echo __( 'Leider haben wir keinen passenden Artikel gefunden. Bitte versuchen Sie eine andere Kategorie.', 'juedisches-museum' ); ?>
        </p>
        <?php 
    }
    $content = ob_get_clean();

	// send the content aquired by the limit filter
	wp_send_json( array(
		'contents' => $content,
      'result_count' => $result_count
	) );

	exit();
}
add_action( 'wp_ajax_jm_product_filter', 'jm_product_filter' );
add_action( 'wp_ajax_nopriv_jm_product_filter', 'jm_product_filter' );