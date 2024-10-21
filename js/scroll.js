

// -----Button up
const upBtn = document.querySelector(".footer__button");
const upSection = document.querySelector('.nav-container');

upBtn.addEventListener('click',function(e){
  upSection.scrollIntoView({behavior:'smooth'})
})

// -----Button up