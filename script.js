// ================= SIMPLE GAME STATE =================
let gameState = {
    players: [],
    gameMode: 'classic',
    timer: 120,
    categories: ['animals', 'food', 'movies', 'places', 'objects', 'celebrities'],
    
    // Current game
    currentPlayer: 0,
    imposter: -1,
    word: '',
    hint: '',
    wordAr: '',
    hintAr: '',
    
    // Stats
    gamesPlayed: 0
};

// ================= JSONBin CONFIG =================
const JSONBIN_CONFIG = {
    API_KEY: '$2a$10$gFVqUzzSAOQUgLJc42CpWeGT33e40Nwki66XGI6x/R.uCj6m/8XHe',
    BASE_URL: 'https://api.jsonbin.io/v3/b'
};

// We'll create a bin on first use and store its ID
let currentBinId = localStorage.getItem('jsonbin_id') || '';

// ================= PLAY COUNT FUNCTIONS =================
async function loadPlayCount() {
    try {
        console.log('Loading play count...');
        
        // Try to get from our existing bin first
        if (currentBinId) {
            console.log('Using existing bin ID:', currentBinId);
            const response = await fetch(`${JSONBIN_CONFIG.BASE_URL}/${currentBinId}/latest`, {
                headers: {
                    'X-Master-Key': JSONBIN_CONFIG.API_KEY
                }
            });
            
            if (response.ok) {
                const data = await response.json();
                const binData = data.record;
                
                if (binData && typeof binData.playCount === 'number') {
                    gameState.gamesPlayed = binData.playCount;
                    console.log('Loaded from JSONBin:', gameState.gamesPlayed);
                    
                    // Update localStorage backup
                    localStorage.setItem('imposterGamePlayCount', gameState.gamesPlayed.toString());
                    localStorage.setItem('lastPlayCountUpdate', Date.now().toString());
                    
                    updatePlayCountDisplay();
                    return;
                }
            }
        }
        
        // If we get here, either no bin or bin fetch failed
        throw new Error('No valid bin found');
        
    } catch (error) {
        console.log('JSONBin load failed, trying to create new bin:', error);
        
        // Try to create a new bin
        try {
            const initialData = {
                playCount: 0,
                createdAt: new Date().toISOString(),
                lastGame: null
            };
            
            const response = await fetch(`${JSONBIN_CONFIG.BASE_URL}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Master-Key': JSONBIN_CONFIG.API_KEY,
                    'X-Bin-Name': 'Imposter Game Stats',
                    'X-Bin-Private': 'false'
                },
                body: JSON.stringify(initialData)
            });
            
            if (response.ok) {
                const data = await response.json();
                currentBinId = data.metadata.id;
                localStorage.setItem('jsonbin_id', currentBinId);
                console.log('Created new JSONBin with ID:', currentBinId);
                
                gameState.gamesPlayed = 0;
            } else {
                throw new Error('Failed to create bin');
            }
            
        } catch (createError) {
            console.log('Bin creation failed, using localStorage:', createError);
            
            // Fallback to localStorage
            const savedCount = localStorage.getItem('imposterGamePlayCount');
            gameState.gamesPlayed = savedCount ? parseInt(savedCount) : 0;
        }
    }
    
    // Update localStorage backup
    localStorage.setItem('imposterGamePlayCount', gameState.gamesPlayed.toString());
    localStorage.setItem('lastPlayCountUpdate', Date.now().toString());
    
    updatePlayCountDisplay();
}

async function incrementPlayCount() {
    const previousCount = gameState.gamesPlayed;
    const newCount = previousCount + 1;
    
    console.log('Incrementing play count to:', newCount);
    
    // Immediately update local state
    gameState.gamesPlayed = newCount;
    localStorage.setItem('imposterGamePlayCount', newCount.toString());
    localStorage.setItem('lastPlayCountUpdate', Date.now().toString());
    
    updatePlayCountDisplay();
    
    // Try to update JSONBin in background
    updateJSONBinBackground(newCount);
}

async function updateJSONBinBackground(count) {
    if (!currentBinId) {
        console.log('No bin ID, skipping JSONBin update');
        return;
    }
    
    try {
        const updateData = {
            playCount: count,
            lastUpdated: new Date().toISOString(),
            lastGame: new Date().toISOString()
        };
        
        const response = await fetch(`${JSONBIN_CONFIG.BASE_URL}/${currentBinId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-Master-Key': JSONBIN_CONFIG.API_KEY
            },
            body: JSON.stringify(updateData)
        });
        
        if (response.ok) {
            const data = await response.json();
            console.log('JSONBin updated successfully:', data.record.playCount);
            
            // Check if someone else updated it
            if (data.record.playCount > count) {
                gameState.gamesPlayed = data.record.playCount;
                localStorage.setItem('imposterGamePlayCount', data.record.playCount.toString());
                updatePlayCountDisplay();
                console.log('Updated to global count:', data.record.playCount);
            }
        }
    } catch (error) {
        console.log('Background JSONBin update failed:', error);
        // Don't worry - we'll sync on next load
    }
}

