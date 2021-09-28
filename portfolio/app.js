console.log("This site uses javascript/html/css");
console.log("Thanks for visiting");
console.log("DO YOU KNOW YOU CAN ROLL A DICE NOW");

var one = "./Images/one.png";
var two = "./Images/two.png";
var three = "./Images/three.png";
var four = "./Images/four.png";
var five = "./Images/five.png";
var six = "./Images/six.png";

var dt = new Date();
document.getElementById("date").innerText = dt.getFullYear()+'-'+(dt.getMonth()+1)+'-'+dt.getDate();


function roll(){
    console.log("Random number rolling");
    var randnum = Math.ceil(Math.random() * 6);
    console.log("Random number between 1 and 6: " + randnum);
    if(randnum == 1){
        document.getElementById("dice").setAttribute("src",one);
        document.getElementById("dice").setAttribute("title","ONE");
    }
    if(randnum == 2){
        document.getElementById("dice").setAttribute("src",two);
        document.getElementById("dice").setAttribute("title","TWO");
    }
    if(randnum == 3){
        document.getElementById("dice").setAttribute("src",three);
        document.getElementById("dice").setAttribute("title","THREE");
    }
    if(randnum == 4){
        document.getElementById("dice").setAttribute("src",four);
        document.getElementById("dice").setAttribute("title","FOUR");
    }
    if(randnum == 5){
        document.getElementById("dice").setAttribute("src",five);
        document.getElementById("dice").setAttribute("title","FIVE");
    }
    if(randnum == 6){
        document.getElementById("dice").setAttribute("src",six);
        document.getElementById("dice").setAttribute("title","SIX");
    }
}

function extend() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none"){
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } 
    else{
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }