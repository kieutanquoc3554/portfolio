document.addEventListener("DOMContentLoaded", function () {
  const openModalBtn = document.getElementById("openModalBtn");
  const closeModalBtn = document.getElementById("closeModalBtn");
  const modal = document.getElementById("cvModal");

  openModalBtn.addEventListener("click", function () {
    modal.classList.remove("hidden");
  });

  closeModalBtn.addEventListener("click", function () {
    modal.classList.add("hidden");
  });

  // Optional: Click outside modal content to close
  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.classList.add("hidden");
    }
  });
});
