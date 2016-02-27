// lexicon object: Italian
var babbler = function(babbler) {
  var italian  = {
    merry:"bon",  
    Christmas:"Natale", 
    Happy:"Felice", 
    New:"Nuovo", 
    Year:"Anno",
    holiday:"vacanza", 
    and:"e"
}; 

// function to accept a string from user and     return the new translation
  babbler.translateToItalian = function(string) {
//the original array must be split up and searchable to find the translated word
    var array = string.split("")

// index.Of is used to find the English word and replace it with the Italian 
    array[array.indexOf("merry")] = Italian.merry;
    array[array.indexOf("christmas")] = Italian.christmas;
    array[array.indexOf("happy")] = Italian.happy;
    array[array.indexOf("new")] = Italian.new;
    array[array.indexOf("year")] = Italian.year;
    array[array.indexOf("holiday")] = Italian.holiday;
    array[array.indexOf("and")] = Italian.and;
  }

    var sentence = array.join("");
    return sentence; 
  }
return babbler;

// pass the babbler into the object ??? also, where is the missing curly bracket? 
}(Babbler || {})); 
