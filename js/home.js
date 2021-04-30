function slide_home(){
  let swiper = new Swiper('.slide-home', {
    direction: 'vertical',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
}


//////////////////////////////////////////////////////////////
//@ use function

slide_home()