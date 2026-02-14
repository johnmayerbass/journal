const asideButton = document.getElementById("aside-button");
const categoryAside = document.querySelector(".category-aside");
const mobileMenu = document.getElementById("mobileMenu");

window.addEventListener("click", (event) => {

  if (event.target === asideButton) {
    categoryAside.classList.toggle("hidden");
    mobileMenu.innerHTML = "";
    return;
  }

  if (event.target.closest(".category-aside")) {
    return;
  }

  categoryAside.classList.add("hidden");
  mobileMenu.innerHTML = "";
});
