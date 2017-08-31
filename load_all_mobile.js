var loadHet = setInterval(function() {
    if (document.getElementsByClassName('_108_')[0] != undefined) {
        console.log('ĐANG CLICK ...');
        document.getElementsByClassName('_108_')[0].click();
    } else {
        stop();
    }
}, 5000);
function stop() {
    clearInterval(loadHet);
}
