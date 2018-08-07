//intialization of the model object
let mobileNet;


//setup function
function setup()
{
    //create canvas
    createCanvas(400,300);
    //imitialize the image in a object
    img_dog=createImg('./dog.jpg',imageReady);


    //hide the image
    img_dog.hide();

    //initialize the mobilenet object with a callback
    mobileNet= ml5.imageClassifier('MobileNet',ModelLoaded);

}
//callback function for when the image is ready
function imageReady()
{
    image(img_dog,0,0,400,300);
}
//callback function for when the model is ready for prediction
function ModelLoaded()
{
    console.log('Model is ready');
    //predicting the image
    mobileNet.predict(img_dog,result)
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
        //log the result
        console.log(res);
        //get the label from the json result
        let label = res[0].className;

        //get the probablity from the json result
        let prob = res[0].probability;

        //creation of DOM and printing the label and probability
        fill(0);
        createP(label);
        createP(prob);
    }
}
