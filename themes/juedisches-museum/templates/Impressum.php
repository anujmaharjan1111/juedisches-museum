<?php
/**
 * Template Name: Impressum
*/
get_header();
?>
<main class="site-main">
   <section class="impressum-section">
      <div class="container">
         <h1 class="sub-title"><?php the_title(); ?></h1>
         <div class="content d-flex flex-wrap">
            <div class="left">
               <?php echo get_field( '_imp_additional_content_left' ); ?>
            </div>
            <div class="right">
               <?php echo get_field( '_imp_additional_content' ); ?>
            </div>
         </div>
      </div>
   </section>
</main>
<?php
get_footer();