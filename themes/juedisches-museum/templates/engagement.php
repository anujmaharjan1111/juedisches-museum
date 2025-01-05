<?php
/**
 * Template Name: engagement
*/
get_header();
?>
<section class="exhubition-section">
   <div class="container">

      <?php if ( $engagement_title = get_field( 'engagement_title' ) ) : ?>
         <h1 class="sub-title text-center"><?php echo esc_html( $engagement_title ); ?></h1>
      <?php endif; ?>
      <!-- Read More WRapper -->
      <!-- Accordion Section -->
      <section class="accordion-section">
         <!-- <h2 class="list-cat-title sub-title">Engagement</h2> -->
               <div class="accordion">
                  <?php if ( have_rows( 'engagement_accordion' ) ) :
                     while ( have_rows( 'engagement_accordion' ) ) :
                        the_row(); ?>
                        <?php if ( get_sub_field( 'accordion_type' ) === 'single-col' ) : ?>
                           <?php if ( have_rows( 'single_column' ) ) : ?>
                              <?php while ( have_rows( 'single_column' ) ) :
                                 the_row(); ?>
                                 <!-- Accordion Item -->
                                 <div class="accordion-item">
                                    <div class="content-wrapper">
                                       <!-- Accordion Header -->
                                       <div class="accordion-head">
                                          <div class="text-wrapper">
                                             <?php if ( $main_title = get_sub_field( 'main_title' ) ) : ?>
                                                <h3 class="title"><?php echo esc_html( $main_title ); ?></h3>
                                             <?php endif; ?>
                                             <h4 class="sub-title"></h4>
                                          </div>
                                       </div>
                                       <!-- Accordion Content -->
                                       <div class="accordion-content">
                                          <div class="main-content">
                                             <div class="field-content">
                                                <?php if ( $accordian_content = get_sub_field( 'accordian_content' ) ) : ?>
                                                   <?php echo $accordian_content; ?>
                                                <?php endif; ?>
                                                <?php
                                                $logo = get_sub_field( 'logo' );
                                                if ( $logo ) : ?>
                                                   <p><img src="<?php echo esc_url( $logo['url'] ); ?>" alt="<?php echo esc_attr( $logo['alt'] ); ?>"></p>
                                                <?php endif; ?>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              <?php endwhile; ?>
                           <?php endif; ?>
                        <?php else: ?>
                           <?php if ( have_rows( 'left_image_right_content' ) ) : ?>
                              <?php while ( have_rows( 'left_image_right_content' ) ) :
                              the_row(); ?>
                                 <!-- Accordion Item -->
                                 <div class="accordion-item">
                                    <div class="content-wrapper">
                                       <!-- Accordion Header -->
                                       <div class="accordion-head">
                                          <div class="text-wrapper">
                                             <?php if ( $title = get_sub_field( 'title' ) ) : ?>

                                             <h3 class="title"><?php echo esc_html( $title ); ?></h3>
                                             <?php endif; ?>
                                             <h4 class="sub-title"></h4>
                                          </div>
                                       </div>
                                       <!-- Accordion Content -->
                                       <div class="accordion-content">
                                          <div class="main-content">
                                             <div class="full-LHI-RHC-cap-form">
                                                <div class="content-img-holder odd">
                                                   <!-- Img holder -->
                                                   <div class="img-holder-with-cont">
                                                      <div class="img-profile-wraper">
                                                         <div class="img-wrap">
                                                            <?php
                                                            $image = get_sub_field( 'image' );
                                                            if ( $image ) : ?>
                                                               <img width="300" height="300" src="<?php echo esc_url( $image['url'] ); ?>" class="wp-post-image" alt="<?php echo esc_attr( $image['alt'] ); ?>" loading="lazy" >
                                                            <?php endif; ?>
                                                         </div>
                                                         <div class="author">
                                                            <?php if ( $author = get_sub_field( 'author' ) ) : ?>
                                                               <?php echo $author; ?>
                                                            <?php endif; ?>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <!-- Cl holder -->
                                                   <div class="content-holder-with-cont">
                                                      <?php if ( $content = get_sub_field( 'content' ) ) : ?>
                                                         <?php echo $content; ?>
                                                      <?php endif; ?>
                                                   </div>
                                                </div>
                                                <!-- Full conetnt -->
                                                <div class="full-content">
                                                   <?php if ( $full_content = get_sub_field( 'full_content' ) ) : ?>
                                                      <?php echo $full_content; ?>
                                                   <?php endif; ?>
                                                </div>
                                                <div class="form-part">
                                                   <div class="form-title mb-4">
                                                      <?php if ( $form_title = get_sub_field( 'form_title' ) ) : ?>
                                                         <?php echo esc_html( $form_title ); ?>
                                                      <?php endif; ?>
                                                   </div>
                                                   <div class="rows">
                                                      <div class="cols left-form">
                                                         <?php
                                                         $form = get_sub_field( '_mit_form' );
                                                         if( $form ) {
                                                               // form
                                                               echo do_shortcode( "[contact-form-7 id='{$form->ID}' title='{$form->post_title}']");
                                                         }
                                                         ?>
                                                      </div>
                                                      <!-- Cols -->
                                                      <div class="cols right-content">
                                                         <div class="right-side-content">
                                                            <?php echo get_sub_field( '_mit_rc_content' ); // right content ?>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <!-- Cold -->
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              <?php endwhile; ?>
                           <?php endif; ?>
                        <?php endif; ?>
                        <?php
                     endwhile;
                  endif; ?>
               </div>
      </section>
   </div>
</section>
<?php
get_footer();
?>