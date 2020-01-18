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
    	.setPin(".js-homeslider", {
        pushFollowers: false
    })  
    	.addTo(controller);
    	
/*
        window.onresize = function() {
            console.log('z');
            
            setTimeout(function() {
            scene.update(true);
            scene.refresh();
                
            }, 1)
        }
*/

    };
    
    

}, false);
