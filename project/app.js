document.addEventListener('DOMContentLoaded', function() {
    console.log("DOMContentLoaded event fired");

    const inslider = document.getElementById("in-slider");
    const outslider = document.getElementById("out-slider");
    const animationCB = document.getElementById("CatBody");
    const Start = document.getElementById('start-button');
    const Stop = document.getElementById('stop-button');

   //const stopSound = document.getElementById('stopSoundButton');
   //const sounds = document.querySelectorAll('.sound-picker button');

    let animationRunning = false; // State to control animation

    let insliderValue = inslider.value;
    let outsliderValue = outslider.value;

    inslider.addEventListener("input", () => updateBreath());
    outslider.addEventListener("input", () => updateBreath());

Start.addEventListener('click', () => {
    animationRunning = true;
    animateElement('CatBody', insliderValue, outsliderValue);
});

Stop.addEventListener('click', () => {
    animationRunning = false;
    animationCB.style.animation = 'none'; // Stop the animation
});

function updateBreath() {
    insliderValue = inslider.value;
    outsliderValue = outslider.value;
    console.log(`Inhale duration: ${insliderValue}s, Exhale duration: ${outsliderValue}s`);

    // If animation is running, update it immediately
    if (animationRunning) {
        animateElement('CatBody', insliderValue, outsliderValue, true); // Pass a flag to reset or not
    }
}

// Modify animateElement to accept and handle a reset flag
async function animateElement(elementId, duration1, duration2, reset = false) {
    const element = document.getElementById(elementId);
    if (reset) {
        element.style.animation = 'none'; // Reset animation
        await new Promise(resolve => requestAnimationFrame(resolve)); // Ensure frame is reset
    }

    while (animationRunning) {
        element.style.animation = `inhale ${duration1}s linear`;
        await new Promise(resolve => setTimeout(resolve, duration1 * 1000));

        if (!animationRunning) break; // Check if stop was clicked

        element.style.animation = `exhale ${duration2}s linear`;
        await new Promise(resolve => setTimeout(resolve, duration2 * 1000));

        if (!animationRunning) break; // Check if stop was clicked
    }
    }
});