async function syncPlayCount() {
    if (!currentBinId) return;
    
    try {
        const response = await fetch(`${JSONBIN_CONFIG.BASE_URL}/${currentBinId}/latest`, {
            headers: {
                'X-Master-Key': JSONBIN_CONFIG.API_KEY
            }
        });
        
        if (response.ok) {
            const data = await response.json();
            const binCount = data.record.playCount || 0;
            const localCount = gameState.gamesPlayed;
            
            // Use the larger value
            const maxCount = Math.max(binCount, localCount);
            
            if (maxCount > localCount) {
                gameState.gamesPlayed = maxCount;
                localStorage.setItem('imposterGamePlayCount', maxCount.toString());
                updatePlayCountDisplay();
                console.log('Synced with global count:', maxCount);
            }
        }
    } catch (error) {
        console.log('Sync failed:', error);
    }
}

function updatePlayCountDisplay() {
    const playCountElement = document.getElementById('playCount');
    if (playCountElement) {
        playCountElement.textContent = gameState.gamesPlayed;
    }
}

// Sync every minute
setInterval(syncPlayCount, 60000);

// ================= INITIALIZATION =================
document.addEventListener('DOMContentLoaded', function() {
    // Show loading state for play count
    const playCountElement = document.getElementById('playCount');
    if (playCountElement) {
        playCountElement.textContent = '...';
    }
    
    // Load play count first
    loadPlayCount().then(() => {
        console.log('Initialization complete. Play count:', gameState.gamesPlayed);
        
        // Load other settings
        loadSettings();
        loadSavedTeams();
        setupEventListeners();
        updateUI();
        updateCategoriesDisplay();
    }).catch(error => {
        console.error('Initialization error:', error);
        // Continue anyway
        loadSettings();
        loadSavedTeams();
        setupEventListeners();
        updateUI();
        updateCategoriesDisplay();
    });
});

// [REST OF YOUR CODE REMAINS EXACTLY THE SAME]
// =================================================

function loadSettings() {
    const saved = localStorage.getItem('imposterSettings');
    if (saved) {
        const settings = JSON.parse(saved);
        gameState.timer = settings.timer || 120;
        gameState.categories = settings.categories || ['animals', 'food', 'movies', 'places', 'objects', 'celebrities'];
        
        // Timer button
        const timerBtn = document.querySelector(`.timer-btn[data-time="${gameState.timer}"]`);
        if (timerBtn) timerBtn.classList.add('active');
        
        // Categories checkboxes - update all checkboxes
        const checkboxes = document.querySelectorAll('.category-checkbox');
        checkboxes.forEach(cb => {
            cb.checked = gameState.categories.includes(cb.value);
        });
        
        // Update Select All button text
        const allChecked = gameState.categories.length === checkboxes.length;
        if (document.getElementById('selectAllBtn')) {
            document.getElementById('selectAllBtn').textContent = allChecked ? 'Deselect All' : 'Select All';
        }
        
        updateTimerDisplay();
        updateCategoriesDisplay();
    } else {
        // No saved settings, use defaults
        gameState.categories = ['animals', 'food', 'movies', 'places', 'objects', 'celebrities'];
        saveSettings();
        
        // Update Select All button
        if (document.getElementById('selectAllBtn')) {
            document.getElementById('selectAllBtn').textContent = 'Deselect All';
        }
    }
}

