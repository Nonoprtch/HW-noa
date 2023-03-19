var obj = {};
obj.main = document.getElementById("main");
obj.btnStart = document.getElementsByClassName("btnStart");
obj.container = document.getElementById("container");
obj.ecranNoir = document.getElementsByClassName("ecranNoir");
obj.btnTurn = document.getElementsByClassName("btnTurn");
obj.partieScore = document.getElementsByClassName("partieScore");
obj.score = document.getElementsByClassName("score");
obj.point = document.getElementsByClassName("point");
obj.level = document.getElementsByClassName("level");
obj.missedClicks = document.getElementsByClassName("missedClicks");
obj.timer = document.getElementsByClassName("timer");
obj.hightScore = document.getElementsByClassName("hightScore");

var stat = {};
stat.clk = 0;
stat.score = 0;
stat.point = 10;
stat.level = 1;
stat.missedClicks = 0;
stat.timer = 60;
stat.hightScore = []; 
stat.timeReflex = 300;
stat.rotationSpeed = 2;
stat.name = ""; 

let audio = new Audio ('./audio/beyonce.mp4'); 


const partieScore = document.getElementsByClassName("partieScore");


if (localStorage.users == undefined){
  let fauxScore = [
    {
      "name" : "Beyonce", 
      "score" : 629,
      "date" : "23/01/2023",
    },{
      "name" : "Usher", 
      "score" : 430,
      "date" : "02/02/2023",
    }, {
      "name" : "Kalash", 
      "score" : 92,
      "date" : "21/01/2023",
    }, {
      "name" : "Rihanna", 
      "score" : 52,
      "date" : "11/03/2023",
    }, {
      "name" : "Jay-Z", 
      "score" : 20,
      "date" : "11/02/2023",
    },


  ]
  fauxScore = JSON.stringify(fauxScore);
  localStorage.users = fauxScore;
}

obj.btnStart[0].innerText = "Catch me if you can "

obj.btnStart[0].addEventListener("mouseover", function(){
  obj.btnStart[0].innerText = "START GAME "
});

obj.btnStart[0].addEventListener("mouseout", function(){
   obj.btnStart[0].innerText = "Catch me if you can! "
});

function showPopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "block";
}

function closePopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "none";
}



let started = false;
let timeLeft = 60;
let timerInteervalId;

if (localStorage.users == undefined) {
  localStorage.users = "[]";
}
obj.btnStart[0].addEventListener("click", start);  
function start() {
  if (confirm("Are you ready ?")) {
    showPopup();
    started = true;
    obj.btnStart[0].remove();
    turn();
    audio.play();
    affichageScore();
    affichageNextLevel();
    affichageLevel();
    affichageMissedClk();
    affichageTimer();
    startTimer();

  } else {
    alert("BOUUUH!!!");
  }
}

function turn() {
  obj.btnTurn[0].style.top = Math.floor(Math.random() * 400).toString() + "px";
  obj.btnTurn[0].style.left = Math.floor(Math.random() * obj.ecranNoir[0].offsetWidth - 50).toString() + "px";
  obj.btnTurn[0].style.display = "block";
  obj.btnTurn[0].style.animation = "rotation " + stat.rotationSpeed + "s infinite linear"
}
obj.ecranNoir[0].addEventListener("click", (e) => {
  console.log(started);
  if (started == true) {
    if (e.target.className == "btnTurn") {
      turn();
      clicked();
      levelUp();
      plusScr();
      nxtLevelMoins();

    } else if (e.target.className == "ecranNoir") {
      missed();
      affichageMissedClk();
      moinsScr();
      affichageScore();
    }
  }
});

function nxtLevelMoins() {
  stat.point--;
  affichageNextLevel();

}
function plusScr() {
  stat.score += 10 * stat.level;
  affichageScore();

}
function moinsScr() {
  stat.score -= 1 * stat.level;
  affichageScore();

}
function levelUp() {
  if (stat.clk % 10 == 0) {
    stat.level++;
    stat.timer = stat.timer + 10;
    stat.point = 11;
    console.log(stat.timer);
    affichageLevel();
    stat.timeReflex -= 50;
    stat.rotationSpeed -= 0.25;
  }
};
function missed() {
  stat.missedClicks++;
}
function clicked() {
  stat.clk++;
}
function affichageScore() {
  obj.score[0].innerText = "Score: \n" + stat.score;
}
function affichageNextLevel() {
  obj.point[0].innerText = "Point to next level: \n" + stat.point;
}
function affichageLevel() {
  obj.level[0].innerText = "Level: \n" + stat.level;
}
function affichageMissedClk() {
  obj.missedClicks[0].innerText = "Missed clicks: \n" + stat.missedClicks;
}
function affichageTimer() {
  obj.timer[0].innerText = "Timer: \n" + stat.timer;
}

function startTimer() {
  timerInteervalId = setInterval(function () {
    stat.timer--;
    if(stat.timer == 0) {
      stopGame();
    }
    affichageTimer();
    if (stat.timer <= 0) {
      clearInterval(timerInteervalId);
    }
  }, 1000)
};

obj.btnTurn[0].addEventListener("mouseover", function () {
  // btnTurn();
  setTimeout(function () {
    turn();
  }, stat.timeReflex);
})

function stopGame(){
  topCinq();
  addLocalStorage()
  location.reload();
}

function addLocalStorage(){
  let tableau = [];
  let infoScore = {
    "name": stat.name,
    "date": new Date().toLocaleDateString(),
    "score": stat.score
  }

  tableau = JSON.parse(localStorage.users);
 


tableau.push(infoScore); 
tableau.sort((a, b) => b.score - a.score); 

if (tableau.length > 5) {
tableau.pop(); 
}
localStorage.users = JSON.stringify(tableau); 
 
}

function topCinq(){
  var topCinq = JSON.parse(localStorage.users);
  if(topCinq.length == 5) {
    for (let i = 0; i < topCinq.length; i++) {
      if(stat.score > topCinq[i].score) {
        alert ("youre score is: " + stat.score )
        stat.name = prompt("Please enter your name: ")  
         return
    }
    }
  } else if( topCinq.length < 5) {
    alert("bravo vous etes dans le top 5 ")
    stat.name = prompt("Please enter your name: ")  

  }

}
affichageHS();
function affichageHS(){
 var hs =  obj.hightScore[0];
 var ls = JSON.parse(localStorage.users);
 for (let i = 0; i < ls.length; i++) {
  var p = document.createElement("p");
  p.innerText = ls[i].name + " " + ls[i].score ;
  var span = document.createElement("span");
  span.innerText = ls[i].date;
  obj.hightScore[0].append(p);
  p.append(span);
 }
 console.log(ls);
}
