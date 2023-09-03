//const nav=document.getElementById('nav');
var myNav = document.getElementById('nav');
var nav_link = document.getElementsByClassName('nav-link');
var brand = document.getElementById('brand');


window.onscroll = () => {
    if (window.scrollY > 700) {
        myNav.classList.add('navbarActive');
        brand.classList.add('navLinkActive');
        for(var i=0;i<nav_link.length;i++){
            nav_link[i].classList.add('navLinkActive')
        }

    } else {
        myNav.classList.remove('navbarActive');
    }
};

