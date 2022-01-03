

let button = document.getElementById("navbar-toggler").addEventListener("click", toggleFunction);
let navbar = document.getElementById("navbar-links");

function toggleFunction() {

    let x = navbar.style.top;

    if (x=='100%'){
        navbar.style.top = 'calc(-6*3rem)';
    }
    else{
        navbar.style.top = '100%';
    }
        
}
