const menuButton = document.getElementById("menu-button");
const menu = document.getElementById("menu");
const mobileMenu = document.getElementById("mobileMenu");
const categoryAside = document.querySelector(".category-aside");

window.addEventListener("click", (event) => {

    // ✅ 메뉴 버튼 클릭 → 카테고리 토글
    if (event.target === menuButton) {
        categoryAside.classList.toggle("hidden");
        mobileMenu.innerHTML = ""; // 기존 모바일 메뉴 닫기
        return;
    }

    // 기존 모바일 메뉴 클릭 이벤트 유지
    else if (event.target.parentNode === mobileMenu) {
        event.preventDefault();

        if (event.target.innerText + ".md" === "blog.md") {
            if (blogList.length === 0) {
                initDataBlogList().then(() => {
                    renderBlogList();
                });
            } else {
                renderBlogList();
            }

            const url = new URL(origin);
            url.searchParams.set("menu", event.target.innerText + ".md");
            window.history.pushState({}, "", url);
            mobileMenu.innerHTML = "";
        } else {
            renderOtherContents(event.target.innerText + ".md");
            mobileMenu.innerHTML = "";
        }
    }

    // 외부 클릭 → 전부 닫기
    else {
        mobileMenu.innerHTML = "";
        categoryAside.classList.add("hidden");
    }
});


/*
new code
*/
// const asideButton = document.getElementById("aside-button");
// const categoryAside = document.querySelector(".category-aside");

// window.addEventListener("click", (event) => {
//   // 카테고리 버튼 클릭
//   if (event.target.closest("#aside-button")) {
//     categoryAside.classList.toggle("hidden");
//     return;
//   }

//   // aside 내부 클릭은 유지
//   if (event.target.closest(".category-aside")) {
//     return;
//   }

//   // 다른 영역 클릭하면 닫기
//   categoryAside.classList.add("hidden");
// });
