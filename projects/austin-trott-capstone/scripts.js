/* new concept -- clickable tabs */
/* ======== display card setup tabs function ========== */
function setupTabs () {
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
// /* ======================== */
//   function setupGallery () {
//     document.querySelectorAll(".thumbnail").forEach(thumbnail => {
//       thumbnail.addEventListener("click", () => {
//         const gallery__grid = thumbnail.parentElement;
//         const bodyGallery = gallery__grid.parentElement;
//         const previewNumber = button.dataset.forPreview;
//         const previewToActivate = bodyGallery.querySelector(`.dp-card__preview[data-preview="${previewNumber}"]`);
  
//         menu.querySelectorAll(".thumbnail").forEach(button => {
//           button.classList.remove("thumbnail--active");
//         });
//         bodyGallery.querySelectorAll(".dp-card__preview").forEach(preview => {
//           preview.classList.remove(".dp-card__preview--active");
//         });
//         button.classList.add("thumbnail--active");
//         previewToActivate.classList.add(".dp-card__preview--active");
//       });
//     });
//   }
//   document.addEventListener("DOMContentLoaded", () => {
//     setupGallery();
  
//     document.querySelectorAll(".dp-card__preview").forEach(bodyGallery => {
//       bodyGallery.querySelector(".gallery__grid .thumbnail").click();
//     });
//   });