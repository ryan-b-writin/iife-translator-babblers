//The team should create an extra JavaScript file that handles interacting with 
//the form elements and determining which method should be called.

//Main JS file that accepts values from index html
//varible declarations of a button to capure the input from the html

var button = document.getElementById("translator");
button.addEventListener("click", babble);

var clearButton = document.getElementById("clear");

var removeText = function(){
  document.getElementById("textInput").innerHTML = "";
  document.getElementById("translatedgreeting").innerHTML= "";
}

clearButton.addEventListener("click", removeText);

//add event listener to button element and call the language evaluation

// This function should determine which conversion should
// happen based on which language is selected from the HTML
// look at what value from the HTML call the appropriate "getter";

var babble = function() {
  var language = document.getElementById("selector").value;
  var textInput = document.getElementById("textInput").value;
    // check value returned
    if (language === "spanish") {
      Babbler.translateToSpanish(textInput);
    }
      else if (language === "hindi") {
        Babbler.translateToHindi(textInput);        
      }
        else if (language === "italian") {
          Babbler.translateToItalian(textInput); 
        }
          else if (language === "japanese") {
            Babbler.translateToJapanese(textInput);
          } 
            else if(language === "french")  {
              Babbler.translateToFrench(textInput);
            }
 };     

//need to set the HTML Tag with result from IFFE


















