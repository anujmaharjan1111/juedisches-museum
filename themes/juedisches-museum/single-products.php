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

    <main id="primary" class="site-main">
        <section class="product-detail-section">
            <div class="container">
                <div class="row-wrapper">
					<?php
					while ( have_posts() ) :
						the_post();
						?>
                        <div class="left-wrapper">
                            <!-- Img -->
							<?php
							// first item of the slider is post thumbnail
							if ( has_post_thumbnail() ) {
								?>
                                <div class="img-holder">
									<?php the_post_thumbnail(); ?>
                                </div>
								<?php
							}
							?>
                            <div class="bottom-content">
                                <div class="b-entry-header">
                                    <h1 class="sub-title"><?php the_title(); ?></h1>
                                    <h2 class="sub-title"><?php echo get_field( '_pro_subtitle' ); ?></h2>
                                </div>
                                <div class="b-entry-content">
									<?php
									if ( get_field( '_pro_general_info' ) ) {
										?>
                                        <p><?php echo nl2br( get_field( '_pro_general_info' ) ); ?> </p>
										<?php
									}
									?>
                                </div>
                            </div>
                        </div><!-- Left wrapper -->
                        <div class="right-wrapper">
                            <div class="text-holder">
                                <div class="entry-header">
                                    <h3 class="price sub-title"><?php echo get_field( '_pro_price' ); ?></h3>
									<?php
									if ( get_field( '_pro_price_note' ) ) {
										?>
                                        <h4 class="price-note sub-title">(<?php echo get_field( '_pro_price_note' ); ?>
                                            )</h4>
										<?php
									}
									?>
									<?php
									$link = get_field( '_pro_link' );
									if ( $link ) {
										?>
                                        <h5 class="sub-title"><a
                                                    href="<?php echo esc_url( $link ); ?>"><?php _e( 'Order', 'juedisches-museum' ); ?></a>
                                        </h5>
										<?php
									} // endif $link
									?>
                                </div>
                                <div class="content">
									<?php the_content(); ?>
                                </div>
                                <div class="b-entry-content">
									<?php
									if ( get_field( '_pro_general_info' ) ) {
										?>
                                        <p><?php echo nl2br( get_field( '_pro_general_info' ) ); ?> </p>
										<?php
									}
									?>
                                </div>
                            </div>
                        </div><!-- Right wrapper -->
					<?php
					endwhile; // End of the loop.
					?>
                </div>
            </div>
        </section>
    </main><!-- #main -->

<?php
get_footer();