document.addEventListener("DOMContentLoaded", function () {
    // Check if dark mode is stored in localStorage
    const isDarkMode = localStorage.getItem("darkMode") === "enabled";

    // Set the initial mode based on localStorage
    if (isDarkMode) {
        document.body.classList.add("dark-mode");
    }

    // Toggle dark mode on button click or any other trigger
    document.getElementById("darkModeToggle").addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        // Update localStorage with the user's preference
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
        } else {
            localStorage.setItem("darkMode", "disabled");
        }
    });
});
