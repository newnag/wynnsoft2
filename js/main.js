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
  that.querySelector('.list-lang').classList.toggle('show')
}

// ติดต่อเรา
function open_contact(that){
  document.querySelector('.top-menu .list-lang').classList.remove('show')
  that.querySelector('.text-contact').classList.toggle('show')
}


// @Hamburger Mobile Menu
// เปิดเมนูของมือถือ
function open_mobile_menu(){
  document.querySelector('.header .menu-nav').classList.add('show')
}
// ปิดเมนูมือถือ
function close_mobile_menu(){
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
}