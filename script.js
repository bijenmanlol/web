// vars

let body = document.getElementsByTagName("body")[0];
let button = document.getElementById("color-scheme-selector");

// color scheme selector script

button.addEventListener("click", function() {
    if (body.getAttribute("color-scheme") == "dark") {
        body.setAttribute("color-scheme", "light");
    }else {
        body.setAttribute("color-scheme", "dark");
    }
})

