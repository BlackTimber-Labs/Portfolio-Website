const themeBtn1 = document.querySelector('#themeBtn1')
const themeBtn2 = document.querySelector('#themeBtn2')

themeBtn1.addEventListener('click', () => {
    document.body.classList.toggle('light')
})
themeBtn2.addEventListener('click', () => {
    document.body.classList.toggle('light')
})
const tL = gsap.timeline({ defaults: { ease: 'back' } })

tL.from('.illus', {
    opacity: 0,
    duration: 3,
    delay: 1
}).to('#y-1', {
    x: '200px',
    repeat: -1,
    yoyo: true,
    duration: .8
}, '-=5').to('#y-2', {
    x: '150px',
    repeat: -1,
    yoyo: true,
    duration: .5
}, '-=5').to('#y-3', {
    x: '50px',
    repeat: -1,
    yoyo: true,
    duration: .6
}, '-=5').to('#r-1', {
    x: '100px',
    repeat: -1,
    yoyo: true,
    duration: .6
}, '-=5')

const tL2 = gsap.timeline({ defaults: { ease: 'power4' } })
tL2.from('.hero img', {
    opacity: 0,
    y: '-20%',
    duration: 2,
    delay: 1
}).from('.hero .heroTitle', {
    opacity: 0,
    y: '100%',
    duration: 1
}, '-=2').from('.hero .heroBtns #Btn', {
    opacity: 0,
    y: '100%',
    duration: 1,
    stagger: .3
}, '-=1').from('.navbar', {
    opacity: 0,
    duration: 2,
    delay: 1
}, '-=2')
const scrollAbt = gsap.timeline({
    scrollTrigger: {
        trigger: '.about',
        start: '200px bottom',
        end: '-100px top ',
        // markers: true,
        scrub: true
    }
})
scrollAbt.from('.about .title', {
    x: '-100%',
    opacity: 0,
    duration: 1
}).from('.about .aboutContent span', {
    y: '50%',
    opacity: 0,
    duration: .7,
    stagger: 0.2
}).from('.about .abtBtn', {
    y: '100%',
    opacity: 0,
    duration: .2
})

const scrollSkills = gsap.timeline({
    scrollTrigger: {
        trigger: '.skills',
        start: '400px bottom',
        end: 'top top ',
        // markers: true,
        scrub: true
    }
})

scrollSkills.from('.skills .title', {
    opacity: 0,
    x: '-100%',
    duration: 0.9
}).from('.skills .cardRow', {
    opacity: 0,
    x: '-100%',
    duration: 1
}, '-=0.6')

const scrollProjects = gsap.timeline({
    scrollTrigger: {
        trigger: '.projects',
        start: '400px bottom',
        end: 'top top ',
        //markers: true,
        scrub: true
    }
})

scrollProjects.from('.projects .title', {
    opacity: 0,
    x: '-100%',
    duration: 0.9
}).from('.projects .cardRow', {
    opacity: 0,
    x: '-100%',
    duration: 1
}, '-=0.6')

const scrollContact = gsap.timeline({
    scrollTrigger: {
        trigger: '.contact',
        start: 'top bottom',
        end: 'top center ',
        // markers: true,
        scrub: true
    }
})

scrollContact.from('.contact .title', {
    opacity: 0,
    x: '-100%',
    duration: 0.9
}).from('.contact .iconRow .icon', {
    opacity: 0,
    x: '-100%',
    duration: 0.1
}, '-=0.6')