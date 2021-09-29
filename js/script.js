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

  const gallery = document.querySelector('.gallery__select');
  const choices6 = new Choices(gallery, {
    searchEnabled: false,
    shouldSort: false,
    itemSelectText: '',
    resetScrollPosition: false,
    classNames: {
      // containerOuter: 'gallery_choices__outer',
      containerInner: 'gallery_choices__inner',
      // list: 'gallery_choices__list',
      // listDropdown: 'gallery_choices__list--dropdown',
      item: 'gallery_choices__item',
      // // itemSelectable: 'gallery_choices__item--selectable',
      // // itemDisabled: 'gallery_choices__item--disabled',
      // // itemChoice: 'gallery_choices__item--choice',
      // // activeState: 'gallery.is-active',
      // // focusState: 'gallery.is-focused',
      openState: 'gallery.is-open',
    },
  });


  const swiper1 = new Swiper('.gallery__swiper', {
    navigation: {
      nextEl: '.swiper-button-next1',
      prevEl: '.swiper-button-prev1',
    },
    loop: true,
    slidesPerColumn: 1,
    slidesPerView: 1,
    spaceBetween: 20,
    navigator: true,
    pagination: {
      el: '.swiper-pagination1',
      type: 'fraction',
    },
    breakpoints: {
      // when window width is >= 320px
      768: {
        slidesPerColumn: 2,
        slidesPerView: 2,
        spaceBetween: 34,
      },
      // when window width is >= 480px
      1024: {
        slidesPerColumn: 2,
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // when window width is >= 640px
      1920: {
        slidesPerColumn: 2,
        slidesPerView: 3,
        spaceBetween: 20,
      }
    },
    debugger: true,
  })

  const swiper2 = new Swiper('.events__swiper', {

    loop: true,
    slidesPerColumn: 1,
    slidesPerView: 1,
    spaceBetween: 20,
    navigator: true,
    pagination: {
      el: '.swiper-pagination2',
      type: 'bullets',
      clickable: true,
    },
    debugger: true,
  })

  const swiper_3 = new Swiper('.publications__swiper', {
    navigation: {
      nextEl: '.swiper-button-prev3',
      prevEl: '.swiper-button-next3',
    },
    loop: true,
    slidesPerView: 2,
    spaceBetween: 34,
    pagination: {
      el: '.swiper-pagination3',
      type: 'fraction',
    },

    // Default parameters
    slidesPerView: 2,
    spaceBetween: 34,
    // Responsive breakpoints
    breakpoints: {
      1024: {
        slidesPerView: 2,
        spaceBetween: 49,
      },
      // when window width is >= 640px
      1920: {
        slidesPerView: 3,
        spaceBetween: 50,
      }
    },
    debugger: true,
  })

  const swiper_4 = new Swiper('.projects__swiper', {
    navigation: {
      nextEl: '.swiper-button-prev4',
      prevEl: '.swiper-button-next4',
    },
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,

    // Default parameters
    slidesPerView: 1,
    spaceBetween: 10,
    slidesPerColumn: 1,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      768: {
        slidesPerView: 2,
        spaceBetween: 34,
      },
      // when window width is >= 480px
      1024: {
        slidesPerView: 2,
        spaceBetween: 34,
      },
      // when window width is >= 640px
      1920: {
        slidesPerView: 3,
        spaceBetween: 50,
      }
    },
    debugger: true,
  })

  Map
  ymaps.ready(init);
  function init(){
    var myMap = new ymaps.Map("yandex__map", {

      center: [48.872185, 2.354224],
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

  tippy('.projects__tooltip_1', {
    content: 'Пример современных тенденций - современная методология разработки',
    maxWidth: 264,
    theme: 'purple',
  });

  tippy('.projects__tooltip_2', {
    content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
    maxWidth: 264,
    theme: 'purple',
  });

  tippy('.projects__tooltip_3', {
    content: 'В стремлении повысить качество',
    maxWidth: 264,
    theme: 'purple',
  });
})


