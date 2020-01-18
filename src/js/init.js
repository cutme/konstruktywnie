const { detect } = require('detect-browser');
const browser = detect();
import Blazy from 'blazy';


document.addEventListener('DOMContentLoaded',function() {

    if (browser) {
        document.documentElement.classList.add(browser.name);
    }

    const cover = document.getElementById('cover');
    
    const init = function() {
        document.body.removeAttribute('style');
        document.body.classList.add('is-loaded');
        
        setTimeout(function() {
            cover.remove();
            document.body.classList.add('start-transitions');
        }, 250);

        
        // Anims on inview
        
        setTimeout(function() {
            window.animsInit();
        }, 100);
        
        
        // Home Parallax
        
        document.getElementsByClassName('js-homeslider')[0] ? window.parallax() : false;
        
        

        // Blazy
        
        window.bLazy = new Blazy({
            success: function(el){

                let item = el.parentNode.parentNode.parentNode;
                
                item.classList.add('is-visible');
            }
        });
            
    };
    
    
    window.addEventListener('load', init);

}, false);