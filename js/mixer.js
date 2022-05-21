const allMixerControls = document.querySelectorAll(".mixer-control");
const allMixerControlBounds = document.querySelectorAll(".mixer-control-bound");
const allAudios = [
    new Audio("./audio/order.mp3"),
    new Audio("./audio/jazzy-abstract-beat.mp3"),
    new Audio("./audio/voice-of-nature.mp3"),
    new Audio("./audio/jazzy-abstract-beat.mp3"),
    new Audio("./audio/order.mp3"),
    new Audio("./audio/order.mp3"),
    new Audio("./audio/order.mp3")
]
var allDraggableControls = [];

function onDrag(dragObject) {
    var index = dragObject.target.dataset.index;
    var yPos = this.y;
    var percent = yPos / -138;
    allAudios[index].volume = percent;
}

for (let i = 0; i < allMixerControls.length; i++) {
    allDraggableControls = [...allDraggableControls, Draggable.create(allMixerControls[i], {
        bounds: allMixerControlBounds[i],
        type: "y"
    })];
    allDraggableControls[i][0].addEventListener("drag", onDrag);
}

allAudios.forEach(audio => {
    audio.play();
    audio.volume = 0;
});