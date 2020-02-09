const modalOverlay = document.querySelector("#modal-container");
const shuffleModal = document.querySelector("#shuffle-modal");

const modals = [modalOverlay, shuffleModal];

export function closeModal() {
  modals.forEach(modal => {
    modal.style.display = "none";
  });
}

export function openShuffleModal() {
  modalOverlay.style.display = "flex";
  shuffleModal.style.display = "flex";
}
