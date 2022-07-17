// for toggle active class
const nav_a = document.querySelectorAll("#navbar li a");

nav_a.forEach(function (links) {
    links.addEventListener('click', () => {
        nav_a.forEach(function (links) {
            links.classList.remove("active")
        })
        links.classList.add("active")
    })
    links
})

// hamburger menu for mobile and tablets
const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('show');
    })
}
if (bar) {
    close.addEventListener('click', () => {
        nav.classList.remove('show');
    })
}

// for sproduct toggle

var mainImg = document.getElementById("main-img");
    var smallImg = document.getElementsByClassName("small-img");


    smallImg[0].onclick = function(){
        mainImg.src = smallImg [0].src;
    }
    smallImg[1].onclick = function(){
        mainImg.src = smallImg [1].src;
    }
    smallImg[2].onclick = function(){
        mainImg.src = smallImg [2].src;
    }
    smallImg[3].onclick = function(){
        mainImg.src = smallImg [3].src;
    }
    

