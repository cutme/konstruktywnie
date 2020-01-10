document.addEventListener('DOMContentLoaded',function() {

    const grid = document.getElementsByClassName('js-grid')[0];
    

    const init = function() {
        
        const filtersTrigger = document.getElementsByClassName('js-filtersTrigger')[0];
        
        //const label_show = filtersTrigger.getAttribute('data-show');
        

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

        //e.preventDefault() ? e.preventDefault() : e.preventDefault = false;
    };
    
    grid ? init() : false;

}, false);
