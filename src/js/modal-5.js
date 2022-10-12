(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open-5]"),
    closeModalBtn: document.querySelector("[data-modal-close-5]"),
    modal: document.querySelector("[data-modal-5]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open");
    refs.modal.classList.toggle("is-hidden");
  }
})();