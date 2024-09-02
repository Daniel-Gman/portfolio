const header = document.getElementById("header");
const arrow = document.getElementById("arrow");
const header__list = document.getElementById("header__li");

var arrow__bool = true;

// Function to adjust header height based on screen width
function adjustHeaderHeight() {
    // Check if screen width is 460px or less
    const isSmallScreen = window.matchMedia("(max-width: 460px)").matches;

    if (arrow__bool === true) {
        header.style.height = isSmallScreen ? "18rem" : "8rem";   // Adjust the header height based on screen width
        header__list.style.opacity = "1";     // Make the header content visible with transition
        arrow__bool = false;
    } else {
        header.style.height = "0";      // Get header back to original height
        header__list.style.opacity = "0";     // Fade out the header content for smooth transitioning
        arrow__bool = true;
    }
}

// Added event listener to the arrow
arrow.addEventListener("click", adjustHeaderHeight);
