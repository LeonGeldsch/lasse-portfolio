/*
const backgroundLine = document.querySelector("#background-line");
const offset = 3000;

gsap.set("#background-line", {
    strokeDasharray: "8000px",
});

gsap.fromTo("#background-line", {
    strokeDasharray: `${offset}px ${backgroundLine.getTotalLength() + offset}px`
}, {
    strokeDasharray: `${backgroundLine.getTotalLength()}px 0px`,
    scrollTrigger: {
        trigger: ".page-container",
        scrub: true,
        start: "top top",
        end: "bottom-=500px bottom"
    },
    ease: "none"
});
*/
var speed = 135;
var offset = 0.479;


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
    if ( updateReady ) update ( getScrollPercent() / speed + offset );
    updateReady = false;
});
update( getScrollPercent() / speed + offset );


// TODO: split the line into two svg's and only make the top one scale with page width