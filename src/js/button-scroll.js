const btnToUp = document.querySelector('.btn-up');
btnToUp.addEventListener('click', () => {
   window.scrollTo(0, 0);
});

const btnScroll = document.querySelector('.btn-up');
window.onscroll = () => {
   if (window.scrollY > 700) {
      btnScroll.classList.remove('btn-hidden');
   } else if (window.scrollY < 700) {
      btnScroll.classList.add('btn-hidden');
   }
}