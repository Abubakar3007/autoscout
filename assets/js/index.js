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

    languageCloseButton.addEventListener("click", () => {
        languageDropdown.style.display = "none";
        enableScroll();
    })

});

// Custom select js
class CustomSelect {
  constructor(selector) {
    this.selects = document.querySelectorAll(selector);
    if (!this.selects.length) return;
    this._initAll(); // Initialize each select element
    this._bindGlobalEvents(); // For outside click handling
  }

  _initAll() {
    this.selects.forEach(select => this._init(select)); // Initialize each select element
  }

  _init(select) {
    const button = select.querySelector(".select-btn");
    const dropdown = select.querySelector(".select-dropdown");
    const input = select.querySelector(".select-input");
    const options = [...dropdown?.querySelectorAll("li") || []];

    if (!button || !dropdown || !options.length) return;

    select.setAttribute("role", "combobox");
    select.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-haspopup", "listbox");
    dropdown.setAttribute("role", "listbox");
    options.forEach(opt => opt.setAttribute("role", "option"));

    this._restoreSelection(input, button, options);

    // Toggle select button
    button.addEventListener("click", e => {
      e.stopPropagation();
      this._toggleDropdown(select, !dropdown.classList.contains("show"));
    });

    // Toggle dropdown
    options.forEach(option => {
      option.addEventListener("click", () => {
        this._selectOption(option, input, button, options, dropdown, select);
      });
    });

    // keyboard navigation
    button.addEventListener("keydown", e => this._handleKeyboard(e, dropdown, button, options, select));
    dropdown.addEventListener("keydown", e => this._handleKeyboard(e, dropdown, button, options, select));
  }

  _toggleDropdown(select, open) {
    const dropdown = select.querySelector(".select-dropdown");
    const button = select.querySelector(".select-btn");

    // Close all other dropdowns
    document.querySelectorAll(".custom-select .select-dropdown.show").forEach(dd => {
      if (dd !== dropdown) dd.classList.remove("show");
      dd.closest(".custom-select")?.setAttribute("aria-expanded", "false");
    });

    dropdown.classList.toggle("show", open);
    select.setAttribute("aria-expanded", String(open));

    if (open) {
      const selected = dropdown.querySelector(".selected");
      (selected || dropdown.querySelector("li"))?.focus();
    }
  }

  _selectOption(option, input, button, options, dropdown, select) {
    const value = option.getAttribute("data-value") || option.textContent.trim();

    options.forEach(opt => opt.classList.remove("selected"));
    option.classList.add("selected");

    if (input) input.value = value;
    button.textContent = option.textContent.trim();

    this._toggleDropdown(select, false);
  }

  _restoreSelection(input, button, options) {
    if (!input?.value) return;

    const match = options.find(opt => opt.getAttribute("data-value") === input.value);
    if (match) {
      match.classList.add("selected");
      button.textContent = match.textContent.trim();
    }
  }

  _handleKeyboard(e, dropdown, button, options, select) {
    const open = dropdown.classList.contains("show");
    const currentIndex = options.findIndex(opt => opt.classList.contains("selected")) || 0;
    let newIndex = currentIndex;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        if (!open) return this._toggleDropdown(select, true);
        newIndex = (currentIndex + 1) % options.length;
        options[newIndex].focus();
        break;

      case "ArrowUp":
        e.preventDefault();
        if (!open) return this._toggleDropdown(select, true);
        newIndex = (currentIndex - 1 + options.length) % options.length;
        options[newIndex].focus();
        break;

      case "Enter":
      case " ":
        e.preventDefault();
        if (!open) return this._toggleDropdown(select, true);
        const focused = document.activeElement;
        if (focused && focused.tagName === "LI") focused.click();
        break;

      case "Escape":
        if (open) this._toggleDropdown(select, false);
        break;

      case "Tab":
        this._toggleDropdown(select, false);
        break;
    }
  }

  _bindGlobalEvents() {
    document.addEventListener("click", e => {
      if (!e.target.closest(".custom-select")) {
        document.querySelectorAll(".select-dropdown.show").forEach(dd => dd.classList.remove("show"));
        document.querySelectorAll(".custom-select").forEach(sel => sel.setAttribute("aria-expanded", "false"));
      }
    });
  }
}

// Initialize after DOM loads
document.addEventListener("DOMContentLoaded", () => {
  new CustomSelect(".custom-select");
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
