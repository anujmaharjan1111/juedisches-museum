<?php
/**
 * Template Name: Presse
 */
get_header();
?>
<main class="site-main">
   <section class="exhubition-section presee">
      <div class="container">
         <h1 class="sub-title text-center"><?php the_title(); ?></h1>
         <!-- Read More WRapper -->
         <?php
         // the content with readmore option enabled
         if( have_rows( '_open_acc' ) ) {
            ?>
            <section class="plain-list-section">
               <?php
               while( have_rows( '_open_acc' ) ) {
               the_row();
               ?>
               <div class="plain-l-tit-list-wrap">
                  <h2 class="list-cat-title sub-title"><?php echo get_sub_field( '_op_acc_group_title' ); ?></h2>
                  <?php
                  // inner accordions
                  if( have_rows( '_op_acc_accordions' ) ) {
                     ?>
                        <div class="read-more-list plain-l-wrap"> 
                           <?php
                           while( have_rows( '_op_acc_accordions' ) ) {
                              the_row();
                              ?>
                              <!-- List Item -->
                              <div class="list-item plain-list-item">
                                 <div class="content-wrapper">
                                    <!-- List Head -->
                                    <div class="list-head">
                                       <h3 class="title"><?php echo get_sub_field( '_op_acc_accordion_title' ); ?></h3>
                                       <h4 class="sub-title"><?php echo get_sub_field( '_op_acc_accordion_subtitle' ); ?></h4>
                                       <?php echo get_sub_field( '_op_acc_accordion_content' ); ?>
                                    </div>
                                 </div>
                              </div>
                              <?php
                           } // endwhile _op_acc_accordions
                           ?>
                        </div>
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
                                       <?php echo get_sub_field( '_acc_accordion_content' ); 
                                       // gallery
                                       $images = get_sub_field( '_acc_gallery' );
                                       if( $images ) {
                                          ?>
                                          <div class="wrapper">   
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