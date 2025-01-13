// Function to toggle the mobile menu
function menuToggle() {
    var x = document.getElementById('myNavtoggle');
    // Check if the class name is 'navtoggle'. If so, add the 'responsive' class.
    if (x.className === 'navtoggle') {
        x.className += ' responsive';
    } else {
        // Otherwise, remove the 'responsive' class.
        x.className = 'navtoggle';
    }
}
