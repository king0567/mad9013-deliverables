function init() {
  const toggles = document.querySelectorAll(".toggle");

  function handleToggle(toggle) {
    const targetId = toggle.dataset.target;

    const target = document.getElementById(targetId);
    const clickToClose = document.querySelector(`[data-toggle="${targetId}"]`);

    function updateState() {
      toggle.classList.toggle("open");
      target.classList.toggle("open");
      clickToClose.classList.toggle("open");
    }

    toggle.addEventListener("click", updateState);
    clickToClose.addEventListener("click", updateState);
  }

  toggles.forEach((toggle) => handleToggle(toggle));

  const toTop = document.querySelector(".to-top");

  function handleToTop() {
    if (window.scrollY > 50) {
      toTop.classList.add("visible");
    } else {
      toTop.classList.remove("visible");
    }
  }

  toTop && handleToTop();

  toTop && window.addEventListener("scroll", handleToTop);
}

document.addEventListener("DOMContentLoaded", init);
