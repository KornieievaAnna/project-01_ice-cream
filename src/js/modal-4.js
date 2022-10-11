(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open-4]"),
    closeModalBtn: document.querySelector("[data-modal-close-4]"),
    modal: document.querySelector("[data-modal-4]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open");
    refs.modal.classList.toggle("is-hidden");
  }
})();