import mixitup from 'mixitup';
import mixitupMultifilter from '../js/mixitup-multifilter.js';

mixitup.use(mixitupMultifilter);

document.addEventListener('DOMContentLoaded',function() {

    const grid = document.getElementsByClassName('js-grid')[0];
    
    
    const mix = function() {
        
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const spec = urlParams.get('spec')
        const filtersTrigger = document.getElementsByClassName('js-filtersTrigger')[0];
        const filtersPanel = document.getElementsByClassName('js-filterspanel')[0];

        if (spec) {
            let initialFilter = '.' + spec;
            
            let mixer = mixitup('.js-mix', {
                multifilter: {
                    enable: true
                },
                load: {
                    filter: initialFilter
                },
                callbacks: {
                    onMixEnd: function(state) {
                         console.log('reva');
                         window.bLazy.revalidate();
                    }
                }
            });
            
            grid.classList.add('filters-on')
            filtersTrigger.innerHTML = filtersTrigger.getAttribute('data-hide');

        } else {
            let mixer = mixitup('.js-mix', {
                multifilter: {
                    enable: true
                },
                callbacks: {
                    onMixEnd: function(state) {
                         window.bLazy.revalidate();
                    }
                }
            });
        }
        
        
        const checkFiltersPanelHeight = function() {
            grid.style.minHeight = filtersPanel.clientHeight + 'px';
        }
        
        window.addEventListener('resize', checkFiltersPanelHeight);

        
        const toggleFun = function(e) {
            
            const parent = e.currentTarget.parentNode.parentNode;            
            const checkboxes = parent.querySelectorAll('input');
            
            let status = e.currentTarget.checked;            
            
            for (var i = 0, n = checkboxes.length; i < n; i++) {
                
                if (status === true) {
                    checkboxes[i].checked = true;
                } else {
                    checkboxes[i].checked = false;
                }
            }
        };
        
        const toggle = document.getElementsByClassName('js-toggle');

        //toggle.addEventListener('click', toggleFun);    
        
        for (let j = 0; j < toggle.length; j++) {
            toggle[j].addEventListener('click', toggleFun);    
        }
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
