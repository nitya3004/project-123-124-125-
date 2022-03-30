nosex=0;
nosey=0;
leftwristx=0;
righjtwristx=0;
difference=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,550);
    canvas.position(560,150);

poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function draw(){
    background('#00FFFF');
    fill('red');
    text('Nithya',50,400);
    textSize(difference);
    document.getElementById("font_size").innerHTML="font size of the text is= "+difference +"px";
}

function gotPoses(results){
if (results.length>0){
    console.log(results);
    nosex=results[0].pose.nose.x;
    nosey=results[0].pose.nose.y;
    console.log("nosex= "+nosex +" nosey= "+nosey);

    leftwristx=results[0].pose.leftWrist.x;
    rightwristx=results[0].pose.rightWrist.x;
    difference= floor(leftwristx-rightwristx);
    console.log("leftwristx= "+leftwristx +" rightwristx= "+rightwristx +" difference= "+difference);

}
}

function modelLoaded(){
    console.log('posenet is Initialized');
}