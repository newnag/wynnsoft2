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

function step_form(that){
  let step = that.getAttribute('data-step')
  //console.log(document.querySelector('.form1 #name').getAttribute('id'))
  if(step === "1"){
    // check empty input
    valid_input("empty",document.querySelector('.form1 #name'))

  }
}

function valid_input(type,element){
  if(type === "empty"){
    if(element.length == 0 || element.value == ""){
      Swal.fire(
        'แจ้งเตือน',
        'คุณกรอกข้อมูลไม่ครบ',
        'warning'
      ).then(()=>{
        element.classList.add('valid-error')
        element.placeholder = "กรุณากรอกข้อมูล"
        zenscroll.center(element)
      })
    }
    else{
      element.classList.remove('valid-error')
      element.placeholder = ""
    }
  }
}

/////////////////////////////////////////////////////////////////////
//@ use function
timeline()