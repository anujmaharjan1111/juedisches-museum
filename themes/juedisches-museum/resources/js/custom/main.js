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
		const slideWrappers = document.querySelectorAll('.slider-wrapper');
		slideWrappers.forEach((slideWrapper) => {
			const postSlider = slideWrapper.querySelector('.post-single-slider');
			const postCaption = slideWrapper.querySelector('.single-slider-cap');
			
			if ((postSlider)) {
				$(postSlider).slick({
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
					asNavFor: postCaption,
					arrows: false,
					nav: false,
				});
			}

			if ((postCaption)) {
				$(postCaption).slick({
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
					asNavFor: postSlider,
					arrows: true,
					nav: false,
					adaptiveHeight: true,
					fade: true,
					// cssEase: 'linear'
				});
			}
		});
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
			} else {
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
			if (!$('body').hasClass('page-template-engagement')) {
				VideoController();
			}
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
			} else {
				$(this).next().slideUp();
			}

			var headerHeight = $('#masthead').outerHeight() + 18;
			setTimeout(() => {
				$('body, html').animate({
					scrollTop: $(this).offset().top - headerHeight
				}, 500)
			}, 400)

		});

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

		$('.single-post-popup').magnificPopup({
			type: 'image',
			delegate: 'a',
			closeBtnInside: true,
			closeOnBgClick: true,
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

	$(window).load(function () {
		// executes when complete page is fully loaded
		toggleClearFilterButton();
	});

	$(".collection-search-form .filter-input").on("change", function () {
		toggleClearFilterButton();
	});

	function toggleClearFilterButton() { //toggle clear filter button if any of the input field has value set
		$(".collection-search-form #clear-filter-btn").hide();
		$(".collection-search-form .filter-input").each(function () {
			if ($(this).attr('type') == "checkbox") {
				if ($(this).is(':checked')) {
					$(".collection-search-form #clear-filter-btn").show();
				}
			} else {
				if ($(this).val() != "") {
					$(".collection-search-form #clear-filter-btn").show();
				}
			}
		});
	}

	$(".collection-search-form #clear-filter-btn").on("click", function () {
		$(".collection-search-form .filter-input").val("");
		selected_material = [];
		selected_medium = [];
		selected_theme = [];
		updateChecklist("material", $(".material-check .select-toggle"), selected_material);
		updateChecklist("medium", $(".medium-check .select-toggle"), selected_medium);
		updateChecklist("themengebiet", $(".themengebiet-check .select-toggle"), selected_theme);
		$(".collection-search-form #clear-filter-btn").hide();
		// $(".collection-search-form input[name='suche']").val("");
		// $(".collection-search-form input[name='from']").val("");
		// $(".collection-search-form input[name='until']").val("");
	});

	multiCheckboxSubmit();


	// console.log(jm_object);
	var selected_material = [], selected_medium = [], selected_theme = []; //initiation of the variables to store/track the previous states of selections
	//on page load set all the checkboxes as unchecked
	// $('input[name="material[]"]').prop('checked', false);
	// $('input[name="medium[]"]').prop('checked', false);
	// $('input[name="themengebiet[]"]').prop('checked', false);
	if ($.isEmptyObject(jm_object.selected_material)) { // on page reload, set the selected materials based on previous form submit
		selected_material = [];
	} else {
		$.each(jm_object.selected_material, function (index, item) {
			selected_material.push($('input[value="' + item + '"]'));
			updateChecklist("material", $(".material-check .select-toggle"), selected_material);
			setCheckboxLabel("material");
		});
	}
	if ($.isEmptyObject(jm_object.selected_medium)) { // on page reload, set the selected mediums based on previous form submit
		selected_medium = [];
	} else {
		$.each(jm_object.selected_medium, function (index, item) {
			selected_medium.push($('input[value="' + item + '"]'));
			updateChecklist("medium", $(".medium-check .select-toggle"), selected_medium);
			setCheckboxLabel("medium");
		});
	}
	if ($.isEmptyObject(jm_object.selected_theme)) { // on page reload, set the selected themes based on previous form submit
		selected_theme = [];
	} else {
		$.each(jm_object.selected_theme, function (index, item) {
			selected_theme.push($('input[value="' + item + '"]'));
			updateChecklist("themengebiet", $(".themengebiet-check .select-toggle"), selected_theme);
			setCheckboxLabel("themengebiet");
		});
	}

	$(".filter-inner-wrapper .check-list").find(".submit-btn").on("click", function () { //when clicked save button is clicked, do the following actions
		if ($(this).parents('.check-type').hasClass('submitable')) { // check if the save button is active
			$(this).parents('.check-list').slideToggle(); //hide the checklist
			$(this).parents('.check-type').toggleClass('opened-select').toggleClass("submitable"); //add/remove class submitable
			var checked_materials = $('input[name="material[]"]:checked'); // all selected materials in checklist
			if (checked_materials.length > 0) { //if selected list is not empty save the selected state list
				selected_material = checked_materials;
			} else {
				selected_material = []; //if selected list is empty save the selected state as empty array
			}
			var checked_mediums = $('input[name="medium[]"]:checked'); // all selected mediums in checklist
			if (checked_mediums.length > 0) {
				selected_medium = checked_mediums;
			} else {
				selected_medium = [];
			}
			var checked_themes = $('input[name="themengebiet[]"]:checked'); // all selected themengebiets in checklist
			if (checked_themes.length > 0) {
				selected_theme = checked_themes;
			} else {
				selected_theme = [];
			}
			setCheckboxLabel("material");
			setCheckboxLabel("medium");
			setCheckboxLabel("themengebiet");
		}
		console.log(selected_material);
	});

	/* ===========================================
	  /* ===========================================
		# Multi check box submit
	=====================================*/
	function multiCheckboxSubmit() {
		$('.check-type .select-toggle').on('click', function () { //on click of toggle button (close button or extension button), do following
			$(".filter-cols.check-type").removeClass('submitable'); //on toggle(hide/show) of the checklist, set the buttons to un submitable
			$(this).next().slideToggle();  //hide or show of checklists (on slide down or slide up)
			$(this).parents('.check-type').toggleClass('opened-select'); //toggle the class 'opened-select'
			updateChecklist("material", $(this), selected_material); //update the checklist accordingly based on the current state variable selected_material
			updateChecklist("medium", $(this), selected_medium);
			updateChecklist("themengebiet", $(this), selected_theme);
			toggleClearFilterButton();
		});


		//________Input material
		$('input[name="material[]"]').on('change', function (e) { //on change in check boxes, activate the save button
			$(this).parents('.check-type').addClass('submitable');
		});


		//________Input material
		$('input[name="medium[]"]').on('change', function (e) {
			$(this).parents('.check-type').addClass('submitable');
		});

		//________Input material
		$('input[name="themengebiet[]"]').on('change', function (e) {
			$(this).parents('.check-type').addClass('submitable');
		});
	}

	function setCheckboxLabel(element_key) { // set to show/display the selected options from the check list
		var selected = $('input[name="' + element_key + '[]"]:checked');
		if (typeof selected !== 'undefined' && selected.length > 0) {
			var checklist_label_text = $(selected[0]).next("span").html();
			if (selected.length == 1) { // if single option is selected, just show the selected one.
				$(".check-title." + element_key + "-title").html(checklist_label_text);
			} else { // if multiple options are selected.
				$(".check-title." + element_key + "-title").html(checklist_label_text + "(+" + parseInt(selected.length - 1) + ")");
			}
		} else { // if no option is selected
			$(".check-title." + element_key + "-title").html($(".check-title." + element_key + "-title").attr("data-label"));
		}
	}

	function updateChecklist(element_key, current, selected_items) { //update the selected checklist based on the the current state inputs
		if (($(current).parents('.check-type').hasClass(element_key + '-check'))) {
			$('input[name="' + element_key + '[]"]').prop('checked', false);
			$.each(selected_items, function (key, value) {
				$(value).prop('checked', true);
			});
			setCheckboxLabel(element_key);
		}
	}


	singleFilteredProductSlider();

	function singleFilteredProductSlider() {
		if (('.filter-prod-slider').length) {
			$('.filter-prod-slider').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: false,
				arrows: true,
				nav: false,
			});
		}

	}

	relatedProductSlider();

	function relatedProductSlider() {
		if ($('.realated-filter-product-slider').length) {
			$('.realated-filter-product-slider').slick({
				slidesToShow: 5.4,
				slidesToScroll: 1,
				infinite: true,
				spaceBetween: 32,
				dots: false,
				arrows: false,
				nav: false,
				responsive: [
					{
						breakpoint: 1200,
						settings: {
							slidesToShow: 4.8,
						}
					},
					{
						breakpoint: 992,
						settings: {
							slidesToShow: 4.2,
						}
					},
					{
						breakpoint: 767,
						settings: {
							slidesToShow: 3.8,
						}
					},
					{
						breakpoint: 567,
						settings: {
							slidesToShow: 2.3,
						}
					},
					{
						breakpoint: 400,
						settings: {
							slidesToShow: 1.7,
						}
					},
				],
			});
		}

		if ($('.realated-filter-product-slider').length < 5) {
			$('.realated-filter-product-slider').addClass('less-than-6');
		}
	}

	zoomPan();

	function zoomPan() {
		$("#panzoom").panzoom({
			$zoomIn: $(".zoom-in"),
			$zoomOut: $(".zoom-out"),
			contain: 'invert',
		});
	}

	//Toggle the download info on single collection page
	$('.toggle-info').on('click', function () {
		$(this).prev('.img-caption').slideToggle();
		$(this).next('.download-text').slideToggle();
		$(this).parent().siblings('.img-caption').find('p').slideToggle();
	});

	// $(".collection-image-downloader").on("click",function(e){ // on click of download link in collection detail page, download/save image
	//     e.preventDefault();
	//     var source_url = $(this).attr('href');
	//     downloadImage(source_url);
	// });
	//
	// // function to download image from external image source
	// async function downloadImage(imageSrc) {
	//     const image = await fetch(imageSrc)
	//     const imageBlog = await image.blob()
	//     const imageURL = URL.createObjectURL(imageBlog)
	//
	//     const link = document.createElement('a')
	//     link.href = imageURL
	//     var src = imageSrc.split('/')
	//     var file = src[src.length - 1]
	//     link.download = file
	//     document.body.appendChild(link)
	//     link.click()
	//     document.body.removeChild(link)
	// }


})(jQuery);