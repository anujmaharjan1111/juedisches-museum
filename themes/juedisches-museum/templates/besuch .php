<?php
/**
 * Template Name: Besuch
*/
get_header();
?>
<main class="site-main">
   <section class="besuch-section">
      <div class="container">
         <h1 class="sub-title"><?php the_title(); ?></h1>
         <div class="content-area">
            <div class="row">
               <!-- Col -->
               <div class="col-lg-4 col-sm-6 cols">
                  <div class="title-list-holder mb-xl-0">
                     <div class="opening-hours">
                        <?php 
                        if( have_rows( '_bes_opening_hours' ) ) {
                           echo '<ul>';
                           while( have_rows( '_bes_opening_hours' ) ) {
                              the_row();
                              echo '<li>' . get_sub_field( '_bes_day_range' ) . '<li>';
                              echo '<li>' . get_sub_field( '_bes_time_range' ) . '<li>';
                           }
                           echo '</ul>';
                        }
                        ?>
                     </div>
                  </div><!-- End of Open Hours -->
                  <!-- Img -->
                  <div class="img-holder">
                     <div class="img-ribon">
                        <a class="d-flex align-item-center justify-content-center" target="_blank" href="https://www.google.com/search?q=j%C3%BCdisches%20museum%20basel&oq=j%C3%BCdisches+museum+basel&aqs=chrome..69i57j0i13l3j0i22i30l4.2828j0j7&sourceid=chrome&ie=UTF-8&tbs=lrf:!1m4!1u2!2m2!2m1!1e1!2m1!1e2!3sIAE,lf:1,lf_ui:1&tbm=lcl&sxsrf=APq-WBusF_Uu5eyPCvMl7AoIlywyC4Ehtg:1643897853012&rflfq=1&num=10&rldimm=10687003846831136865&lqi=Chdqw7xkaXNjaGVzIG11c2V1bSBiYXNlbFoZIhdqw7xkaXNjaGVzIG11c2V1bSBiYXNlbJIBBm11c2V1baoBGRABKhUiEWrDvGRpc2NoZXMgbXVzZXVtKAU&phdesc=e9FqYiP6pWg&ved=2ahUKEwiJpM3c3OP1AhXfS_EDHTr9CNAQvS56BAgCECA&rlst=f#rlfi=hd:;si:10687003846831136865,l,Chdqw7xkaXNjaGVzIG11c2V1bSBiYXNlbFoZIhdqw7xkaXNjaGVzIG11c2V1bSBiYXNlbJIBBm11c2V1baoBGRABKhUiEWrDvGRpc2NoZXMgbXVzZXVtKAU,y,e9FqYiP6pWg;mv:%5B%5B47.558982500000006,7.5847416999999995%5D,%5B47.556365,7.583252399999999%5D%5D;tbs:lrf:!1m4!1u2!2m2!2m1!1e1!2m1!1e2!3sIAE,lf:1,lf_ui:1">
                           <span class="text"><?php echo jsm_open_status(); ?></span>
                        </a>
                     </div>
                     <?php the_post_thumbnail(); ?>
                     <div class="img-caption text-left">
                        <p><?php the_post_thumbnail_caption(); ?></p>
                     </div>
                  </div> <!-- End of Img -->
                  <div class="title-list-holder">
                     <h3 class="title"><?php _e( 'Closing days', 'juedisches-museum' ); ?></h3>
                     <div class="content">
                        <?php echo get_field( '_bes_closing_hours' ); ?>
                     </div>
                  </div><!-- End of List Holder -->
               </div>
               <!-- Col -->
               <div class="col-lg-4 col-sm-6 cols">
                  <!-- List holder -->
                  <div class="title-list-holder">
                     <h3 class="title"><?php _e( 'Address', 'juedisches-museum' ); ?></h3>
                     <div class="content">
                        <?php echo get_field( '_bes_address' ); ?>
                     </div>
                  </div><!-- End of List Holder -->
                  <!-- List holder -->
                  <div class="title-list-holder">
                     <h3 class="title"><?php _e( 'Directions', 'juedisches-museum' ); ?></h3>
                     <div class="content">
                        <?php echo get_field( '_bes_direction' ); ?>
                     </div>
                  </div><!-- End of List Holder -->
                  <!-- List holder -->
                  <div class="title-list-holder">
                     <h3 class="title"><?php _e( 'Accessibility', 'juedisches-museum' ); ?></h3>
                     <div class="content">
                        <?php 
                        $content = get_field( '_bes_accessibility' );
                        $saperator = '[more]';
                        $divided_content = explode( $saperator, $content );
                        $before_content = '';
                        $after_content  = '';
                        if( !empty( $divided_content ) && isset( $divided_content[0] ) && isset( $divided_content[1] ) ) {
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
                        <span class="toggle-titles"><?php _e( 'more', 'juedisches-museum' ); ?></span>
                        <div class="full-content">
                           <?php echo $after_content; ?>
                        </div> 
                     </div>
                  </div><!-- End of List Holder -->
               </div><!-- End of Col -->
               <div class="col-lg-4 col-sm-6 cols">
                  <!-- List holder -->
                  <div class="title-list-holder">
                     <h3 class="title"><?php _e( 'Prices', 'juedisches-museum' ); ?></h3>
                     <div class="content">
                        <?php echo get_field( '_bes_price' ); ?>
                        <?php 
                        if( have_rows( '_bes_dropdown_list' ) ) {
                           while( have_rows( '_bes_dropdown_list' ) ) {
                              the_row();
                              ?>
                              <span class="toggle-titles no-hide">
                                 <?php echo get_sub_field( '_bes_ddl_title' ); ?>
                              </span>
                                 <div class="full-content">
                                    <?php echo get_sub_field( '_bes_ddl_content' ); ?>
                                 </div>
                              <?php
                           }
                        }
                        ?>
                     </div>
                  </div><!-- End of List Holder -->
               </div>
            </div>
         </div>
      </div>
   </section>
</main>
<?php
get_footer();