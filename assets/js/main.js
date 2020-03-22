(function ($) {
    'use strict';

    /*--
        - Common Variables
    ----------------------------------------------------*/
    var $window = $(window),
        $document = $(document),
        $html = $('html'),
        $body = $('body');

    /*==
        ==> Header 
        
            => 1: Sticky
            => 2: Minicart Toggle
            => 3: Search Toggle
            => 4: Off Canvas Toggle
            => 5: Off Canvas Menu
            
    =============================================================================================*/

    /*-- 
        1: Sticky Header
    ----------------------------------------------------*/
    var $header = $('.header'),
        $headerTwo = $('.header-2'),
        $headerHeight = $header.height(),
        $headerSticky = $('.header-sticky');

    function headerSticky() {
        if ($window.scrollTop() >= 200 && $window.width() >= 992 && !$header.hasClass('header-2')) {
            $headerSticky.addClass('is-sticky').css('height', $headerHeight);
        } else if ($window.scrollTop() >= 200 && $window.width() <= 991 && $header.hasClass('header-mobile-sticky') && !$header.hasClass('header-2')) {
            $headerSticky.addClass('is-sticky').css('height', $headerHeight);
        } else if ($headerTwo.length && $window.width() >= 992 && $window.scrollTop() >= $headerTwo.position().top) {
            $headerTwo.addClass('is-sticky').css('height', $headerHeight);
        } else if ($headerTwo.length && $window.scrollTop() >= $headerTwo.position().top && $window.width() <= 991 && $header.hasClass('header-mobile-sticky')) {
            $headerTwo.addClass('is-sticky').css('height', $headerHeight);
        } else {
            $headerSticky.removeClass('is-sticky').css('height', 'auto');
        }
    }

    /*--
        2: Minicart Toggle
    ----------------------------------------------------*/
    var $headerToggleCart = $('.header-toggle-cart');
    $headerToggleCart.on('click', '.toggle', function (e) {
        var $this = $(this),
            $parent = $this.parent();
        if ($this.attr('href') === '#') {
            e.preventDefault();
            if ($parent.hasClass('open-mini-cart')) {
                $parent.removeClass('open-mini-cart');
            } else {
                $parent.addClass('open-mini-cart');
            }
        }
    });
    /*Minicart Close When Click Outside Minicart*/
    $body.on('click', function (e) {
        var $target = e.target;
        if (!$($target).is('.header-toggle-cart') && !$($target).parents().is('.header-toggle-cart') && $('.header-toggle-cart').hasClass('open-mini-cart')) {
            $headerToggleCart.removeClass('open-mini-cart');
        }
    });

    /*--
        3: Search Toggle
    ----------------------------------------------------*/
    /*Search Open*/
    var $headerToggleSearch = $('.header-toggle-search'),
        $searchFormFly = $('.searchform-fly-overlay');
    $headerToggleSearch.on('click', '.toggle', function (e) {
        e.preventDefault();
        if (!$searchFormFly.hasClass('open-search-form')) {
            $searchFormFly.addClass('open-search-form');
        } else {
            $searchFormFly.removeClass('open-search-form');
        }
    });
    /*Search Close*/
    var $searchCloseBtn = $('.btn-close-search');
    $searchCloseBtn.on('click', function (e) {
        e.preventDefault();
        $searchFormFly.removeClass('open-search-form');
    });
    $('.header-toggle-search .toggle').on('click', function () {
        $('.search-field').focus();
    });

    /*--
        4: Off Canvas Toggle
    ----------------------------------------------------*/
    var $offCanvasToggle = $('.header-toggle-off-canvas, .shop-filter-toggle');
    $offCanvasToggle.on('click', '.toggle', function (e) {
        e.preventDefault();
        var $this = $(this),
            $target = $this.attr('href');
        if ($($target).hasClass('off-canvas-open')) {
            $($target).removeClass('off-canvas-open');
        } else {
            $($target).addClass('off-canvas-open');
        }
    });
    /*Off Canvas Close*/
    var $offCanvasClose = $('.btn-close-off-canvas');
    $offCanvasClose.on('click', function (e) {
        e.preventDefault();
        var $this = $(this);
        $this.closest('.off-canvas').removeClass('off-canvas-open');
        /*Close Off Canvas Sub Menu When Off Canvas Get Hide*/
        $offCanvasNavSubMenu.slideUp();
    });


    /*--
        5: Off Canvas Menu + Sidebar Collapse Nav
           (For Sidebar Category & Collapsable Menu)
    ----------------------------------------------------*/
    var $offCanvasNav = $('.off-canvas-nav, .sidebar-collapse-nav'),
        $offCanvasNavSubMenu = $offCanvasNav.find('.sub-menu');

    /*Add Toggle Button With Off Canvas Sub Menu*/
    $offCanvasNavSubMenu.parent().prepend('<span class="menu-expand"><i></i></span>');

    /*Close Off Canvas Sub Menu*/
    $offCanvasNavSubMenu.slideUp();

    /*Category Sub Menu Toggle*/
    $offCanvasNav.on('click', 'li a, li .menu-expand', function (e) {
        var $this = $(this);
        if ($this.parent().attr('class').match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/) || ($this.attr('href') === '#' || $this.hasClass('menu-expand'))) {
            e.preventDefault();
            if ($this.siblings('ul:visible').length) {
                $this.parent('li').removeClass('active');
                $this.siblings('ul').slideUp();
                $this.parent('li').find('li').removeClass('active');
                $this.parent('li').find('ul:visible').slideUp();
            } else {
                $this.parent('li').addClass('active');
                $this.closest('li').siblings('li').removeClass('active').find('li').removeClass('active');
                $this.closest('li').siblings('li').find('ul:visible').slideUp();
                $this.siblings('ul').slideDown();
            }
        }
    });


    /*==
        ==> Shop 
        
            => 1: Product View Mode
            => 2: Product Quantity
            => 3: Product Variation
            => 4: Product Image
            => 5: Checkout
                  > Create Account Toggle
                  > Payment Method Toggle
            
    =============================================================================================*/

    /*--
        1: Product View Mode
    ----------------------------------------------------*/
    var $productViewToggle = $('.product-view-toggle'),
        $product = $('.product');
    $productViewToggle.on('click', 'button', function (e) {
        e.preventDefault();
        var $this = $(this),
            $target = $this.data('view-mode');
        $productViewToggle.find('button').removeClass('active');
        $this.addClass('active');
        $product.removeClass('list grid').addClass($target);
    });

    /*--
        2: Product Quantity
    ----------------------------------------------------*/
    var $qtybtn = $('.qtybtn');
    $qtybtn.on('click', function () {
        var $this = $(this),
            $oldValue = $this.parent().find('input').val();
        if ($this.hasClass('inc')) {
            var $newVal = parseFloat($oldValue) + 1;
        } else {
            if ($oldValue > 1) {
                var $newVal = parseFloat($oldValue) - 1;
            } else {
                $newVal = 1;
            }
        }
        $this.parent().find('input').val($newVal);
    });

    /*--
        3: Product Variation
    ----------------------------------------------------*/
    var $productVariation = $('.product-variations');
    $productVariation.on('click', '.variation a', function (e) {
        e.preventDefault();
        var $this = $(this);
        $this.closest('.variation').find('li').removeClass('active');
        $this.parent('li').addClass('active');
    });

    /*--
        4: Product Image (For Single Product 
           Big & Thumbnail Image Click Function)
    ----------------------------------------------------*/
    var $productBigImage = $('.product-big-image'),
        $productThumbnail = $('.product-thumbnail');
    $productThumbnail.on('click', 'a', function (e) {
        e.preventDefault();
        var $this = $(this),
            $index = $this.data('index');
        $productThumbnail.find('a').removeClass('active');
        $this.addClass('active');
        $productBigImage.find('a').removeClass('active');
        $productBigImage.find('a[data-index="' + $index + '"]').addClass('active');
    });

    /*--
        5: Checkout
    ----------------------------------------------------*/
    /*Create Account Toggle*/
    $('#create_account').on('click', function () {
        if ($('#create_account:checked').length > 0) {
            $('.create-account').slideDown();
        } else {
            $('.create-account').slideUp();
        }
    });
    /*Payment Method Toggle*/
    $('.checkout-payment-method input[type="radio"]:checked ~ p').slideDown();
    $('.checkout-payment-method').on('click', 'input[type="radio"]', function () {
        var $this = $(this);
        if ($this.is(':checked')) {
            $this.parent('.radio').siblings().find('p').slideUp();
            $this.siblings('p').slideDown();
        } else {
            $this.siblings('p').slideUp();
        }
    });


    /*==
        ==> Other (Custom Functions) 
        
            => 1: Background Image
            => 2: Timeline
            => 3: Accordion Function
            => 4: Skill/Progress Bar Animation
            => 5: Ajax Contact Form 
            => 6: Scroll To Top
            => 7: Preloader
            => 8: Smooth Scroll
            
    =============================================================================================*/

    /*--
        1: Background Image
    ----------------------------------------------------*/
    var $backgroundImage = $('.bg-image');
    $backgroundImage.each(function () {
        var $this = $(this),
            $bgImage = $this.data('bg');
        $this.css('background-image', 'url(' + $bgImage + ')');
    });

    /*--
        2: Timeline
    ----------------------------------------------------*/
    function timeLine() {
        /*Timeline Slider*/
        var $timelineSlider = $('.timeline-slider');
        $timelineSlider.each(function () {
            var $this = $(this),
                $thisHeight = $this.outerHeight();
            $this.find('.slick-slide:nth-child(2n)').css('margin-top', $thisHeight);
            $this.find('.slick-slide .timeline-block').css('height', $thisHeight);
        });
    }

    /*--
        3: Accordion Function (Add or Remove 
           Open Class to Accordion Card)
    ----------------------------------------------------*/
    $('[data-toggle="collapse"]').closest('.card').addClass('open');
    $('.collapsed[data-toggle="collapse"]').closest('.card').removeClass('open');

    $('[data-toggle="collapse"]').on('click', function () {
        var $this = $(this),
            $thisCard = $this.closest('.card');
        if ($this.hasClass('collapsed') && $thisCard.parent().hasClass('collapsable')) {
            $thisCard.addClass('open');
        } else if ($this.hasClass('collapsed') && !$thisCard.parent().hasClass('collapsable')) {
            $thisCard.siblings().removeClass('open');
            $thisCard.addClass('open');
        } else {
            $thisCard.removeClass('open');
        }
    });

    /*--
        4: Skill/Progress Bar Animation
           (Using Third Party Waypoint Plugin)
    ----------------------------------------------------*/
    var $skill = $('.skill');
    $skill.each(function () {
        var $this = $(this),
            $value = $this.data('value'),
            $units = $this.find('.units'),
            $bar = $this.find('.bar');
        $this.waypoint(function () {
            $units.html($value + '%').css({
                'left': $value + '%',
                'opacity': 1,
            });
            $bar.css({
                'width': $value + '%',
                'opacity': 1,
            });
        }, {
            offset: '100%'
        });
    });

    /*--
        5: Ajax Contact Form 
    ----------------------------------------------------*/
    $(function () {
        // Get the form.
        var form = $('#contact-form');
        // Get the messages div.
        var formMessages = $('.form-message');
        // Set up an event listener for the contact form.
        $(form).submit(function (e) {
            // Stop the browser from submitting the form.
            e.preventDefault();
            // Serialize the form data.
            var formData = $(form).serialize();
            // Submit the form using AJAX.
            $.ajax({
                    type: 'POST',
                    url: $(form).attr('action'),
                    data: formData
                })
                .done(function (response) {
                    // Make sure that the formMessages div has the 'success' class.
                    formMessages.removeClass('error').addClass('success');
                    // Set the message text.
                    formMessages.text(response);
                    // Clear the form.
                    $('#contact-form input:not([type=submit]), #contact-form textarea').val('');
                })
                .fail(function (data) {
                    // Make sure that the formMessages div has the 'error' class.
                    formMessages.removeClass('success').addClass('error');
                    // Set the message text.
                    if (data.responseText !== '') {
                        formMessages.text(data.responseText);
                    } else {
                        formMessages.text('Oops! An error occured and your message could not be sent.');
                    }
                });
        });
    });

    /*--
        6: Scroll To Top
    ----------------------------------------------------*/
    $body.append('<a class="scroll-to-top" href=#top><i class="fa fa-angle-up"></i></a>');
    var $scrollToTop = $(".scroll-to-top");

    function scrollToTopShow() {
        if ($window.scrollTop() >= $window.height()) {
            $scrollToTop.addClass('show');
        } else {
            $scrollToTop.removeClass('show');
        }
    }
    $scrollToTop.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });

    /*--
        7: Preloader
    ----------------------------------------------------*/
    $body.append('<div class="preloader-section"><div class="spinner"><div class="bounce1 bg-color"></div><div class="bounce2 bg-color"></div><div class="bounce3 bg-color"></div></div></div>');
    var $preloader = $('.preloader-section');

    function preloader() {
        $preloader.hide();
    }


    /*--
        8: Smooth Scroll
    ----------------------------------------------------*/
    $('[data-scroll]').on('click', function (e) {
        var target = $(this.hash);
        if (target.length) {
            e.preventDefault();
            var $offset = $window.width() > 767 ? 100 : 0;
            $('html, body').animate({
                scrollTop: target.offset().top - $offset
            }, 1000);
        }
    });


    /*==
        == Third Party Plugins Activation
        
            => 1: Multilevel Menu (Dl Menu)
            => 2: Parallax Effect
            => 3: Countdown
            => 4: Isotope
            => 5: Instafeed
            => 6: Slick Slider
            => 7: MailChimp
            => 8: Sticky Sidebar
            => 9: Price Range (jQuery UI)
            => 10: Counter Up
            => 11: Light Case
            => 12: Direction Aware Hover Effect
            => 13: Pie Chart
            => 14: Fullpage JS
            => 15: Google Map
            
    =============================================================================================*/

    /*--
        1: Multilevel Menu (Dl Menu)
    ----------------------------------------------------*/
    $('#dl-menu').dlmenu({
        animationClasses: {
            classin: 'dl-animate-in-2',
            classout: 'dl-animate-out-2'
        }
    });

    /*--
        2: Parallax Effect
    ----------------------------------------------------*/
    /*Rellax*/
    var $rellax = $('.rellax');
    if ($rellax.length) {
        var rellax = new Rellax('.rellax');
    }
    /*Parallax Background*/
    function parallaxBg() {
        $('.parallax-bg').parallaxBackground();
    }

    /*--
        3: Countdown
    ----------------------------------------------------*/
    $('[data-countdown]').each(function () {

        var $this = $(this),
            finalDate = $(this).data('countdown');
        if (!$this.hasClass('countdown-full-format')) {
            $this.countdown(finalDate, function (event) {
                $this.html(event.strftime('<div class="single"><h1>%D</h1><p>Days</p></div> <div class="single"><h1>%H</h1><p>Hrs</p></div> <div class="single"><h1>%M</h1><p>Mins</p></div> <div class="single"><h1>%S</h1><p>Secs</p></div>'));
            });
        } else {
            $this.countdown(finalDate, function (event) {
                $this.html(event.strftime('<div class="single"><h1>%Y</h1><p>Years</p></div> <div class="single"><h1>%m</h1><p>Months</p></div> <div class="single"><h1>%W</h1><p>Weeks</p></div> <div class="single"><h1>%d</h1><p>Days</p></div> <div class="single"><h1>%H</h1><p>Hrs</p></div> <div class="single"><h1>%M</h1><p>Mins</p></div> <div class="single"><h1>%S</h1><p>Secs</p></div>'));
            });
        }

    });

    /*--
        4: Isotope
    ----------------------------------------------------*/
    function isotopeUptimo() {
        var $isotopeGrid = $('.isotope-grid'),
            $isotopeFilter = $('.isotope-filter');
        /*Filter*/
        $isotopeFilter.on('click', 'button, a', function () {
            var $this = $(this),
                $filterValue = $this.attr('data-filter');
            $isotopeFilter.find('button, a').removeClass('active');
            $this.addClass('active');
            $isotopeGrid.isotope({
                filter: $filterValue
            });
        });
        /*Grid*/
        $isotopeGrid.each(function () {
            var $this = $(this),
                $isotopeItem = '.isotope-item';
            $this.imagesLoaded(function () {
                $this.isotope({
                    itemSelector: $isotopeItem,
                    percentPosition: true,
                    masonry: {
                        columnWidth: '.isotope-sizer',
                    }
                });
            });
        });
    }
    isotopeUptimo();

    /*--
        5: Instafeed
    ----------------------------------------------------*/
    $('.instafeed').each(function () {
        var $this = $(this),
            $id = $this.find('ul').attr('id'),
            $limit = $this.data('limit'),
            $resolution = $this.data('resolution');
        if ($this.length) {
            var feed = new Instafeed({
                get: 'user',
                userId: 6665768655,
                accessToken: '6665768655.1677ed0.313e6c96807c45d8900b4f680650dee5',
                target: $id,
                resolution: $resolution,
                limit: $limit,
                template: '<li><a href="{{link}}" target="_new"><img src="{{image}}" /></a></li>',
            });
            feed.run();
        }
    });

    /*--
        6: Slick Slider
    ----------------------------------------------------*/
    var $uptimoSlickSlider = $('.uptimo-slick-slider');

    /*For RTL*/
    if ($html.attr("dir") == "rtl" || $body.attr("dir") == "rtl") {
        $uptimoSlickSlider.attr("dir", "rtl");
    }
    $uptimoSlickSlider.each(function () {

        /*Setting Variables*/
        var $this = $(this),
            $setting = $this.data('slick-setting') ? $this.data('slick-setting') : '',
            $autoPlay = $setting.autoplay ? $setting.autoplay : false,
            $autoPlaySpeed = parseInt($setting.autoplaySpeed, 10) || 2000,
            $asNavFor = $setting.asNavFor ? $setting.asNavFor : null,
            $appendArrows = $setting.appendArrows ? $setting.appendArrows : $this,
            $appendDots = $setting.appendDots ? $setting.appendDots : $this,
            $arrows = $setting.arrows ? $setting.arrows : false,
            $prevArrow = $setting.prevArrow ? '<button class="' + ($setting.prevArrow.buttonClass ? $setting.prevArrow.buttonClass : 'slick-prev') + '"><i class="' + $setting.prevArrow.iconClass + '"></i></button>' : '<button class="slick-prev"><i class="optima-icon-arrows-minimal-left"></i></button>',
            $nextArrow = $setting.nextArrow ? '<button class="' + ($setting.nextArrow.buttonClass ? $setting.nextArrow.buttonClass : 'slick-next') + '"><i class="' + $setting.nextArrow.iconClass + '"></i></button>' : '<button class="slick-next"><i class="optima-icon-arrows-minimal-right"></i></button>',
            $centerMode = $setting.centerMode ? $setting.centerMode : false,
            $centerPadding = $setting.centerPadding ? $setting.centerPadding : '50px',
            $dots = $setting.dots ? $setting.dots : false,
            $fade = $setting.fade ? $setting.fade : false,
            $focusOnSelect = $setting.focusOnSelect ? $setting.focusOnSelect : false,
            $infinite = $setting.infinite ? $setting.infinite : false,
            $pauseOnHover = $setting.pauseOnHover ? $setting.pauseOnHover : true,
            $rows = parseInt($setting.rows, 10) || 1,
            $slidesToShow = parseInt($setting.slidesToShow, 10) || 1,
            $slidesToScroll = parseInt($setting.slidesToScroll, 10) || 1,
            $swipe = $setting.swipe ? $setting.swipe : true,
            $swipeToSlide = $setting.swipeToSlide ? $setting.swipeToSlide : false,
            $variableWidth = $setting.variableWidth ? $setting.variableWidth : false,
            $vertical = $setting.vertical ? $setting.vertical : false,
            $verticalSwiping = $setting.verticalSwiping ? $setting.verticalSwiping : false,
            $rtl = $setting.rtl || $html.attr('dir="rtl"') || $body.attr('dir="rtl"') ? true : false;

        /*Responsive Variable, Array & Loops*/
        var $responsiveSetting = typeof $this.data('slick-responsive') !== 'undefined' ? $this.data('slick-responsive') : '',
            $responsiveSettingLength = $responsiveSetting.length,
            $responsiveArray = [];
        for (var i = 0; i < $responsiveSettingLength; i++) {
            $responsiveArray[i] = $responsiveSetting[i];
        }

        // On Breakpoint reInit
        $this.on('breakpoint reInit', function () {
            daHover();
        });

        /*Slider Start*/
        $this.slick({
            autoplay: $autoPlay,
            autoplaySpeed: $autoPlaySpeed,
            asNavFor: $asNavFor,
            appendArrows: $appendArrows,
            appendDots: $appendDots,
            arrows: $arrows,
            dots: $dots,
            centerMode: $centerMode,
            centerPadding: $centerPadding,
            fade: $fade,
            focusOnSelect: $focusOnSelect,
            infinite: $infinite,
            pauseOnHover: $pauseOnHover,
            rows: $rows,
            slidesToShow: $slidesToShow,
            slidesToScroll: $slidesToScroll,
            swipe: $swipe,
            swipeToSlide: $swipeToSlide,
            variableWidth: $variableWidth,
            vertical: $vertical,
            verticalSwiping: $verticalSwiping,
            rtl: $rtl,
            prevArrow: $prevArrow,
            nextArrow: $nextArrow,
            responsive: $responsiveArray
        });

    });

    /*--
        7: MailChimp
    ----------------------------------------------------*/
    $('#mc-form').ajaxChimp({
        language: 'en',
        callback: mailChimpResponse,
        // ADD YOUR MAILCHIMP URL BELOW HERE!
        url: 'http://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef'

    });

    function mailChimpResponse(resp) {
        if (resp.result === 'success') {
            $('.mailchimp-success').html('' + resp.msg).fadeIn(900);
            $('.mailchimp-error').fadeOut(400);
        } else if (resp.result === 'error') {
            $('.mailchimp-error').html('' + resp.msg).fadeIn(900);
        }
    }

    /*--
        8: Sticky Sidebar
    ----------------------------------------------------*/
    if ($('.product-sticky').length) {
        var sidebar = new StickySidebar('.product-info', {
            containerSelector: '.product-sticky',
            innerWrapperSelector: '.product-info-inner',
            topSpacing: 120,
            bottomSpacing: 50,
            minWidth: 991,
        });
    }

    /*--
        9: Price Range (jQuery UI)
    ----------------------------------------------------*/
    var $priceRange = $('.price-range');
    $priceRange.each(function () {
        var $this = $(this),
            $priceRange = $this,
            $amount = $this.siblings('.price-amount'),
            $amountForm = $amount.find('.form'),
            $amountTo = $amount.find('.to'),
            $min = $this.data('min'),
            $max = $this.data('max'),
            $values = $this.data('values'),
            $step = $this.data('step');
        $priceRange.slider({
            range: true,
            min: $min,
            max: $max,
            values: $values,
            step: $step,
            slide: function (event, ui) {
                $amountForm.html('$' + ui.values[0]);
                $amountTo.html(' - $' + ui.values[1]);
            }
        });
        $amountForm.html('$' + $this.slider('values', 0));
        $amountTo.html(' - $' + $this.slider('values', 1));
    });

    /*--
        10: Counter Up
    ----------------------------------------------------*/
    $('.uptimo-counter').counterUp();

    /*--
        11: Light Case
    ----------------------------------------------------*/
    $('a[data-rel^=lightcase]').lightcase({
        transition: 'scrollHorizontal',
        swipe: true,
        maxWidth: 1170,
        maxHeight: 600,
    });
    $('.quickview').lightcase({
        showSequenceInfo: false,
        type: 'inline',
        maxWidth: 1170,
        maxHeight: 1170,
        showTitle: false,
        showCaption: false,
        inline: {
            width: 1170,
        },
    });

    /*--
        12: Direction Aware Hover Effect
    ----------------------------------------------------*/
    /*Direction Aware Hover Effect*/
    var daHover = function () {
        $('.daHover').each(function () {
            $(this).hoverdir({
                hoverElem: '.daHoverElem'
            });
        });
    };
    daHover();

    /*--
        13: Pie Chart
    ----------------------------------------------------*/
    $('.pie-chart').easyPieChart({
        scaleLength: 0,
        animate: {
            duration: 5000,
            enabled: true,
        },
    });

    /*--
        14: Fullpage JS
    ----------------------------------------------------*/
    if ($('.portfolio-split').length) {
        $('<div class="uptimo-fp-arrows"><ul><li class="prev"><i class="optima-icon-tail-triangle-up"></i></li><li class="num"><span class="current">01</span></li><li class="next"><i class="optima-icon-tail-triangle-down"></i></li></ul></div>').appendTo($body);
    }
    $document
        .on('click', '.uptimo-fp-arrows .prev', function (e) {
            e.preventDefault();
            $.fn.fullpage.moveSectionUp();
        })
        .on('click', '.uptimo-fp-arrows .next', function (e) {
            e.preventDefault();
            $.fn.fullpage.moveSectionDown();
        });

    $('#uptimo-fullpage').fullpage({
        sectionSelector: '.uptimo-fp-section',
        slideSelector: '.uptimo-fp-slide',
        navigation: true,
        responsiveWidth: 991,
        scrollOverflow: true,
        onLeave: function (index, nextIndex) {
            $('.uptimo-fp-arrows .num .current').html(nextIndex < 10 ? '0' + nextIndex : nextIndex);
        }
    });

    /*--
        15: Google Map
    ----------------------------------------------------*/
    var $mapStyle = [

        '[{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]',

    ];
    $('.google-map').each(function () {
        if ($(this).length) {
            var $this = $(this),
                $id = $this.attr('id'),
                $zoom = $this.data('zoom'),
                $marker = $this.data('marker'),
                $style = parseInt($this.data('style'), 10),
                $lat = $this.data('lat'),
                $long = $this.data('long');

            function initialize() {
                var mapOptions = {
                    zoom: $zoom,
                    scrollwheel: false,
                    center: new google.maps.LatLng($lat, $long),

                    styles: $mapStyle[0],

                };
                var map = new google.maps.Map(document.getElementById($id), mapOptions);
                var marker = new google.maps.Marker({
                    position: map.getCenter(),
                    map: map,
                    icon: $marker,
                    //animation: google.maps.Animation.BOUNCE
                });

            }
            google.maps.event.addDomListener(window, 'load', initialize);
        }
    });


    /*==
        == Window Load & Scroll Function
        
            => 1: Load Function
            => 2: Scroll Function
            
    =============================================================================================*/

    /*--
        1: Load Function
    ----------------------------------------------------*/
    $window.on('load', function () {
        timeLine();
        parallaxBg();
        preloader();
        isotopeUptimo();
    });

    /*--
        2: Scroll Function
    ----------------------------------------------------*/
    $window.on('scroll', function () {
        headerSticky();
        scrollToTopShow();
    });

    /*--
        2: Resize Function
    ----------------------------------------------------*/
    $window.resize(function () {
        parallaxBg();
        isotopeUptimo();
    });

})(jQuery);