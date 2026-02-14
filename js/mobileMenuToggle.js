const asideButton = document.getElementById("aside-button");
const categoryAside = document.querySelector(".category-aside");

// 버튼 클릭 시 카테고리 창 열기/닫기
asideButton.addEventListener("click", (e) => {
    e.stopPropagation();
    
    if (categoryAside.classList.contains("hidden")) {
        categoryAside.classList.remove("hidden");
        categoryAside.classList.add("flex"); // Tailwind에서 hidden을 풀 땐 flex나 block 추가
    } else {
        categoryAside.classList.add("hidden");
        categoryAside.classList.remove("flex");
    }
});

// 화면의 다른 곳 클릭하면 닫히게 처리
window.addEventListener("click", (e) => {
    if (!categoryAside.contains(e.target) && e.target !== asideButton) {
        categoryAside.classList.add("hidden");
        categoryAside.classList.remove("flex");
    }
});