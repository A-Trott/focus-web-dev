
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