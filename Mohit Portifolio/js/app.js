const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navlinks = document.querySelectorAll('.nav-links li')

    
    burger.addEventListener('click' , ()=>{
        // Toggle Now
        nav.classList.toggle('nav-active')
        
        // Animate Links
        navlinks.forEach((link , index)=>{
            if(link.style.animation){
                link.style.animation = ``;
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`
            }
            //console.log(index / 7);
        });

        // Burger Animation

        burger.classList.toggle('toggle');
    });

}

navSlide();