(() => {
  const refs = {
    openModalBtn1: document.querySelector("[data-modal-open-1]"),
    openModalBtn2: document.querySelector("[data-modal-open-6]"),
    openModalBtn3: document.querySelector("[data-modal-open-7]"),

    closeModalBtn: document.querySelector("[data-modal-close-1]"),
    modal: document.querySelector("[data-modal-1]"),
  };

  refs.openModalBtn1.addEventListener("click", toggleModal);
  refs.openModalBtn2.addEventListener("click", toggleModal);
  refs.openModalBtn3.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open");
    refs.modal.classList.toggle("is-hidden");
  }
})();