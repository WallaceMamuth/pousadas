(function ($) {
	
	"use strict";

	// Page loading animation
	$(window).on('load', function() {

        $('#js-preloader').addClass('loaded');

    });

	// WOW JS
	$(window).on ('load', function (){
        if ($(".wow").length) { 
            var wow = new WOW ({
                boxClass:     'wow',      // Animated element css class (default is wow)
                animateClass: 'animated', // Animation css class (default is animated)
                offset:       20,         // Distance to the element when triggering the animation (default is 0)
                mobile:       true,       // Trigger animations on mobile devices (default is true)
                live:         true,       // Act on asynchronously loaded content (default is true)
            });
            wow.init();
        }
    });

	$(window).scroll(function() {
	  var scroll = $(window).scrollTop();
	  var box = $('.header-text').height();
	  var header = $('header').height();

	  if (scroll >= box - header) {
	    $("header").addClass("background-header");
	  } else {
	    $("header").removeClass("background-header");
	  }
	});
	
	$('.filters ul li').click(function(){
        $('.filters ul li').removeClass('active');
        $(this).addClass('active');
          
          var data = $(this).attr('data-filter');
          $grid.isotope({
            filter: data
          })
        });

        var $grid = $(".grid").isotope({
          	itemSelector: ".all",
          	percentPosition: true,
          	masonry: {
            columnWidth: ".all"
        }
    })

	$(document).on("click", ".naccs .menu div", function() {
		var numberIndex = $(this).index();
	
		if (!$(this).is("active")) {
			$(".naccs .menu div").removeClass("active");
			$(".naccs ul li").removeClass("active");
	
			$(this).addClass("active");
			$(".naccs ul").find("li:eq(" + numberIndex + ")").addClass("active");
	
			var listItemHeight = $(".naccs ul")
				.find("li:eq(" + numberIndex + ")")
				.innerHeight();
			$(".naccs ul").height(listItemHeight + "px");
		}
	});

	$('.owl-cites-town').owlCarousel({
		items:4,
		loop:true,
		dots: false,
		nav: true,
		autoplay: true,
		margin:30,
		responsive:{
			  0:{
				  items:1
			  },
			  800:{
				  items:2
			  },
			  1000:{
				  items:4
			}
		}
	})

	$('.owl-weekly-offers').owlCarousel({
		items:3,
		loop:true,
		dots: false,
		nav: true,
		autoplay: true,
		margin:15,
		responsive:{
			  0:{
				  items:1
			  },
			  800:{
				  items:2
			  },
			  1000:{
				  items:3
			}
		}
	})

	$('.owl-banner').owlCarousel({
		items:1,
		loop:true,
		dots: false,
		nav: true,
		autoplay: true,
		margin:30,
		responsive:{
			  0:{
				  items:1
			  },
			  600:{
				  items:1
			  },
			  1000:{
				  items:1
			}
		}
	})

	
	
	

	// Menu Dropdown Toggle
	if($('.menu-trigger').length){
		const $menuTrigger = $('.menu-trigger');
		const $mobileNav = $('.header-area .nav');
		const $mobileBackdrop = $('.mobile-nav-backdrop');
		const $menuLabel = $menuTrigger.find('.menu-trigger__label');

		const openMobileNav = () => {
			$menuTrigger.addClass('active')
				.attr('aria-expanded', 'true')
				.attr('aria-label', 'Fechar menu de navegação');
			$menuLabel.text('Fechar');
			$('body').addClass('nav-open');
			
			// Calcula a posição correta do menu baseado no header
			if ($(window).width() < 992) {
				// Usa requestAnimationFrame para garantir que o cálculo seja feito após o layout
				requestAnimationFrame(function() {
					var $header = $('.header-area');
					var headerHeight = $header.outerHeight(true);
					var scrollTop = $(window).scrollTop();
					
					// Calcula a posição do header em relação à viewport
					var headerRect = $header[0].getBoundingClientRect();
					var headerTopFromViewport = headerRect.top;
					
					// Posição do menu = posição do header + altura do header + espaçamento
					var menuTop = headerTopFromViewport + headerHeight + 12;
					
					// Garante que o menu não fique acima da viewport
					if (menuTop < 0) {
						menuTop = 12;
					}
					
					$mobileNav.css({
						'top': menuTop + 'px',
						'position': 'fixed',
						'left': '16px',
						'right': '16px',
						'width': 'calc(100% - 32px)'
					});
					
					// Força o slideDown após definir a posição
					$mobileNav.stop(true, true).slideDown(220);
				});
			} else {
				$mobileNav.stop(true, true).slideDown(220);
			}
			
			if ($mobileBackdrop.length) {
				$mobileBackdrop.stop(true, true).fadeIn(180);
			}
		};

		const closeMobileNav = (options = {}) => {
			if (!$menuTrigger.hasClass('active') && !options.force) {
				return;
			}

			$menuTrigger.removeClass('active')
				.attr('aria-expanded', 'false')
				.attr('aria-label', 'Abrir menu de navegação');
			$menuLabel.text('Menu');
			$('body').removeClass('nav-open');

			if (options.instant) {
				$mobileNav.stop(true, true).removeAttr('style');
				if ($mobileBackdrop.length) {
					$mobileBackdrop.stop(true, true).hide();
				}
				return;
			}

			$mobileNav.stop(true, true).slideUp(200, function() {
				if ($(window).width() >= 992) {
					$(this).removeAttr('style');
				}
			});

			if ($mobileBackdrop.length) {
				$mobileBackdrop.stop(true, true).fadeOut(160);
			}
		};

		$menuTrigger.on('click', function() {
			if ($menuTrigger.hasClass('active')) {
				closeMobileNav();
			} else {
				openMobileNav();
			}
		});

		$mobileBackdrop.on('click', function() {
			closeMobileNav();
		});

		$('.header-area .nav a').on('click', function() {
			if ($(window).width() < 992) {
				closeMobileNav();
			}
		});

		$(window).on('resize', function() {
			if ($(this).width() >= 992) {
				closeMobileNav({ instant: true, force: true });
				$mobileNav.removeAttr('style');
			} else if (!$menuTrigger.hasClass('active')) {
				$mobileNav.removeAttr('style');
			} else if ($menuTrigger.hasClass('active')) {
				// Recalcula posição ao redimensionar
				requestAnimationFrame(function() {
					var $header = $('.header-area');
					var headerHeight = $header.outerHeight(true);
					var headerRect = $header[0].getBoundingClientRect();
					var headerTopFromViewport = headerRect.top;
					var menuTop = headerTopFromViewport + headerHeight + 12;
					
					if (menuTop < 0) {
						menuTop = 12;
					}
					
					$mobileNav.css({
						'top': menuTop + 'px',
						'position': 'fixed',
						'left': '16px',
						'right': '16px',
						'width': 'calc(100% - 32px)'
					});
				});
			}
		});
		
		// Recalcula posição do menu ao scrollar quando aberto
		$(window).on('scroll', function() {
			if ($menuTrigger.hasClass('active') && $(window).width() < 992) {
				requestAnimationFrame(function() {
					var $header = $('.header-area');
					var headerHeight = $header.outerHeight(true);
					var headerRect = $header[0].getBoundingClientRect();
					var headerTopFromViewport = headerRect.top;
					var menuTop = headerTopFromViewport + headerHeight + 12;
					
					if (menuTop < 0) {
						menuTop = 12;
					}
					
					$mobileNav.css({
						'top': menuTop + 'px',
						'position': 'fixed',
						'left': '16px',
						'right': '16px',
						'width': 'calc(100% - 32px)'
					});
				});
			}
		});
	}


	// Menu elevator animation
	$('.scroll-to-section a[href*=\\#]:not([href=\\#])').on('click', function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				var width = $(window).width();
				if(width < 991 && $('.menu-trigger').hasClass('active')) {
					$('.menu-trigger').trigger('click');
				}				
				$('html,body').animate({
					scrollTop: (target.offset().top) - 80
				}, 700);
				return false;
			}
		}
	});

	$(document).ready(function () {
	    $(document).on("scroll", onScroll);
	    
	    //smoothscroll
	    $('.scroll-to-section a[href^="#"]').on('click', function (e) {
	        e.preventDefault();
	        $(document).off("scroll");
	        
	        $('.scroll-to-section a').each(function () {
	            $(this).removeClass('active');
	        })
	        $(this).addClass('active');
	      
	        var target = this.hash,
	        menu = target;
	       	var target = $(this.hash);
	        $('html, body').stop().animate({
	            scrollTop: (target.offset().top) - 79
	        }, 500, 'swing', function () {
	            window.location.hash = target;
	            $(document).on("scroll", onScroll);
	        });
	    });
	});

	function onScroll(event){
	    var scrollPos = $(document).scrollTop();
	    $('.nav a').each(function () {
	        var currLink = $(this);
	        var refElement = $(currLink.attr("href"));
	        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
	            $('.nav ul li a').removeClass("active");
	            currLink.addClass("active");
	        }
	        else{
	            currLink.removeClass("active");
	        }
	    });
	}


	// Page loading animation
	$(window).on('load', function() {
		if($('.cover').length){
			$('.cover').parallax({
				imageSrc: $('.cover').data('image'),
				zIndex: '1'
			});
		}

		$("#preloader").animate({
			'opacity': '0'
		}, 600, function(){
			setTimeout(function(){
				$("#preloader").css("visibility", "hidden").fadeOut();
			}, 300);
		});
	});

	

	const dropdownOpener = $('.main-nav ul.nav .has-sub > a');

    // Open/Close Submenus
    if (dropdownOpener.length) {
        dropdownOpener.each(function () {
            var _this = $(this);

            _this.on('tap click', function (e) {
                var thisItemParent = _this.parent('li'),
                    thisItemParentSiblingsWithDrop = thisItemParent.siblings('.has-sub');

                if (thisItemParent.hasClass('has-sub')) {
                    var submenu = thisItemParent.find('> ul.sub-menu');

                    if (submenu.is(':visible')) {
                        submenu.slideUp(450, 'easeInOutQuad');
                        thisItemParent.removeClass('is-open-sub');
                    } else {
                        thisItemParent.addClass('is-open-sub');

                        if (thisItemParentSiblingsWithDrop.length === 0) {
                            thisItemParent.find('.sub-menu').slideUp(400, 'easeInOutQuad', function () {
                                submenu.slideDown(250, 'easeInOutQuad');
                            });
                        } else {
                            thisItemParent.siblings().removeClass('is-open-sub').find('.sub-menu').slideUp(250, 'easeInOutQuad', function () {
                                submenu.slideDown(250, 'easeInOutQuad');
                            });
                        }
                    }
                }

                e.preventDefault();
            });
        });
    }


	


})(window.jQuery);