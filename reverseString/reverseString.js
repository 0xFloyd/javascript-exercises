const reverseString = function(word) {
    let input = word;
    let length = input.length;
    let reverseWord = "";
    for (i=0; i<=length; i++) {
        reverseWord = reverseWord + input.charAt(length - i);
        
    }
  
    return reverseWord;
}

console.log(reverseString("overpopulation"));
module.exports = reverseString
