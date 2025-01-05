<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package juedisches-museum
 */

get_header();
?>

	<main id="primary" class="site-main">
      <section class="blog-listing">
         <div class="container">
		<?php
		if ( have_posts() ) :
			
			if ( is_home() && ! is_front_page() ) :
				?>
				<header>
					<h1 class="page-title"><?php echo get_the_title( get_option( 'page_for_posts', true ) ); ?></h1>	
				</header>
				<?php
			endif;
			?>
			<div class="row">
				<?php
			/* Start the Loop */
			while ( have_posts() ) :
				the_post();
				?>
				<div class="col-lg-4 col-sm-6 cols">
					<?php
				
					/*
					* Include the Post-Type-specific template for the content.
					* If you want to override this in a child theme, then include a file
					* called content-___.php (where ___ is the Post Type name) and that will be used instead.
					*/
					get_template_part( 'template-parts/content', get_post_type() );
					?>
				</div>

				<?php
			endwhile;
			?>
			<div class="cols col-12">
				<?php
				the_posts_pagination();
				?>
			</div>
			<?php

		else :

			get_template_part( 'template-parts/content', 'none' );

		endif;
		?>
			</div>
         </div>
      </section>  
	</main><!-- #main -->

<?php
get_footer();
