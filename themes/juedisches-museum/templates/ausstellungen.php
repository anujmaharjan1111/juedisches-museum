<?php
/**
 * Template Name: Ausstellungen
*/
get_header();
?>
<main class="site-main">
   <section class="exhubition-section">
      <div class="container">
         <h1 class="sub-title text-center"><?php the_title(); ?></h1>
         <!-- Read More WRapper -->
         <?php
         // the content with readmore option enabled
         if( have_rows( '_open_acc_group_excerpt' ) ) {
            ?>
            <section class="read-more-section">
               <?php
               while( have_rows( '_open_acc_group_excerpt' ) ) {
                  the_row();
                  ?>
                  <h2 class="list-cat-title sub-title"><?php echo get_sub_field( '_op_acc_group_title' ); ?></h2>
                  <?php
                  // inner accordions
                  if( have_rows( '_op_acc_accordions' ) ) {
                     ?>
                     <div class="read-more-list">
                        <?php
                        while( have_rows( '_op_acc_accordions' ) ) {
                           the_row();
                           $content = get_sub_field( '_op_acc_accordion_content' );
                           $saperator = '[more]';
                           $divided_content = explode( $saperator, $content );

                           if( !empty( $divided_content ) && isset( $divided_content[0] ) && isset( $divided_content[1] ) ) {
                              $before_content = $divided_content[0];
                              $after_content = $divided_content[1];
                           } else {
                              $before_content = $content;
                              $after_content = '';
                           }
                           ?>
                           <!-- List Item -->
                           <div class="list-item">
                              <div class="content-wrapper">
                                 <!-- List Head -->
                                 <div class="list-head">
                                    <h3 class="title"><?php echo get_sub_field( '_op_acc_accordion_title' ); ?></h3>
                                    <h4 class="sub-title"><?php echo get_sub_field( '_op_acc_accordion_subtitle' ); ?></h4>
                                 </div>
                                 <!-- List Content -->
                                 <div class="list-content">
                                    <div class="excerpt-content">
                                       <?php echo $before_content; ?>
                                    </div>
                                    <!-- Main Content -->
                                    <div class="main-content">
                                       <!-- Content -->
                                       <div class="content">
                                          <div class="excerpt-content">
                                             <?php echo $before_content; ?>
                                          </div>
                                          <?php echo apply_filters('the_content', $after_content ); ?>
                                       </div>
                                       <!-- Slider -->
                                       <?php 
                                       $gallery = get_sub_field( '_op_acc_gallery' );
                                       if( $gallery ) {
                                          $slider_active_class = (count($gallery) > 1 ) ? " post-single-slider":"";
                                       ?>
                                       <div class="slider-wrapper">           
                                          <div class="single-slider-img <?php echo $slider_active_class; ?>">
                                             <?php
                                             foreach ( $gallery as $slide ) {
                                                $data_type = pathinfo( $slide['url'], PATHINFO_EXTENSION );
                                                ?>
                                                <div class="slider-item-img">
                                                   <div class="img-holder">
                                                      <?php
                                                      if( $data_type == 'mp4' ) {
                                                         ?>
                                                         <video playsinline autoplay muted loop>
                                                            <source src="<?php echo $slide['url'];?>" type="video/mp4" />
                                                         </video>
                                                            <?php
                                                         } else {
                                                            ?>
                                                            <img src="<?php echo esc_url( $slide['url'] ); ?>" 
                                                            alt="<?php echo esc_attr( $slide['alt'] ); ?>" />
                                                            <?php
                                                         }
                                                      ?>
                                                   </div>
                                                </div>
                                                   <?php
                                                } // endforeach
                                             ?>
                                          </div><!-- End of Slider  -->
                                          <!-- Single slider caption -->
                                          <div class="single-slider-cap">
                                             <?php
                                             foreach ( $gallery as $slide ) {
                                                ?>
                                                <!-- Item -->
                                                <div class= "slider-item-cap">
                                                   <div class="img-caption text-center">
                                                      <p><?php _e( $slide['caption'], 'juedisches-museum' ); ?></p>
                                                   </div>
                                                </div>
                                                <?php 
                                                }
                                             ?>
                                          </div>
                                          <!-- End of Single slider caption -->
                                       </div>
                                          <?php
                                          } // endif $gallery
                                       ?>
                                    </div><!-- End of Main Content -->
                                    <span class="read-more"><?php _e( 'read more', 'juedisches-museum' ); ?></span>
                                 </div>
                              </div>
                           </div>
                           <?php
                        } // endwhile _op_acc_accordions
                        ?>
                     </div>
                  <?php
                  } // endif _op_acc_accordions
               } // endwhile _open_acc_group_excerpt
               ?>
            </section>
            <?php
         } // endif _open_acc_group_excerpt
         ?>
         <!-- Accordion Section -->
         <?php
         if( have_rows( '_acc_group' ) ) {
            ?>
            <section class="accordion-section">
               <?php
               while( have_rows( '_acc_group' ) ) {
                  the_row();
                  ?>
                  <h2 class="list-cat-title sub-title"><?php echo get_sub_field( '_acc_group_title' ); ?></h2>
                  <?php
                  if( have_rows( '_acc_accordions' ) ) {
                     ?>
                     <div class="accordion">
                        <?php
                        while( have_rows( '_acc_accordions' ) ) {
                           the_row();
                           ?>
                           <!-- Accordion Item -->
                           <div class="accordion-item">
                              <div class="content-wrapper">
                                 <!-- Accordion Header -->
                                 <div class="accordion-head">
                                    <div class="text-wrapper">
                                       <h3 class="title"><?php echo get_sub_field( '_acc_accordion_title' ); ?></h3>
                                       <h4 class="sub-title"><?php echo get_sub_field( '_acc_accordion_subtitle' ); ?></h4>
                                    </div>
                                 </div> 
                                 <!-- Accordion Content -->
                                 <div class="accordion-content">
                                    <div class="main-content">
                                       <div class="field-content">
                                          <?php echo get_sub_field( '_acc_accordion_content' );?>
                                       </div>
                                       <?php
                                       // gallery
                                       $images = get_sub_field( '_acc_gallery' );
                                       if( $images ) {
                                          ?>
                                          <div class="slider-wrapper">   
                                             <div class="single-slider-img post-single-slider">
                                                <?php 
                                                foreach ( $images as $image ) {
                                                   $data_type = pathinfo( $image['url'], PATHINFO_EXTENSION );
                                                   ?>
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
                                                               <img src="<?php echo esc_url( $image['url'] ); ?>" 
                                                               alt="<?php echo esc_attr( $image['alt'] ); ?>" />
                                                               <?php
                                                            }
                                                         ?>
                                                      </div>
                                                   </div>
                                                <?php
                                                } // endforeach $images
                                                ?>
                                             </div> <!-- End of Single slider  -->
                                             <!-- Single slider caption -->
                                             <div class="single-slider-cap">
                                                <?php
                                                foreach ( $images as $image ) {
                                                   ?>
                                                   <!-- Item -->
                                                   <div class="slider-item-cap">
                                                      <div class="img-caption text-center">
                                                         <p><?php _e( $image['caption'], 'juedisches-museum' ); ?></p>
                                                      </div>
                                                   </div>
                                                   <?php 
                                                   } // endforeach $images
                                                ?>
                                             </div> 
                                             <!-- End of Single slider caption -->
                                          </div>
                                          <?php
                                       } //endif $images
                                       ?>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        <?php
                        } // endwhile _acc_accordions
                        ?>
                     </div>
                     <?php
                  } // endif _acc_accordions
               } // endwhile _acc_group
               ?>
            </section>
            <?php
         } // end if _acc_group
         ?>

      </div>
   </section>
   
</main>
<?php
get_footer();