const navBar = document.querySelector("#Nav");
const content = document.querySelector("#Content");
const footer = document.querySelector("#Footer");
const backgroundImage = document.querySelector("#background-image");

function hide()
{
    navBar.style.visibility = 'hidden';
    content.style.visibility = 'hidden';
    footer.style.visibility = 'hidden';
}

function nothingToSeeHere()
{
    navBar.style.visibility = 'visible';
    content.style.visibility = 'visible';
    footer.style.visibility = 'visible';
}

backgroundImage.addEventListener("mouseover", hide)
backgroundImage.addEventListener("mouseout", nothingToSeeHere)