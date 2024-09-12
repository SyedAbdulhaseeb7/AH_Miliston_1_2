// Get theme toggle button and add a popup container
let toggle = document.getElementById("themeToggle") as HTMLButtonElement | null;
let popup: HTMLDivElement | null;

// Theme toggle functionality
if (toggle) {
    toggle.addEventListener("click", () => {
        // Toggle dark theme
        document.body.classList.toggle("dark-theme");
        const container = document.querySelector(".container") as HTMLElement;
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
    popup.innerHTML = `
        <strong>Theme Changed!</strong><br>
        ${document.body.classList.contains("dark-theme") ? "Dark Theme Activated" : "Light Theme Activated"}
    `;

    // Add class to show popup
    popup.classList.add("show");

    // Hide popup after 3 seconds
    setTimeout(() => {
        popup.classList.remove("show");
    }, 3000);
}
