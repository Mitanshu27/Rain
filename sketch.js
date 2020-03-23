var drops = [];
var dropCount = 500;
var bg;
function preload()
{
    bg = loadImage("bg.png");
}
function setup()
{
    createCanvas(window.innerWidth, window.innerHeight);

    for(var i = 0; i < dropCount; i++)
    {
        drops[i] = new Drop();
    }
}
function draw()
{
    background(bg);
    for(var i = 0; i < drops.length; i++)
    {
        drops[i].display();
        drops[i].fall();
    }
}