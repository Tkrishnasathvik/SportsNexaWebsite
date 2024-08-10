function changeBG() {
    var navbar = document.getElementById('navBarClass');
    var scrollValue = window.scrollY;
    if(scrollValue<600){
        navbar.classList.remove('bgColor');
    }else{
        navbar.classList.add('bgColor');
    }
}

window.addEventListener('scroll', changeBG);


function showPopup() {
    document.getElementById("popup").style.display = "block";

    setTimeout(function() {
        document.getElementById("popup").style.display = "none";
    }, 3000);
}