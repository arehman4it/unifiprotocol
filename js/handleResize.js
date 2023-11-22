/* 
Reloads page on resize after debounce period.
Necessary in order to allow animation script to totally recalculate.
*/

function resizeHandler() {
    if (isMobile) {
        return
    }
    
    location.reload()
}

function debounceHandler(handlerFn, time) {
    var timer;
    return function(evt) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(handlerFn, time, evt);
    }
}

window.addEventListener("resize", debounceHandler(resizeHandler, 500))
