//add function to Array using prototype.
//reverse pollfill.

Array.prototype.reverseString = function () {
    const arr = this;
    let s = arr.length - 1;
    for (let i = 0; i < arr.length / 2; ++i) {
        let temp = arr[i];
        arr[i] = arr[s];
        arr[s] = temp;
        --s;
    }
}

let array = ['a','b','c','d','e'];
array.reverseString();
console.log(array);


//working.