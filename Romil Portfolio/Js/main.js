
window.addEventListener('scroll', function () {
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

function disp() {
    alert("Uploading Soon...")
};

function show() {
    alert("Temporarily Out Of Service")
};

function toggleMenu(){
    var menuToggle = document.querySelector(".toggle");
    var menu = document.querySelector(".menu");
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
};