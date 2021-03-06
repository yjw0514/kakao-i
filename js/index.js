'use strict';

// JS

// 스크롤 내려가지 않았을 때 gnbOver()

const navbar = document.getElementById('gnb_navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

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



// JS (max-width 1440px) 
// footer m Btn Cross

let openstate = false;
// const footerBtn = document.querySelector('.line_m_btn');
const footerBtn = document.querySelector('.info_related_m_tit');
function footerCross() {
    
    if (openstate) {
        document.querySelector('.info_related_m').style = "height: 40px;"
        document.querySelector('.info_related_m_tit').style = "border-bottom: none"
        document.querySelector('.line1').style = " opacity: 1; transform: rotate(-90deg) translate(-1px, 0.1px); background-color: rgb(186, 186, 186);"
        document.querySelector('.line2').style = " background-color: rgb(186, 186, 186);"
        openstate = false;
        
    }
    else {
        document.querySelector('.info_related_m').style = "height: 200px;"
        document.querySelector('.info_related_m_tit').style = "border-bottom: 1px solid rgb(250,250,250);"
        document.querySelector('.line1').style = "transform: rotate(0deg); background-color: rgb(51,51,51); opacity: 0;"
        document.querySelector('.line2').style = "background-color: rgb(51,51,51);"
        openstate = true;
    }

}
    footerBtn.addEventListener('click', () => {
        footerCross();
    });
    


// JS (max-width 767px) 
// gnboverM() 

// let navbarm = document.querySelector('.gnb_m_wrap');
// const navbarHeightm = navbarm.getBoundingClientRect().height;

// navbarm.addEventListener('mouseover', () => {

//     function gnbOverM() {
    
//         document.querySelector('.gnb_m').style = "background-color:white; box-shadow: 0 0 6px 0 rgba(75,75,75,0.8); transition: all 0.6s ease;";
//         document.querySelector('.gnb_m_logo').src = "img/logo_black.png";

//         for ( let i=0; i<3; i++) {
//             document.querySelectorAll('.gnb_m_burger div')[i].style = "background-color: rgb(16, 16, 16); ";
//         }
//     }

//     if (window.scrollY <= navbarHeightm) {
//         gnbOverM();
//     }
// });

// // gnb_m_out
// navbarm.addEventListener('mouseout', onMouseOut)

// function onMouseOut() {
    
//     function gnbOutM() {
//         document.querySelector('.gnb_m').style = "background-color:transparent; transition: all 0.6s ease;";
//         document.querySelector('.gnb_m_logo').src = "img/logo_white.png";
    
//         for ( let i=0; i<3; i++) {
//             document.querySelectorAll('.gnb_m_burger div')[i].style = "background-color: rgb(252, 252, 252);";
//         } 
    
//     }       
//     if (window.scrollY <= navbarHeightm) {
//         gnbOutM();
//     }    
    
// }


// 스크롤 움직일 때 gnb over & out
document.addEventListener('scroll', () => {

    // Scroll Down
    function gnbScrollDownM() {
        document.querySelector('.gnb_m').style = "background-color:white; box-shadow: 0 0 6px 0 rgba(75,75,75,0.8); transition: all 0.6s ease;";
        document.querySelector('.gnb_m_logo').src = "img/logo_black.png";

        for ( let i=0; i<3; i++) {
            document.querySelectorAll('.gnb_m_burger div')[i].style = "background-color: rgb(16, 16, 16); ";
        }
    }
    
    // Scroll Up
    function gnbScrollUpM() {
        document.querySelector('.gnb_m').style = "background-color:transparent; transition: all 0.6s ease;";
        document.querySelector('.gnb_m_logo').src = "img/logo_white.png";

        for ( let i=0; i<3; i++) {
            document.querySelectorAll('.gnb_m_burger div')[i].style = "background-color: rgb(252, 252, 252);";
        }    
    }

    // 조건문 실행
    if (window.scrollY > navbarHeight) {
        gnbScrollDownM();
        }
    
        else {
           gnbScrollUpM();
            }
    });


// gnb_m_hidden


const navSlide = () => {
  const burger = document.querySelector('.gnb_m_burger');
  const nav = document.querySelector('.gnb_m');
  const navLinks = document.querySelectorAll('.gnb_m_navlink');
  const body = document.querySelector('body');

  burger.addEventListener('click', () => {
  
    //burger toggle
    nav.classList.toggle('nav-active')
    if(nav.className === 'gnb_m nav-active'){
        document.querySelector('.gnb_m').style = "background-color:white; box-shadow: 0 0 6px 0 rgba(75,75,75,0.8); transition: all 0.6s ease;";
        document.querySelector('.gnb_m_logo').src = "img/logo_black.png";

        for ( let i=0; i<3; i++) {
            document.querySelectorAll('.gnb_m_burger div')[i].style = "background-color: rgb(16, 16, 16); ";
        }
    // navbarm.removeEventListener('mouseout' , onMouseOut)
    body.style.overflow = "hidden";
    }
    else {
        document.querySelector('.gnb_m').style = "background-color:transparent; transition: all 0.6s ease;";
        document.querySelector('.gnb_m_logo').src = "img/logo_white.png";
    
        for ( let i=0; i<3; i++) {
            document.querySelectorAll('.gnb_m_burger div')[i].style = "background-color: rgb(252, 252, 252);";
        } 
    // navbarm.addEventListener('mouseout' , onMouseOut)
    body.style.overflow = "auto";
    }
    console.log(nav.className === 'gnb_m nav-active')
    //links animation
    navLinks.forEach((link, index) => {
      console.log(index);
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.4s ease-in forwards ${
          index / 4 + 0.8
        }s`;
      }
    });

    //burger cross
    burger.classList.toggle('toggle');
  });
};

navSlide();



//  back to top btn
const button = document.querySelector('.btn_click');
const scrollInto = document.querySelector('.btn_click');
      button.addEventListener('click', () => {
        navbarm.scrollIntoView({behavior:'smooth', block: 'center'});
      });


      
// fade_in
let scrollY = window.pageYOffset;
let pageHieght = document.documentElement.clientHeight;
let aniEleY = document.querySelector('.info_effect_sticky').offsetTop;
let aniEleY2 = document.querySelector('.info_effect_sticky_t').offsetTop;
let aniEleY3 = document.querySelector('.info_effect_sticky_m').offsetTop;


// 1920
document.addEventListener('scroll', () => {
    function scrollFadeIn() {
        var scrollY = window.pageYOffset;
    
        if (scrollY > aniEleY - pageHieght ) {
            var disY = scrollY - aniEleY + pageHieght
            if (disY >=0 && disY <1000) {
                document.querySelector('.inner_info').style = "background-color: transparent;";
                document.querySelector('.inner_info p').style = "opacity: 0.1;";
            }
            else if (disY >=1000 && disY <1400) {
                document.querySelector('.inner_info').style = "background-color: transparent;";
                document.querySelector('.inner_info p').style = "opacity: 0.5;";
            }
            else if (disY >=1400 && disY <1800) {
                document.querySelector('.inner_info').style = "background-color: transparent;";
                document.querySelector('.inner_info p').style = "opacity: 0.9;";
            }
            else if (disY >=1800 && disY <3000) {
                document.querySelector('.inner_info').style = "background-color: rgb(253, 223, 29);";
                document.querySelector('.inner_info p').style = "opacity: 1;";
            }
            else if (disY >=3000 && disY <3200) {
                document.querySelector('.inner_info').style = "background-color: transparent;";
                document.querySelector('.inner_info p').style = "opacity: 0.8;";
            }
            // else if (disY >=3600 && disY <3700) {
            //     document.querySelector('.inner_info').style = "background-color: transparent;";
            //     document.querySelector('.inner_info p').style = "opacity: 0.5;";
            // }
            else if (disY >=3200 && disY <3800) {
                document.querySelector('.inner_info').style = "background-color: transparent;";
                document.querySelector('.inner_info p').style = "opacity: 0.4;";
            }
            else if (disY >=3800 && disY <4300) {
                document.querySelector('.inner_info').style = "background-color: transparent;";
                document.querySelector('.inner_info p').style = "opacity: 0.1;";
            }
            // else if ( disY >= 2400 ) {
            //     // document.querySelector('.inner_info').style = "opacity:1";
            //     document.querySelector('.inner_info p').style = "opacity: 0.5;";
            // }
            else {
                document.querySelector('.inner_info').style = "background-color: transparent;";
                document.querySelector('.inner_info p').style = "opacity: 0;";
            }
            
        }
    }
    scrollFadeIn();
})
   

// 1440
document.addEventListener('scroll', () => {
    function scrollFadeIn2() {
        var scrollY = window.pageYOffset;
    
        if (scrollY > aniEleY - pageHieght ) {
            var disY = scrollY - aniEleY2 + pageHieght
            if (disY >=0 && disY <200) {
                document.querySelector('.inner_info_t').style = "background-color: transparent;";
                document.querySelector('.inner_info_t p').style = "opacity: 0.1;";
            }
            else if (disY >=200 && disY <400) {
                document.querySelector('.inner_info_t').style = "background-color: transparent;";
                document.querySelector('.inner_info_t p').style = "opacity: 0.5;";
            }
            else if (disY >=400 && disY <600) {
                document.querySelector('.inner_info_t').style = "background-color: transparent;";
                document.querySelector('.inner_info_t p').style = "opacity: 0.9;";
            }
            else if (disY >=600 && disY <1400) {
                document.querySelector('.inner_info_t').style = "background-color: rgb(253, 223, 29);";
                document.querySelector('.inner_info_t p').style = "opacity: 1;";
            }
            else if (disY >=1400 && disY <1800) {
                document.querySelector('.inner_info_t').style = "background-color: transparent;";
                document.querySelector('.inner_info_t p').style = "opacity: 0.8;";
            }
            else if (disY >=1800 && disY <2000) {
                document.querySelector('.inner_info_t').style = "background-color: transparent;";
                document.querySelector('.inner_info_t p').style = "opacity: 0.4;";
            }
            else if (disY >=2000 && disY <2200) {
                document.querySelector('.inner_info_t').style = "background-color: transparent;";
                document.querySelector('.inner_info_t p').style = "opacity: 0.1;";
            }

            else {
                document.querySelector('.inner_info_t').style = "background-color: transparent;";
                document.querySelector('.inner_info_t p').style = "opacity: 0;";
            }
            
        }
    }
    scrollFadeIn2();
})

// 767
document.addEventListener('scroll', () => {
    function scrollFadeIn3() {
        var scrollY = window.pageYOffset;
    
        if (scrollY > aniEleY - pageHieght ) {
            var disY = scrollY - aniEleY3 + pageHieght
            if (disY >=0 && disY <200) {
                document.querySelector('.inner_info_m').style = "background-color: transparent; ";
                document.querySelector('.inner_info_m p').style = "opacity: 0.1;";
            }
            else if (disY >=200 && disY <400) {
                document.querySelector('.inner_info_m').style = "background-color: transparent;";
                document.querySelector('.inner_info_m p').style = "opacity: 0.5;";
            }
            else if (disY >=400 && disY <600) {
                document.querySelector('.inner_info_m').style = "background-color: transparent;";
                document.querySelector('.inner_info_m p').style = "opacity: 0.9;";
            }


            
            else if (disY >=600 && disY <1800) {
                document.querySelector('.inner_info_m').style = "background-color: rgb(253, 223, 29); ";
                document.querySelector('.inner_info_m p').style = "opacity: 1; ";
            }

            else if (disY >=1800 && disY <2000) {
                document.querySelector('.inner_info_m').style = "background-color: transparent; ";
                document.querySelector('.inner_info_m p').style = "opacity: 0.8;";
            }
            else if (disY >=2000 && disY <2200) {
                document.querySelector('.inner_info_m').style = "background-color: transparent; ";
                document.querySelector('.inner_info_m p').style = "opacity: 0.4;";
            }
            else if (disY >=2200 && disY <2400) {
                document.querySelector('.inner_info_m').style = "background-color: transparent;";
                document.querySelector('.inner_info_m p').style = "opacity: 0.1;";
            }

            else {
                document.querySelector('.inner_info_m').style = "background-color: transparent;";
                document.querySelector('.inner_info_m p').style = "opacity: 0;";
            }
            
        }
    }
    scrollFadeIn3();
})


// gnb_m accordion 
let openstate2 = [false, false];

function contentShow(target) {
    // 이벤트 발생 이외의 다른 요소는 초기화
    for (let i=0; i<2; i++) {
                
        if (i != target) {
        document.querySelectorAll('.gnb_m_acc')[i].style = "height: 61px; opacity:1;";
        openstate2[i] = false;
    }
    }

    // 이벤트 발생 요소에 대한 실행 처리
    if (openstate2[target]) {
        document.querySelectorAll('.gnb_m_acc')[target].style = "height: 61px; opacity:1;"
        openstate2[target] = false;
    }
    else {
        document.querySelectorAll('.gnb_m_acc')[target].style = "max-height: 400px; opacity:1;"
        openstate2[target] = true;
    }
}
