// สไลด์
function slide_home(){
  let swiper = new Swiper('.slide-home', {
    direction: 'vertical',
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  swiper.on('slideChange', function () {
    check_current_slide()
  });
}

// สไลด์บริการ
function slide_service(){
  let swiper = new Swiper(".slide-service", {
    spaceBetween: 30,
    centeredSlides: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints:{
      640:{
        slidesPerView: 1,
      },
      768:{
        slidesPerView: 2,
      },
      1024:{
        slidesPerView: 3,
      }
    }
  });
}

// นับจำนวนสไลด์
function count_slide(){
  let target = document.querySelector('.homepage .pagi .total')
  let current = document.querySelector('.homepage .pagi .current')
  let slide = document.querySelector('.homepage .slide-home .swiper-wrapper .swiper-slide').getAttribute('aria-label')
  let total = slide.split(" / ")

  current.textContent = total[0]
  target.textContent = total[1]
}

function check_current_slide(){
  setTimeout(()=>{
    let element = document.querySelector('.homepage .slide-home .swiper-wrapper .swiper-slide-active').getAttribute('aria-label')
    let current = element.split(" / ")

    document.querySelector('.homepage .pagi .current').textContent = current[0]
  },100)
}

//////////////////////////////////////////////////////////////
//@ use function

slide_home()
count_slide()
slide_service()