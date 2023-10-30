function identification_start(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifiyer = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/bEGJgXyLE/model.json", model_ready);}
    function model_ready(){
        classifiyer.classify(got_result);
    }
    function got_result(error, result){
        if(error){
            console.log(error);
        }
        else{
            console.log(result);}
        }