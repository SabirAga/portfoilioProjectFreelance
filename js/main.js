const nav = document.querySelector('#nav');
const navButton = document.querySelector('#nav-btn');
const navButtonImg = document.querySelector('#nav-btn-img');

navButton.onclick = () => {
    if (nav.classList.toggle ('open')) {
        navButtonImg.src = "./img/icons/NAV-CLOSE.svg";
    } else {
        navButtonImg.src = "./img/icons/NAV.svg";
    }
} 

AOS.init( )