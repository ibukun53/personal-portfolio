const navToggle=document.getElementById("navToggle");
const nav=docoment.getElementById("nav");
const navIcon=document.getElemenByAll('.navIcon');


navToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
    navIcon.forEach(icon => {
            icon.classList.toggle('hidden')
        })
}

)
