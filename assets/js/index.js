// header.js
document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById("menu-btn");
    const menuOverlay = document.querySelector(".header-bg"); // overlay background
    const menuCloseButton = document.getElementById("menu-close");
    const menuContent = document.getElementById("menu-content");
    const languageButton = document.getElementById("language-btn");
    const languageDropdown = document.getElementById("language-popup");
    const languageCloseButton = document.getElementById("language-close-btn");

    if (!menuButton || !menuOverlay || !menuCloseButton || !menuContent || !languageButton || !languageDropdown || !languageCloseButton) return;

    // Open menu
    function openMenu() {
        menuOverlay.classList.add("show");
        menuCloseButton.classList.add("show");
        menuContent.classList.add("active");
        disableScroll();
    }

    // Close menu
    function closeMenu() {
        menuOverlay.classList.remove("show");
        menuCloseButton.classList.remove("show");
        menuContent.classList.remove("active");
        enableScroll();
    }

    // Toggle menu
    function toggleMenu() {
        if (menuContent.classList.contains("active")) {
            closeMenu();
        } else {
            openMenu();
        }
    }

    // Events
    menuButton.addEventListener("click", openMenu);
    menuCloseButton.addEventListener("click", closeMenu);

    // Close if clicking outside menu content (overlay)
    menuOverlay.addEventListener("click", (e) => {
        if (!menuContent.contains(e.target)) {
            closeMenu();
        }
    });

    // Close on ESC key (accessibility)
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && menuContent.classList.contains("active")) {
            closeMenu();
        }
    });

    // Language menu open
    languageButton.addEventListener("click", () => {
        languageDropdown.style.display = "block";
        disableScroll();
    });

    languageCloseButton.addEventListener("click",()=>{
        languageDropdown.style.display = "none";
        enableScroll();
    })

});

// Utility: lock/unlock scroll
function disableScroll() {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
}

function enableScroll() {
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
}
