//intialization of the model object
let mobileNet;
let video;
let label='model loading...';
//let results;


//setup function
function setup()
{
    //create canvas
    createCanvas(640,480);
    //imitialize the webcam stream in a object
    video=createCapture(VIDEO);
    //hide the webcam stream
    video.hide();

    //initialize the mobilenet object with a callback
    mobileNet= ml5.imageClassifier('MobileNet',video,ModelLoaded);

}


//callback function for when the model is ready for prediction
function ModelLoaded()
{
    console.log('Model is ready');
    //predicting the image
    mobileNet.predict(result)
}
//callback function to get the results
function result(err,res)
{
    //check for errors
    if(err)
    {
        //log the error if any
        console.error(err)
    }
    else{
       
        //get the label from the json result
        label = res[0].className;
       
    //predicting the image again
         mobileNet.predict(result)
    }
}
function draw()
{
    //Displaying the webcam stream
  image(video,0,0);

  //setting up text label 
    textSize(32);
    fill(255,140,0);
    text(label,10,450);
}
