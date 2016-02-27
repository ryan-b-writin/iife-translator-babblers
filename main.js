//The team should create an extra JavaScript file that handles interacting with 
//the form elements and determining which method should be called.

//Main JS file that accepts values from index html
//varible declarations of a button to capure the input from the html
// console.log("In JS Main");

var button = document.getElementById("translator");
button.addEventListener("click", babble);

//add event listener to button element and call the language evaluation

// This function should determine which conversion should
// happen based on which language is selected from the HTML
// look at what value from the HTML call the appropriate "getter";

var babble = function() {
  var language = document.getElementById("selector").value;
  textInput = document.getElementById("textInput").value;

  var translateToSpanish = function(textInput){ 
    Babbler.translateToSpanish(textInput) 
  };

    // check value returned
    if (language === "spanish") {
     Babbler.translateToSpanish(textInput);
    };
            
 //        }
 //        else if language === "hindi" {
 //           babble.toHind: function();
            
 //        }
 //        else if language === "italian" {
 //           babble.toItalian: function(); 
          
 //        }
 //        else language === "japanese" {
 //          babble.toJapanese function();
 //        } 
      // };
 // return babble       
 };     

 button.addEventListener("click", babble);


//need to set the HTML Tag with result from IFFE
















