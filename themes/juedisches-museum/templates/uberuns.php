<?php
/**
 * Template Name: Uber uns 
 */
get_header(); ?>
    <main class="site-main">
        <section class="uber-section">
            <div class="container">
                <h1 class="sub-title text-center"><?php the_title(); ?></h1>
                <?php
                $open_initially = get_field( '_basic_acc_open_first' ) ? get_field( '_basic_acc_open_first' ) : 0;
                // loop throught the accordions
                if( have_rows( '_basic_accordions' ) ) {
                    ?>
                    <div class="accordion">
                        <?php 
                        while( have_rows( '_basic_accordions' ) ) {
                           the_row();
                           $row_index = get_row_index();
                           $type = get_sub_field( '_accordion_type' );
                           $cap_pos = ( 'right' == get_sub_field( '_right_image_cap_pos' ) ) ? 'has-rcap-limg' : '';

                           if( $open_initially && ( $open_initially == $row_index ) ) {
                              $icon_class = 'icon-open';
                              $style = 'style="display:block;"';
                           } else {
                              $icon_class = '';
                              $style = '';
                           }
                           ?>
                           <div class="accordion-item has-nested-lr-content acc-type-<?php echo $type; ?> <?php echo esc_attr( $cap_pos ); ?> <?php echo esc_html( $icon_class ); ?>">
                              <div class="content-wrapper">
                                 <!-- Accordion Header -->
                                 <div class="accordion-head">
                                    <div class="text-wrapper">
                                       <h4 class="sub-title"><?php echo get_sub_field( '_genacc_title' ); ?></h4>
                                    </div>
                                 </div> 
                                 <!-- Accordion Content -->
                                 <div class="accordion-content" <?php echo $style; ?>>
                                    <div class="main-content">
                                       <?php get_template_part( 'template-parts/content-accordion/content', $type ); ?>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <?php
                        } // endwhile _basic_accordions
                        ?>
                    </div>
                    <?php
                } // endif _basic_accordions
                ?>
            </div>
        </section>
    </main>
<?php get_footer(); 