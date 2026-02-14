// 변수 선언 변경
const asideButton = document.getElementById("aside-button");
const categoryPanel = document.getElementById("category-panel"); // ID 부여 권장
const mobileMenu = document.getElementById("mobileMenu");

// 카테고리 토글 함수
asideButton.addEventListener("click", (event) => {
    event.stopPropagation(); // 윈도우 클릭 이벤트 전파 방지
    
    // 1. 데스크탑/모바일 공통: 우측/상단 카테고리 패널 토글
    if (categoryPanel.classList.contains("hidden")) {
        categoryPanel.classList.remove("hidden");
        categoryPanel.classList.add("flex");
    } else {
        categoryPanel.classList.add("hidden");
        categoryPanel.classList.remove("flex");
    }
});

// 외부 클릭 시 닫기 (사용자 편의성)
window.addEventListener("click", (event) => {
    if (!categoryPanel.contains(event.target) && event.target !== asideButton) {
        categoryPanel.classList.add("hidden");
        categoryPanel.classList.remove("flex");
    }
});