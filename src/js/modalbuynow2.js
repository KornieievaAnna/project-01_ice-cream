(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open-buynow2]"),
    closeModalBtn: document.querySelector("[data-modal-close-buynow2]"),
    modal: document.querySelector("[data-modal-buynow2]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open");
    refs.modal.classList.toggle("is-hidden");
  }
})();