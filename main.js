ojoIzqX = 0;
ojoIzqY = 0;

function preload() {   
    ojoIzq = loadImage("https://i.postimg.cc/FK4GcLt1/eyepatch-clip-art-patch.jpg") 
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet esta inicializando');
}

function gotPoses(results) {
    if(results.length > 0){
        ojoIzqX = results[0].pose.leftEye.x ;
        ojoIzqY = results[0].pose.leftEye.y ;
    }
    else{
        console.log(error);
    }
}

function draw() {
    image(video, 0, 0, 300, 300);  
    image(ojoIzq, ojoIzqX, ojoIzqY, 25, 25);  
}

function take_snapshot() {
    save('miImage.png');
}