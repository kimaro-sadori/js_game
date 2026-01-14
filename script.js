// ================= DOM ELEMENTS =================
const nameInput = document.getElementById("nameInput");
const addBtn = document.getElementById("addBtn");
const saveTeamBtn = document.getElementById("saveTeamBtn");
const list = document.getElementById("list");
const errorEl = document.getElementById("error");

const teamsSection = document.getElementById("teamsSection");
const teamsTable = document.getElementById("teamsTable");
const noTeamsMsg = document.getElementById("noTeamsMsg");

const lobby = document.getElementById("lobby");
const game = document.getElementById("game");
const handover = document.getElementById("handover");
const round = document.getElementById("round");

const playerNameEl = document.getElementById("playerName");
const hintEl = document.getElementById("hint");
const wordEl = document.getElementById("word");
const revealCard = document.getElementById("revealCard");

const nextBtn = document.getElementById("nextBtn");
const roundText = document.getElementById("roundText");
const timerEl = document.getElementById("timer");

const roundActions = document.getElementById("roundActions");
const restartBtn = document.getElementById("restartBtn");
const homeBtn = document.getElementById("homeBtn");

const handoverName = document.getElementById("handoverName");

// Instructions modal
const instructionsModal = document.getElementById("instructionsModal");
const closeInstructions = document.getElementById("closeInstructions");

// ================= GAME DATA =================
const names = []; // Current player names being added
let teams = []; // All saved teams
let currentPlayer = 0; // Index of current player viewing their role
let imposterIndex; // Index of the imposter player
let gameWord; // The real word for this round
let gameHint; // The hint shown to imposter
let timerInterval; // Store timer interval

// ================= INITIALIZE =================
// Show instructions on first visit
// if (!localStorage.getItem("hasSeenInstructions")) {
//   instructionsModal.style.display = "flex";
// }
//button how to play
const showInstructionsBtn = document.getElementById("showInstructionsBtn");
showInstructionsBtn.onclick = () => {
  instructionsModal.style.display = "flex";
};

closeInstructions.onclick = () => {
  instructionsModal.style.display = "none";
  localStorage.setItem("hasSeenInstructions", "true");
};

// Load saved teams
loadTeams();

// ================= ADD PLAYER =================
function addName() {
  const name = nameInput.value.trim();
  
  if (!name) {
    showError("Please enter a name");
    return;
  }
  
  if (names.includes(name)) {
    showError("Player name already added");
    return;
  }
  
  names.push(name);
  updatePlayerList();
  nameInput.value = "";
  nameInput.focus();
  clearError();
}

addBtn.onclick = addName;
nameInput.addEventListener("keydown", e => {
  if (e.key === "Enter") addName();
});

function updatePlayerList() {
  if (names.length === 0) {
    list.innerHTML = "<p class='empty-list'>No players added yet</p>";
    return;
  }
  
  list.innerHTML = names.map(name => 
    `<div class="player-tag">${name}</div>`
  ).join("");
}

function showError(message) {
  errorEl.textContent = message;
}

function clearError() {
  errorEl.textContent = "";
}

// ================= SAVE TEAM =================
function saveTeam() {
  if (names.length < 3) {
    showError("A team must have at least 3 players");
    return;
  }
  
  const team = {
    id: Date.now(),
    name: `Team ${teams.length + 1}`,
    players: [...names],
    createdAt: new Date().toISOString()
  };
  
  teams.push(team);
  saveTeamsToStorage();
  
  // Clear current list
  names.length = 0;
  updatePlayerList();
  clearError();
  
  // Start game with this team
  startGame(team);
}

saveTeamBtn.onclick = saveTeam;

// ================= TEAM MANAGEMENT =================
function loadTeams() {
  const saved = localStorage.getItem("imposterTeams");
  if (saved) {
    teams = JSON.parse(saved);
    renderTeams();
  }
}

function saveTeamsToStorage() {
  localStorage.setItem("imposterTeams", JSON.stringify(teams));
  renderTeams();
}

function renderTeams() {
  teamsTable.innerHTML = "";
  
  if (teams.length === 0) {
    noTeamsMsg.style.display = "block";
    teamsTable.style.display = "none";
    return;
  }
  
  noTeamsMsg.style.display = "none";
  teamsTable.style.display = "block";
  
  teams.forEach(team => {
    const teamCard = document.createElement("div");
    teamCard.className = "team-card";
    
    teamCard.innerHTML = `
      <div class="team-players">
        <strong>${team.name}</strong><br>
        ${team.players.join(", ")}
      </div>
      <div class="team-actions">
        <button class="start-team" onclick="startGame(${team.id})">
          ▶ Start Game
        </button>
        <button class="remove-team" onclick="removeTeam(${team.id})">
          🗑️ Remove
        </button>
      </div>
    `;
    
    teamsTable.appendChild(teamCard);
  });
}

