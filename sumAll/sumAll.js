const sumAll = function(int1, int2) {
    if (int1<0 || int2 < 0) {
        return 'ERROR';
    }

    if (!Number.isInteger(int1) || !Number.isInteger(int2)) {
        return 'ERROR';
    }
    
    let largerInt = 0;
    let smallerInt = 0;
    let sum = 0;
    
    if (int1 > int2) {
        largerInt = int1;
        smallerInt = int2;
    }
    else {
        largerInt = int2;
        smallerInt = int1;
    }

    for (i=smallerInt; i <= largerInt; i++) {
        sum = sum + i;
    }
    return sum;
}
console.log(sumAll(3,5));
module.exports = sumAll
