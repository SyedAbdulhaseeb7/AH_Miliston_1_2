// Get theme toggle button and add a popup container
var toggle = document.getElementById("themeToggle");
var popup;
// Theme toggle functionality
if (toggle) {
    toggle.addEventListener("click", function () {
        // Toggle dark theme
        document.body.classList.toggle("dark-theme");
        var container = document.querySelector(".container");
        container.classList.toggle("dark-theme");
        // Create and show popup
        showPopup();
    });
}
// Function to show popup notification
function showPopup() {
    if (!popup) {
        // Create popup element if it doesn't exist
        popup = document.createElement("div");
        popup.className = "popup";
        document.body.appendChild(popup);
    }
    // Set popup message based on the current theme
    popup.innerHTML = "\n        <strong>Theme Changed!</strong><br>\n        ".concat(document.body.classList.contains("dark-theme") ? "Dark Theme Activated" : "Light Theme Activated", "\n    ");
    // Add class to show popup
    popup.classList.add("show");
    // Hide popup after 3 seconds
    setTimeout(function () {
        popup.classList.remove("show");
    }, 3000);
}
