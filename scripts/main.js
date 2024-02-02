const burgermenu = document.getElementById("burger");
const burgerbars = document.getElementsByClassName("burger__bar");
const whiteBar = document.getElementById("whiteBar");
const headerBar = document.getElementById("headerBar");
const headerContent = document.querySelector('.header__content');

burgermenu.addEventListener("click", function () {
    if (whiteBar.style.width === "25%") {
        whiteBar.style.width = "0";
        headerBar.style.width = "0";
        headerContent.style.transform = "translateX(0%)";
        document.body.style.overflow = 'hidden';
        for (let i = 0; i < burgerbars.length; i++) {
            burgerbars[i].style.backgroundColor = "white";
        }
    } else {
        whiteBar.style.width = "25%";
        headerBar.style.width = "25%";
        headerContent.style.transform = "translateX(25%)";
        document.body.style.overflow = 'hidden';
        for (let i = 0; i < burgerbars.length; i++) {
            burgerbars[i].style.backgroundColor = "rgb(202, 202, 202)";
        }
    }
});

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
