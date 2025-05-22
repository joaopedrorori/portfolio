const btn = document.getElementById("goUpBtn");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
});

const menuMobileBtn = document.querySelector(".navbar-btn");
function abreMenu(event) {
  const navBar = document.querySelector(".navbar");
  const menu = document.querySelector(".navbar-menu");
  const active = navBar.classList.contains("active");
  console.log(event.target);
  menu.addEventListener("click", (e) => {
    const fatherElement = e.target.parentNode.parentNode;
    if (fatherElement === menu) {
      navBar.classList.remove("active");
    }
  });
  if (active) {
    navBar.classList.remove("active");
  } else {
    navBar.classList.add("active");
  }
}
menuMobileBtn.addEventListener("pointerdown", abreMenu);
