// (() => {
//   const refs = {
//     openModalBtn: document.querySelector("[data-modal-open]"),
//     closeModalBtn: document.querySelector("[data-modal-close]"),
//     modal: document.querySelector("[data-modal]"),
//   };

//   refs.openModalBtn.addEventListener("click", toggleModal);
//   refs.closeModalBtn.addEventListener("click", toggleModal);

//   function toggleModal() {
//     refs.modal.classList.toggle("is-hidden");
//   }
// })();


const modalButtons = document.querySelectorAll('[data-modal-open]');
const modal = document.querySelector('[data-modal]');
const modalClose = document.querySelector('[data-modal-close]');

modalButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    modal.classList.remove('is-hidden');
  });
});

modalClose.addEventListener('click', function() {
  modal.classList.add('is-hidden');
});