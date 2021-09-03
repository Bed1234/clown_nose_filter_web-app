
nose_X= 0;
nose_Y = 0;


function preload() {
    clown_nose = loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
}

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


function gotPoses(results){
    if(results.length > 0 )
    {
         console.log(results);

         nose_X = results[0].pose.nose.x;
         nose_Y = results[0].pose.nose.y;

         console.log("nose x = " + results[0].pose.nose.x);
         console.log("nose y = " + results[0].pose.nose.y);
    }
}



function draw(){
    image(video, 0, 0,300, 300);

    image(clown_nose, nose_X-15, nose_Y-15, 30, 30)

   //fill(255, 0 , 0);
    //stroke(255, 0, 0);
    //circle(nose_X, nose_Y, 20);


}


function take_snapshot() {
    save('My_Filter_Image.png');
}



