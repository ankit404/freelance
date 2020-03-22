var revapi1,
    revapi2,
    tpj;    
(function() {
    if (!/loaded|interactive|complete/.test(document.readyState)) document.addEventListener("DOMContentLoaded",onLoad);
        else
        onLoad();
    
    function onLoad() {
        if (tpj === undefined) {
            tpj = jQuery;
            if("off" == "on") tpj.noConflict();        
        }
        
        /*Home 1 Slider*/
        if(tpj("#rev_slider_1_1").revolution === undefined){
            revslider_showDoubleJqueryError("#rev_slider_1_1");
        }else{
            revapi1 = tpj("#rev_slider_1_1").show().revolution({
                sliderType:"standard",
                sliderLayout:"fullwidth",
                dottedOverlay:"none",
                delay:9000,
                navigation: {
                    keyboardNavigation:"off",
                    keyboard_direction: "horizontal",
                    mouseScrollNavigation:"off",
                    mouseScrollReverse:"default",
                    onHoverStop:"off",
                    bullets: {
                        enable:true,
                        hide_onmobile:false,
                        style:"uranus",
                        hide_onleave:false,
                        direction:"vertical",
                        h_align:"right",
                        v_align:"center",
                        h_offset:0,
                        v_offset:0,
                        space:15,
                        tmp:'<span class="tp-bullet-inner"></span>'
                    }
                },
                responsiveLevels:[1200,1200,750,575],
                visibilityLevels:[1200,1200,750,575],
                gridwidth:[1240,1240,778,480],
                gridheight:[868,868,600,400],
                lazyType:"none",
                parallax: {
                    type:"mouse",
                    origo:"enterpoint",
                    speed:400,
                    speedbg:0,
                    speedls:0,
                    levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,55],
                },
                shadow:0,
                spinner:"spinner1",
                stopLoop:"off",
                stopAfterLoops:-1,
                stopAtSlide:-1,
                shuffle:"off",
                autoHeight:"off",
                disableProgressBar:"on",
                hideThumbsOnMobile:"off",
                hideSliderAtLimit:0,
                hideCaptionAtLimit:0,
                hideAllCaptionAtLilmit:0,
                debugMode:false,
                fallbacks: {
                    simplifyAll:"off",
                    nextSlideOnWindowFocus:"off",
                    disableFocusListener:false,
                }
            });
        }
        
        /*Home 2 Slider*/
        if(tpj("#rev_slider_2_1").revolution === undefined){
            revslider_showDoubleJqueryError("#rev_slider_2_1");
        }else{
            revapi2 = tpj("#rev_slider_2_1").show().revolution({
                sliderType:"standard",
                sliderLayout:"fullwidth",
                dottedOverlay:"none",
                delay:9000,
                navigation: {
                    keyboardNavigation:"off",
                    keyboard_direction: "horizontal",
                    mouseScrollNavigation:"off",
                    mouseScrollReverse:"default",
                    onHoverStop:"off",
                    bullets: {
                        enable:true,
                        hide_onmobile:false,
                        style:"uranus",
                        hide_onleave:false,
                        direction:"vertical",
                        h_align:"right",
                        v_align:"center",
                        h_offset:0,
                        v_offset:0,
                        space:15,
                        tmp:'<span class="tp-bullet-inner"></span>'
                    }
                },
                responsiveLevels:[1200,1200,1200,575],
                visibilityLevels:[1200,1200,1200,575],
                gridwidth:[1240,1240,1240,480],
                gridheight:[868,868,600,720],
                lazyType:"none",
                parallax: {
                    type:"mouse+scroll",
                    origo:"enterpoint",
                    speed:400,
                    speedbg:0,
                    speedls:0,
                    levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,55],
                },
                shadow:0,
                spinner:"spinner0",
                stopLoop:"off",
                stopAfterLoops:-1,
                stopAtSlide:-1,
                shuffle:"off",
                autoHeight:"off",
                disableProgressBar:"on",
                hideThumbsOnMobile:"off",
                hideSliderAtLimit:0,
                hideCaptionAtLimit:0,
                hideAllCaptionAtLilmit:0,
                debugMode:false,
                fallbacks: {
                    simplifyAll:"off",
                    nextSlideOnWindowFocus:"off",
                    disableFocusListener:false,
                }
            });
        }
        
        /*Home 3 Slider*/
        if(tpj("#rev_slider_3_1").revolution == undefined){
            revslider_showDoubleJqueryError("#rev_slider_3_1");
        }else{
            revapi3 = tpj("#rev_slider_3_1").show().revolution({
                sliderType:"standard",
                sliderLayout:"fullwidth",
                dottedOverlay:"none",
                delay:9000,
                navigation: {
                    onHoverStop:"off",
                },
                responsiveLevels:[1200,1200,1200,575],
                visibilityLevels:[1200,1200,1200,575],
                gridwidth:[1240,1240,1240,480],
                gridheight:[868,868,868,450],
                lazyType:"none",
                parallax: {
                    type:"mouse+scroll",
                    origo:"enterpoint",
                    speed:400,
                    speedbg:0,
                    speedls:0,
                    levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,55],
                },
                shadow:0,
                spinner:"spinner0",
                stopLoop:"off",
                stopAfterLoops:-1,
                stopAtSlide:-1,
                shuffle:"off",
                autoHeight:"off",
                disableProgressBar:"on",
                hideThumbsOnMobile:"off",
                hideSliderAtLimit:0,
                hideCaptionAtLimit:0,
                hideAllCaptionAtLilmit:0,
                debugMode:false,
                fallbacks: {
                    simplifyAll:"off",
                    nextSlideOnWindowFocus:"off",
                    disableFocusListener:false,
                }
            });
        }
        
        /*Home 4 Slider*/
        if(tpj("#rev_slider_4_1").revolution == undefined){
            revslider_showDoubleJqueryError("#rev_slider_4_1");
        }else{
            revapi4 = tpj("#rev_slider_4_1").show().revolution({
                sliderType:"standard",
                sliderLayout:"fullwidth",
                dottedOverlay:"none",
                delay:9000,
                navigation: {
                    keyboardNavigation:"off",
                    keyboard_direction: "horizontal",
                    mouseScrollNavigation:"off",
                    mouseScrollReverse:"default",
                    onHoverStop:"off",
                    bullets: {
                        enable:true,
                        hide_onmobile:false,
                        style:"hermes",
                        hide_onleave:false,
                        direction:"vertical",
                        h_align:"right",
                        v_align:"center",
                        h_offset:0,
                        v_offset:0,
                        space:10,
                        tmp:''
                    }
                },
                responsiveLevels:[1200,1200,750,575],
                visibilityLevels:[1200,1200,750,575],
                gridwidth:[1240,1240,778,480],
                gridheight:[868,868,600,450],
                lazyType:"none",
                parallax: {
                    type:"mouse",
                    origo:"enterpoint",
                    speed:400,
                    speedbg:0,
                    speedls:0,
                    levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,55],
                },
                shadow:0,
                spinner:"spinner0",
                stopLoop:"off",
                stopAfterLoops:-1,
                stopAtSlide:-1,
                shuffle:"off",
                autoHeight:"off",
                disableProgressBar:"on",
                hideThumbsOnMobile:"off",
                hideSliderAtLimit:0,
                hideCaptionAtLimit:0,
                hideAllCaptionAtLilmit:0,
                debugMode:false,
                fallbacks: {
                    simplifyAll:"off",
                    nextSlideOnWindowFocus:"off",
                    disableFocusListener:false,
                }
            });
        }
        
        /*Home 5 Slider*/
        if(tpj("#rev_slider_5_1").revolution == undefined){
            revslider_showDoubleJqueryError("#rev_slider_5_1");
        }else{
            revapi1 = tpj("#rev_slider_5_1").show().revolution({
                sliderType:"standard",
                sliderLayout:"fullwidth",
                dottedOverlay:"none",
                delay:9000,
                navigation: {
                    keyboardNavigation:"off",
                    keyboard_direction: "horizontal",
                    mouseScrollNavigation:"off",
                    mouseScrollReverse:"default",
                    onHoverStop:"off",
                    bullets: {
                        enable:true,
                        hide_onmobile:false,
                        style:"hermes",
                        hide_onleave:false,
                        direction:"vertical",
                        h_align:"right",
                        v_align:"center",
                        h_offset:0,
                        v_offset:0,
                        space:10,
                        tmp:''
                    }
                },
                responsiveLevels:[1200,1200,750,575],
                visibilityLevels:[1200,1200,750,575],
                gridwidth:[1240,1240,778,480],
                gridheight:[750,750,480,450],
                lazyType:"none",
                parallax: {
                    type:"mouse",
                    origo:"enterpoint",
                    speed:400,
                   speedbg:0,
                   speedls:0,
                    levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,55],
                },
                shadow:0,
                spinner:"spinner0",
                stopLoop:"off",
                stopAfterLoops:-1,
                stopAtSlide:-1,
                shuffle:"off",
                autoHeight:"off",
                disableProgressBar:"on",
                hideThumbsOnMobile:"off",
                hideSliderAtLimit:0,
                hideCaptionAtLimit:0,
                hideAllCaptionAtLilmit:0,
                debugMode:false,
                fallbacks: {
                    simplifyAll:"off",
                    nextSlideOnWindowFocus:"off",
                    disableFocusListener:false,
                }
            });
        }
        
        /*Home 6 Slider*/
        if(tpj("#rev_slider_6_1").revolution == undefined){
            revslider_showDoubleJqueryError("#rev_slider_6_1");
        }else{
            revapi2 = tpj("#rev_slider_6_1").show().revolution({
                sliderType:"standard",
                sliderLayout:"fullwidth",
                dottedOverlay:"none",
                delay:9000,
                navigation: {
                    keyboardNavigation:"off",
                    keyboard_direction: "horizontal",
                    mouseScrollNavigation:"off",
                    mouseScrollReverse:"default",
                    onHoverStop:"off",
                    bullets: {
                        enable:true,
                        hide_onmobile:false,
                        style:"hermes",
                        hide_onleave:false,
                        direction:"vertical",
                        h_align:"right",
                        v_align:"center",
                        h_offset:0,
                        v_offset:0,
                        space:10,
                        tmp:''
                    }
                },
                responsiveLevels:[1200,1200,1200,575],
                visibilityLevels:[1200,1200,1200,575],
                gridwidth:[1240,1240,1240,480],
                gridheight:[850,850,850,720],
                lazyType:"none",
                parallax: {
                    type:"mouse+scroll",
                    origo:"slidercenter",
                    speed:400,
                    speedbg:0,
                    speedls:0,
                    levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,55],
                },
                shadow:0,
                spinner:"spinner0",
                stopLoop:"off",
                stopAfterLoops:-1,
                stopAtSlide:-1,
                shuffle:"off",
                autoHeight:"off",
                disableProgressBar:"on",
                hideThumbsOnMobile:"off",
                hideSliderAtLimit:0,
                hideCaptionAtLimit:0,
                hideAllCaptionAtLilmit:0,
                debugMode:false,
                fallbacks: {
                    simplifyAll:"off",
                    nextSlideOnWindowFocus:"off",
                    disableFocusListener:false,
                }
            });
        }
        
        /*Home 7 Slider*/
        if(tpj("#rev_slider_7_1").revolution == undefined){
            revslider_showDoubleJqueryError("#rev_slider_7_1");
        }else{
            revapi2 = tpj("#rev_slider_7_1").show().revolution({
                sliderType:"standard",
                sliderLayout:"fullwidth",
                dottedOverlay:"none",
                delay:9000,
                navigation: {
                    keyboardNavigation:"off",
                    keyboard_direction: "horizontal",
                    mouseScrollNavigation:"off",
                     mouseScrollReverse:"default",
                    onHoverStop:"off",
                    bullets: {
                        enable:true,
                        hide_onmobile:false,
                        style:"zeus",
                        hide_onleave:true,
                        hide_delay:200,
                        hide_delay_mobile:1200,
                        direction:"vertical",
                        h_align:"right",
                        v_align:"center",
                        h_offset:0,
                        v_offset:0,
                        space:5,
                        tmp:'<span class="tp-bullet-image"></span><span class="tp-bullet-imageoverlay"></span><span class="tp-bullet-title">{{title}}</span>'
                    }
                },
                responsiveLevels:[1200,1200,1200,575],
                visibilityLevels:[1200,1200,1200,575],
                gridwidth:[1240,1240,1240,480],
                gridheight:[750,750,750,450],
                lazyType:"none",
                parallax: {
                    type:"mouse+scroll",
                    origo:"enterpoint",
                    speed:400,
                  speedbg:0,
                  speedls:0,
                    levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,55],
                },
                shadow:0,
                spinner:"spinner0",
                stopLoop:"off",
                stopAfterLoops:-1,
                stopAtSlide:-1,
                shuffle:"off",
                autoHeight:"off",
                disableProgressBar:"on",
                hideThumbsOnMobile:"off",
                hideSliderAtLimit:0,
                hideCaptionAtLimit:0,
                hideAllCaptionAtLilmit:0,
                debugMode:false,
                fallbacks: {
                    simplifyAll:"off",
                    nextSlideOnWindowFocus:"off",
                    disableFocusListener:false,
                }
            });
        }
        
        /*Home 8 Slider*/
        if(tpj("#rev_slider_8_1").revolution == undefined){
            revslider_showDoubleJqueryError("#rev_slider_8_1");
        }else{
            revapi2 = tpj("#rev_slider_8_1").show().revolution({
                sliderType:"standard",
                sliderLayout:"fullscreen",
                dottedOverlay:"none",
                delay:9000,
                navigation: {
                    keyboardNavigation:"off",
                    keyboard_direction: "horizontal",
                    mouseScrollNavigation:"off",
                     mouseScrollReverse:"default",
                    onHoverStop:"off",
                    arrows: {
                        style:"uranus",
                        enable:true,
                        hide_onmobile:true,
                        hide_under:767,
                        hide_onleave:false,
                        tmp:'',
                        left: {
                            h_align:"left",
                            v_align:"center",
                            h_offset:20,
                            v_offset:0
                        },
                        right: {
                            h_align:"right",
                            v_align:"center",
                            h_offset:20,
                            v_offset:0
                        }
                    }
                },
                responsiveLevels:[1200,1200,1200,575],
                visibilityLevels:[1200,1200,1200,575],
                gridwidth:[1240,1240,1240,480],
                gridheight:[868,868,868,720],
                lazyType:"none",
                parallax: {
                    type:"mouse+scroll",
                    origo:"enterpoint",
                    speed:400,
                  speedbg:0,
                  speedls:0,
                    levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,55],
                },
                shadow:0,
                spinner:"spinner0",
                stopLoop:"off",
                stopAfterLoops:-1,
                stopAtSlide:-1,
                shuffle:"off",
                autoHeight:"off",
                fullScreenAutoWidth:"off",
                fullScreenAlignForce:"off",
                fullScreenOffsetContainer: "",
                fullScreenOffset: "",
                disableProgressBar:"on",
                hideThumbsOnMobile:"off",
                hideSliderAtLimit:0,
                hideCaptionAtLimit:0,
                hideAllCaptionAtLilmit:0,
                debugMode:false,
                fallbacks: {
                    simplifyAll:"off",
                    nextSlideOnWindowFocus:"off",
                    disableFocusListener:false,
                }
            });
        }
        
        /*Home 9 Slider*/
        if(tpj("#rev_slider_9_1").revolution == undefined){
            revslider_showDoubleJqueryError("#rev_slider_9_1");
        }else{
            revapi2 = tpj("#rev_slider_9_1").show().revolution({
                sliderType:"standard",
                sliderLayout:"fullwidth",
                dottedOverlay:"none",
                delay:9000,
                navigation: {
                    keyboardNavigation:"off",
                    keyboard_direction: "horizontal",
                    mouseScrollNavigation:"off",
                     mouseScrollReverse:"default",
                    onHoverStop:"off",
                    arrows: {
                        style:"zeus",
                        enable:true,
                        hide_onmobile:true,
                        hide_under:767,
                        hide_onleave:false,
                        tmp:'<div class="tp-title-wrap">  	<div class="tp-arr-imgholder"></div> </div>',
                        left: {
                            h_align:"left",
                            v_align:"center",
                            h_offset:20,
                            v_offset:0
                        },
                        right: {
                            h_align:"right",
                            v_align:"center",
                            h_offset:20,
                            v_offset:0
                        }
                    }
                },
                responsiveLevels:[1200,1200,750,575],
                visibilityLevels:[1200,1200,750,575],
                gridwidth:[1240,1240,778,480],
                gridheight:[1000,1000,600,500],
                lazyType:"none",
                parallax: {
                    type:"mouse+scroll",
                    origo:"enterpoint",
                    speed:400,
                  speedbg:0,
                  speedls:0,
                    levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,55],
                },
                shadow:0,
                spinner:"spinner0",
                stopLoop:"off",
                stopAfterLoops:-1,
                stopAtSlide:-1,
                shuffle:"off",
                autoHeight:"off",
                disableProgressBar:"on",
                hideThumbsOnMobile:"off",
                hideSliderAtLimit:0,
                hideCaptionAtLimit:0,
                hideAllCaptionAtLilmit:0,
                debugMode:false,
                fallbacks: {
                    simplifyAll:"off",
                    nextSlideOnWindowFocus:"off",
                    disableFocusListener:false,
                }
            });
        }
        
        /*Home 10 Slider*/
        if(tpj("#rev_slider_10_1").revolution == undefined){
            revslider_showDoubleJqueryError("#rev_slider_10_1");
        }else{
            revapi2 = tpj("#rev_slider_10_1").show().revolution({
                sliderType:"standard",
                sliderLayout:"fullwidth",
                dottedOverlay:"none",
                delay:9000,
                navigation: {
                    keyboardNavigation:"off",
                    keyboard_direction: "horizontal",
                    mouseScrollNavigation:"off",
                     mouseScrollReverse:"default",
                    onHoverStop:"off",
                    bullets: {
                        enable:true,
                        hide_onmobile:false,
                        style:"hermes",
                        hide_onleave:false,
                        direction:"vertical",
                        h_align:"right",
                        v_align:"center",
                        h_offset:0,
                        v_offset:0,
                        space:10,
                        tmp:''
                    }
                },
                responsiveLevels:[1200,1200,1200,575],
                visibilityLevels:[1200,1200,1200,575],
                gridwidth:[1240,1240,1240,480],
                gridheight:[868,868,868,500],
                lazyType:"none",
                shadow:0,
                spinner:"spinner0",
                stopLoop:"off",
                stopAfterLoops:-1,
                stopAtSlide:-1,
                shuffle:"off",
                autoHeight:"off",
                disableProgressBar:"on",
                hideThumbsOnMobile:"off",
                hideSliderAtLimit:0,
                hideCaptionAtLimit:0,
                hideAllCaptionAtLilmit:0,
                debugMode:false,
                fallbacks: {
                    simplifyAll:"off",
                    nextSlideOnWindowFocus:"off",
                    disableFocusListener:false,
                }
            });
        }
        
        /*Home 11 Slider*/
        if(tpj("#rev_slider_11_1").revolution == undefined){
            revslider_showDoubleJqueryError("#rev_slider_11_1");
        }else{
            revapi2 = tpj("#rev_slider_11_1").show().revolution({
                sliderType:"standard",
                sliderLayout:"fullwidth",
                dottedOverlay:"none",
                delay:9000,
                navigation: {
                    keyboardNavigation:"off",
                    keyboard_direction: "horizontal",
                    mouseScrollNavigation:"off",
                     mouseScrollReverse:"default",
                    onHoverStop:"off",
                    bullets: {
                        enable:true,
                        hide_onmobile:false,
                        style:"uranus",
                        hide_onleave:false,
                        direction:"horizontal",
                        h_align:"center",
                        v_align:"bottom",
                        h_offset:0,
                        v_offset:30,
                        space:10,
                        tmp:'<span class="tp-bullet-inner"></span>'
                    }
                },
                responsiveLevels:[1200,1200,1200,575],
                visibilityLevels:[1200,1200,1200,575],
                gridwidth:[1240,1240,1240,480],
                gridheight:[868,868,868,500],
                lazyType:"none",
                parallax: {
                    type:"mouse",
                    origo:"enterpoint",
                    speed:400,
                  speedbg:0,
                  speedls:0,
                    levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,55],
                },
                shadow:0,
                spinner:"spinner0",
                stopLoop:"off",
                stopAfterLoops:-1,
                stopAtSlide:-1,
                shuffle:"off",
                autoHeight:"off",
                disableProgressBar:"on",
                hideThumbsOnMobile:"off",
                hideSliderAtLimit:0,
                hideCaptionAtLimit:0,
                hideAllCaptionAtLilmit:0,
                debugMode:false,
                fallbacks: {
                    simplifyAll:"off",
                    nextSlideOnWindowFocus:"off",
                    disableFocusListener:false,
                }
            });
        }
        
        /*Home 13 Slider*/
        if(tpj("#rev_slider_13_1").revolution == undefined){
            revslider_showDoubleJqueryError("#rev_slider_13_1");
        }else{
            revapi2 = tpj("#rev_slider_13_1").show().revolution({
                sliderType:"standard",
                sliderLayout:"fullwidth",
                dottedOverlay:"none",
                delay:9000,
                navigation: {
                    onHoverStop:"off",
                },
                responsiveLevels:[1200,1200,1200,575],
                visibilityLevels:[1200,1200,1200,575],
                gridwidth:[1240,1240,1240,480],
                gridheight:[868,868,868,500],
                lazyType:"none",
                parallax: {
                    type:"mouse",
                    origo:"enterpoint",
                    speed:400,
                  speedbg:0,
                  speedls:0,
                    levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,55],
                },
                shadow:0,
                spinner:"spinner0",
                stopLoop:"off",
                stopAfterLoops:-1,
                stopAtSlide:-1,
                shuffle:"off",
                autoHeight:"off",
                disableProgressBar:"on",
                hideThumbsOnMobile:"off",
                hideSliderAtLimit:0,
                hideCaptionAtLimit:0,
                hideAllCaptionAtLilmit:0,
                debugMode:false,
                fallbacks: {
                    simplifyAll:"off",
                    nextSlideOnWindowFocus:"off",
                    disableFocusListener:false,
                }
            });
        }
        
        /*Home 14 Slider*/
        if(tpj("#rev_slider_14_1").revolution == undefined){
            revslider_showDoubleJqueryError("#rev_slider_14_1");
        }else{
            revapi2 = tpj("#rev_slider_14_1").show().revolution({
                sliderType:"standard",
                sliderLayout:"fullwidth",
                dottedOverlay:"none",
                delay:9000,
                navigation: {
                    keyboardNavigation:"off",
                    keyboard_direction: "horizontal",
                    mouseScrollNavigation:"off",
                     mouseScrollReverse:"default",
                    onHoverStop:"off",
                    bullets: {
                        enable:true,
                        hide_onmobile:false,
                        style:"zeus",
                        hide_onleave:false,
                        direction:"vertical",
                        h_align:"right",
                        v_align:"center",
                        h_offset:0,
                        v_offset:20,
                        space:10,
                        tmp:'<span class="tp-bullet-image"></span><span class="tp-bullet-imageoverlay"></span><span class="tp-bullet-title">{{title}}</span>'
                    }
                },
                responsiveLevels:[1200,1200,1200,575],
                visibilityLevels:[1200,1200,1200,575],
                gridwidth:[1240,1240,1240,480],
                gridheight:[868,868,868,600],
                lazyType:"none",
                parallax: {
                    type:"mouse",
                    origo:"enterpoint",
                    speed:400,
                  speedbg:0,
                  speedls:0,
                    levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,55],
                },
                shadow:0,
                spinner:"spinner0",
                stopLoop:"off",
                stopAfterLoops:-1,
                stopAtSlide:-1,
                shuffle:"off",
                autoHeight:"off",
                disableProgressBar:"on",
                hideThumbsOnMobile:"off",
                hideSliderAtLimit:0,
                hideCaptionAtLimit:0,
                hideAllCaptionAtLilmit:0,
                debugMode:false,
                fallbacks: {
                    simplifyAll:"off",
                    nextSlideOnWindowFocus:"off",
                    disableFocusListener:false,
                }
            });
        }
        
        /*Home 19 Slider*/
        if(tpj("#rev_slider_19_1").revolution == undefined){
            revslider_showDoubleJqueryError("#rev_slider_19_1");
        }else{
            revapi2 = tpj("#rev_slider_19_1").show().revolution({
                sliderType:"carousel",
                sliderLayout:"fullscreen",
                dottedOverlay:"none",
                delay:9000,
                navigation: {
                    onHoverStop:"off",
                },
                carousel: {
                    horizontal_align: "center",
                    vertical_align: "center",
                    fadeout: "on",
                    vary_fade: "on",
                    maxVisibleItems: 3,
                    infinity: "on",
                    space: 0,
                    stretch: "off",
                     showLayersAllTime: "off",
                     easing: "Power3.easeInOut",
                     speed: "800"
                },
                responsiveLevels:[1200,992,750,575],
                visibilityLevels:[1200,992,750,575],
                gridwidth:[960,640,480,480],
                gridheight:[720,720,480,360],
                lazyType:"none",
                minHeight:"500px",
                parallax: {
                    type:"scroll",
                    origo:"enterpoint",
                    speed:400,
                  speedbg:0,
                  speedls:0,
                    levels:[5,10,15,20,25,30,35,40,45,50,47,48,49,50,51,55],
                },
                shadow:0,
                spinner:"off",
                stopLoop:"on",
                stopAfterLoops:0,
                stopAtSlide:1,
                shuffle:"off",
                autoHeight:"off",
                fullScreenAutoWidth:"off",
                fullScreenAlignForce:"off",
                fullScreenOffsetContainer: ".header",
                fullScreenOffset: "",
                disableProgressBar:"on",
                hideThumbsOnMobile:"off",
                hideSliderAtLimit:0,
                hideCaptionAtLimit:0,
                hideAllCaptionAtLilmit:0,
                debugMode:false,
                fallbacks: {
                    simplifyAll:"off",
                    nextSlideOnWindowFocus:"off",
                    disableFocusListener:false,
                }
            });
        }
        
        /*Home 21 Slider*/
        if(tpj("#rev_slider_21_1").revolution == undefined){
            revslider_showDoubleJqueryError("#rev_slider_21_1");
        }else{
            revapi2 = tpj("#rev_slider_21_1").show().revolution({
                sliderType:"standard",
                sliderLayout:"fullscreen",
                dottedOverlay:"none",
                delay:9000,
                navigation: {
                    onHoverStop:"off",
                },
                responsiveLevels:[1200,1200,1200,575],
                visibilityLevels:[1200,1200,1200,575],
                gridwidth:[1240,1240,1240,480],
                gridheight:[868,868,868,720],
                lazyType:"none",
                minHeight:"400",
                parallax: {
                    type:"mouse",
                    origo:"enterpoint",
                    speed:400,
                  speedbg:0,
                  speedls:0,
                    levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,55],
                },
                shadow:0,
                spinner:"spinner0",
                stopLoop:"off",
                stopAfterLoops:-1,
                stopAtSlide:-1,
                shuffle:"off",
                autoHeight:"off",
                fullScreenAutoWidth:"off",
                fullScreenAlignForce:"off",
                fullScreenOffsetContainer: ".header",
                fullScreenOffset: "",
                disableProgressBar:"on",
                hideThumbsOnMobile:"off",
                hideSliderAtLimit:0,
                hideCaptionAtLimit:0,
                hideAllCaptionAtLilmit:0,
                debugMode:false,
                fallbacks: {
                    simplifyAll:"off",
                    nextSlideOnWindowFocus:"off",
                    disableFocusListener:false,
                }
            });
        }
        
        /*Home 22 Slider*/
        if(tpj("#rev_slider_22_1").revolution == undefined){
            revslider_showDoubleJqueryError("#rev_slider_22_1");
        }else{
            revapi2 = tpj("#rev_slider_22_1").show().revolution({
                sliderType:"standard",
                sliderLayout:"fullwidth",
                dottedOverlay:"none",
                delay:9000,
                navigation: {
                    onHoverStop:"off",
                },
                responsiveLevels:[1200,1200,750,575],
                visibilityLevels:[1200,1200,750,575],
                gridwidth:[1240,1240,778,480],
                gridheight:[868,868,550,500],
                lazyType:"none",
                parallax: {
                    type:"mouse",
                    origo:"enterpoint",
                    speed:400,
                  speedbg:0,
                  speedls:0,
                    levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,55],
                },
                shadow:0,
                spinner:"spinner0",
                stopLoop:"off",
                stopAfterLoops:-1,
                stopAtSlide:-1,
                shuffle:"off",
                autoHeight:"off",
                disableProgressBar:"on",
                hideThumbsOnMobile:"off",
                hideSliderAtLimit:0,
                hideCaptionAtLimit:0,
                hideAllCaptionAtLilmit:0,
                debugMode:false,
                fallbacks: {
                    simplifyAll:"off",
                    nextSlideOnWindowFocus:"off",
                    disableFocusListener:false,
                }
            });
        }
    }
}());