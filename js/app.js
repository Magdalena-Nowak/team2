gsap.registerPlugin(ScrollTrigger);

const servicesTitles = document.querySelectorAll('.services__text-title');
const servicesIcons = document.querySelectorAll('.services__icon-wrapper');
const servicesLists = document.querySelectorAll('.services__text-list');
const parentClass = ".services__text-wrapper";

function gsapAnimation(elements, duration ) {
    elements.forEach(element => {
        let parentElement = element.closest(parentClass);
        gsap.to(element, {
            scrollTrigger: {
                trigger: parentElement,
                start: "50vh center",
            },
            x: "0%",
            y: "0%",
            opacity: 1,
            duration: duration,
            ease: 'power3.inOut'
        })
    })
}

gsapAnimation(servicesTitles,  0.8);
gsapAnimation(servicesIcons,  0.4);
gsapAnimation(servicesLists,  0.8);