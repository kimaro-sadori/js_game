//variables
const nameInput = document.getElementById("nameInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("list");
const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");
document.getElementById("playerName")

//create database
//words.js
//store names

const names = [];
console.log(words); // must work


function addName() {

  if (nameInput.value === "") return;

  names.push(nameInput.value);
  list.innerText = names.join(", ");
  nameInput.value = ""; // clear input
}
addBtn.onclick = addName;// ka t5ali 7tta button add ka dir b7al entrer
  //entrer
  nameInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addName();
  }
});



names.forEach(n => console.log(n));


//see it 


  ///prepar game data
let currentPlayer = 0;
let imposterIndex;
let gameWord;
let gameHint;

//click start button
startBtn.onclick = () => {
  if (names.length < 3) {
    document.getElementById("error").innerText =
      "You must enter at least 3 players";
    return;
  }

  document.getElementById("error").innerText = "";

  document.getElementById("lobby").style.display = "none";
  document.getElementById("game").style.display = "block";

  currentPlayer = 0;
  imposterIndex = Math.floor(Math.random() * names.length);

  const random = words[Math.floor(Math.random() * words.length)];
  gameWord = random.word;
  gameHint = random.hints[Math.floor(Math.random() * random.hints.length)];

  showPlayer();
};



//show screen
function showPlayer() {
  const name = names[currentPlayer];
  document.getElementById("playerName").innerText = name;

  if (currentPlayer === imposterIndex) {
    document.body.style.backgroundColor = "red";
    document.getElementById("hint").innerText = "you are the imposter this is your hint";
    document.getElementById("word").innerText = gameHint;
} else {
    document.body.style.backgroundColor = "green";
    document.getElementById("hint").innerText = "the real word are :";
    document.getElementById("word").innerText = gameWord;
}
}

//next player button
function nextPlayer() {
  currentPlayer++;

  if (currentPlayer >= names.length) {
    startRound();
    return;
  }

  showPlayer();
};
nextBtn.onclick = nextPlayer; //clicki 3la next iban next player
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && document.getElementById("game").offsetParent !== null) {
    nextPlayer();
  }
});

// entrer bach tchof next player


//fach ka ibda ter7
function startRound() {
  document.getElementById("game").style.display = "none";
  document.getElementById("round").style.display = "block";

  const randomPlayer = names[Math.floor(Math.random() * names.length)];

  document.getElementById("roundText").innerText =
    "You have 2 minutes to find the imposter. Start with " + randomPlayer;

  startTimer(120);
}

//timer
function startTimer(seconds) {
  let time = seconds;

  const interval = setInterval(() => {
    const min = Math.floor(time / 60);
    const sec = time % 60;

    document.getElementById("timer").innerText =
      `${min}:${sec.toString().padStart(2, "0")}`;

    time--;

    if (time < 0) {
      clearInterval(interval);
      document.getElementById("timer").innerText = "Time up!";
      document.getElementById("alarm").play();
    }
  }, 1000);
}

