var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var reset = document.getElemenById("reset");
var span1 = document.getElementById("p1");
var span2 = document.getElementById("p2");
var numinput = document.querySelector("input");
var winscore = document.querySelector("p span");


var p1score = 0;
var p2score = 0;
var gameOver = false;
var winningScore = 5;

function reset1(){
  gameOver = false;
  span1.textContent = p1score = 0;
  span2.textContent = p2score = 0;
  span1.style.color = "black";
  span2.style.color = "black";
}

p1.addEventListener("click", () => {
  if(!gameOver){
    p1score++;
    span1.textContent = p1score;
  }
  if(p1score === winningScore){
    span1.style.color = "green";
    gameOver = true;
  }
});

p2.addEventListener("click", () => {
  if(!gameOver){
    p2score++;
    span2.textContent = p2score;
  }
  if(p2score === winningScore){
    span2.style.color = "green";
    gameOver = true;
  }
});

reset.addEventListener("click", () => {
  reset1();
});



numinput.addEventListener("change", () => {
  winscore.textContent = numinput.value;
  winningScore = Number(numinput.value);
  reset1();
});


