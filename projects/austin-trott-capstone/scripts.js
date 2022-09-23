






/* new concept -- clickable tabs */


/* ======== display card setup tabs function ========== */


function setupTabs() {
  document.querySelectorAll(".tabs__button").forEach(button => {
    button.addEventListener("click", () => {
      const menu = button.parentElement;
      const tabsContainer = menu.parentElement;
      const tabNumber = button.dataset.forTab;
      const tabToActivate = tabsContainer.querySelector(`.tabs__content[data-tab="${tabNumber}"]`);

      menu.querySelectorAll(".tabs__button").forEach(button => {
        button.classList.remove("tabs__button--active");
      });
      tabsContainer.querySelectorAll(".tabs__content").forEach(tab => {
        tab.classList.remove("tabs__content--active");
      });
      button.classList.add("tabs__button--active");
      tabToActivate.classList.add("tabs__content--active");
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setupTabs();

  document.querySelectorAll(".dp-card").forEach(tabsContainer => {
    tabsContainer.querySelector(".tabs__menu .tabs__button").click();
  });
});

/* ======== display card setup tabs function ========== */
function setupGallery() {
  document.querySelectorAll(".thumbnail").forEach(button => {
    button.addEventListener("click", () => {
      const menu = button.parentElement;
      const tabsContainer = menu.parentElement;
      const tabNumber = button.dataset.forPreview;
      const tabToActivate = tabsContainer.querySelector(`.preview-card .preview-card__content[data-preview="${tabNumber}"]`);

      menu.querySelectorAll(".thumbnail").forEach(button => {
        button.classList.remove("thumbnail--active");
      });
      tabsContainer.querySelectorAll(".preview-card .preview-card__content").forEach(tab => {
        tab.classList.remove("preview-card__content--active");
      });
      button.classList.add("thumbnail--active");
      tabToActivate.classList.add("preview-card__content--active");
    });
  });
}
document.addEventListener("DOMContentLoaded", () => {
  setupGallery();

  document.querySelectorAll("body-gallery").forEach(tabsContainer => {
    tabsContainer.querySelector(".gallery__grid .thumbnail").click();
  });
});


