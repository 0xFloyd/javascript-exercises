const removeFromArray = function(...args) {
    let inputArray = args[0];
    let otherArray = [];
    inputArray.forEach((item) => {       //forEAch is a function that goes through array based on each item. must put a function inside of forEAch
        if (!args.includes(item)) {
            otherArray.push(item);      //.push adds item to array 
        }
    });
    return otherArray;   
}

module.exports = removeFromArray
