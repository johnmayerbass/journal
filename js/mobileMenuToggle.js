// 페이지 하단이나 js 파일에 작성
const asideBtn = document.getElementById("aside-button");
const categorySection = document.querySelector(".category-aside");

asideBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // 클릭 이벤트가 window로 퍼지는 것 방지
    
    // hidden 클래스가 있으면 제거하고 flex 추가, 없으면 반대
    if (categorySection.classList.contains("hidden")) {
        categorySection.classList.remove("hidden");
        categorySection.classList.add("flex");
    } else {
        categorySection.classList.add("hidden");
        categorySection.classList.remove("flex");
    }
});

// 카테고리 영역 밖을 클릭하면 자동으로 닫히는 기능
window.addEventListener("click", (e) => {
    if (!categorySection.contains(e.target) && e.target !== asideBtn) {
        categorySection.classList.add("hidden");
        categorySection.classList.remove("flex");
    }
});