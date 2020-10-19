const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

//show navbar
hamburger.addEventListener('click',()=>{
    navLinks.classList.toggle('open');
});
//hide navbar on scroll
window.onscroll = () => {
    let currentScrollPos = window.pageYOffset;
    if (currentScrollPos > 20) {
      navLinks.style.display = "none";
    } else {
      navLinks.style.display = "flex";
    }
  }