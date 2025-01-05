<div class="cl-imgr-holder">
   <div class="cl-holder">
      <?php echo get_sub_field( '_grimgacc_content' ); ?>
   </div>
   <div class="imgr-holder">
      <div class="img-profile-wraper">
         <div class="img-wrap">
            <?php
            $img = get_sub_field( '_grimgacc_right_image' );
            if( $img ) {
               ?>
               <img src="<?php echo esc_url( $img['url'] ); ?>" alt="<?php echo esc_attr( $img['alt'] ); ?>">
               <?php
            }
            ?>
         </div>
         <?php
         $pos = get_sub_field( '_right_image_cap_pos' );
         if( $img ) {
            if( 'right' == $pos ) {
               ?>
               <div class="author">
                 <?php echo $img['description']; ?>
               </div>
               <?php
            } else {
               ?>
               <div class="img-caption text-center">
                  <p><?php echo $img['description']; ?></p>
               </div>
               <?php
            }
         }
         ?>
      </div>
   </div>
</div>