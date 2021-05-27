function select_type(that,type){
  that.closest('.box-select').querySelectorAll('.choice').forEach(Ch => {
    Ch.classList.remove('active')
  });
  that.classList.add('active')

  if(type === "template"){
    document.querySelector('.grid-design[data-type="template"]').classList.remove('Hidden')
    document.querySelector('.grid-design[data-type="packaging"]').classList.add('Hidden')
  }
  else if(type === "packaging"){
    document.querySelector('.grid-design[data-type="template"]').classList.add('Hidden')
    document.querySelector('.grid-design[data-type="packaging"]').classList.remove('Hidden')
  }
}