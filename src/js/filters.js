import mixitup from 'mixitup';
import mixitupMultifilter from '../js/mixitup-multifilter.js';

mixitup.use(mixitupMultifilter);

document.addEventListener('DOMContentLoaded',function() {

    const grid = document.getElementsByClassName('js-grid')[0];
    
    
    const mix = function() {
        
        const mixer = mixitup('.js-mix', {
            multifilter: {
                enable: true
            }
        });
        
        const toggleFun = function(e) {
            
            let checkboxes = document.getElementsByName('filter');
            let status = e.currentTarget.checked;

            
            for (var i = 0, n = checkboxes.length; i < n; i++) {
                
                if (status === true) {
                    checkboxes[i].checked = true;
                } else {
                    checkboxes[i].checked = false;
                }
            }
        };
        
        const toggle = document.getElementsByClassName('js-toggle')[0];

        toggle.addEventListener('click', toggleFun);    
    };
    
    
    
    

    const init = function() {
        
        const filtersTrigger = document.getElementsByClassName('js-filtersTrigger')[0];
        const showHideFilters = function() {            

            if (grid.classList.contains('filters-on')) {
                
                grid.classList.remove('filters-on');
                filtersTrigger.innerHTML = filtersTrigger.getAttribute('data-show');

            } else {
                
                grid.classList.add('filters-on')
                filtersTrigger.innerHTML = filtersTrigger.getAttribute('data-hide');
            }
        };


        filtersTrigger.addEventListener('click', showHideFilters);
        
        mix();
        
        //e.preventDefault() ? e.preventDefault() : e.preventDefault = false;
        
        
       
        
        
    };
    
    grid ? init() : false;

}, false);
