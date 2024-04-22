document.addEventListener('DOMContentLoaded', function() {
    console.log("DOMContentLoaded event fired");

    const inslider = document.getElementById("in-slider");
    const outslider = document.getElementById("out-slider");
    const animationCB = document.getElementById("CatBody");
    const Start = document.getElementById('start-button');
    const Stop = document.getElementById('stop-button');
    const stopSound = document.getElementById('stopSoundButton');

    let insliderValue = inslider.value;
    let outsliderValue = outslider.value;

    //const sounds = document.querySelectorAll('.sound-picker button');

    animationCB.style.animationPlayState = 'paused';

    inslider.addEventListener("input", updateBreath);
    outslider.addEventListener("input", updateBreath);

Start.addEventListener('click', () => {
    updateBreath();
    animationCB.style.animationPlayState = 'running';
});

Stop.addEventListener('click', () => {
    animationCB.style.animationPlayState = 'paused';
});

function updateBreath() {
    insliderValue = inslider.value;
    console.log(insliderValue);
    outsliderValue = outslider.value;
    console.log(outsliderValue);

    document.documentElement.style.setProperty('--inhale-duration',`${insliderValue}s`);
    document.documentElement.style.setProperty('--exhale-duration',`${outsliderValue}s`);
    }
});