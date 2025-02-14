//your JS code here. If required.
// Initial angle of rotation
let angle = 0;

// Select the line element
const line = document.getElementById('line');

// Function to continuously rotate the line
function rotateLine() {
    angle += 2;  // Increase angle by 2 degrees every time
    line.style.transform = `rotate(${angle}deg)`;  // Apply the rotation
}

// Set an interval to update the rotation every 20 milliseconds
setInterval(rotateLine, 20);
