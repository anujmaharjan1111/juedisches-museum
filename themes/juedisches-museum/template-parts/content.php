<?php
/**
 * Template part for displaying posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package juedisches-museum
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

	<?php juedisches_museum_post_thumbnail(); ?>
   <div class="post-content">
      <header class="entry-header">
         <?php
         if ( is_singular() ) :
            the_title( '<h1 class="entry-title">', '</h1>' );
         else :
            the_title( '<h2 class="entry-title"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h2>' );
         endif;

         if ( 'post' === get_post_type() && is_singular() ) :
            ?>
            <div class="entry-meta d-none">
               <?php
               juedisches_museum_posted_on();
               juedisches_museum_posted_by();
               ?>
            </div><!-- .entry-meta -->
         <?php endif; ?>
      </header><!-- .entry-header -->

      <div class="entry-content">
         <?php
         if( is_single() ) {
            the_content(
               sprintf(
                  wp_kses(
                     /* translators: %s: Name of current post. Only visible to screen readers */ 
                     __( 'Continue reading<span class="screen-reader-text"> "%s"</span>', 'juedisches-museum' ),
                     array(
                        'span' => array(
                           'class' => array(),
                        ),
                     )
                  ),
                  wp_kses_post( get_the_title() )
               )
            );
         
            wp_link_pages(
            array(
               'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'juedisches-museum' ),
                  'after'  => '</div>',
               )
            );

         } else {
            // show the secondary title
            echo get_field( '_blog_secondary_title' );
         }

         ?>
      </div><!-- .entry-content -->
   </div>

	<footer class="entry-footer">
		<?php // juedisches_museum_entry_footer(); ?>
	</footer><!-- .entry-footer -->
</article><!-- #post-<?php the_ID(); ?> -->