function saveSettings() {
    const settings = {
        timer: gameState.timer,
        categories: gameState.categories,
        lastPlayed: new Date().toISOString()
    };
    localStorage.setItem('imposterSettings', JSON.stringify(settings));
}

function loadSavedTeams() {
    const savedTeams = JSON.parse(localStorage.getItem('savedTeams') || '[]');
    gameState.savedTeams = savedTeams;
    updateSavedTeamsList();
}

function saveTeam() {
    if (gameState.players.length < 3) {
        alert('Need at least 3 players to save a team!');
        return;
    }
    
    const teamName = prompt('Enter a name for this team:');
    if (!teamName) return;
    
    const team = {
        name: teamName,
        players: [...gameState.players],
        date: new Date().toISOString()
    };
    
    gameState.savedTeams.push(team);
    localStorage.setItem('savedTeams', JSON.stringify(gameState.savedTeams));
    updateSavedTeamsList();
    alert('Team saved!');
}

function loadTeam(index) {
    const team = gameState.savedTeams[index];
    if (confirm(`Load team "${team.name}"?`)) {
        gameState.players = [...team.players];
        updatePlayersList();
        updateUI();
    }
}

function deleteTeam(index) {
    if (confirm('Delete this saved team?')) {
        gameState.savedTeams.splice(index, 1);
        localStorage.setItem('savedTeams', JSON.stringify(gameState.savedTeams));
        updateSavedTeamsList();
    }
}

function updateSavedTeamsList() {
    const list = document.getElementById('savedTeamsList');
    
    if (!gameState.savedTeams || gameState.savedTeams.length === 0) {
        list.innerHTML = '<p style="text-align: center; color: #94a3b8; padding: 10px;">No saved teams</p>';
        return;
    }
    
    list.innerHTML = gameState.savedTeams.map((team, index) => `
        <div class="team-item">
            <div class="team-name">
                <span>${team.name} (${team.players.length} players)</span>
            </div>
            <div class="team-players">${team.players.join(', ')}</div>
            <div class="team-actions">
                <button class="team-btn select-btn" onclick="loadTeam(${index})">
                    <i class="fas fa-check"></i> Load
                </button>
                <button class="team-btn delete-btn" onclick="deleteTeam(${index})">
                    <i class="fas fa-trash"></i> Delete
                </button>
            </div>
        </div>
    `).join('');
}

