<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package juedisches-museum
 */

get_header();
?>

	<main id="primary" class="site-main">
      <section class="slider-content-seciton">
         <div class="container">

         <?php
         while ( have_posts() ) :
            the_post();
            ?>
            <div class="single-post-wrapper">
               <div class="slider-wrapper">
                  <!-- Img Slider -->
                  <div class="single-slider-holder">           
                     <div class="single-slider-img post-single-slider single-post-popup">
                        <?php 
                        // first item of the slider is post thumbnail
                        if( has_post_thumbnail() ) {
                           ?>
                           <!-- Slider Item -->
                           <div class="slider-item-img">
                              <div class="img-holder">
                                 <a href="<?php echo the_post_thumbnail_url(); ?>"><?php the_post_thumbnail(); ?></a>
                              </div>
                           </div>
                           <?php
                        }
                        // add the gallery images to the slider
                        $images = get_field( '_blog_fet_gallery' );
                        if( $images ) {
                           foreach ( $images as $image ) {
                              $data_type = pathinfo($image['url'], PATHINFO_EXTENSION);
                              ?>
                              <!-- Slider Item -->
                              <div class="slider-item-img">
                                 <div class="img-holder">
                                    <?php 
                                    if( $data_type == 'mp4' ) {
                                       ?>
                                       <video playsinline>
                                          <source src="<?php echo $image['url'];?>" type="video/mp4">
                                          Your browser does not support the video tag.
                                       </video>
                                       <?php
                                    } else {
                                       ?>
                                       <a href="<?php echo esc_url( $image['url'] ); ?>"><img src="<?php echo esc_url( $image['url'] ); ?>" 
                                       alt="<?php echo esc_attr( $image['alt'] ); ?>" /></a>
                                       <?php
                                    }
                                    ?>  
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
                     // post thumbnail caption
                     if( has_post_thumbnail() ) {
                        ?>
                        <!-- Slider Item -->
                        <div class="slider-item-cap">
                           <div class="img-caption text-center">
                              <p><?php the_post_thumbnail_caption(); ?></p>
                           </div>
                        </div>
                        <?php
                     } // endif

                     // gallery images captions
                     if( $images ) {
                        foreach ( $images as $image ) {
                           ?>
                           <!-- Slider Item -->
                           <div class="slider-item-cap">
                              <div class="img-caption text-center">
                                 <p><?php echo esc_html( $image['caption'] ); ?></p>
                              </div>
                           </div>
                           <?php
                        } // endforeach
                     } // endif $images
                     ?>
                  </div>
               </div>
				
               <div class="text-holder">
                  <div class="entry-header">
                     <h1 class="title"><?php the_title(); ?></h1>
                     <h2><?php echo get_field( '_blog_secondary_title' ); // secondary title ?></h2>
                  </div>
                  <?php the_content(); ?>
                  <div class="post-copyright">
                     <p>
                        <span class="date">
                           <?php 
                           echo sprintf( __( 'verfasst am %s', 'juedisches-museum' ), date_i18n( get_option( 'date_format' ), strtotime( get_the_date() ) ) ); ?>
                        </span>
                        <?php if( get_field( '_blog_copyright' ) ) { ?>
                           <div class="copyright-holder">
                              <span class="copyright-toggler d-block">
                                 <span class="copyright-label"><?php _e( 'Copyright', 'juedisches-museum' ); ?></span>
                              </span>
                              <p class="copyright"><?php echo get_field( '_blog_copyright' ); ?></p>
                           </div>
                        <?php } ?>
                     </p>
                  </div>
               </div>
            </div>
            <div class="post-link-wrapper">           
               <?php
               next_post_link();
               previous_post_link();
               ?>
            </div>
         <?php
         endwhile; // End of the loop.
         ?>

         </div>
         
      </section>

	</main><!-- #main -->

<?php
get_footer();