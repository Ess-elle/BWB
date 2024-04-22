async function animateElement(elementId, duration1, duration2) {
    const element = document.getElementById(elementId);

    while (true) { // Infinite loop to keep alternating animations
        // Apply the first animation
        element.style.animation = `animation1 ${duration1}s linear`;
        
        // Wait for the first animation to complete
        await new Promise(resolve => setTimeout(resolve, duration1 * 1000));

        // Apply the second animation
        element.style.animation = `animation2 ${duration2}s linear`;

        // Wait for the second animation to complete
        await new Promise(resolve => setTimeout(resolve, duration2 * 1000));
    }
}

// Call the function with the ID of the element and the durations for each animation
animateElement('animatedElement', 2, 1);