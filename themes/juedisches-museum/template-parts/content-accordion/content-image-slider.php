<?php
if ( have_rows( 'image_slider_gallery' ) ) {
	?>
    <!-- Accordion content type single slider centered -->
    <div class="single-post-wrapper">
        <div class="slider-wrapper">
            <!-- Img Slider -->
            <div class="single-slider-holder">
                <div class="post-single-slider">
					<?php
					while ( have_rows( 'image_slider_gallery' ) ) {
						the_row();
						$image = get_sub_field( 'image' );
						$link  = get_sub_field( 'link' );
						if ( isset( $image['url'] ) ) {
							$link = $link ? esc_url( $link ) : esc_url( $image['url'] );
							?>
                            <!-- Slider Item -->
                            <div class="slider-item-img">
                                <div class="img-holder">
                                    <a href="<?php echo $link; ?>"><img
                                                src="<?php echo esc_url( $image['url'] ); ?>"
                                                alt="<?php if ( isset( $image['alt'] ) ) {
													echo esc_attr( $image['alt'] );
												} ?>">
                                    </a>
                                </div>
                            </div>
							<?php
						}
					}
					?>
                </div>
            </div>
            <!-- Caption Slider -->
            <div class="single-slider-cap">
				<?php
				while ( have_rows( 'image_slider_gallery' ) ) {
					the_row();
					$image = get_sub_field( 'image' );
					if ( isset( $image['caption'] ) ) {
						?>
                        <!-- Slider Item -->
                        <div class="slider-item-cap">
                            <div class="img-caption text-center">
                                <p><?php echo  $image['caption'] ; ?></p>
                            </div>
                        </div>
						<?php
					}
				}
				?>
            </div>
        </div>
    </div>
    <div class="cl-holder">
		<?php echo get_sub_field( '_grimgacc_content' ); ?>
    </div>
	<?php
}

if ( ! empty( $image_slider_gallery ) && is_array( $image_slider_gallery ) ) {
	?>
    <!-- Accordion content type single slider centered -->
    <div class="single-post-wrapper">
        <div class="slider-wrapper">
            <!-- Img Slider -->
            <div class="single-slider-holder">
                <div class="post-single-slider single-post-popup">
					<?php
					foreach ( $image_slider_gallery as $image ) {
						if ( isset( $image['alt'] ) && isset( $image['url'] ) ) {
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
					}
					?>
                </div>
            </div>
            <!-- Caption Slider -->
            <div class="single-slider-cap">
				<?php
				foreach ( $image_slider_gallery as $image ) {
					if ( isset( $image['caption'] ) )
						?>
                        <!-- Slider Item -->
                        <div class="slider-item-cap">
                        <div class="img-caption text-center">
                        <p><?php echo esc_html( $image['caption'] ); ?></p>
                    </div>
                    </div>
					<?php
				}
				?>
            </div>
        </div>
    </div>
    <div class="cl-holder">
		<?php echo get_sub_field( '_grimgacc_content' ); ?>
    </div>
    <!-- End of Accordion content type single slider centered -->
	<?php
}

