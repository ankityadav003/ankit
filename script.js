console.log("first")
let ham = document.getElementById("ham");
let navbar = document.getElementById("navbar");
ham.addEventListener("click", () => {
  navbar.classList.toggle("active");
});
console.log("last")