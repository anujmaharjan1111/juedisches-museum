<?php
/**
 * Template Name: Sammlung
 */
get_header();
?>
    <main class="site-main">
        <section class="content-section">
            <div class="container">
                <h1 class="sub-title text-center"><?php the_title(); ?></h1>
                <div class="catelog-title">
                    <a class="d-inline-flex" href="<?php echo get_post_type_archive_link( "museum-collection" );?>">
                        <div class="icon mr-4">
                            <svg width="41" height="16" viewBox="0 0 41 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M40.7077 8.70735C41.0979 8.31647 41.0973 7.68331 40.7065 7.29314L34.3367 0.934943C33.9459 0.544773 33.3127 0.545346 32.9225 0.936224C32.5323 1.3271 32.5329 1.96027 32.9238 2.35044L38.5858 8.00217L32.934 13.6641C32.5439 14.055 32.5444 14.6882 32.9353 15.0784C33.3262 15.4685 33.9594 15.468 34.3495 15.0771L40.7077 8.70735ZM0.000905601 9.03711L40.0009 9.00088L39.9991 7.00089L-0.000905601 7.03711L0.000905601 9.03711Z" fill="#00F0FF"/>
                            </svg>
                        </div>
                        <h2 class="sub-title"><?php _e( 'Online Katalog', 'juedisches-museum' ); ?></h2>
                    </a>
                </div>
                <div class="read-more-list">
					<?php
					$content         = get_the_content();
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
                    <div class="excerpt-content">
                        <p><?php echo $before_content; ?></p>
                    </div>
                    <!-- Main Content -->
                    <div class="main-content">
						<?php echo apply_filters( 'the_content', $after_content ); ?>
                    </div>
                    <span class="read-more"><?php _e( 'read more', 'juedisches-museum' ); ?></span>
                </div><!-- readmore list -->
            </div>
        </section>
        <!-- End of Full section -->
        <section class="highlights">
            <div class="container">
                <div class="lr-img-cont-holder">
					<?php
					if ( have_rows( '_highlights' ) ) {
						?>
                        <h2 class="sub-title"><?php _e( 'Highlights', 'juedisches-museum' ); ?></h2>
						<?php
						while ( have_rows( '_highlights' ) ) {
							the_row();
							$img = get_sub_field( '_highlights_image' );
							?>
                            <div class="list-item">
                                <div class="img-holder popup">
									<?php
									// image
									if ( $img ) {
										?>
                                        <a class="image-popup" href="<?php echo esc_url( $img['url'] ); ?>">
                                            <img src="<?php echo esc_url( $img['url'] ); ?>" alt="<?php echo esc_attr( $img['alt'] ); ?>">
                                        </a>
										<?php
									} // endif $img
									?>
                                </div><!-- Img Holder -->
                                <div class="text-holder">
                                    <h3 class="title"><?php echo get_sub_field( '_highlights_title' ); ?></h3>
                                    <div class="content">
                                        <div class="read-more-list">
											<?php // echo get_sub_field( '_highlights_content' ); ?>
											<?php
											$content         = get_sub_field( '_highlights_content' );
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
                                            <div class="excerpt-content">
                                                <p><?php echo $before_content; ?></p>
                                            </div>
                                            <!-- Main Content -->
                                            <div class="main-content">
												<?php echo apply_filters( 'the_content', $after_content ); ?>
                                            </div>
											<?php if ( $after_content != '' ) {
												?>
                                                <span class="lr-cont-img-read-more"><?php _e( 'read more', 'juedisches-museum' ); ?></span>
												<?php
											} ?>
                                        </div>

                                    </div>
                                </div><!-- text Holder -->
                            </div><!-- List-->
							<?php

						} // endwhile _highlights
						?>
						<?php
					} // endif _highlights
					?>
                </div><!-- List Holder -->
            </div>
        </section>
    </main>
<?php
get_footer();