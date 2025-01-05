<?php
/**
 * The template for displaying archive pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package WordPress
 * @subpackage Twenty_Twenty_One
 * @since Twenty Twenty-One 1.0
 */

get_header();

$description = get_the_archive_description();

?>
<!-- Katalog section -->
<section class="katalog-section">
	<?php get_template_part( 'template-parts/collection/filter', "form" ); ?>
    <!-- End of Multiple filter -->
    <div class="filter-product-list">
        <div class="container">
			<?php if ( have_posts() ) {
				?>
                <div class="product-row">
					<?php
					while ( have_posts() ) {
						the_post();
						get_template_part( 'template-parts/collection/list-single' );
					}
					?>
                </div>
                <div class="filter-pagination">
					<?php
					global $wp_query;
					$big = 999999999; // need an unlikely integer
					if ( $wp_query->max_num_pages > 1 ) {
						$nav_img_next = sprintf( '<img class="next-img" src="%s">', get_template_directory_uri() . '/images/icons/nav-next.svg' );
						$nav_img_prev = sprintf( '<img class="prev-img"  src="%s">', get_template_directory_uri() . '/images/icons/nav-next.svg' );
						echo "<span class='nav-link-text'>" . __( 'Seite', 'juedisches-museum' ) ." ". ( ( get_query_var( 'paged' ) == 0 ) ? 1 : get_query_var( 'paged' ) ) . "/" . $wp_query->max_num_pages . "</span>";
						echo isset( $paged ) ? "<div class='filter-nav-links'>" : '';
						echo isset( $paged ) && $paged > 1 ? "<a class='prev' href='" . get_pagenum_link( 1 ) . "'>" . __( $nav_img_prev . $nav_img_prev, 'juedisches-museum' ) . "</a>" : "";
						posts_nav_link( " ", $nav_img_prev, $nav_img_next );
						echo isset( $paged ) && isset( $wp_query->max_num_pages ) && $paged != $wp_query->max_num_pages ? "<a class='next' href='" . get_pagenum_link( $wp_query->max_num_pages ) . "'>" . __( $nav_img_next . $nav_img_next, 'juedisches-museum' ) . "</a>" : "";
						echo isset( $paged ) ? "</div>" : "";
					}
					?>
                </div>
				<?php
			} else {
				get_template_part( 'template-parts/collection/filter', "no-result" );
			} ?>
        </div>
    </div>
</section>
<!-- End of Katalog section -->
<?php get_footer(); ?>

