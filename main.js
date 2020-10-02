Webcam.set({
    width:350,
    height:300,
    image_format: 'png' ,
    png_quality:90
    });
    camera=document.getElementById("camera");
    
    Webcam.attach('#camera');
    
    function take(){
        Webcam.snap(function(data_uri){
         document.getElementById("result").innerHTML='<img src="'+data_uri+'" id="captured_image"/>';
        });
    }
    
    console.log('ml5 version:' , ml5.version);
    classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/4IIXzaaVf/model.json' , modelLoaded);
    
        function modelLoaded(){
            console.log('Model Loaded!');
        }
    
        function predect(){
            img=document.getElementById('captured_image');
            classifier.classify(img , gotResult);
        }
    
        
    function gotResult(error , results){
        if(error){
          console.error(error);
        } else {
            console.log(results);
            document.getElementById("result_emotion_name").innerHTML=results[0].label;
        }
    }