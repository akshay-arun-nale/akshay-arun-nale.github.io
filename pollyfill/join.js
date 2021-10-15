Array.prototype.zoin = function(delimeter = ''){
    const arr=this;
    let temp_str='';
    for(let i=0;i<arr.length-1;i++){
        temp_str+=""+arr[i]+delimeter;
    }
    temp_str+=""+arr[arr.length-1];
    return temp_str;
}

//testing

let array =['akshay','arun','nale'];
let string = array.zoin('-');
console.log(string);

//working 