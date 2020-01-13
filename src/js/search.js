const bodyScrollLock = require('body-scroll-lock');
const disableBodyScroll = bodyScrollLock.disableBodyScroll;
const enableBodyScroll = bodyScrollLock.enableBodyScroll;

document.addEventListener('DOMContentLoaded', function() {
    
    const el = document.getElementsByClassName('js-search')[0];
    
    const init = function() {

        const overlay = document.getElementById('search'),
              close = document.getElementsByClassName('js-close')[0];
              
        let outside;

        const showSearch = function(e) {

            disableBodyScroll();
            overlay.classList.add('is-active'); 

            setTimeout(function() {
                overlay.classList.add('is-visible');                
            }, 1);
            
            e.preventDefault() ? e.preventDefault() : e.preventDefault = false;
            
            outside = document.addEventListener('click', clickOutside);
        };
        
        const hideSearch = function() {

            enableBodyScroll();
            overlay.classList.remove('is-active');
            overlay.classList.remove('is-visible');
            document.removeEventListener('click', clickOutside);
        };
        
        const clickOutside = function(e) {
            if (e.target.classList.contains('o-wrap')) {
                hideSearch();
            } else {
                return;
            }
        }


        el.addEventListener('click', showSearch);
        close.addEventListener('click', hideSearch);

     
        // Hide menu on ESC
        
        document.addEventListener('keydown', function(evt) {
           // evt = evt || window.event;
            var isEscape = false;
            if ("key" in evt) {
                isEscape = (evt.key == "Escape" || evt.key == "Esc");
            } else {
                isEscape = (evt.keyCode == 27);
            }
            if (isEscape) {
                hideSearch();
            }
        });
    }
    
    el ? init() : false;
    
    
    
}, false);
