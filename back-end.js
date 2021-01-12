function Search() {  
   var word = document.getElementById("input").value;
    let api = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;  
      
    fetch(api)  
         .then(function(response){  
            let data = response.json();  
            return data;

        }) 
.then(function(data){ 

//Input
 document.getElementById('word').innerHTML = word;

 ///If no Definition
          message = data.message;
          if (message){
         alert(message)
        }

//Output
            definition1 = data[0].meanings[0].definitions[0].definition;
            example1 = data[0].meanings[0].definitions[0].example;
document.getElementById('definition1').innerHTML ="1:" + definition1;
document.getElementById('example1').innerHTML = "1:" +  example1;
  ///audio
voiceUrl = data[0].phonetics[0].audio;
var audio = document.getElementById('audio');
var src = document.createAttribute("src");
src.value = voiceUrl;
audio.setAttributeNode(src); 

            definition2 = data[0].meanings[1].definitions[0].definition;
            example2 = data[0].meanings[1].definitions[0].example;
     if(definition2 != null) {
  document.getElementById('definition2').innerHTML =  "2:" + definition2;
  document.getElementById('example2').innerHTML = "2:" +  example2;
    }
    


        })  
}
