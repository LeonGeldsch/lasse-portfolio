function getScrollPercent() {
    var h = document.documentElement, 
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';
    return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
}

function update( amount ){
  
    const total = backgroundLine.getTotalLength();
    const filled = total * amount;
    const none = total - filled;

    backgroundLine.style.strokeDasharray = `${filled} ${none}`;

}
  
const backgroundLine = document.querySelector( '#background-line' );
var updateReady = true;

window.addEventListener('scroll', (event) => {
    setTimeout(() => {
        updateReady = true;
    }, 10)
    if ( updateReady ) update ( getScrollPercent() / 180 + 0.5 );
    console.log(updateReady);
    updateReady = false;
});
update( getScrollPercent() / 180 + 0.5 );