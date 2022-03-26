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

 /*  Yandex map init  */
 ymaps.ready(createMap);
 function createMap(){
     var myMap = new ymaps.Map("map", {
         center: [44.951593, 34.104082],
         zoom: 15
     }),
     customPlacemark = new ymaps.Placemark([44.951593, 34.104082], 
         {
             iconLayout: 'default#image',
             iconImageHref: 'img/map-marker.png',
             iconImageSize: [42, 63],
             iconImageOffset: [-5, -38]
         }
     );
     myMap.geoObjects.add(customPlacemark);
}

$('.consultation__list-item').hover( function(){
    let hoverItem = $(this).attr('data-hover');
    if( hoverItem != ''){
        $('.' + hoverItem).toggleClass('hidden');
        $('.' + hoverItem).toggleClass('visible');
    }
});