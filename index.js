// toggle icon of navbar

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

window.addEventListener('load', function () {
    window.scrollTo(0, 0);
});

menuIcon.addEventListener('click' , (e)=>{
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
});

// scroll section active link

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop-150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id + ']').classList.add('active');
            });
        }
    });

    // sticky navbar
    let header = document.querySelector('header');
    // console.log("hii ", window.scrollY);
    // header.classList.toggle('stickyy' , window.scrollY > 100);

    // remove toggle icon and navbar
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
}

ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content , heading' , {origin: 'top' });
ScrollReveal().reveal('.home-img , .services-container , .portfolio-box , .contact form' , {origin: 'bottom' });
ScrollReveal().reveal('.home-contact h1 , .about-img' , {origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-content' , {origin: 'right' });

const typed = new Typed('.multiple-text' , {
    strings : ['FullStack Developer' , 'Web Designer' , 'Competitve Programmer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});