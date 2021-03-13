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
    
    if (window.scrollY <= navbarHeight) {
        gnbOver();
    }

    function gnbOver() {
    
        document.getElementById('gnb_navbar').style = "background-color:white; box-shadow: 0 0 6px 0 rgba(75,75,75,0.8); transition: all 0.6s ease;";
        document.querySelector('.gnb_content_logo').src = "img/logo_black.png";
        
        for ( let i=0; i<4; i++) {
            document.querySelectorAll('.gnb_content_items')[i].style = "color: #666;";
        }
        for ( let i=0; i<2; i++) {
            document.querySelectorAll('.gnb_link_items')[i].style = "color: rgb(19,20,21);";
        }
        document.querySelector('.gnb_link_icon').src = "img/link_black.svg";
        document.querySelector('.underline').style ="display:block;"
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

    document.querySelector('.underline').style ="display:none;"

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
            document.querySelectorAll('.gnb_link_items')[i].style = "color: rgb(19,20,21";
        }
        document.querySelector('.gnb_link_icon').src = "img/link_black.svg";

        document.querySelector('.underline').style ="display: block;"
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

        document.querySelector('.underline').style ="display: none;"
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

// function menuOpen2() {
//     document.querySelector('.sub_gnb_partner').style = "display:block;";
// }
// function menuClose2() {
//     document.querySelector('.sub_gnb_partner').style = "display:none;";
// }

function menuOpen(target) {

    for (let i=0; i<2; i++)
       {
          document.querySelectorAll('.gnb_sub_wrap')[i].style = "display:none;";
       }

    document.querySelectorAll('.gnb_sub_wrap')[target].style = "display:flex;";

    document.querySelector('.gnb_sub').style = " max-height: 140px;";
 }

 function menuClose() {
    document.querySelector('.gnb_sub').style = "max-height:0px;";
    document.querySelector('.gnb_sub').style = "display:none;";
 }

 function menuOpenKeep() {
    document.querySelector('.gnb_sub').style = "max-height:140px;";
 }



// footer circleShow()
function circleShow(target) {
    
        document.querySelectorAll('.circle')[target].style = "visibility: visible;  animation: circle_show 2s both; transition: all 0.2s ease;";
    
}

// footer circleNone()
function circleNone(target) {

        document.querySelectorAll('.circle')[target].style = "visibility: hidden; animation: circle_close 2s both; transition: all 0.2s ease;";
    
}


// Max-width 1440
// header gnb

const burger = document.querySelector('.gnb_m_burger');

const navSlide = () => {
//   const burger = document.querySelector('.burger');
  const nav = document.querySelector('.gnb_m_items');
  const navLinks = document.querySelectorAll('.gnb_m_items li');

  burger.addEventListener('click', () => {
    //burger toggle
    nav.classList.toggle('nav-active');

    //links animation
    navLinks.forEach((link, index) => {
      console.log(index);
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.8
        }s`;
      }
    });

    //burger cross
    burger.classList.toggle('toggle');
  });
};

navSlide();
// footer m Btn Cross

let openstate = false;
const footerBtn = document.querySelector('.line_m_btn');
function footerCross() {
    
    if (openstate) {
        document.querySelector('.info_related_m').style = "height: 40px;"
        document.querySelector('.info_related_m_tit').style = "border-bottom: none"
        document.querySelector('.line1').style = " transform: rotate(-90deg) translate(-1px, 0.1px); background-color: rgb(186, 186, 186);"
        document.querySelector('.line2').style = " background-color: rgb(186, 186, 186);"
        openstate = false;
        
    }
    else {
        document.querySelector('.info_related_m').style = "height: 200px;"
        document.querySelector('.info_related_m_tit').style = "border-bottom: 1px solid rgb(250,250,250);"
        document.querySelector('.line1').style = "transform: rotate(0deg); background-color: rgb(51,51,51);"
        document.querySelector('.line2').style = "background-color: rgb(51,51,51);"
        openstate = true;
    }

}
    footerBtn.addEventListener('click', () => {
        footerCross();
    });
    


