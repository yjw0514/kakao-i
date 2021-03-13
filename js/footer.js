// footer circleShow()
// footer circleShow()
function circleShow(target) {
    
    document.querySelectorAll('.circle')[target].style = "visibility: visible;  animation: circle_show 2s both; transition: all 0.2s ease;";

}

// footer circleNone()
function circleNone(target) {

    document.querySelectorAll('.circle')[target].style = "visibility: hidden; animation: circle_close 2s both; transition: all 0.2s ease;";

}