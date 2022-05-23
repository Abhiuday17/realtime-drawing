noseX = 0
noseY = 0
difference = 0
leftWristX = 0
righttWristX = 0
function setup(){
webcam = createCapture(VIDEO)
webcam.size(530 , 400)

canvas = createCanvas(530 , 400)

poseNet = ml5.poseNet(webcam,modeLoaded)
poseNet.on("pose" , gotPoses)
}

function modeLoaded(){
    console.log("PoseNet is initialized")
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results)
        noseX = results[0].pose.nose.x
        noseY = results[0].pose.nose.y
        console.log(noseX , noseY)

        leftWristX = results[0].pose.leftWrist.x
        rightWristX = results[0].pose.rightWrist.x
        difference = floor(leftWristX - rightWristX) 
    }


}

function draw(){
    background("#ADD8E6")
    fill("red")
    stroke("blue")
    square(noseX , noseY , difference)
    document.getElementById("status").innerHTML = "The width and the height of the square is " + difference + "px"
}