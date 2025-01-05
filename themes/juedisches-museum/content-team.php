<div class="teams">
    <?php 
    if( have_rows( '_genacc_team' ) ) {
        ?>
        <div class="accord-team-holder">
            <?php
            while( have_rows( '_genacc_team' ) ) {
                the_row();
                ?>
               <div class="accord-team-item">
                  <?php
                  $image = get_sub_field( '_gat_img' );
                  if( $image ) {
                     ?>
                     <div class="team-img-holder">
                        <img src="<?php echo esc_url( $image['url'] ) ?>" alt="<?php echo esc_attr( $image['alt'] ) ?>">
                     </div>
                     <?php
                  } // endif $iamge
                  ?>
                  <div class="text-holder">
                     <h3 class="designation"><?php echo get_sub_field( '_gta_designation' ); ?></h3>
                     <span class="name d-block"><?php echo get_sub_field( '_gat_name' );  ?></span> 
                     <a href="to:" class="mail d-inline-block"><?php echo get_sub_field( '_gta_mail' );  ?></a> 
                     <div class="bio-content-wrapper">
                        <h4 class="open-bio-title title"><?php _e( 'Biografie', 'juedisches-museum' ); ?></h4>
                        <div class="bio-content">
                           <p><?php echo get_sub_field( '_gta_biography' ); ?></p>
                        </div>
                     </div>
                  </div><!-- End of Text Holder -->
               </div><!-- End of Team Item -->
               <?php
            } // endwhile _genacc_team
            ?>
        </div><!-- End of Team Holder -->
      
        <?php
    } // endif _genacc_team
    ?>
</div>