(function ($) {

   /*============================================
      # Calling Functions
   ===========================================*/
   navMenu();
   animationRemoveClass();
   toTheTop();
   popUpImage();
   singleSlider();
   readMoreToggle();
   accordionToggle();
   nestedShowHide();
   listLrImgContentToggle();
   teamContentBioDeskToggle();
   teamContentBioMbToggle();
   fullContentImgToggle();


   var COMMON = {
      init: function () {
         this.cacheDOM();

         $(window).on('resize', this.reCalcOnResize.bind(this))
      },
      cacheDOM: function () {
         this.$body = $('body');
         this.windowWidth = $(window).width();
      },
      reCalcOnResize: function () {
         this.windowWidth = $(window).width();
      }
   };

   var mainNavigation = {
      init: function () {
         this.$mainNavContainer = $('#site-navigation');
         this.$menuToggler = this.$mainNavContainer.find('.menu-toggle');
         this.$mainMenuContainer = this.$mainNavContainer.find('.menu-primary-container');
         this.$mainMenu = this.$mainNavContainer.find('#primary-menu');
         this.$menuToggler.on('click', this.toggleMenu.bind(this));
      },
      toggleMenu: function (e) {
         e.preventDefault();
         this.$mainMenuContainer.toggleClass('shown');
      }
   };

   // product filter
   var proFilter = {
      init: function () {
         this.cacheDOM();
         this.eventListner();
      },
      cacheDOM: function () {
         this.$option = $('li.option');
         // this.
      },
      eventListner: function () {
         this.$option.on('click', this.filter.bind(this));
      },
      filter: function (ev) {
         var cOption = ev.currentTarget,
            cat = $(cOption).attr('data-filter');
         $(cOption).addClass('active').siblings().removeClass('active');
         $.ajax({
            method: 'POST',
            url: JUESM.ajaxurl,
            data: {
               action: 'jm_product_filter',
               catID: cat
            },
            beforeSend: function () {
               // $('.result-wrapper').find('.column-counter').html('<p class="load">Loading...</p>');
               $('.result-wrapper').html('<p class="load">Loading...</p>');
            },
            success: function (response) {
               $('.result-wrapper').html(response.contents);
               // add the result count
               var count = 'result-' + response.result_count;
               $('.result-wrapper').attr('id', count);
            }
         });
      }
   };

   $(function () {
      COMMON.init();
      mainNavigation.init();
      proFilter.init();
   });

   /*============================================ 
      # Nav Menu 
   ===========================================*/
   function navMenu() {
      $('.menu-toggle').on('click', function () {
         $(this).toggleClass('active');
         $('body').toggleClass('open-nav');
      });
   }

   /*============================================ 
        # Single Post Slider
   ===========================================*/
   function singleSlider() {
      if (('.post-single-slider').length) {
         $('.post-single-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            asNavFor: '.single-slider-cap',
            arrows: false,
            nav: false,
         });
      }

      if (('.single-slider-cap').length) {
         $('.single-slider-cap').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            asNavFor: '.post-single-slider',
            arrows: true,
            nav: false,
            adaptiveHeight: true,
            fade: true,
            // cssEase: 'linear'
         });
      }

   }


   /*============================================
        # Readmore Toggle Content
   ===========================================*/
   function readMoreToggle() {
      $('.read-more-list .read-more').on('click', function () {

         $(this).parents('.list-item').toggleClass('read-open');

         $('.read-more-list .list-item').not($(this).parents('.list-item')).removeClass('read-open');

         $('.read-more-list .main-content').slideUp();
         if ($(this).prev().is(':hidden')) {
            $(this).prev().slideDown();
            $(this).parents('.list-content').find('.post-single-slider, .single-slider-cap').slick("refresh");
         }
         else {
            $(this).prev().slideUp();
         }

         var headerHeight = $('#masthead').outerHeight() + 18;
         $this = $(this).parents().find('.list-item.read-open');
         setTimeout(() => {
            $('body, html').animate({
               scrollTop: $this.offset().top - headerHeight
            }, 500)
         }, 400)


      });

   }


   /*============================================
         # Accordion
  ===========================================*/
   function accordionToggle() {

      $('.accordion .accordion-head').on('click', function () {
         VideoController();
         $('.accordion .accordion-content').slideUp();

         $(this).parent().parent().toggleClass('icon-open');
         $('.accordion-item').not($(this).parent().parent()).removeClass('icon-open');

         // if (window.matchMedia('(min-width: 991px)').matches) {
         //    //Right Content Align with title
         //    var accordHeadheight = $(this).children('.text-wrapper').outerHeight();
         //    var accordTotalHeight = accordHeadheight - 20;
         //    $(this).parents('.accordion-item').find('.accordion-content').css('margin-top', - accordTotalHeight);
         // }

         if ($(this).next().is(':hidden')) {
            $(this).next().slideDown();
            //Slick Refrsh
            $(this).next().find('.post-single-slider, .single-slider-cap').slick("refresh");
         }
         else {
            $(this).next().slideUp();
         }

         var headerHeight = $('#masthead').outerHeight() + 18;
         setTimeout(() => {
            $('body, html').animate({
               scrollTop: $(this).offset().top - headerHeight
            }, 500)
         }, 400)

      });
   }

   /*============================================
         # Common nested content Toggle 
   ===========================================*/
   function nestedShowHide() {
      $('.toggle-title').on('click', function () {
         $(this).next().slideToggle();
         $(this).toggleClass('shown');
      });

      $('.read-more').on('click', function (e) {

         $(this).closest('.mb-explandable-nested-title').next().slideDown();
         $(this).addClass('opened-readmore');
         $('.read-more').not($(this)).closest('.mb-explandable-nested-title').next().slideUp();
         $('.read-more').not($(this)).removeClass('opened-readmore');

         $thisReadMore = $(this).closest(".page-template-fuhrungen .nested-lr-wrap");

         var headerHeight = $('#masthead').outerHeight() + 8;
         setTimeout(() => {
            $('body, html').animate({
               scrollTop: $thisReadMore.offset().top - headerHeight
            }, 500)
         }, 400)


      });

      $(window).on('resize load', function () {
         if (window.matchMedia('(min-width: 767px)').matches) {
            $('.page-template-fuhrungen .accordion .nested-lr-wrap .mb-explandable-nested-content').css('display', 'block');
         }
         if (window.matchMedia('(max-width: 767px)').matches) {
            $('.page-template-fuhrungen .accordion .nested-lr-wrap .mb-explandable-nested-content').css('display', 'none');
         }
      });
   }


   /*============================================
         # List Toggle
   ===========================================*/
   function listLrImgContentToggle() {
      $('.lr-img-cont-holder .title').on('click', function () {
         $(this).next().slideDown();
         $(this).addClass('opened-content');
         $('.lr-img-cont-holder .title').not($(this)).next().slideUp();
         $('.lr-img-cont-holder .title').not($(this)).removeClass('opened-content');
         // $(this).parent().parent().find('.img-holder').addClass('increase-img');
         // $('.lr-img-cont-holder .title').not($(this)).parent().parent().find('.img-holder').removeClass('increase-img');
      });

      $('.lr-img-cont-holder .lr-cont-img-read-more').on('click', function () {
         $(this).prev().slideDown();
         $(this).addClass('opened-content');
      });
   }


   /*============================================
         # Bio Toggle Desktop
   ===========================================*/
   function teamContentBioDeskToggle() {
      $('.accord-team-holder .dk-title, .title-list-holder .toggle-titles').on('click', function () {
         $(this).next().slideDown();
         $(this).addClass('opened-content');
         $('.accord-team-holder .dk-title, .title-list-holder .toggle-titles').not($(this)).next().slideUp();
         $('.accord-team-holder .dk-title, .title-list-holder .toggle-titles').not($(this)).removeClass('opened-content');
      });
   }

   /*============================================
         # Bio Toggle mobile
   ===========================================*/
   function teamContentBioMbToggle() {
      $('.accord-team-holder .mb-title').on('click', function () {
         $(this).siblings('.bio-content-wrapper').children('.bio-content').slideDown();
         console.log('clicked');
         $(this).addClass('opened-content');
         $('.accord-team-holder .mb-title').not($(this)).siblings('.bio-content-wrapper').children('.bio-content').slideUp();
         $('.accord-team-holder .mb-title').not($(this)).removeClass('opened-content');
      });
   }

   /*============================================
         # Full content content Toggle 
===========================================*/
   function fullContentImgToggle() {
      $('.full-cont-rimg .read-more-img').on('click', function () {
         $('.full-cont-rimg .img-n-cap-wrap').fadeIn();
         $('.full-cont-rimg .main-content').slideDown();
         $(this).fadeOut();
      });
   }


   /*============================================
        # Match Height For post content
   ===========================================*/
   $('.blog-listing .post .post-content').matchHeight();

   $('.default-section article.post .entry-header').matchHeight();

   if (window.matchMedia('(min-width: 991px)').matches) {
      $('.product-filter-section .column-counter .content').matchHeight();
   }

   // ready each iframe for JS handler
   function VideoController() {
      var videoIFrame = $('iframe');
      if (videoIFrame.length) {
         videoIFrame.each(function () {
            vSrc = $(this).attr('src');
            if (vSrc.indexOf('youtube') > -1) {
               vSrc = $(this).attr('src', vSrc + '&enablejsapi=1');
               this.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
            }
         });
      }
   }



   /* -----------------------------------------------
      # To the Top
   ---------------------------------------------- */
   function toTheTop() {
      $(window).scroll(function () {
         if ($(this).scrollTop() > 40) {
            $('.to-top').fadeIn();
         } else {
            $('.to-top').fadeOut();
         }
      });

      $('.to-top').click(function () {
         $('html , body').animate({ scrollTop: 0 }, 600);
      });
   }

   function popUpImage() {
      // Maginfic popup
      $('.image-popup').magnificPopup({
         type: 'image',
         closeBtnInside: true,
         easing: 'ease-in-out',
         duration: 300,
      });
   }

   copyRightToggle();
   function copyRightToggle() {
      $('.copyright-toggler').on('click', function () {
         $(this).next().slideToggle();
         $(this).parent().toggleClass('shown');
      });
   }

   $('.page-template-veranstaltungen .accordion .accordion-item .nested-lr-wrap:last-of-type .nested-lr-content a').each(function (i, e) {
      if ($(this).find('img').length) {
         $(this).addClass('has-img');
      }
   });

   function animationRemoveClass() {
      setTimeout(function () {
         $('.site-header .site-branding').addClass('rotate-logo');
      }, 1500);
   }

   samsungLayoutToggle();




})(jQuery);