

// -----Button up
const upBtn = document.querySelector(".footer__button");
const header = document.querySelector('.header');

upBtn.addEventListener('click',function(e){
  header.scrollIntoView({behavior:'smooth'})
})

// -----Button down
const downBtn = document.querySelector(".header__button");
const descriptionSection = document.querySelector('.description');

downBtn.addEventListener('click',function(){
  descriptionSection.scrollIntoView({behavior:'smooth'})
})