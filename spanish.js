//Each team member will create one JavaScript file that contains one IIFE. 
//Each teammate's IIFE will augment the other teammates' IIFEs.
//store in a object lexicon defined by language translated to:

//capitalize team object agreed on and used as it acts like a "Class" pass in
//what babler was from other js files
var Babbler = (function(oldBabbler){    
  //object lexicon for spanish
  var toSpanish = {
    merry: "Alegre",
    christmas: "Navidad",
    and: "y",
    happy: "Feliz",
    new: "Nuevo",
    year: "Ano"
  };
  // quicky check to see if phrase entered and return correct oder as english is not 1-1
  oldBabbler.translateToSpanish = function(textPassedIn) {
    if inputText === "merry christmas and happy new year" {
      return "Feliz navidad y próspero año nuevo";
    } else {
      //translate each of the english words in the object to a new object
      var parsePhraseEntered = textPassedIn.split(" ");
      parsePhraseEntered[parsePhraseEntered.indexOf("merry")] = toSpanish.merry;
      parsePhraseEntered[parsePhraseEntered.indexOf("christmas")] toSpanish.christmas;
      parsePhraseEntered[parsePhraseEntered.indexOf("and")] = toSpanish.and;
      parsePhraseEntered[parsePhraseEntered.indexOf("happy")] = toSpanish.happy;
      parsePhraseEntered[parsePhraseEntered.indexOf("new")] = toSpanish.new;
      parsePhraseEntered[parsePhraseEntered.indexOf("year")] = toSpanish.year;
      //english to spanish will be different string structure, not one for one so phrase will 
      //be inorrect syntax
      var newPhraseTranslated = parsePhraseEntered.join(" ");
        return newPhraseTranslated;
      }  
  }
  return oldBabbler
 }(Babbler || {})); //Optional bonus 1
