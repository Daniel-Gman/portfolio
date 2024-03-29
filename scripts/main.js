const burgermenu = document.getElementById("burger");
const burgerbars = document.getElementsByClassName("burger__bar");
const whiteBar = document.getElementById("whiteBar");
const burgercontent = document.getElementById("burger__content");
const burgerimage = document.getElementById("burger__image");

burgermenu.addEventListener("click", function () {
    if (whiteBar.style.width === "25%") {
        whiteBar.style.width = "0";
        burgermenu.style.left = "0"; // Move the burger menu back to its original position
        burgercontent.style.opacity = "0";
        burgerimage.style.opacity = "0"
        document.body.style.overflow = 'hidden';
        for (let i = 0; i < burgerbars.length; i++) {
            burgerbars[i].style.backgroundColor = "white";
        }
    } else {
        whiteBar.style.width = "25%";
        burgermenu.style.left = "25%"; // Move the burger menu to the right
        setTimeout(function () {
            burgercontent.style.opacity = "1";
            burgerimage.style.opacity = "1"
        }, 200); // Adjust the delay time as needed
        document.body.style.overflow = 'hidden';
        for (let i = 0; i < burgerbars.length; i++) {
            burgerbars[i].style.backgroundColor = "rgb(202, 202, 202)";
        }
    }
});

// Mouse Hover function from here:
// __________________________________________________________>

burgermenu.addEventListener("mouseover", function () {
    for (let i = 0; i < burgerbars.length; i++) {
        burgerbars[i].style.transition = "background-color 0.3s ease"; // Add transition property
        burgerbars[i].style.backgroundColor = "rgb(202, 202, 202)";
    }
});

burgermenu.addEventListener("mouseout", function () {
    for (let i = 0; i < burgerbars.length; i++) {
        burgerbars[i].style.transition = "background-color 0.3s ease"; // Add transition property
        // Reset to the original color
        burgerbars[i].style.backgroundColor = 'white';
    }
});
