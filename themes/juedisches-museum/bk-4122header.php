<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package juedisches-museum
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">
   <style>
      @font-face {
         font-family: "Times New Roman";
         src: url("<?php echo get_template_directory_uri(); ?>/fonts/TimesNRMTPro/font.woff2") format("woff2"),
            url("<?php echo get_template_directory_uri(); ?>/fonts/TimesNRMTPro/font.woff") format("woff");
         font-weight: 400;
         font-style: normal;
         font-display: swap;
      }

      @font-face {
         font-family: "Times New Roman";
         src: url("<?php echo get_template_directory_uri(); ?>/fonts/TimesNRMTProItalic/font.woff2") format("woff2"),
            url("<?php echo get_template_directory_uri(); ?>/fonts/TimesNRMTProItalic/font.woff") format("woff");
         font-weight: 400;
         font-style: italic;
         font-display: swap;
      }

      @font-face {
         font-family: "Times New Roman";
         src: url("<?php echo get_template_directory_uri(); ?>/fonts/TimesNRMTProBold/font.woff2") format("woff2"),
            url("<?php echo get_template_directory_uri(); ?>/fonts/TimesNRMTProBold/font.woff") format("woff");
         font-weight: 700;
         font-style: normal;
         font-display: swap;
      }

      @font-face {
         font-family: "Times New Roman";
         src: url("<?php echo get_template_directory_uri(); ?>/fonts/TimesNRMTProBoldItalic/font.woff2") format("woff2"),
            url("<?php echo get_template_directory_uri(); ?>/fonts/TimesNRMTProBoldItalic/font.woff") format("woff");
         font-weight: 700;
         font-style: italic;
         font-display: swap;
      }

   </style>
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e( 'Skip to content', 'juedisches-museum' ); ?></a>

	<header id="masthead" class="site-header">
      <div class="main-header-wrapper">
         <div class="container">
            <div class="header-wrapper">
               <div class="site-branding">
                  <?php
                  the_custom_logo();
                  ?>
                  <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="d-inline-block align-self-center text-logo">
                     <?php echo wp_get_attachment_image( get_field( '_jsm_secondary_logo', 'options' ), 'full' ); ?>
                  </a>
                  <?php
                  if ( is_front_page() && is_home() ) :
                     ?>
                     <h1 class="site-title d-none"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
                     <?php
                  else :
                     ?>
                     <p class="site-title d-none"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></p>
                     <?php
                  endif;
                  $juedisches_museum_description = get_bloginfo( 'description', 'display' );
                  if ( $juedisches_museum_description || is_customize_preview() ) :
                     ?>
                     <p class="site-description"><?php echo $juedisches_museum_description; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?></p>
                  <?php endif; ?>
               </div><!-- .site-branding -->
               <div class="menu-toggle" aria-controls="primary-menu" aria-expanded="false">
                  <span></span>
                  <span></span>
                  <span></span>
               </div>
               <nav id="site-navigation" class="main-navigation">
                  <div class="nav-wrapper">
                     <?php
                     wp_nav_menu(
                        array(
                           'theme_location' => 'menu-1',
                           'menu_id'        => 'primary-menu',
                        )
                     );
                     wp_nav_menu(
                        array(
                           'theme_location' => 'menu-2',
                           'menu_id'        => 'secondary-menu',
                        )
                     );
                     // echo jued_custom_lang_switcher();
                     ?>
                  </div>
               </nav><!-- #site-navigation -->
            </div><!-- #Header - wrapper -->
         </div>
      </div>
	</header><!-- #masthead -->
