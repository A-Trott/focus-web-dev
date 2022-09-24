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

/* ======== display card setup gallery function ========== */

function setupGallery() {
  document.querySelectorAll(".thumbnail").forEach(thumbnail => {
    thumbnail.addEventListener("click", () => {
      const gallery = thumbnail.parentElement;
      const previewsContainer = gallery.parentElement;
      const previewNumber = thumbnail.dataset.forPreview;
      const previewToActivate = previewsContainer.querySelector(`.preview-card .preview-card__content[data-preview="${previewNumber}"]`);

      gallery.querySelectorAll(".thumbnail").forEach(thumbnail => {
        thumbnail.classList.remove("thumbnail--active");
      });
      previewsContainer.querySelectorAll(".preview-card .preview-card__content").forEach(preview => {
        preview.classList.remove("preview-card__content--active");
      });
      thumbnail.classList.add("thumbnail--active");
      previewToActivate.classList.add("preview-card__content--active");
    });
  });
}
/* ============ run tab and gallery scripts ================ */

document.addEventListener("DOMContentLoaded", () => {
  setupTabs();
  setupGallery();

  document.querySelectorAll(".dp-card").forEach(tabsContainer => {
    tabsContainer.querySelector(".tabs__menu .tabs__button").click();
  });
  document.querySelectorAll("body-gallery").forEach(previewsContainer => {
    previewsContainer.querySelector(".gallery__grid .thumbnail").click();
  });
});

