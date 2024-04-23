# BREATHE WITH BELLA
## Video Demo: [YouTube demo video](https://youtu.be/IF800MMXrWQ)
## Description:
### What is the purpose?
Breathe with Bella is a web page which contains an interactive breath guide, featuring a cute cat. Sliders allow the user to choose how many seconds they wish to inhale and exhale, and Bella's body will inhale and exhale according to those values when "Start Breathing" is clicked.
The motivation to pick this as a project came from my past experience whilst studying a masters degree, discovering how improtant breathing deeply is to feed your brain the oxygen it needs to study. Bella is based on my friends real life cat, called Bella, as she suggested learning to code just at the right time (as I was crying in Ikea's carpark). I went home and found CS50 on edX, and many more tears later, here we are on the final project.

### How does it work?
The project is created using three main files - app.js, index.html and style.css. There is also an images folder which simply contains a cosy image for the background.

### index.html
This file contains the html for the page. A large part is the SVG, which represents the cat. This was created in Figma to enable just the body to be targetted for the animation. The HTML file also builds the sliders to enable the user to select he duration of the inhale and exhales, and also the start and stop breathing buttons.

### style.css
The CSS file not only contains the styling of the html elememts (largely the box sontaining the sliders), but actually contains the animations of the SVG, using keyframes.

### app.js
The javascript code is quite short - it ensures the animation doesn't start automatically when the page is loaded, and the "Event Listeners" allow the user to start and stop the breathing, and also change the duration of the breaths. The function "updateBreath" is what allows the slider values to be translated into action.


### Future improvements:
I had high hopes for this project, but unfortunatly as time is running out I am submitting quite a sorry version.I did at some point have some additional buttons to allow for background sounds, and the user was able to select either singing birds or rain. I took these out as they didn't really gel with the rest of the project. I tried to incorporate a voice (recording of my own terrible accent), to guide the inhale and exhale, allowing the user to not have to focus on the cat body. Time ran out to get this right.
The inhale and exhale durations are actually quite poor, there seems to be some conflict in the alternation. This is the best I could do for now - I unfortunatly only realised how bad this was 4 hours before the deadline. I may try to debug this by also displaying a countdown too, as the image is not that clear to see the breaths.

Other improvements to be made:
Adding different coloured cats
Android and OS app versions