function startGame(teamOrId) {
  let team;
  if (typeof teamOrId === 'number') {
    team = teams.find(t => t.id === teamOrId);
  } else {
    team = teamOrId;
  }
  
  if (!team) return;
  
  // Reset game state
  names.length = 0;
  names.push(...team.players);
  currentPlayer = 0;
  
  // Choose random imposter
  imposterIndex = Math.floor(Math.random() * names.length);
  
  // Choose random word and hint
  const random = words[Math.floor(Math.random() * words.length)];
  gameWord = random.word;
  gameHint = random.hints[Math.floor(Math.random() * random.hints.length)];
  
  // Show game screen
  lobby.style.display = "none";
  teamsSection.style.display = "none";
  game.style.display = "block";
  handover.style.display = "none";
  round.style.display = "none";
  
  // Show first player's role
  showPlayer();
}

function removeTeam(teamId) {
  if (confirm("Are you sure you want to remove this team?")) {
    teams = teams.filter(t => t.id !== teamId);
    saveTeamsToStorage();
  }
}

// ================= GAME FLOW =================
function showPlayer() {
  // Hide the text COMPLETELY
  hintEl.style.display = "none";
  wordEl.style.display = "none";
  
  // Reset card state
  revealCard.classList.remove("revealed");
  
  // Update player name
  playerNameEl.textContent = names[currentPlayer];
  
  // Update role text
  if (currentPlayer === imposterIndex) {
    hintEl.textContent = "You are the IMPOSTER!";
    wordEl.textContent = `Hint: ${gameHint}`;
  } else {
    hintEl.textContent = "You are INNOCENT";
    wordEl.textContent = gameWord;
  }
}

revealCard.onclick = () => {
  revealCard.classList.add("revealed");
  // Show the text instantly
  hintEl.style.display = "block";
  wordEl.style.display = "block";
};


// Next button - go to next player or start round
nextBtn.onclick = () => {
  currentPlayer++;
  
  if (currentPlayer < names.length) {
    // DIRECTLY show next player's role
    showPlayer();
  } else {
    startRound();
  }
};

// ================= ROUND (DISCUSSION TIME) =================
function startRound() {
  game.style.display = "none";
  handover.style.display = "none";
  round.style.display = "block";
  
  // Choose random starter
  const starter = names[Math.floor(Math.random() * names.length)];
  roundText.innerHTML = `
    <p>🎯 <strong>Find the Imposter!</strong></p>
    <p>You have 2 minutes to discuss and vote.</p>
    <p><em>Start the discussion with: <strong>${starter}</strong></em></p>
  `;
  
  // Start timer
  startTimer(120);
}

function startTimer(seconds) {
  let time = seconds;
 roundActions.style.display = "flex";
  timerEl.style.color = "#10b981"; // Green color
  
  updateTimerDisplay(time);
  
  timerInterval = setInterval(() => {
    time--;
    updateTimerDisplay(time);
    
    // Change color when time is running low
    if (time <= 30) {
      timerEl.style.color = "#dc2626"; // Red color
      timerEl.classList.add("timer-pulse");
    }
    
    if (time < 0) {
      clearInterval(timerInterval);
      timerEl.textContent = "TIME'S UP!";
      timerEl.classList.remove("timer-pulse");
      
      // Show imposter reveal
      const imposterName = names[imposterIndex];
      roundText.innerHTML = `
        <p>⏰ <strong>Time's up!</strong></p>
        <p>The Imposter was: <strong style="color:#dc2626;font-size:1.5em">${imposterName}</strong></p>
        <p>The word was: <strong style="color:#10b981;font-size:1.5em">${gameWord}</strong></p>
        <p>The imposter saw the hint: "${gameHint}"</p>
      `;
      
      roundActions.style.display = "flex";
    }
  }, 1000);
}

function updateTimerDisplay(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  timerEl.textContent = `${mins}:${secs.toString().padStart(2, '0')}`;
}

// ================= GAME CONTROLS =================
restartBtn.onclick = () => {
  clearInterval(timerInterval);
  timerEl.classList.remove("timer-pulse");
  
  // Restart with same team
  const currentTeam = {
    id: Date.now(),
    players: [...names]
  };
  
  startGame(currentTeam);
};

homeBtn.onclick = () => {
  clearInterval(timerInterval);
  timerEl.classList.remove("timer-pulse");
  
  // Return to lobby
  lobby.style.display = "block";
  teamsSection.style.display = "block";
  game.style.display = "none";
  handover.style.display = "none";
  round.style.display = "none";
  
  // Reset player list
  names.length = 0;
  updatePlayerList();
  nameInput.focus();
};

// Add some CSS for timer animation
const style = document.createElement('style');
style.textContent = `
  @keyframes timer-pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }
  .timer-pulse {
    animation: timer-pulse 1s infinite;
  }
  .player-tag {
    display: inline-block;
    background: #4f46e5;
    color: white;
    padding: 8px 16px;
    margin: 5px;
    border-radius: 20px;
    font-weight: 500;
  }
  .empty-list {
    color: #999;
    font-style: italic;
    text-align: center;
    padding: 20px;
  }
`;
document.head.appendChild(style);