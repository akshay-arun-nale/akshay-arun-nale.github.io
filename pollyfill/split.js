String.prototype.splitString = function(element = ''){
    let temArray = [];
    let temp = ''
    for (let i = 0; i < str.length; i++) {
      let el = str[i]
      if (el === element || (element === '' && temp)) {
        temArray.push(temp)
        temp = ''
      }
      if (el !== element) {
        temp += el
      }
    }
    if (temp) {
      temArray.push(temp)
      temp = ''
    }
    return temArray
  }
  
  let str = 'lord of the ring\'s is the best movie i ever saw, after reaching my hometown in pune';
  console.log(str.splitString(','));

  //work's // split string using comma.