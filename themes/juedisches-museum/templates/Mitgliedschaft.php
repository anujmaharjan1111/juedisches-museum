<?php
/**
 * The template for the subscription form page.
 * 
 * Template Name: Mitgliedschaft
 */
get_header(); ?>
    <main class="site-main">
        <section class="mitgliedschaft-section <?php echo ( has_post_parent() ) ? 'child-form' : ''; ?>">
            <div class="container">
               <?php
               if( has_post_parent() ) {
                  ?>
                  <h1 class="sub-title parent text-center"><?php echo get_the_title( wp_get_post_parent_id( get_the_ID() ) ); ?></h1>
                  <h2 class="sub-title child"><?php the_title(); ?></h2>
                  <?php
               } else {
                  ?>
                  <h1 class="sub-title"><?php the_title(); ?></h1>
                  <?php
               }
               ?>
               <!-- Contetnt Left Image Right Section -->
               <div class="cl-imgr-holder">
                  <div class="cl-holder">
                     <?php echo the_content(); ?>
                  </div>
                  <div class="imgr-holder">
                     <div class="img-profile-wraper">
                        <div class="img-wrap">
                           <?php the_post_thumbnail( 'medium' ); ?>
                        </div>
                        <div class="author">
                           <?php 
                           if( has_post_thumbnail() ) {
                              echo get_post( get_post_thumbnail_id() )->post_content;
                           }
                           ?>
                        </div>
                     </div>
                  </div>
               </div>
               <!-- End of Contetnt Left Image Right Section -->
               <div class="rows">
                  <div class="cols left-form">
                     <?php
                     $form = get_field( '_mit_form' );
                     if( $form ) {
                           // form
                           echo do_shortcode( "[contact-form-7 id='{$form->ID}' title='{$form->post_title}']");
                     }
                     ?>
                  </div>
                  <!-- Cols -->
                  <div class="cols right-content">
                     <div class="right-side-content">
                        <?php echo get_field( '_mit_rc_content' ); // right content ?>
                     </div>
                  </div>
                  <!-- Cold -->
               </div>
               <!-- Row -->
            </div>
        </section>
    </main>
<?php 
get_footer();