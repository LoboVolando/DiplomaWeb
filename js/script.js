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

  document.querySelector('.header__navcross').addEventListener('keydown', function(e) {
    if (e.keyCode === 13) {
      document.querySelector('.header__nav').classList.remove('is-active')
      document.querySelector('.header__account').classList.remove('is-active')
    }
  })

  const searchIcon = document.querySelector('.header__searchicon-mobile')
  const searchCross = document.querySelector('.header__searchcross')
  const lowerMenu = document.querySelector('.header__lower')
  const searchBlock = document.querySelector('.header__desktop-search')
  const clickClose = function() {
    lowerMenu.classList.remove('is-active')
    searchBlock.classList.remove('is-active')
  }

  document.addEventListener('click', function(e) {
    const target = e.target;
    const its_btnMenu = target == document.querySelector('.header__searchinput');
    const menu_is_active = lowerMenu.classList.contains('is-active');

    if (target == searchIcon) {
      lowerMenu.classList.add('is-active')
      searchBlock.classList.add('is-active')
    } else {
      if (!its_btnMenu && menu_is_active) {
        clickClose()
      }
    }
  });

  searchIcon.addEventListener('keydown', function(e) {
    if (e.keyCode === 13) {
      lowerMenu.classList.add('is-active')
      searchBlock.classList.add('is-active')
      console.log('Yes')
    }
  })

  searchCross.addEventListener('click', function() {
    clickClose()
    console.log('No')
  })


  searchCross.addEventListener('keydown', function(e) {
    if (e.keyCode === 13) {
      lowerMenu.classList.remove('is-active')
      searchBlock.classList.remove('is-active')
    }
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

      const category_lists = document.querySelectorAll('.header__itemlist-conatiner')
      for (let element of category_lists) {
        if (element.getAttribute('data-target') === path) {
          element.classList.toggle('is-active')
        } else {
          element.classList.remove('is-active')
        }
      }
    })
  })

  new SimpleBar(document.querySelector(".simplebar"), {
    autoHide: false,
    scrollbarMaxSize: 30,
  });

  new SimpleBar(document.querySelector(".simplebar1"), {
    autoHide: false,
    scrollbarMaxSize: 30,
  });

  new SimpleBar(document.querySelector(".simplebar2"), {
    autoHide: false,
    scrollbarMaxSize: 30,
  });

  new SimpleBar(document.querySelector(".simplebar3"), {
    autoHide: false,
    scrollbarMaxSize: 30,
  });

  new SimpleBar(document.querySelector(".simplebar4"), {
    autoHide: false,
    scrollbarMaxSize: 30,
  });

  const element = document.querySelector('.gallery-select');
  const choices = new Choices(element, {
    classNames: {
      containerOuter: 'gallery__choices',
    },
    searchEnabled: false,
    shouldSort: false,
    placeholder: true,
    itemSelectText: '',
    resetScrollPosition: false,
  });

  const swiper = new Swiper('.hero__swiper', {
    speed: 4000,
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
    delay: 5000
  },
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  allowTouchMove: false,
})

  const swiper1 = new Swiper('.gallery__swiper', {
    navigation: {
      prevEl: '.gallery__swiper-button-prev',
      nextEl: '.gallery__swiper-button-next',
      disabledClass: 'gallery__swiper-button-disabled',
    },
    // loop: true,
    slidesPerColumn: 1,
    slidesPerView: 1,
    spaceBetween: 20,
    navigator: true,
    pagination: {
      el: '.gallery__pagination',
      type: 'fraction',
    },
    breakpoints: {
      768: {
        slidesPerColumn: 2,
        slidesPerView: 2,
        spaceBetween: 34,
      },
      1024: {
        slidesPerColumn: 2,
        slidesPerView: 2,
        spaceBetween: 34,
      },
      1920: {
        slidesPerColumn: 2,
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50,
      },
    },
    debugger: true,
  })

  const swiper2 = new Swiper('.events__swiper', {
    slidesPerColumn: 1,
    slidesPerView: 1,
    spaceBetween: 10,
    centeredSlides: true,
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
      prevEl: '.publications__swiper-button-prev',
      nextEl: '.publications__swiper-button-next',
      disabledClass: 'publications__swiper-button-disabled',
    },
    slidesPerView: 2,
    spaceBetween: 34,
    pagination: {
      el: '.swiper-pagination3',
      type: 'fraction',
    },

    breakpoints: {
      1024: {
        slidesPerView: 2,
        spaceBetween: 34,
      },
      1920: {
        slidesPerView: 3,
        spaceBetween: 15,
      }
    },
    debugger: true,
  })

  const categories = document.querySelectorAll('.publications__element')
  if (document.documentElement.clientWidth <= 767) {
    for (let element of categories) {
      element.classList.add('hiden')
    }
  }

  document.querySelector('.publications__selectlink').addEventListener('click', function() {
    document.querySelector('.publications__selectlink').classList.toggle('is-active')
    if (document.querySelector('.publications__selectlink').classList.contains('is-active')) {
      for (let element of categories) {
        element.classList.remove('hiden')
        element.children[1].classList.add('hiden')
      }
    } else {
      for (let element of categories) {
        child = element.children[0].children[0]
        if (!child.checked) {
          element.classList.add('hiden')
        } else {
          element.children[1].classList.remove('hiden')
        }
      }
    }
  })

  document.querySelectorAll('.publications__categorycross').forEach(function(categoryRemove) {
    categoryRemove.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path
      document.querySelector(`[data-target="${path}"]`).classList.add('hiden')
    })
  })

  const swiper_4 = new Swiper('.projects__swiper', {
    navigation: {
      prevEl: '.projects__swiper-button-prev',
      nextEl: '.projects__swiper-button-next',
      disabledClass: 'projects__swiper-button-disabled',
    },
    slidesPerView: 1,
    spaceBetween: 5,
    slidesPerColumn: 1,
    centeredSlidesBounds: true,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      768: {
        centeredSlidesBounds: false,
        slidesPerView: 2,
        spaceBetween: 35,
      },
      // when window width is >= 480px
      1024: {
        slidesPerView: 2,
        spaceBetween: 51,
      },
      // when window width is >= 640px
      1920: {
        slidesPerView: 3,
        spaceBetween: 52,
      }
    },
    debugger: true,
  })

  Map
  ymaps.ready(init);
  function init(){
    var myMap = new ymaps.Map("yandex__map", {

      center: [55.76,37.60],
      zoom: 14,
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

  document.querySelectorAll(`[data-target="31"]`).forEach(function(tabContent) {
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

  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("accordion").accordion({
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
  document.querySelector(`[data-target="322"]`).classList.add('item_active')
  document.querySelector(`[data-target="31"]`).classList.add('is-active')


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
      const painter = document.querySelector(`[data-target="${path}"]`)
      painter.classList.add('item_active')

      if (document.documentElement.clientWidth <= 1024) {
        painter.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    })
  })

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
      name: {
        minLength: 'Минимум 2 символа',
        maxLength: 'Максимум 20 символов',
        strength: 'Недопустимый формат',
      },
      tel: 'Недопустимый формат',
    },
    colorWrong: 'red'
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
