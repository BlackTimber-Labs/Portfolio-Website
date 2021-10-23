// Show menu
const showMenu=(toggleId,navId)=>{
    const toggle=document.getElementById(toggleId);
    nav=document.getElementById(navId);
    if(toggle&&nav){
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav_toggle','nav_menu');

// Active link
const navLink =document.querySelectorAll('.nav-link');
function linkAction() {
    navLink.forEach(n=> n.classList.remove('active'))
    this.classList.add('active')
// Remove menu mobile
    const navMenu=document.getElementById('nav_menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n=>n.addEventListener('click',linkAction))

// Scroll Reveal
const sr=ScrollReveal({
    origin:'top',
    distance:'80px',
    duration:2000,
    reset:true
});
// ScrollRevealHome
sr.reveal('.home-title',{});
sr.reveal('.button',{delay:400});
sr.reveal('.home-img',{delay: 400}); 
sr.reveal('.home-social-icon',{ interval: 200});

/*SCROLL ABOUT*/
sr.reveal('.about-img',{}); 
sr.reveal('.about-subtitle',{delay: 400}); 
sr.reveal('.about-text',{delay: 400}); 

/*SCROLL SKILLS*/
sr.reveal('.skills-subtitle',{}); 
sr.reveal('.skills-text',{}); 
sr.reveal('.skills-data',{interval: 200}); 
sr.reveal('.skills-img',{delay: 600});

/*SCROLL WORK*/
sr.reveal('.work-img',{interval: 200}); 

/*SCROLL CONTACT*/
sr.reveal('.contact-input',{interval: 200}); 