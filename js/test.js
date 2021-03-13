document.addEventListener('scroll', () => {
    const scrollOnce = 100;

    scrollup()

    if(window.scrollY > 2990) {
        console.log('ss')
        document.querySelector('.inner_info_text').style = "color: rgba(37, 37, 37, 0.2);"
        document.querySelector('.inner_info').style = "background-color: transparent;"
        
        if (window.scrollY > 3090) {
            document.querySelector('.inner_info_text').style = "color: rgba(37, 37, 37, 0.6);"
            document.querySelector('.inner_info').style = "background-color: transparent;"
        }
    }
    })