noseX = 0 
noseY = 0
function preload(){
    nose = loadImage("https://i.postimg.cc/T3jFrL07/Layer-1.png");





}

function setup(){
    canvas= createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNET = ml5.poseNet(video, modelLoaded);
    poseNET.on("pose",gotPoses)
}

function draw(){
    image(video,0,0,300,300);
    image(nose,noseX-10,noseY-10,25,25)


}

function takeSnapshot(){
    save("joker.png");
    
}


function modelLoaded(){
    console.log("pposeNet is initialized successfully lessgooo")
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX = results[0].pose.nose.x
        noseY = results[0].pose.nose.y
        console.log("nose x  = " + results[0].pose.nose.x)
        console.log("nose y  = " + results[0].pose.nose.y)
    }
    }



