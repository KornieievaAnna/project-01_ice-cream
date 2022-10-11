(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-openreadmore]"),
    closeModalBtn: document.querySelector("[data-modal-closereadmore]"),
    modal: document.querySelector("[data-modalreadmore]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open");
    refs.modal.classList.toggle("is-hidden");
  }
})();