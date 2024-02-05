const burgermenu = document.getElementById("burger");
const burgerbars = document.getElementsByClassName("burger__bar");
const whiteBar = document.getElementById("whiteBar");
const mainpage = document.getElementById("main");

burgermenu.addEventListener("click", function () {
    if (whiteBar.style.width === "25%") {
        whiteBar.style.width = "0";
        burgermenu.style.left = "0"; // Move the burger menu back to its original position
        mainpage.style.marginLeft = "5%"
        mainpage.style.width = "80vw";
        document.body.style.overflow = 'hidden';
        for (let i = 0; i < burgerbars.length; i++) {
            burgerbars[i].style.backgroundColor = "white";
        }
    } else {
        whiteBar.style.width = "25%";
        burgermenu.style.left = "25%"; // Move the burger menu to the right
        mainpage.style.marginLeft = "30%"
        mainpage.style.width = "55vw";
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