// ================= EVENT LISTENERS =================
function setupEventListeners() {
    // Player Management
    document.getElementById('addPlayerBtn').addEventListener('click', addPlayer);
    document.getElementById('playerNameInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') addPlayer();
    });
    document.getElementById('clearPlayersBtn').addEventListener('click', clearPlayers);
    document.getElementById('saveTeamBtn').addEventListener('click', saveTeam);
    
    // Game Settings
    document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            selectGameMode(this.dataset.mode);
        });
    });
    
    // FIXED: Timer button click handler with auto-close
    document.querySelectorAll('.timer-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            selectTimer(parseInt(this.dataset.time));
            
            // Auto-close the timer options after selection
            const buttons = document.getElementById('timerButtons');
            const expandIcon = document.getElementById('timerExpand');
            buttons.style.display = 'none';
            expandIcon.classList.remove('expanded');
        });
    });
    
    document.querySelectorAll('.category-checkbox').forEach(cb => {
        cb.addEventListener('change', updateCategories);
    });
    
    // Select All button functionality
    document.getElementById('selectAllBtn').addEventListener('click', function() {
        const checkboxes = document.querySelectorAll('.category-checkbox');
        const allChecked = Array.from(checkboxes).every(cb => cb.checked);
        
        // Toggle all checkboxes
        checkboxes.forEach(cb => {
            cb.checked = !allChecked;
        });
        
        // Update button text
        this.textContent = allChecked ? 'Select All' : 'Deselect All';
        
        // Update categories state
        updateCategories();
    });
    
    // Expand/Collapse sections - simple unified approach
    document.querySelectorAll('.setting-group').forEach(group => {
        if (group.querySelector('#timerButtons') || group.querySelector('#categoriesGrid')) {
            group.addEventListener('click', function(e) {
                // Only block if clicking directly on checkbox input or button
                if (e.target.type === 'checkbox' || e.target.tagName === 'BUTTON') {
                    return;
                }
                
                // Timer group
                if (this.querySelector('#timerButtons')) {
                    const buttons = document.getElementById('timerButtons');
                    const expandIcon = document.getElementById('timerExpand');
                    const isHidden = buttons.style.display === 'none' || buttons.style.display === '';
                    buttons.style.display = isHidden ? 'grid' : 'none';
                    expandIcon.classList.toggle('expanded', isHidden);
                }
                
                // Categories group
                if (this.querySelector('#categoriesGrid')) {
                    const grid = document.getElementById('categoriesGrid');
                    const expandIcon = document.getElementById('categoriesExpand');
                    const isHidden = grid.style.display === 'none' || grid.style.display === '';
                    grid.style.display = isHidden ? 'grid' : 'none';
                    expandIcon.classList.toggle('expanded', isHidden);
                }
            });
        }
    });
    
    // Start Game
    document.getElementById('startGameBtn').addEventListener('click', startGame);
    
    // Classic Game
    document.getElementById('roleCard').addEventListener('click', revealRole);
    document.getElementById('nextPlayerBtn').addEventListener('click', nextPlayer);
    
    // Describe Game
    document.getElementById('stopRollerBtn').addEventListener('click', stopNameRoller);
    document.getElementById('startDescribeBtn').addEventListener('click', startDescribing);
    document.getElementById('showWordBtn').addEventListener('click', function() {
        document.getElementById('describerWordDisplay').style.display = 'block';
    });
    
    // Discussion
    document.getElementById('revealImposterBtn').addEventListener('click', revealImposterEarly);
    document.getElementById('endDiscussionBtn').addEventListener('click', endDiscussion);
    
    // Results
    document.getElementById('secretCard').addEventListener('click', revealImposter);
    document.getElementById('playAgainBtn').addEventListener('click', playAgain);
    document.getElementById('newGameBtn').addEventListener('click', backToLobby);
    
    // Modals
    document.getElementById('shareBtn').addEventListener('click', showShareModal);
    document.getElementById('feedbackBtn').addEventListener('click', showFeedbackModal);
    document.getElementById('copyLinkBtn').addEventListener('click', copyGameLink);
    document.getElementById('submitFeedbackBtn').addEventListener('click', submitFeedback);
    
    document.querySelectorAll('.close-modal').forEach(btn => {
        btn.addEventListener('click', function() {
            hideModal(this.closest('.modal'));
        });
    });
    
    document.querySelectorAll('.social-btn[data-share]').forEach(btn => {
        btn.addEventListener('click', function() {
            shareGame(this.dataset.share);
        });
    });
    
    // Swipe for results
    let startY;
    document.getElementById('secretCard').addEventListener('touchstart', function(e) {
        startY = e.touches[0].clientY;
    });
    
    document.getElementById('secretCard').addEventListener('touchend', function(e) {
        if (startY - e.changedTouches[0].clientY > 50) {
            revealImposter();
        }
    });
}

// ================= PLAYER MANAGEMENT =================
function addPlayer() {
    const input = document.getElementById('playerNameInput');
    const name = input.value.trim();
    
    if (!name) return;
    
    if (gameState.players.includes(name)) {
        alert('Player already added!');
        return;
    }
    
    if (gameState.players.length >= 20) {
        alert('Maximum 20 players!');
        return;
    }
    
    gameState.players.push(name);
    input.value = '';
    updatePlayersList();
    updateUI();
}

function removePlayer(index) {
    gameState.players.splice(index, 1);
    updatePlayersList();
    updateUI();
}

function clearPlayers() {
    if (gameState.players.length === 0) return;
    
    if (confirm('Clear all players?')) {
        gameState.players = [];
        updatePlayersList();
        updateUI();
    }
}

