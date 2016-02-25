var Babbler = (function(babbler){
  var japanese = {
    merry: "merii",
    christmas: "kurisumasu",
    and: "soshite",
    happy: "akemashite",
    new: "omeditou",
    year: "gozaimasu",
  };
  
  babbler.translateToJapanese = function(string) {
    var array = string.split(" ")
    array[array.indexOf("merry")] = japanese.merry;
    array[array.indexOf("christmas")] = japanese.christmas;
    array[array.indexOf("and")] = japanese.and;
    array[array.indexOf("happy")] = japanese.happy;
    array[array.indexOf("new")] = japanese.new;
    array[array.indexOf("year")] = japanese.year;
    var sentence = array.join(" ");
    return sentence;
  }
  return babbler;
}(Babbler || {}));

