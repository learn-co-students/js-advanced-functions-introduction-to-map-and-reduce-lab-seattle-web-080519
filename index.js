// array.map(function(currentValue, index, arr), thisValue)
function mapToNegativize(sourceArray) {
    let arr = [];
    for (let i=0; i < sourceArray.length; i++) {
        let n = sourceArray[i] * -1;
        arr.push(n);
    }
    return arr;
};
function mapToNoChange(src) {
    let a = [];
    for (let i=0; i<src.length; i++) {
        a.push(src[i]);
    }
    return a;
};
function mapToDouble(src) {
    let a = [];
    for (let s of src) {
        a.push(s * 2);
    }
    return a;
};  
function mapToSquare(src) {
    let a = [];
    for (let s of src) {
        a.push(s ** 2);
    }
    return a;
};

function reduceToTotal(sourceArray, startingPoint=0) {
    let total = startingPoint;
    for (let i=0; i<sourceArray.length; i++){
        total += sourceArray[i];
        // (total = (sourceArray[i] + 1))++
    }
    return total;
};
function reduceToAllTrue(sourceArray) {
    for (let s of sourceArray) {
        if (!s)
            return false;
    };
    return true;
}
function reduceToAnyTrue(src) {
    for (let s of src) {
        if (s)
        return true;
    };
    return false;
}