<?php
/**
 * Template Name: veranstaltungen
*/
get_header();
?>
<main class="site-main">
   <section class="veranstaltungen-section">
      <div class="container">
         <h1 class="sub-title text-center"><?php the_title(); ?></h1>
         <!-- Accordion -->
         <?php get_template_part( 'template-parts/content-mixed', 'accordion' ); ?>
      </div>
   </section>
</main>
<?php 
get_footer();