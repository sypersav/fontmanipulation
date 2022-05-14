nose_x = 0;
nose_y = 0;
leftwristx = 0;
rightwristx = 0;
difference = 0;

function setup() {
    canvas = createCanvas(800, 400);
    video = createCapture(VIDEO);
    video.size(350, 350);
    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
}

function modelLoaded() {
    console.log("poseNet is initialized")
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results)

        nose_x = results[0].pose.nose.x
        nose_y = results[0].pose.nose.y
        leftwristx = results[0].pose.leftWrist.x
        rightwristx = results[0].pose.rightWrist.x
        difference = Math.floor(leftwristx - rightwristx);
        console.log("difference =",
            difference, "nose x and y = ",
            nose_x, nose_y, "left wrist x and y =",
            leftwristx, rightwristx)
    }
}

function preload() {}

function draw() {
    background('#696969')
    if (difference > 0) {
        stroke("#0b92e0");
        fill("#0b92e0")
        textSize(difference)
        document.getElementById("square_side ").innerHTML = "text size" + difference;
        text("QWERTYUIOP", nose_x, nose_y);
    }

}