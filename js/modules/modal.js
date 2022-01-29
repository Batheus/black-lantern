export default class Modal {
  constructor(btnOpen, btnClose, containerModal) {
    this.btnOpen = document.querySelector(btnOpen);
    this.btnClose = document.querySelector(btnClose);
    this.containerModal = document.querySelector(containerModal);

    // Bind on callback to reference
    // the class object
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.modalOutsideClick = this.modalOutsideClick.bind(this);
  }

  // Open or closes the modal
  toggleModal() {
    this.containerModal.classList.toggle('active');
  }

  // Add the toggle events to the modal
  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  // Close the modal when you click outside the modal
  modalOutsideClick(event) {
    if (event.target === this.containerModal) {
      this.toggleModal();
    }
  }

  // Add the events to the modal elements
  addModalEvents() {
    this.btnOpen.addEventListener('click', this.eventToggleModal);
    this.btnClose.addEventListener('click', this.eventToggleModal);
    this.containerModal.addEventListener('click', this.modalOutsideClick);
  }

  init() {
    if (this.btnOpen && this.btnClose && this.containerModal) {
      this.addModalEvents();
    }
    return this;
  }
}
