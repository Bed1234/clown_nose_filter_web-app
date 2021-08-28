
function setup() {
   canvas = createCanvas(300,300);
   canvas.center();
   // code for accessing the webcam
   video = createCapture(VIDEO);
   video.size(300,300);
   video.hide();

   //initialize the poseNet model
   poseNet = ml5.poseNet(video, modelLoaded);


//executing poseNet
   poseNet.on('pose', gotPoses);

}

function modelLoaded()
{
console.log('PoseNet is initialized');
}


function draw(){
    image(video, 0, 0,300, 300);

}



function gotPoses(results){
    if(results.length > 0 )
    {
         console.log(results);
         console.log("nose x = " + results[0].pose.nose.x);
         console.log("nose y = " + results[0].pose.nose.y);
    }
}

function take_snapshot() {
    save('My_Filter_Image.png');
}



