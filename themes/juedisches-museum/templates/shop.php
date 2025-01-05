<?php
/**
 * Template Name: Shop
 */
get_header(); ?>
<main class="site-main">
   <section class="shop-section">
      <div class="container">
         <h1 class="sub-title text-center"><?php the_title(); ?></h1>
         <!-- banner -->
         <div class="shop-banner">
            <div class="row-wraper">
               <div class="img-holder">
                  <?php the_post_thumbnail(); ?>
               </div>
               <div class="text-holder">
                  <?php the_content(); ?>
               </div>
            </div>
         </div><!-- shop-banner -->
         <section class="product-filter-section">
            <div class="filter-options">
               <?php
               $product_cats = get_terms( array(
                  'taxonomy' => 'product-categories',
                  'hide_empty' => false,
                  'orderby' => 'term_order'
               ) );
               ?>
               <ul class="options">
                  <?php 
                  if( $product_cats ) {
                     $initial_cat = '';
                     $c = 1;
                     foreach( $product_cats as $cat ) {
                        if( 1 == $c ):
                           $initial_cat = $cat->slug;
                           ?>
                           <li class="option active" data-filter="<?php echo $cat->term_id; ?>"><?php echo $cat->name; ?></li>
                        <?php else: ?>
                           <li class="option" data-filter="<?php echo $cat->term_id; ?>"><?php echo $cat->name; ?></li>
                        <?php endif; ?>
                        <?php
                        $c++;
                     } // endforeach
                  } // endif $product_cats
                  ?>
               </ul>
            </div><!-- Product filter  -->
            <div class="filter-results">
               <?php 
               $paged = ( get_query_var('paged') ) ? get_query_var('paged') : 1;
               
               $args = array(
                  'post_type' => 'products',
                  'post_status' => 'publish',
                        //'category_name' => 'Bucher',
                  'orderby' => 'menu_order',
                  'tax_query' => array(
                    array(
                     'taxonomy' => 'product-categories',
                     'field'    => 'slug',
                     'terms'    => $initial_cat,
                  ),
                 ),
                  'paged' => $paged,
               );

               $products = new WP_Query( $args );
               ?>
               <?php
               if( $products->have_posts() ) {
                  ?>
                  <div id="<?php echo 'result-' . $products->found_posts; ?>" class="result-wrapper">
                     <div class="column-counter">
                        <?php
                        while( $products->have_posts() ) {
                           $products->the_post();
                           ?>
                           <div class="cols">
                              <div class="img-holder">
                                 <a href="<?php the_permalink(); ?>">
                                    <?php the_post_thumbnail(); ?>
                                 </a>
                              </div>
                              <div class="content">
                                 <h3><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
                                 <h3><a href="<?php the_permalink(); ?>"><?php echo get_field( '_pro_subtitle' ); // subtitle ?></a></h3>
                                 <p><?php echo get_field( '_pro_intro_text' ); // intro text ?></p>
                              </div>
                           </div>
                           <?php
                              } //endwhile
                              // the_posts_pagination( $products );
                              wp_reset_postdata();
                              ?>
                           </div>
                        </div>
                        <?php
                     } // endif
                     else {
                        ?>
                        <p class="nothing-found">
                           <?php echo __( 'Leider haben wir keinen passenden Artikel gefunden. Bitte versuchen Sie eine andere Kategorie.', 'juedisches-museum' ); ?>
                        </p>
                        <?php
                     }
                     ?>
                  </div><!-- Product filter result -->
               </section><!-- Product filter section -->
            </div>
         </section><!-- shop-section -->
      </main>
      <?php get_footer();