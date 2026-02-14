const asideButton = document.getElementById("aside-button");
const categoryAside = document.querySelector(".category-aside");

window.addEventListener("click", (event) => {

  if (event.target === asideButton) {
    categoryAside.classList.toggle("hidden");
    return;
  }

  if (event.target.closest(".category-aside")) {
    return;
  }

  categoryAside.classList.add("hidden");
});
