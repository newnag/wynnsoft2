function slide_service(){
  const swiper = new Swiper('.slide-package', {
    spaceBetween: 20,
    breakpoints:{
      360:{
        slidesPerView:1,
        
      },
      600:{
        slidesPerView:2,

      },
      768:{
        slidesPerView:3,

      },
      1024:{
        slidesPerView:4,

      },
      1280:{
        slidesPerView:5,

      }
    }
  });
}


function select_type_pack(){
  const swiper = new Swiper('.all-package', {
    spaceBetween: 50,
    breakpoints:{
      360:{
        slidesPerView:1,
        
      },
      600:{
        slidesPerView:2,

      },
      768:{
        slidesPerView:2,

      },
      1024:{
        slidesPerView:3,

      },
      1280:{
        slidesPerView:3,

      }
    }
  });
}

// สไลด์ตัวกดเลือกแพ็คเกจ
function select_type_package(that){
  document.querySelectorAll('.package .all-package .swiper-wrapper .swiper-slide').forEach(Ele=>{
    Ele.classList.remove('active')
  })
  let element = that.closest('.swiper-slide')
  element.classList.add('active')
}

///////////////////////////////////////////////////////////////////////////////////////
//@ function use

slide_service()
select_type_pack()