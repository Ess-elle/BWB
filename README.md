# BREATHE WITH BELLA
## Description:
### What is the purpose?
Breathe with Bella is a web application which contains an interactive breath guide, featuring a cute cat. Sliders allow the user to choose how many seconds they wish to inhale and exhale, and Bella's body will inhale and exhale according to those values when "Start Breathing" is clicked.
The motivation to pick this as a project came from my past experience whilst studying a masters degree, discovering how improtant breathing deeply is to feed your brain the oxygen it needs to study. Bella is based on my friends real life cat, called Bella, as she suggested learning to code just at the right time (as I was crying in Ikea's carpark). I went home and found CS50 on edX, and many more tears later, here we are on the final project.

### How does it work?
The project is created using three main files - app.js, index.html and style.css. There is also an images folder which simply contains a cosy image for the background.

### index.html
This file contains the html for the page. A large part is the SVG, which represents the cat. This was created in Figma to enable just the body to be targetted for the animation. The HTML file also builds the sliders to enable the user to select he duration of the inhale and exhales, and also the start and stop breathing buttons.

### style.css
The CSS file not only contains the styling of the html elememts (largely the box sontaining the sliders), but actually contains the animations of the SVG, using keyframes.

### app.js
The javascript code contains a number of "Event Listeners" to allow the user to start, stop, and also change the duration of the breaths. The function "updateBreath" is what allows the slider values to be translated into in/exhale durations.
The async function is an asynchronous function to ensure the timing of the animations run correctly. "Await" operators ensure the current running animation has finished before the next can begin. 

### Future improvements:
- Adding a zen voiceover to guide breath so you don't have to look at the screen to use it
- Adding different types of breathwork e.g. box, 4-7-8 and equal breathing
- Adding more cats
- Android and OS app versions
