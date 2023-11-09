var myimage = document.querySelector("img");

myimage.onclick = function () {
    var mysrc = myimage.getAttribute("src");
    if (mysrc === "images/firefox-icon.png"){
        myimage.setAttribute("src", "images/firefox2.png");
    }
    else {
        myimage.setAttribute("src", "images/firefox-icon.png");
    }
};

