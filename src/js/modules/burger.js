function burger() {
  const burger = document.querySelector(".icon-menu ");
  const burgerMenu = document.querySelector(".menu");

  const body = document.querySelector("body");
  const preScrin = document.querySelector(".menu__pre-scrin");

  burger.addEventListener("click", () => {
    burgerMenu.classList.toggle("active");
  });
  burger.addEventListener("click", () => {
    burger.classList.toggle("_active");
    body.classList.toggle("_lock");
    preScrin.classList.toggle("_active");
  });
}

export default burger;
