var myimage = document.querySelector("img");

myimage.onclick = function () {
    var mysrc = myimage.getAttribute("src");
    if (mysrc === "https://sun4-19.userapi.com/impg/h7i7nFYYzK6d2IZTcigWp6hLPd9ZdbnYt0b6xQ/lOWcVGGDI1M.jpg?size=960x1280&quality=96&sign=a770ca07f185a463396e85c85a3a92bc&type=album"){
        myimage.setAttribute("src", "https://sun9-13.userapi.com/impg/5B8_rExAbxrkJuSv8WwU2JiSGBc-EYiVlfPgtw/_dv4CJBbpSs.jpg?size=1404x1874&quality=95&sign=5ad809d31282c60d5da1248cb3d799dd&type=album");
    }
    else {
        myimage.setAttribute("src", "https://sun4-19.userapi.com/impg/h7i7nFYYzK6d2IZTcigWp6hLPd9ZdbnYt0b6xQ/lOWcVGGDI1M.jpg?size=960x1280&quality=96&sign=a770ca07f185a463396e85c85a3a92bc&type=album");
    }
};

//ffffffffffffffffffffffffff
