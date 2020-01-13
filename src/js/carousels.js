import Glide from '@glidejs/glide';
import css from '../../node_modules/@glidejs/glide/src/assets/sass/glide.core.scss';

document.addEventListener('DOMContentLoaded',function() {

    const latest = document.getElementById('latest');
        
    const latestCarousel = function() {

        const glide = new Glide(latest, {
            animationDuration: 1000,
            autoplay: false,
            hoverpause: false,
            gap: 40,
            perView: 4,
            rewind: false,
            breakpoints: {
			    1024: {
			      perView: 3
			    },
			    640: {
			      perView: 2,
			      gap: 20,
			    }
			}
        })
        
        setTimeout(function() {
            glide.mount();
            
            const bullets = document.getElementsByClassName('glide__bullet');
            
            const action = function(e) {
                console.log(e.currentTarget);
                
                for (let i = 0; i < bullets.length; i++) {
                    bullets[i].classList.remove('glide__bullet--active');
                }
                
                e.currentTarget.classList.add('glide__bullet--active');
            }
            
            for (let i = 0; i < bullets.length; i++) {
                bullets[i].addEventListener('click', action);
            }
            
            
        }, 10)
    };
   
   
    latest ? latestCarousel() : false;


}, false)