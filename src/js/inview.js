import InView from 'inview';

document.addEventListener('DOMContentLoaded',function() {
            
    const anims = document.getElementsByClassName('anim');
    
    window.animsInit = function() {        

        for (let i = 0; i < anims.length; i++) {

            if (cutme.Helpers.isInView(anims[i])) {
                anims[i].classList.add('anim--visible');
                
                
            }

            const inview = InView(anims[i], function(isInView, data) {
                if (isInView) {
                    
                    anims[i].removeAttribute('style');
                    anims[i].classList.add('anim--visible');
                    this.destroy();
                }
            });
        }
    };

}, false);
