const modalOverlay = document.querySelector("#modal-container");
const shuffleModal = document.querySelector("#shuffle-modal");
const helpModal = document.querySelector("#help-modal");
const resetModal = document.querySelector("#reset-modal");
const invalidModal = document.querySelector("#invalid-modal");

const shoeModalBtn = document.querySelector("#shoe-modal-button");
const resetModalBtn = document.querySelector("#reset-modal-button");
const invalidBtn = document.querySelector("#invalid-button");

const modals = [modalOverlay, shuffleModal, helpModal, resetModal, invalidModal];

export function closeModal() {
  modals.forEach(modal => {
    modal.style.display = "none";
  });
}

export function openModal(modal) {
  modalOverlay.style.display = "flex";
  switch (modal) {
    case "shuffle":
      shuffleModal.style.display = "flex";
      break;
    case "help":
      helpModal.style.display = "flex";
      break;
    case "reset":
      resetModal.style.display = "flex";
      break;
    case "invalid":
      invalidModal.style.display = "flex";
      break;
  }
}

modalOverlay.addEventListener("click", () => {
  closeModal();
});
shuffleModal.addEventListener("click", e => {
  e.stopPropagation();
});
helpModal.addEventListener("click", e => {
  e.stopPropagation();
});
resetModal.addEventListener("click", e => {
  e.stopPropagation();
});
invalidModal.addEventListener("click", e => {
  e.stopPropagation();
});

resetModalBtn.addEventListener("click", e => {
  e.stopPropagation();
  closeModal();
  openModal("reset");
});

shoeModalBtn.addEventListener("click", e => {
  e.stopPropagation();
  closeModal();
  openModal("shuffle");
});

invalidBtn.addEventListener("click", () => {
  closeModal();
});
