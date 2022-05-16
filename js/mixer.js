const allMixerControls = document.querySelectorAll(".mixer-control");
const allMixerControlBounds = document.querySelectorAll(".mixer-control-bound");

for (let i = 0; i < allMixerControls.length; i++) {
    Draggable.create(allMixerControls[i], {
        bounds: allMixerControlBounds[i],
        type: "y"
    });
}