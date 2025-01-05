<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package juedisches-museum
 */

?>
   <div class="to-top">
      <img src="<?php echo get_template_directory_uri(); ?>/images/icons/arrow-top.svg" alt="">
   </div>
	<footer id="colophon" class="site-footer">
      <div class="container">
         <div class="footer-wrapper">
            <div class="row">
               <div class="col-lg-4 col-md-6 col-sm-6 cols">
                  <div class="opening-hours">
                  <?php 
                  // Opening hours
                  if( have_rows( '_jms_opening_hours', 'options' ) ) {
                     while( have_rows( '_jms_opening_hours', 'options' ) ) {
                        the_row();
                        // day range
                        $day_range  = get_sub_field( '_jms_oh_day_range' );
                        // time range
                        $time_range = get_sub_field( '_jms_oh_time_range' );
                        ?>
                           <div class="day-range"><?php echo esc_html( $day_range ); ?></div>
                           <div class="time-range"><?php echo esc_html( $time_range ); ?></div>
                        <?php
                     } // endwhile
                  } // endif
                  ?>
                  </div><!-- .opening-hours -->
                  <div class="address">
                     <?php echo get_field( '_jms_address', 'options' ); ?>
                  </div>
                  <div class="contact-details">
                     <?php 
                     $tel   = get_field( '_jms_contact_number', 'options' ); 
                     $email = get_field( '_jms_email_address', 'options' );
                     ?>
                     <p>T. <a href="tel:<?php echo esc_attr( $tel ); ?>"><?php echo esc_html( $tel ); ?></a></p>
                     <a href="mailto:<?php echo esc_html( $email ); ?>"><?php echo esc_html( $email ); ?></a>
                  </div>
               </div><!-- .col-4 left -->
               <div class="col-lg-4 col-md-6 col-sm-6 cols">
                  <div class="social-media">
                     <?php 
                     if( have_rows( '_jms_social_medias', 'options' ) ) {
                        ?>
                        <ul>
                           <?php
                           while( have_rows( '_jms_social_medias', 'options' ) ) {
                              the_row();
                              $icon = get_sub_field( '_jms_sm_icon' );
                              $link = get_sub_field( '_jms_sm_link' );
                              if( $link ) {
                                 ?>
                                 <li>
                                    <a href="<?php echo esc_attr( $link ); ?>" target="_blank">
                                       <span class="text">
                                          <?php echo $icon; ?>
                                       </span>
                                    </a>
                                 </li>
                                 <?php
                              } // endif link
                           } // end while
                           ?>
                        </ul>
                        <!-- Changed icon to text -->
                        <?php
                     } // endif
                     ?>
                  </div>
                  <div class="site-map">
                     <?php
                     $pages = get_field( '_jms_site_map', 'options' );
                     if( $pages ) {
                        ?>
                        <p class="d-none"><?php echo get_field( '_jms_sm_title', 'options' ); ?></p>
                        <ul>
                        <?php
                        foreach( $pages as $page ) {
                           ?>
                           <li>
                              <a href="<?php echo get_permalink( $page->ID ); ?>"><?php echo $page->post_title; ?></a>
                           </li>
                           <?php
                        } // end foreach
                        ?>
                        </ul>
                        <?php
                     } // endif $pages
                     ?>
                  </div>
                  <div class="copyright">
                     <?php
                     echo sprintf(
                        /* translators: %s: post date. */
                        esc_html_x( '© Jüdisches Museum der Schweiz, %d', 'current year', 'juedisches-museum' ),
                        date('Y')
                     );
                     ?>
                  </div>
               </div><!-- .col-4 left -->
               <div class="col-lg-4 col-md-6 col-sm-8 cols">
                  <?php 
                  $form = get_field( '_jms_subscription_form', 'options' );
                  if( $form ) {
                     echo do_shortcode( '[contact-form-7 id="'.$form->ID.'" title="'.$form->post_title.'"]' );
                  }
                  ?>
               </div><!-- .col-4 left -->
            </div><!-- Row -->
         </div><!-- Footer wrap-->
      </div>
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
