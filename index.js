// Your code here
function mapToNegativize(arr){
    for (let i = 0; i < arr.length; i++){
        arr[i] = arr[i] * (-1);
    }
    return arr;
}
function mapToNoChange(arr){
    let newish = [];
    for (let i = 0; i < arr.length; i++){
        newish[i] = arr[i];
    }
    return newish;
}

function mapToDouble(arr){
    let a = mapToNoChange(arr)
    for (let i = 0; i < arr.length; i++){
        a[i] = a[i] * 2;
    }
    return a;
}

function mapToSquare(arr){
    for (let i = 0; i < arr.length; i++){
        arr[i] = arr[i] * arr[i];
    }
    return arr;
}

function reduceToTotal(arr, start = 0){
    let sum  = start;
    for (let i = 0; i < arr.length; i++){
        sum+= arr[i];
    }
    return sum;
}

function reduceToAllTrue(arr){
    const tOrF = true;
    for (let i = 0; i < arr.length; i++){
        if (!arr[i]){
            return !tOrF;
        }
    }
    return tOrF;
}

function reduceToAnyTrue(arr){
    const fOrT = false
    for (let i = 0; i < arr.length; i++){
        if (arr[i]){
            return !fOrT;
        }
    }
    return fOrT;
}