function setup()
{
    canvas = createCanvas(700 , 600)
    video = createCapture(VIDEO)
    video.hide()
    canvas.center()
}
function draw()
{
    image(video , 0 , 0 , 700 , 600)
}
song1 = ""
song2 = ""
function preload()
{
    song1 = loadSound("phonky_trap.mp3")
    song2 = loadSound("Swagger_Stagger.mp3")
}