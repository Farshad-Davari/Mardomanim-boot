const btnCategory = document.querySelectorAll(".btn-category");

let counter = 0;

btnCategory.forEach((element) => {
    element.addEventListener('click',(e) => {
        e.preventDefault();
        removeClass(); 
        e.target.classList.add("active");
    })

})

function removeClass() {
    btnCategory.forEach((element) => {
        element.classList.toggle("active");
    })
}


