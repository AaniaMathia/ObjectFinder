status="";

function preload(){
    img=loadImage('clock.jpg');
    img1=loadImage('chandelier.jpg');
    img2=loadImage('plant.jpg');
    img3=loadImage('vase.jpg');
    img4=loadImage('Umbrella.jpg');
    img5=loadImage('trophy.jpg');
    img6=loadImage('Television.jpg');
}
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
}
function modelLoaded(){
    console.log("Model Loaded!");
    status=true;
    objectDetector.detect(img, gotResult);
}
function gotResult(error, results){
if(error){
    console.log(error);
}
console.log(results);
}
function draw(){
    image(img, 0, 0, 640, 420 );
    fill('#FF0000');
    text("Clock", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(70, 60, 450, 350);

    image(img1, 0, 0, 640, 420 );
    fill('#FF0000');
    text("Chandelier", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(70, 60, 450, 350);
    image(img2, 0, 0, 640, 420 );
    fill('#FF0000');

    text("Plant", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(70, 60, 450, 350);
    image(img3, 0, 0, 640, 420 );
    fill('#FF0000');

    text("Vase", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(70, 60, 450, 350);
    image(img4, 0, 0, 640, 420 );
    fill('#FF0000');

    text("Umbrella", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(70, 60, 450, 350);
    image(img5, 0, 0, 640, 420 );
    fill('#FF0000');

    text("Trophy", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(70, 60, 450, 350);
    
    image(img6, 0, 0, 640, 420 );
    fill('#FF0000');
    text("Television", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(70, 60, 450, 350);
}