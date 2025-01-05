<?php
/**
 * Template Name: Fuhrungen
*/
get_header();
?>
<main class="site-main">
   <section class="fuhrungen-section">
      <div class="container">
         <h1 class="sub-title text-center"><?php the_title(); ?></h1>
         <!-- Accordion -->
         <?php get_template_part( 'template-parts/content-mixed', 'accordion' ); ?>
      </div>
   </section>
</main> 
<?php 
get_footer();