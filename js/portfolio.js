function slide_cate_port(){
  const swiper = new Swiper('.category', {
    navigation: {
      nextEl: '.select-cate .arrow .right',
      prevEl: '.select-cate .arrow .left',
    },
    breakpoints:{
      640:{
        slidesPerView: 2,
      },
      1024:{
        slidesPerView: 3,
      },
      1280:{
        slidesPerView: 7,
        spaceBetween: 10
      }
    }
  });
}

function slide_preview(){
  const swiper = new Swiper('.slide-preview', {
    navigation: {
      nextEl: '.preview-port .swiper-button-next',
      prevEl: '.preview-port .swiper-button-prev',
    },
    slidesPerView:1,
    breakpoints:{
      640:{
        slidesPerView: 2,
        spaceBetween: 10
      },
      1024:{
        slidesPerView: 3,
        spaceBetween: 10
      },
      1280:{
        slidesPerView: 4,
        spaceBetween: 10
      }
    }
  });
}

function count_slide(){
  let target = document.querySelector('.portfolio .swiper-pagination .total')
  let current = document.querySelector('.portfolio .swiper-pagination .current')
  let slide = document.querySelector('.portfolio .slide-preview .swiper-wrapper .swiper-slide').getAttribute('aria-label')
  let total = slide.split(" / ")

  current.textContent = total[0]
  target.textContent = total[1]
}

function check_current_slide(that){
  let element = that.getAttribute('aria-label')
  let current = element.split(" / ")

  document.querySelector('.portfolio .swiper-pagination .current').textContent = current[0]
  document.querySelectorAll('.slide-preview .swiper-wrapper .swiper-slide').forEach(Ele=>{
    Ele.classList.remove('active-select')
  })
  that.classList.add('active-select')
}

///////////////////////////////////////////////////////////////////////////////////////
// @ use function

slide_cate_port()
slide_preview()
count_slide()