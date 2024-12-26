const togglebtn = document.querySelector(".hamburger");
const list = document.querySelector(".list");

togglebtn.addEventListener("click", () => {
    list.classList.toggle("open");
    console.log("clicking")
});