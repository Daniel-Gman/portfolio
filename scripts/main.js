const burgermenu = document.getElementById("burger");
const burgerbars = document.getElementsByClassName("burger__bar");

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
