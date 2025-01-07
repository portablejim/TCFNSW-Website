document.querySelectorAll(".goToTop").forEach((el, key, num) => {
  el.addEventListener("click", (ev) => {
    ev.preventDefault();
    window.scroll(0, 0);
    return false;
  });
});
