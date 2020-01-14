/*
import * as ScrollMagic from "scrollmagic"; // Or use scrollmagic-with-ssr to avoid server rendering problems
import { TweenMax, TimelineMax } from "gsap"; // Also works with TweenLite and TimelineLite
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);
*/

import ScrollMagic from 'scrollmagic';
import TweenMax from "gsap/TweenMax";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

document.addEventListener('DOMContentLoaded',function() {

    window.parallax = function() {
        
        const el = document.getElementsByClassName('js-homeslider')[0];
        
        var controller = new ScrollMagic.Controller();
    	var tween = TweenMax.to('.js-secondary', 1, {height: '100%', ease: 'linear'});
    	 
    	var scene = new ScrollMagic.Scene({
    	  duration: el.clientHeight,
    	  triggerHook: 0,
    	})
    	.setTween(tween)
    	.setPin(".js-homeslider")  
    	.addTo(controller);
    };
    
}, false);
