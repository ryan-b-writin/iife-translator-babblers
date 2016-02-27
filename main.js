//The team should create an extra JavaScript file that handles interacting with 
//the form elements and determining which method should be called.

//Main JS file that accepts values from index html
//varible declarations of a button to capure the input from the html
console.log("In JS Main");

var button = document.getElementById("Translate");

//add event listener to button element and call the language evaluation
button.addEventListener("click", babble);


// This function should determine which conversion should
// happen based on which language is selected from the HTML
// look at what value from the HTML call the appropriate "getter";

var babble = function() {
      var language = document.getElementById("NamefromHTML").value;
      var translateTo = function(language){
      //check value returned
        if language === "Spanish" {
           babble.toSpanish: function();
            
        }
        else if language === "Hindi" {
           babble.toHind: function();
            
        }
        else if language === "Italian" {
           babble.toItalian: function(); 
          
        }
        else language === "Japanese" {
          babble.toJapanese function();
        } 
      };
 return babble       
 }();     


//need to set the HTML Tag with result from IFFE
















