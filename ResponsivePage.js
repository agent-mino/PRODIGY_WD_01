// Function to change the color on hover
function changeColorOnHover(element, hoverColor, originalColor) {
    element.addEventListener('mouseover', function() {
        element.style.color = hoverColor;
    });
    element.addEventListener('mouseout', function() {
        element.style.color = originalColor;
    });
}

// Select all navigation links and apply the hover effect
document.addEventListener('DOMContentLoaded', function() {
    var navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(function(link) {
        changeColorOnHover(link, '#e60000', 'white'); // Change to red on hover
    });
});
