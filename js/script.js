window.addEventListener('DOMContentLoaded', function(){

  // Menu
  document.querySelector('.header__burger').addEventListener('click', function() {
    document.querySelector('.header__nav').classList.add('is-active')
    document.querySelector('.header__account').classList.add('is-active')
  })

  document.querySelector('.header__burger').addEventListener('keydown', function(e) {
    if (e.keyCode === 13) {
      document.querySelector('.header__nav').classList.add('is-active')
      document.querySelector('.header__account').classList.add('is-active')
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

  // Scrolling

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

  // Lower menu desktop

  document.querySelectorAll('.header__stylelink').forEach(function(headerSelectLink) {
    headerSelectLink.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path

      // document.querySelectorAll(`[data-target!="${path}"]`).forEach(function(tabContent) {
      //   tabContent.classList.remove('is-active')
      // })
      document.querySelector(`[data-target="${path}"]`).classList.toggle('is-active')
    })
  })

  // (function() {
  //   if (Viewport.width <= 768)
  //   {
  //     const anchors1 = document.querySelectorAll('.catalog__painterlink')

  //     for (let anchor1 of anchors1) {
  //       anchor1.addEventListener('click', function (e) {
  //         e.preventDefault()

  //         const blockID = anchor.getAttribute('href').substr(1)
  //         console.log(blockID)
  //         console.log(document.querySelector(blockID))
  //         document.getElementById(blockID).scrollIntoView({
  //           behavior: 'smooth',
  //           block: 'start'
  //         })
  //       })
  //     }
  //   }
  // })

  // const element = document.querySelector('.custom-select');
  // const choices = new Choices(element, {
  //   classNames: {
  //     containerOuter: 'heading__choices'
  //   },
  //   searchEnabled: false,
  //   shouldSort: false,
  //   placeholder: true,
  //   itemSelectText: '',
  // });

  // const element2 = document.querySelector('.custom-select2');
  // const choices2 = new Choices(element2, {
  //   classNames: {
  //     containerOuter: 'heading__choices'
  //   },
  //   searchEnabled: false,
  //   shouldSort: false,
  //   placeholder: true,
  //   itemSelectText: '',
  // });

  // const element3 = document.querySelector('.custom-select3');
  // const choices3 = new Choices(element3, {
  //   classNames: {
  //     containerOuter: 'heading__choices'
  //   },
  //   searchEnabled: false,
  //   shouldSort: false,
  //   placeholder: true,
  //   itemSelectText: '',
  //   resetScrollPosition: false,
  // });

  // const element4 = document.querySelector('.custom-select4');
  // const choices4 = new Choices(element4, {
  //   classNames: {
  //     containerOuter: 'heading__choices'
  //   },
  //   searchEnabled: false,
  //   shouldSort: false,
  //   placeholder: true,
  //   itemSelectText: '',
  //   resetScrollPosition: false,
  // });

  // const element5 = document.querySelector('.custom-select5');
  // const choices5 = new Choices(element5, {
  //   classNames: {
  //     containerOuter: 'heading__choices'
  //   },
  //   searchEnabled: false,
  //   shouldSort: false,
  //   placeholder: true,
  //   itemSelectText: '',
  //   resetScrollPosition: false,
  // });

  const element6 = document.querySelector('.gallery-select');
  const choices6 = new Choices(element6, {
    classNames: {
      containerOuter: 'gallery__choices',
    },
    searchEnabled: false,
    shouldSort: false,
    placeholder: true,
    itemSelectText: '',
    resetScrollPosition: false,
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
        spaceBetween: 34,
      },
      // when window width is >= 640px
      1920: {
        slidesPerColumn: 2,
        slidesPerView: 3,
        spaceBetween: 42,
      }
    },
    debugger: true,
  })

  const swiper2 = new Swiper('.events__swiper', {
    slidesPerColumn: 1,
    slidesPerView: 1,
    spaceBetween: 25,
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
      prevEl: '.swiper-button-prev3',
      nextEl: '.swiper-button-next3',
    },
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
        spaceBetween: 43,
      },
      // when window width is >= 640px
      1920: {
        slidesPerView: 3,
        spaceBetween: 0,
      }
    },
    debugger: true,
  })

  document.querySelector('.publications__selectlink').addEventListener('click', function() {
    document.querySelector('.publications__categorieslist').classList.toggle('is-active')
    document.querySelector('.publications__selectlink').classList.toggle('is-active')
  })

  const swiper_4 = new Swiper('.projects__swiper', {
    navigation: {
      prevEl: '.swiper-button-prev4',
      nextEl: '.swiper-button-next4',
    },
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
        spaceBetween: 34,
      }
    },
    debugger: true,
  })

  Map
  ymaps.ready(init);
  function init(){
    var myMap = new ymaps.Map("yandex__map", {

      center: [55.75846806898367,37.60108849999989],
      zoom: 13,
      controls: [],
    });
    myPlacemark = new ymaps.Placemark([55.75846806898367,37.60108849999989], {}, {
      iconLayout: 'default#image',
      iconImageHref: '/img/destination_point.svg',
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

  // First level tab
  document.querySelectorAll('.catalog__painter').forEach(function(tabContent) {
    tabContent.classList.add('play-accordion')
  })

  document.querySelectorAll(`[data-target="11"]`).forEach(function(tabContent) {
    tabContent.classList.remove('play-accordion')
  })

  document.querySelectorAll('.catalog__tabitem').forEach(function(sectionWorkNavLink) {
    sectionWorkNavLink.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.catalog__painter').forEach(function(tabContent) {
        tabContent.classList.add('play-accordion')
      })

      document.querySelectorAll('.catalog__tabitem').forEach(function(tabContent) {
        tabContent.classList.remove('is-active')
      })
      document.querySelector(`[data-path="${path}"]`).classList.add('is-active')
      document.querySelectorAll(`[data-target="${path}"]`).forEach(function(tabContent) {
        tabContent.classList.remove('play-accordion')
      })
    })
  })

  // Accordion
  $( function() {
    $( "#accordion" ).accordion({
      collapsible: true,
      icons: false,
      border: false,
      active: false,
      heightStyle: "content",
      autoHeight: false,
    });
  });

  // Tabs
  document.querySelectorAll('.catalog__painter-item').forEach(function(tabContent) {
    tabContent.classList.remove('item_active')
  })
  document.querySelector(`[data-target="000"]`).classList.add('item_active')

  document.querySelectorAll('.catalog__painterlink').forEach(function(tabContent) {
    tabContent.classList.remove('is-active')
  })
  document.querySelector(`[data-target="11"]`).classList.add('is-active')


  document.querySelectorAll('.catalog__painterlink').forEach(function(sectionWorkNavLink) {
    sectionWorkNavLink.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.catalog__painter-item').forEach(function(tabContent) {
        tabContent.classList.remove('item_active')
      })
      document.querySelectorAll('.catalog__painterlink').forEach(function(tabContent) {
        tabContent.classList.remove('is-active')
      })
      document.querySelector(`[data-path="${path}"]`).classList.add('is-active')
      document.querySelector(`[data-target="${path}"]`).classList.add('item_active')
    })
  })

  // document.querySelectorAll('.section-work__nav-link').forEach(function(sectionWorkNavLink) {
  //   sectionWorkNavLink.addEventListener('keydown', function(event) {
  //     if (event.keyCode === 13) {

  //       const path = event.currentTarget.dataset.path
  //       document.querySelectorAll('.section-work__body').forEach(function(tabContent) {
  //         tabContent.classList.remove('tab-content-active')
  //       })
  //       document.querySelectorAll('.section-work__nav-link').forEach(function(tabContent) {
  //         tabContent.classList.remove('nav-link_active')
  //       })

  //       document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')
  //       document.querySelector(`[data-path="${path}"]`).classList.add('nav-link_active')
  //     }
  //   })
  // })



    // document.querySelector('.header__burger').addEventListener('keydown', function(e) {
    //   if (e.keyCode === 13) {
    //     document.querySelector('.header__nav').classList.add('is-active')
    //   }
    // })

    // document.querySelector('.header__navcross').addEventListener('click', function() {
    //   document.querySelector('.header__nav').classList.remove('is-active')
    //   document.querySelector('.header__account').classList.remove('is-active')
    // })


    // document.querySelector('.header__searchicon-mobile').addEventListener('click', function() {
    //   document.querySelector('.header__lower').classList.add('is-active')
    //   document.querySelector('.header__desktop-search').classList.add('is-active')
    // })

    // document.querySelector('.header__searchcross').addEventListener('click', function() {
    //   document.querySelector('.header__lower').classList.remove('is-active')
    //   document.querySelector('.header__desktop-search').classList.remove('is-active')
    // })


  var selector = document.querySelector("input[type='tel']");
  var im = new Inputmask("+7 (999) 999-99-99");
  im.mask(selector);

  new JustValidate('.contacts__form', {
    rules: {
      name: {
        required: true,
        minLength: 2,
        maxLength: 20,
        strength: {
          custom: '^[a-zA-Z]+$'
        }
      },
      tel: {
        required: true,
        function: (name, value) => {
          const phone = selector.inputmask.unmaskedvalue()
          return Number(phone) && phone.length === 10
        }
      },
    },
    messages: {
      name: 'Недопустимый формат',
      tel: 'Недопустимый формат',
    },
    colorWrong: 'red',
  })
})

// Events
document.querySelector('.events__button').addEventListener('click', function() {
  document.querySelectorAll('.events__event').forEach(function(eventContent) {
    eventContent.classList.remove('event_hidden')
  })
  document.querySelectorAll('.events__event').forEach(function(eventContent) {
    eventContent.classList.remove('third_event-status')
  })
  document.querySelector('.events__button').classList.add('button_hidden')
  console.log(document.querySelector('.events__button'))
})


