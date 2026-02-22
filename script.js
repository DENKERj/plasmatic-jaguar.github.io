// Select the bubble element and all links
const bubble = document.getElementById('bubble');
const links = document.querySelectorAll('a');

// Function to change the bubble color on hover
function changeBubbleColor(event) {
    bubble.style.background = '#7D53DE'; // New color when hovering over a link
    bubble.classList.add('bubble-hover'); // Add hover animation class
}

// Function to reset the bubble color when mouse leaves the link
function resetBubbleColor() {
    bubble.style.background = '#EEF8FF'; // Default bubble color
    bubble.classList.remove('bubble-hover'); // Remove hover animation class
}

// Add hover event listener for each link
links.forEach(link => {
    link.addEventListener('mouseenter', changeBubbleColor);
    link.addEventListener('mouseleave', resetBubbleColor);
});

// Track mouse movement and update bubble position
document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // Update bubble position
    bubble.style.left = `${mouseX}px`;
    bubble.style.top = `${mouseY}px`;
});