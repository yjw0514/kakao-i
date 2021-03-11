'use strict';
// gnbOver()
// function gnbOver() {
    
//     document.getElementById('gnb_navbar').style = "background-color:white; box-shadow: 0 0 6px 0 rgba(75,75,75,0.8); transition: all 0.6s ease;";
//     document.querySelector('.gnb_content_logo').src = "img/logo_black.png";
    
//     for ( let i=0; i<4; i++) {
//         document.querySelectorAll('.gnb_content_items')[i].style = "color: #666;";
//     }
//     for ( let i=0; i<2; i++) {
//         document.querySelectorAll('.gnb_link_items')[i].style = "color: #666;";
//     }
//     document.querySelector('.gnb_link_icon').src = "img/link_black.svg";
    
//  }

// gnbOut()
//  function gnbOut() {
//     document.getElementById('gnb_navbar').style = "background-color:transparent; transition: all 0.6s ease;";
//     document.querySelector('.gnb_content_logo').src = "img/logo_white.png";

//     for ( let i=0; i<4; i++) {
//         document.querySelectorAll('.gnb_content_items')[i].style = "color:white;";
//     }
//     for ( let i=0; i<2; i++) {
//         document.querySelectorAll('.gnb_link_items')[i].style = "color:white;";
//     }
//     document.querySelector('.gnb_link_icon').src = "img/link_white.svg";  
// }



const navbar = document.getElementById('gnb_navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

// 스크롤 내려가지 않았을 때 gnbOver()
navbar.addEventListener('mouseover', () => {
    function gnbOver() {
    
        document.getElementById('gnb_navbar').style = "background-color:white; box-shadow: 0 0 6px 0 rgba(75,75,75,0.8); transition: all 0.6s ease;";
        document.querySelector('.gnb_content_logo').src = "img/logo_black.png";
        
        for ( let i=0; i<4; i++) {
            document.querySelectorAll('.gnb_content_items')[i].style = "color: #666;";
        }
        for ( let i=0; i<2; i++) {
            document.querySelectorAll('.gnb_link_items')[i].style = "color: #666;";
        }
        document.querySelector('.gnb_link_icon').src = "img/link_black.svg";
        
    }
    if (window.scrollY <= navbarHeight) {
        gnbOver();
    }
});

// 스크롤 내려가지 않았을 때 gnbOut()
navbar.addEventListener('mouseout', () => {
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
    if (window.scrollY <= navbarHeight) {
        gnbOut();
    }
});


// 스크롤 움직임 발생 시 gnb 변화
document.addEventListener('scroll', () => {

    // Scroll Down
    function gnbScrollDown() {
        document.getElementById('gnb_navbar').style = "background-color:white; box-shadow: 0 0 6px 0 rgba(75,75,75,0.8); transition: all 0.6s ease;";
        document.querySelector('.gnb_content_logo').src = "img/logo_black.png";
        
        for ( let i=0; i<4; i++) {
            document.querySelectorAll('.gnb_content_items')[i].style = "color: #666;";
        }
        for ( let i=0; i<2; i++) {
            document.querySelectorAll('.gnb_link_items')[i].style = "color: #666;";
        }
        document.querySelector('.gnb_link_icon').src = "img/link_black.svg";
    }
    
    // Scroll Up
    function gnbScrollUp() {
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

    // 조건문 실행
    if (window.scrollY > navbarHeight) {
        gnbScrollDown();
        }
    
        else {
           gnbScrollUp();
            }
    });


// 제품 메뉴 열고 닫기

function menuOpen1() {
    document.querySelector('.sub_gnb_product').style = "display:block;";
    document.getElementById('gnb_navbar').style = "box-shadow:none;";
}
function menuClose1() {
    document.querySelector('.sub_gnb_product').style = "display:none;";
    document.getElementById('gnb_navbar').style = "box-shadow:none;";
}

// 파트너 메뉴 열고 닫기

function menuOpen2() {
    document.querySelector('.sub_gnb_partner').style = "display:block;";
}
function menuClose2() {
    document.querySelector('.sub_gnb_partner').style = "display:none;";
}



// footer circleShow()
function circleShow(target) {
    
        document.querySelectorAll('.circle')[target].style = "visibility: visible;";
    
}

// footer circleNone()
function circleNone(target) {

        document.querySelectorAll('.circle')[target].style = "visibility: hidden;";
    
}






