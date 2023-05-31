function change_backgound()
{
    let color = document.body.style.backgroundColor;
    if(color == "white" || color == "")
    {
        document.body.style.backgroundColor = "green";
    }
    else if(color == "green")
    {
        document.body.style.backgroundColor = "orange";
    }
    else if(color == "orange")
    {
        document.body.style.backgroundColor = "blue";
    }
    else if(color == "blue")
    {
        document.body.style.backgroundColor = "red";
    }
    else
    {
        document.body.style.backgroundColor = "white";
    }
    
}
function good_vibes()
{
    let Måns = document.getElementById("Måns").style.display;
    if(Måns == "" || Måns == "none")
    {
        document.getElementById("Måns").style.display = "block";
    }
    else
    {
        document.getElementById("Måns").style.display = "none";
    }
}
function time()
{
    let date = Date();
    document.getElementById("time").innerHTML = date;
    let time_display = document.getElementById("time").style.display;
    if(time_display == "none" || time_display == "")
    {
        document.getElementById("time").style.display = "block"
    }
    else
    {
        document.getElementById("time").style.display = "none"
    }
}
function change_picture()
{
    let img = document.getElementById("bild").src;
    if(img.endsWith("image.png"))
    {
        document.getElementById("bild").src = "https://www.thesun.co.uk/wp-content/uploads/2022/07/la-ishowspeed-banned-from-youtube-COMP.jpg?w=620";
    }
    else if(img.endsWith("image2.jpg")) 
    {
        document.getElementById("bild").src = "https://www.dexerto.com/cdn-cgi/image/width=640,quality=75,format=auto/https://editors.dexerto.com/wp-content/uploads/2022/10/07/iShowSpeed-PC-hacked-YouTube-Stream.jpg";
    }
} 
function hide_picture()
{
    document.getElementById("bild").style.display = "none";
}
function show_picture()
{
    document.getElementById("bild").style.display = "block";
}
function header()
{
    document.getElementById("header").style.backgroundColor = "gray";
    document.getElementById("header").style.alignItems = "center";
    document.getElementById("Måns").style.display = "block";
    document.getElementById("Måns").style.color = "white";
    document.getElementById("time").style.display = "block";
    document.getElementById("time").innerHTML = Date();
    document.getElementById("time").style.color = "white";
    document.getElementById("bild").style.border = "1vw solid green";
}

function remove_header()
{
    document.getElementById("header").style.display = "none";
    document.getElementById("Måns").style.display = "none";
    document.getElementById("time").style.display = "none";
    document.getElementById("bild").style.display = "none";
}

function show_header()
{
    document.getElementById("header").style.display = "flex";
    document.getElementById("Måns").style.display = "block";
    document.getElementById("time").style.display = "block";
    document.getElementById("bild").style.display = "block";
    document.getElementById("thanks").innerHTML = "Thank you for visiting my website"
}