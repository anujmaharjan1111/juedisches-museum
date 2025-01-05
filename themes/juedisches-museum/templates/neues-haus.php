<?php
/**
 * Template Name: Neues Haus
 */
get_header(); ?>
    <main class="site-main">
        <section class="content-section full-cont-rimg">
            <div class="container">
                <h1 class="sub-title text-center">
					<?php the_title(); ?>
                </h1>
                <div class="row-wrapper">
                    <div class="text-holder">
                        <header class="content-header">
                            <h2>
								<?php echo get_field( '_tcrm_title' ); ?>
                            </h2>
                            <h3>
								<?php echo get_field( '_tcrm_subtitle' ); ?>
                            </h3>
							<?php
							$content         = get_field( '_tcrm_content' );
							$saperator       = '[more]';
							$divided_content = explode( $saperator, $content );
							if ( ! empty( $divided_content ) && isset( $divided_content[0] ) && isset( $divided_content[1] ) ) {
								$before_content = $divided_content[0];
								$after_content  = $divided_content[1];
							} else {
								$before_content = $content;
								$after_content  = '';
							}
							?>
                        </header>
                        <!-- Excerpt Content -->
                        <div class="excerpt-content">
                            <p>
								<?php echo $before_content; ?>
                            </p>
                        </div>
                        <!--  Content -->
                        <div class="main-content">
							<?php echo $after_content; ?>
                        </div>
                        <span class="read-more-img">
						<?php _e( 'read more', 'juedisches-museum' ); ?>
					</span>
                    </div> <!-- Text Holder -->
                    <div class="img-holder-col">
                        <!-- Old code -->
						<?php
						$images = get_field( '_tcrm_image' );
						if ( $images && is_array( $images ) ) {
							?>
                            <!-- New slider single -->
                            <div class="single-post-wrapper">
                                <div class="slider-wrapper">
                                    <!-- Img Slider -->
                                    <div class="single-slider-holder">
                                        <div class="single-slider-img post-single-slider single-post-popup">
											<?php
											foreach ( $images as $image ) {
												if ( isset( $image['alt'] ) && isset( $image['url'] ) )
													?>
                                                    <!-- Slider Item -->
                                                    <div class="slider-item-img">
                                                    <div class="img-holder">
                                                    <a href="<?php echo esc_url( $image['url'] ); ?>"><img
                                                        src="<?php echo esc_url( $image['url'] ); ?>"
                                                        alt="<?php echo esc_attr( $image['alt'] ); ?>"></a>
                                                </div>
                                                </div>
												<?php
											}
											?>
                                        </div>
                                    </div>
                                    <!-- Caption Slider -->
                                    <div class="single-slider-cap">
										<?php
										foreach ( $images as $image ) {
											if ( isset( $image['caption'] ) )
												?>
                                                <!-- Slider Item -->
                                                <div class="slider-item-cap">
                                                <div class="img-caption text-center">
                                                <p><?php echo $image['caption'] ; ?></p>
                                            </div>
                                            </div>
											<?php
										}
										?>
                                    </div>
                                </div>
                            </div>
                            <!-- End of New slider single -->
							<?php
						}
						?>
                        <!-- End of #Old code -->
                    </div> <!-- Img Holder -->
                </div><!-- Row -->
            </div>
        </section><!-- End of Content Section -->
        <section class="neues-section">
            <div class="container">
				<?php
				$open_initially = get_field( '_basic_acc_open_first' ) ? get_field( '_basic_acc_open_first' ) : 0;
				// loop throught the accordions
				if ( have_rows( '_basic_accordions' ) ) {
					?>
                    <div class="accordion">
						<?php
						while ( have_rows( '_basic_accordions' ) ) {
							the_row();
							$row_index = get_row_index();
							$type      = get_sub_field( '_accordion_type' );
							$cap_pos   = ( 'right' == get_sub_field( '_right_image_cap_pos' ) ) ? 'has-rcap-limg' : '';

							if ( $open_initially && ( $open_initially == $row_index ) ) {
								$icon_class = 'icon-open';
								$style      = 'style="display:block;"';
							} else {
								$icon_class = '';
								$style      = '';
							}
							?>
                            <div
                                    class="accordion-item has-nested-lr-content acc-type-<?php echo $type; ?> <?php echo esc_attr( $cap_pos ); ?> <?php echo esc_html( $icon_class ); ?>">
                                <div class="content-wrapper">
                                    <!-- Accordion Header -->
                                    <div class="accordion-head">
                                        <div class="text-wrapper">
                                            <h4 class="sub-title">
												<?php echo get_sub_field( '_genacc_title' ); ?>
                                            </h4>
                                        </div>
                                    </div>
                                    <!-- Accordion Content -->
                                    <div class="accordion-content" <?php echo $style; ?>>
                                        <div class="main-content">
											<?php get_template_part( 'template-parts/content-accordion/content', $type ); ?>
                                        </div>
                                    </div>
                                </div>
                            </div>
							<?php
						} // endwhile _basic_accordions
						?>
                    </div>
					<?php
				} // endif _basic_accordions
				?>
            </div>
        </section><!-- End of Neus Section -->
    </main>
<?php
get_footer();