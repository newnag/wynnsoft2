function timeline(){
  let swiper = new Swiper(".timeline", {
    spaceBetween: 50,
    breakpoints:{
      320:{
        slidesPerView: 2,
      },
      640:{
        slidesPerView: 2,
      },
      768:{
        slidesPerView: 3
      }
    }
  });
}

timeline()