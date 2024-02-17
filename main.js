noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristX=0;

function setup()
{
  canvas=createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(500,550);
poseNet = ml5.poseNet(video , modelLoaded);
poseNet.on('pose' , gotPoses);


  
}
function modelLoaded()
{
  console.log('poseNet is insatlized');
}
function draw()
{
  document.getElementById("square_side").innerHTML="Width and height will be " + difference +"px";
  background = '#7F7875';
  fill("#0000ff");
  stroke("#0000ff");
  square(noseX, noseY, difference);
}
function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    console.log("noseX" + noseX + "noseY" + noseY);
    rightWristX=results[0].pose.rightWrist.x;
    leftWristX=results[0].pose.leftWrist.x;
    difference=floor(leftWristX - rightWristX);

    console.log("leftWristX" + leftWristX + "rightWristX" + rightWristX + "difference" + difference);
  }
}

