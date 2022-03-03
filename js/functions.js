 window.onload = function(){
            let burger = document.querySelector('.burger');
    
            burger.addEventListener('click', activateBurger);

            function activateBurger(){
                burger.classList.remove('_lock-animation');
                burger.classList.toggle('active');
                document.querySelector('.header__bottom-bar').classList.toggle('active');
                document.querySelector('body').classList.toggle('_scroll-lock');
                document.querySelector('.header__contacts').classList.toggle('active');
            }
        }