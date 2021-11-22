function preload()
{
    img = loadImage('bedroom.jpg');
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center()
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function draw()
{
    image(img, 0, 0, 640, 420);
}
function back(){
{
    window.location = "index.html";
}
}