/*Animation menu-btn*/
const menuBtn = document.querySelector('.menu-btn');
const checkMenu = document.querySelector('#check-menu');
menuBtn.addEventListener('click', () => {
  if(checkMenu.checked == false) {
    menuBtn.classList.add('open');
  } else {
    menuBtn.classList.remove('open');
  }
});
/*Fin animation menu-btn*/