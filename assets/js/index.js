const btn = document.getElementById("goUpBtn");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  console.log("cliock");
});

// function botaoaparece() {
//   btn.classList.toggle("visible", window.scrollY >= 600);
// }
// botaoaparece();

// addEventListener("scroll", () => console.log(window.scrollY));
//600
