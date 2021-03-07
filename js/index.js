
// GNB mouseOver()
const header = document.getElementById('header');

header.addEventListener('mouseover', () => {
    gnbOver();
});

function gnbOver() {
    document.getElementById('header').style = " background-color:white; box-shadow: 0 0 6px 0 rgba(75,75,75,0.8);";
    document.querySelector('.gnb_content_logo').src = "img/logo_black.png";
    document.querySelector('.gnb_link_icon').src = "img/link_black.svg";

    for ( i=0; i<4; i++) {
        document.getElementsByClassName('gnb_content_items')[i].style = "color:rgb(19,20,21);";
    }

    document.getElementsByClassName('gnb_link_items')[0].style = "color:rgb(19,20,21);";
    document.getElementsByClassName('gnb_link_items')[1].style = "color:rgb(19,20,21);";
    
}


// GNB mouseOut()
header.addEventListener('mouseout', () => {
    gnbOut();
    
});

function gnbOut() {
    document.getElementById('header').style = " background-color:transparent;";
    document.querySelector('.gnb_content_logo').src = "img/logo_white.png";
    document.querySelector('.gnb_link_icon').src = "img/link_white.svg";


    for ( i=0; i<4; i++) {
        document.getElementsByClassName('gnb_content_items')[i].style = "color:white;";
        }

    document.getElementsByClassName('gnb_link_items')[0].style = "color:white";
    document.getElementsByClassName('gnb_link_items')[1].style = "color:white;";
}

