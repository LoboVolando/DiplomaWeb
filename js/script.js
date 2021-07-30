window.addEventListener('DOMContentLoaded', function(){

  // Menu
  document.querySelector('.header__burger').addEventListener('click', function() {
    document.querySelector('.header__nav').classList.add('is-active')
    document.querySelector('.header__account').classList.add('is-active')
  })

  document.querySelector('.header__burger').addEventListener('keydown', function(e) {
    if (e.keyCode === 13) {
      document.querySelector('.header__nav').classList.add('is-active')
    }
  })

  document.querySelector('.header__navcross').addEventListener('click', function() {
    document.querySelector('.header__nav').classList.remove('is-active')
    document.querySelector('.header__account').classList.remove('is-active')
  })


  document.querySelector('.header__searchicon-mobile').addEventListener('click', function() {
    document.querySelector('.header__lower').classList.add('is-active')
    document.querySelector('.header__desktop-search').classList.add('is-active')
  })

  document.querySelector('.header__searchcross').addEventListener('click', function() {
    document.querySelector('.header__lower').classList.remove('is-active')
    document.querySelector('.header__desktop-search').classList.remove('is-active')
  })

  const anchors = document.querySelectorAll('a[href*="#"]')

  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()

      const blockID = anchor.getAttribute('href').substr(1)

      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })

      var elems = document.querySelectorAll('.is-active');
        [].forEach.call(elems, function(el) {
          el.classList.remove('is-active');
        });
    })
  }

  const element = document.querySelector('.custom-select');
  const choices = new Choices(element, {
    searchEnabled: false,
    shouldSort: false,
    placeholder: true,
    itemSelectText: '',
  });

  const element2 = document.querySelector('.custom-select2');
  const choices2 = new Choices(element2, {
    searchEnabled: false,
    shouldSort: false,
    placeholder: true,
    itemSelectText: '',
  });

  const element3 = document.querySelector('.custom-select3');
  const choices3 = new Choices(element3, {
    searchEnabled: false,
    shouldSort: false,
    placeholder: true,
    itemSelectText: '',
    resetScrollPosition: false,
  });

  const element4 = document.querySelector('.custom-select4');
  const choices4 = new Choices(element4, {
    searchEnabled: false,
    shouldSort: false,
    placeholder: true,
    itemSelectText: '',
    resetScrollPosition: false,
  });

  const element5 = document.querySelector('.custom-select5');
  const choices5 = new Choices(element5, {
    searchEnabled: false,
    shouldSort: false,
    placeholder: true,
    itemSelectText: '',
    resetScrollPosition: false,
  });
})





window.addEventListener('DOMContentLoaded', function(){

  const swiper1 = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView: 1,
    slidesPerColumn: 1,
    spaceBetween: 10,
    navigator: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    // Default parameters
    // slidesPerView: 1,
    // spaceBetween: 10,
    // slidesPerColumn: 1,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      768: {
        slidesPerView: 1,
        slidesPerColumn: 1,
        spaceBetween: 10,
      },
      // when window width is >= 480px
      1024: {
        slidesPerView: 1,
        spaceBetween: 10,
        slidesPerColumn: 1
      },
      // when window width is >= 640px
      1920: {
        slidesPerView: 1,
        spaceBetween: 10
      }
    },
    debugger: true,
  })

  //Map
  ymaps.ready(init);
  function init(){
    // Создание карты.
    var myMap = new ymaps.Map("contacts__map", {
      // Координаты центра карты.
      // Порядок по умолчанию: «широта, долгота».
      // Чтобы не определять координаты центра карты вручную,
      // воспользуйтесь инструментом Определение координат.
      center: [48.872185, 2.354224],
      // Уровень масштабирования. Допустимые значения:
      // от 0 (весь мир) до 19.
      zoom: 13,
      controls: [],
    });
    myPlacemark = new ymaps.Placemark([48.872185, 2.354224], {}, {
      iconLayout: 'default#image',
      iconImageHref: '/img/russia.svg',
      iconImageSize: [30, 42],
      iconImageOffset: [-5, -38]
    }),
    myMap.geoObjects.add(myPlacemark)
  }

})