const togglebtn = document.querySelector(".hamburger");
const list =document.querySelector(".navbarList");
// console.log(togglebtn,list);

togglebtn.addEventListener("click",()=>{
    list.classList.toggle("open")
})