function updatePlayersList() {
    const list = document.getElementById('playersList');
    
    if (gameState.players.length === 0) {
        list.innerHTML = '<p style="text-align: center; color: #94a3b8; padding: 20px;">No players yet</p>';
        return;
    }
    
    list.innerHTML = gameState.players.map((player, index) => `
        <div class="player-item">
            <span class="player-name">${player}</span>
            <button class="remove-player" onclick="removePlayer(${index})">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `).join('');
}

// ================= GAME SETTINGS =================
function selectGameMode(mode) {
    gameState.gameMode = mode;
    
    document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`.mode-btn[data-mode="${mode}"]`).classList.add('active');
    
    document.getElementById('gameModeText').textContent = mode === 'classic' ? 'Classic' : 'Describe It';
    saveSettings();
}

function selectTimer(seconds) {
    // Remove active class from ALL timer buttons
    document.querySelectorAll('.timer-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Add active class to selected button
    const selectedBtn = document.querySelector(`.timer-btn[data-time="${seconds}"]`);
    if (selectedBtn) {
        selectedBtn.classList.add('active');
    }
    
    gameState.timer = seconds;
    updateTimerDisplay();
    saveSettings();
}

function updateTimerDisplay() {
    const timerText = gameState.timer === 0 ? 'No timer' : formatTime(gameState.timer);
    document.getElementById('timerText').textContent = timerText;
    document.getElementById('currentTimerText').textContent = timerText;
}

function updateCategories() {
    const checkboxes = document.querySelectorAll('.category-checkbox');
    
    // Update categories state
    gameState.categories = Array.from(checkboxes)
        .filter(cb => cb.checked)
        .map(cb => cb.value);
    
    console.log('Selected categories:', gameState.categories);
    console.log('Selected count:', gameState.categories.length);
    
    // Update Select All button text
    const allChecked = gameState.categories.length === checkboxes.length;
    document.getElementById('selectAllBtn').textContent = allChecked ? 'Deselect All' : 'Select All';
    
    updateCategoriesDisplay();
    saveSettings();
}

function updateCategoriesDisplay() {
    const count = gameState.categories.length;
    const total = document.querySelectorAll('.category-checkbox').length;
    
    if (count === total) {
        document.getElementById('selectedCategoriesText').textContent = 'All categories selected';
    } else {
        document.getElementById('selectedCategoriesText').textContent = `${count} of ${total} categories selected`;
    }
}

// ================= UI UPDATES =================
function updateUI() {
    document.getElementById('playersCount').textContent = gameState.players.length;
    
    const canStart = gameState.players.length >= 3;
    document.getElementById('startGameBtn').disabled = !canStart;
    
    if (!canStart) {
        document.getElementById('startGameBtn').innerHTML = '<i class="fas fa-exclamation-circle"></i> Need 3+ Players';
    } else {
        document.getElementById('startGameBtn').innerHTML = '<i class="fas fa-play"></i> START GAME';
    }
    
    // Always update play count display
    updatePlayCountDisplay();
}

// ================= GAME START =================
function startGame() {
    if (gameState.players.length < 3) {
        alert('Need at least 3 players!');
        return;
    }

    // DEBUG: Check categories before starting
    console.log('Categories before start:', gameState.categories);
    
    // Ensure categories are properly initialized
    if (!gameState.categories || gameState.categories.length === 0) {
        // Select all checkboxes if none are selected
        document.querySelectorAll('.category-checkbox').forEach(cb => {
            cb.checked = true;
        });
        gameState.categories = ['animals', 'food', 'movies', 'places', 'objects', 'celebrities'];
        console.log('Reset to default categories:', gameState.categories);
        updateCategoriesDisplay();
    }
    
    // Update stats - increment play count
    incrementPlayCount();
    
    // Hide UI
    document.querySelector('.dashboard').style.display = 'none';
    document.querySelector('.start-section').style.display = 'none';
    document.querySelector('.social-buttons').style.display = 'none';
    
    // Reset game
    gameState.currentPlayer = 0;
    gameState.imposter = -1;
    
    // Get random word
    console.log('Looking for words in categories:', gameState.categories);
    
    const filteredWords = words.filter(w => gameState.categories.includes(w.category));
    console.log('Filtered words count:', filteredWords.length);
    
    if (filteredWords.length === 0) {
        alert('No words in selected categories! Please select at least one category.');
        backToLobby();
        return;
    }
    
    const random = filteredWords[Math.floor(Math.random() * filteredWords.length)];
    gameState.word = random.word;
    gameState.wordAr = random.wordAr;
    
    // Get random English hint and corresponding Arabic hint
    const hintIndex = Math.floor(Math.random() * random.hints.length);
    gameState.hint = random.hints[hintIndex];
    gameState.hintAr = random.hintsAr[hintIndex];
    
    // Start game mode
    if (gameState.gameMode === 'classic') {
        startClassicGame();
    } else {
        startDescribeGame();
    }
}

// ================= CLASSIC GAME =================
function startClassicGame() {
    gameState.imposter = Math.floor(Math.random() * gameState.players.length);
    
    document.getElementById('classicGame').style.display = 'block';
    showCurrentPlayer();
}

function showCurrentPlayer() {
    const player = gameState.players[gameState.currentPlayer];
    document.getElementById('currentPlayerName').textContent = player;
    document.getElementById('playerCounter').textContent = `${gameState.currentPlayer + 1}/${gameState.players.length}`;
    
    // Reset card - use classes only
    document.getElementById('cardHidden').classList.remove('hidden');
    document.getElementById('cardContent').classList.remove('visible');
    document.getElementById('nextPlayerBtn').style.display = 'none';
    
    // Set role
    const isImposter = gameState.currentPlayer === gameState.imposter;
    document.getElementById('roleBadge').textContent = isImposter ? 'Imposter' : 'Innocent';
    document.getElementById('roleBadge').style.background = isImposter ? 'rgba(239, 68, 68, 0.3)' : 'rgba(34, 197, 94, 0.3)';
    
    if (isImposter) {
        document.getElementById('roleWord').textContent = gameState.hint;
        document.getElementById('roleHint').textContent = gameState.hintAr;
    } else {
        document.getElementById('roleWord').textContent = gameState.word;
        document.getElementById('roleHint').textContent = gameState.wordAr;
    }
}

function revealRole() {
    // Instant reveal - no transition delay
    document.getElementById('cardHidden').classList.add('hidden');
    document.getElementById('cardContent').classList.add('visible');
    document.getElementById('nextPlayerBtn').style.display = 'block';
}

function nextPlayer() {
    gameState.currentPlayer++;
    
    if (gameState.currentPlayer < gameState.players.length) {
        showCurrentPlayer();
    } else {
        document.getElementById('classicGame').style.display = 'none';
        startDiscussion();
    }
}

// ================= DESCRIBE GAME =================
function startDescribeGame() {
    // Create teams
    const shuffled = [...gameState.players].sort(() => Math.random() - 0.5);
    const half = Math.ceil(shuffled.length / 2);
    gameState.redTeam = shuffled.slice(0, half);
    gameState.blueTeam = shuffled.slice(half);
    
    // Show teams
    document.getElementById('describeGame').style.display = 'block';
    updateTeamsDisplay();
    
    // Start name roller
    startNameRoller();
}

function updateTeamsDisplay() {
    document.getElementById('redTeamPlayers').innerHTML = gameState.redTeam.map(p => 
        `<div class="team-player">${p}</div>`
    ).join('');
    
    document.getElementById('blueTeamPlayers').innerHTML = gameState.blueTeam.map(p => 
        `<div class="team-player">${p}</div>`
    ).join('');
}

function startNameRoller() {
    let index = 0;
    const allPlayers = [...gameState.redTeam, ...gameState.blueTeam];
    
    gameState.rollerInterval = setInterval(() => {
        document.getElementById('rollingName').textContent = allPlayers[index];
        index = (index + 1) % allPlayers.length;
    }, 100);
}

function stopNameRoller() {
    clearInterval(gameState.rollerInterval);
    
    const allPlayers = [...gameState.redTeam, ...gameState.blueTeam];
    const describerIndex = Math.floor(Math.random() * allPlayers.length);
    const describer = allPlayers[describerIndex];
    
    gameState.describerTeam = gameState.redTeam.includes(describer) ? 'Red Team' : 'Blue Team';
    
    document.getElementById('rollingName').textContent = describer;
    
    setTimeout(() => {
        document.getElementById('describeGame').style.display = 'none';
        showDescriberWord();
    }, 1500);
}

function showDescriberWord() {
    document.getElementById('describerTeam').textContent = gameState.describerTeam;
    document.getElementById('describerWord').textContent = 'Word is hidden';
    document.getElementById('describerHint').textContent = gameState.hint;
    
    // FIXED: Show the actual word in a separate display
    document.getElementById('describerActualWord').textContent = gameState.word;
    document.getElementById('describerWordDisplay').style.display = 'none'; // Hidden by default
    
    document.getElementById('describeWordScreen').style.display = 'block';
}

function startDescribing() {
    document.getElementById('describeWordScreen').style.display = 'none';
    
    const mode = document.querySelector('.mode-btn.active')?.dataset.mode || 'speech';
    const instruction = mode === 'speech' ?
        `${gameState.describerTeam}'s describer is describing the word. Both teams guess!` :
        `${gameState.describerTeam}'s describer is using gestures only. Both teams guess!`;
    
    document.getElementById('roundInstruction').textContent = instruction;
    document.getElementById('discussionRound').style.display = 'block';
    
    // FIXED: Don't show "Reveal Imposter" button in describe game
    document.getElementById('revealImposterBtn').style.display = 'none';
    
    // FIXED: Handle timer properly for describe game
    if (gameState.timer === 0) {
        // No timer - infinite discussion
        document.getElementById('discussionTimer').textContent = '∞';
        document.getElementById('discussionTimer').style.color = 'var(--primary)';
    } else {
        startDiscussionTimer();
    }
}

// ================= DISCUSSION =================
function startDiscussion() {
    const instruction = gameState.gameMode === 'classic' ?
        `Find the imposter! You have ${formatTime(gameState.timer)} to discuss.` :
        document.getElementById('roundInstruction').textContent;
    
    document.getElementById('roundInstruction').textContent = instruction;
    document.getElementById('discussionRound').style.display = 'block';
    
    // FIXED: Only show "Reveal Imposter" in classic mode
    if (gameState.gameMode === 'classic') {
        document.getElementById('revealImposterBtn').style.display = 'block';
    } else {
        document.getElementById('revealImposterBtn').style.display = 'none';
    }
    
    if (gameState.timer > 0) {
        startDiscussionTimer();
    } else {
        // FIXED: Handle no timer case properly
        document.getElementById('discussionTimer').textContent = '∞';
        document.getElementById('discussionTimer').style.color = 'var(--primary)';
    }
}

function startDiscussionTimer() {
    let time = gameState.timer;
    updateTimerDisplayDuringDiscussion(time);
    
    gameState.timerInterval = setInterval(() => {
        time--;
        updateTimerDisplayDuringDiscussion(time);
        
        if (time <= 0) {
            clearInterval(gameState.timerInterval);
            endDiscussion();
        }
    }, 1000);
}

function updateTimerDisplayDuringDiscussion(seconds) {
    document.getElementById('discussionTimer').textContent = formatTime(seconds);
    
    if (seconds <= 30) {
        document.getElementById('discussionTimer').style.color = '#ef4444';
    } else {
        document.getElementById('discussionTimer').style.color = 'var(--primary)';
    }
}

function revealImposterEarly() {
    if (confirm('End discussion now?')) {
        clearInterval(gameState.timerInterval);
        endDiscussion();
    }
}

function endDiscussion() {
    document.getElementById('discussionRound').style.display = 'none';
    showResults();
}

// ================= RESULTS =================
function showResults() {
    document.getElementById('resultsScreen').style.display = 'block';
    
    // Set appropriate text based on game mode
    if (gameState.gameMode === 'classic') {
        document.getElementById('resultsTitle').textContent = 'Game Results';
        document.getElementById('secretText').textContent = 'The Imposter Was...';
        document.getElementById('secretCard').style.display = 'block';
    } else {
        document.getElementById('resultsTitle').textContent = 'Round Complete';
        document.getElementById('secretText').textContent = 'The Word Was...';
        document.getElementById('secretCard').style.display = 'block';
    }
    
    // Reset reveal
    document.getElementById('revealContent').classList.remove('show');
}

function revealImposter() {
    if (gameState.gameMode === 'classic') {
        const imposter = gameState.players[gameState.imposter];
        document.getElementById('imposterName').textContent = imposter;
        document.getElementById('correctWord').textContent = gameState.word;
        document.getElementById('imposterHint').textContent = `Hint: ${gameState.hint}`;
    } else {
        document.getElementById('imposterName').textContent = gameState.describerTeam;
        document.getElementById('correctWord').textContent = gameState.word;
        document.getElementById('imposterHint').textContent = `Hint: ${gameState.hint}`;
    }
    
    document.getElementById('secretCard').style.display = 'none';
    document.getElementById('revealContent').classList.add('show');
}

function playAgain() {
    // Reset current player index
    gameState.currentPlayer = 0;
    
    // Get NEW random word for the new game
    const filteredWords = words.filter(w => gameState.categories.includes(w.category));
    if (filteredWords.length > 0) {
        const random = filteredWords[Math.floor(Math.random() * filteredWords.length)];
        gameState.word = random.word;
        gameState.wordAr = random.wordAr;
        
        // Get random English hint
        const hintIndex = Math.floor(Math.random() * random.hints.length);
        gameState.hint = random.hints[hintIndex];
        // Get corresponding Arabic hint
        gameState.hintAr = random.hintsAr[hintIndex];
    }
    
    // Reset imposter selection
    gameState.imposter = Math.floor(Math.random() * gameState.players.length);
    
    document.getElementById('resultsScreen').style.display = 'none';
    
    if (gameState.gameMode === 'classic') {
        startClassicGame();
    } else {
        startDescribeGame();
    }
}

function restartGame() {
    if (confirm('Restart game?')) {
        clearInterval(gameState.timerInterval);
        
        document.querySelectorAll('.game-screen').forEach(screen => {
            screen.style.display = 'none';
        });
        
        startGame();
    }
}

function backToLobby() {
    clearInterval(gameState.timerInterval);
    
    document.querySelectorAll('.game-screen').forEach(screen => {
        screen.style.display = 'none';
    });
    
    document.querySelector('.dashboard').style.display = 'block';
    document.querySelector('.start-section').style.display = 'block';
    document.querySelector('.social-buttons').style.display = 'flex';
}

// ================= MODALS =================
function showShareModal() {
    showModal('shareModal');
}

function showFeedbackModal() {
    showModal('feedbackModal');
}

function showModal(id) {
    document.getElementById(id).style.display = 'flex';
}

function hideModal(modal) {
    if (typeof modal === 'string') {
        modal = document.getElementById(modal);
    }
    modal.style.display = 'none';
}

function copyGameLink() {
    navigator.clipboard.writeText(window.location.href)
        .then(() => alert('Link copied!'))
        .catch(() => {
            const input = document.getElementById('gameLink');
            input.select();
            document.execCommand('copy');
            alert('Link copied!');
        });
}

function shareGame(platform) {
    const url = window.location.href;
    const text = "🎭 Play Imposter Game with me!";
    
    if (platform === 'whatsapp') {
        window.open(`https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`);
    } else if (platform === 'copy') {
        copyGameLink();
    }
}

function submitFeedback() {
    const message = document.getElementById('feedbackMessage').value.trim();
    
    if (!message) {
        alert('Please enter your feedback!');
        return;
    }
    
    // Save feedback
    const feedbacks = JSON.parse(localStorage.getItem('feedback') || '[]');
    feedbacks.push({
        message,
        date: new Date().toISOString()
    });
    localStorage.setItem('feedback', JSON.stringify(feedbacks));
    
    alert('Thank you for your feedback!');
    document.getElementById('feedbackMessage').value = '';
    hideModal('feedbackModal');
}

// ================= UTILITIES =================
function formatTime(seconds) {
    if (seconds === 0) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// Global functions
window.removePlayer = removePlayer;
window.backToLobby = backToLobby;
window.restartGame = restartGame;
window.hideModal = hideModal;
window.loadTeam = loadTeam;
window.deleteTeam = deleteTeam;