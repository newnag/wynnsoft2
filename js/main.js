// @assis menu mobile
// ภาษา
function open_assis_lang(that){
  document.querySelector('.mobile-assismenu .text-contact').classList.remove('show')
  that.querySelector('.list-lang').classList.toggle('show')
}

// ติดต่อเรา
function open_assis_contact(that){
  document.querySelector('.mobile-assismenu .list-lang').classList.remove('show')
  that.querySelector('.text-contact').classList.toggle('show')
}

// @assis menu
// ภาษา
function open_lang(that){
  document.querySelector('.top-menu .text-contact').classList.remove('show')
  document.querySelector('.top-menu .other ul').classList.remove('show')
  that.querySelector('.list-lang').classList.toggle('show')
}

// ติดต่อเรา
function open_contact(that){
  document.querySelector('.top-menu .list-lang').classList.remove('show')
  document.querySelector('.top-menu .other ul').classList.remove('show')
  that.querySelector('.text-contact').classList.toggle('show')
}


// @Hamburger Mobile Menu
// เปิดเมนูของมือถือ
function open_mobile_menu(){
  document.querySelector('.header .menu-nav').classList.add('show')
  document.querySelector('body').style.position = "fixed"
}
// ปิดเมนูมือถือ
function close_mobile_menu(){
  document.querySelector('body').style.position = "unset"
  document.querySelector('.header .menu-nav').classList.remove('show')
}

// @Nav Submenu
// เปิด sub เมนู
function open_nav_submenu(that){
  // เช็ค Device Mobile
  if(/Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    that.classList.toggle('active')
    that.nextElementSibling.classList.toggle('show')
  }
  else if(screen.width > 1023 && screen.width < 1280){
    alert('ไม่แนะนำให้ทำการย่อขนาดหน้าจอในไซส์นี้ อาจจะทำให้การแสดงผลบางอย่างผิดพลาด')
  }
}
// เปิดปิดเมนู other
function open_other_menu(that){
  document.querySelector('.assismenu .text-contact').classList.remove('show')
  document.querySelector('.assismenu .list-lang').classList.remove('show')
  that.querySelector('ul').classList.toggle('show')
}

// เปิด Li ในเทมเพลต
function open_li(that){
  that.closest('.list-menu').querySelectorAll('li').forEach(LI => {
    LI.classList.toggle('show')
  });
}


// เปิดเมนู footer มือถือ
function mobile_open_menu_footer(that){
  that.closest('.list').querySelector('ul').classList.toggle('show')
}

// แสดงเงาที่ header เมื่อเลื่อนจอลงมา
window.onscroll = function(ev) {
  if(window.scrollY >= 600) {
    document.querySelector('header').classList.add('shadow')
  }
  else{
    document.querySelector('header').classList.remove('shadow')
  }
};