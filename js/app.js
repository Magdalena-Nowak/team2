gsap.registerPlugin(ScrollTrigger);

const servicesTitles = document.querySelectorAll('.services__text-title');
const servicesIcons = document.querySelectorAll('.services__icon-wrapper');
const servicesLists = document.querySelectorAll('.services__text-list');

servicesTitles.forEach(title => {
    let parentElement = title.closest(".services__text-wrapper");
    gsap.to(title, {
        scrollTrigger: {
            trigger: parentElement,
            start: "50vh center",
            markers: true,
        },
        x: "0%",
        opacity: 1,
        duration: 0.8,
        ease: 'power3.inOut'
    })
})

servicesIcons.forEach(icon => {
    let parentElement = icon.closest(".services__text-wrapper");
    gsap.to(icon, {
        scrollTrigger: {
            trigger: parentElement,
            start: "50vh center",
            markers: true,
        },
        x: "0%",
        opacity: 1,
        duration: 0.2,
        ease: 'power3.inOut'
    })
})

servicesLists.forEach(list => {
    let parentElement = list.closest(".services__text-wrapper");
    gsap.to(list, {
        scrollTrigger: {
            trigger: parentElement,
            start: "50vh center",
            markers: true,
        },
        y: "0%",
        opacity: 1,
        duration: 1.5,

        ease: 'power3.inOut'

    })
})