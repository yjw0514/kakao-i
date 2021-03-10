'use strict';
// gnbOver()
function gnbOver() {
    document.getElementById('gnb_navbar').style = "background-color:white; box-shadow: 0 0 6px 0 rgba(75,75,75,0.8); transition: all 0.6s ease;";
    document.querySelector('.gnb_content_logo').src = "img/logo_black.png";
    
    for ( let i=0; i<4; i++) {
        document.querySelectorAll('.gnb_content_items')[i].style = "color:rgb(19,20,21);";
    }
    for ( let i=0; i<2; i++) {
        document.querySelectorAll('.gnb_link_items')[i].style = "color:rgb(19,20,21);";
    }
    document.querySelector('.gnb_link_icon').src = "img/link_black.svg";
 }

// gnbOut()
 function gnbOut() {
    document.getElementById('gnb_navbar').style = "background-color:transparent; transition: all 0.6s ease;";
    document.querySelector('.gnb_content_logo').src = "img/logo_white.png";

    for ( let i=0; i<4; i++) {
        document.querySelectorAll('.gnb_content_items')[i].style = "color:white;";
    }
    for ( let i=0; i<2; i++) {
        document.querySelectorAll('.gnb_link_items')[i].style = "color:white;";
    }
    document.querySelector('.gnb_link_icon').src = "img/link_white.svg";  
}


// 스크롤 시 gnbOver(), gnbOut()
const navbar = document.getElementById('gnb_navbar');
const gnbItems = document.querySelectorAll('.gnb_content_items'); 
const navbarHeight = navbar.getBoundingClientRect().height
document.addEventListener('scroll', () => {
    if (window.scrollY > navbarHeight) {
        gnbOver();
    }
    else {
        gnbOut();
    }
});




