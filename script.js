const navBar = document.querySelector("#Nav");
const content = document.querySelector("#Content");
const footer = document.querySelector("#Footer");
const backgroundImage = document.querySelector("#background-image");
var hoverTimes = 0;

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

function incrementHover()
{
    hoverTimes = hoverTimes + 1;
    if(hoverTimes >= 5)
    {
        hide()
    }
}

function youDidntSeeAnything()
{
    if(hoverTimes >= 5)
    {
        hoverTimes = 0;
        nothingToSeeHere();
    }
}

backgroundImage.addEventListener("mouseover", incrementHover)
backgroundImage.addEventListener("mouseout", youDidntSeeAnything)