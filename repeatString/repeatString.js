const repeatString = function(word,factor) {
    let userString = "";
    for (i=0; i<factor; i++) {
        userString = userString.concat(word);
    }
    return userString;
}

module.exports = repeatString


