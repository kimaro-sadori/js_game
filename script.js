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
    BASE_URL: 'https://api.jsonbin.io/v3/b',
    SHARED_BIN_ID: '696a646ad0ea881f40704b06' // Use the NEWEST Imposter Game Stats bin
};

// ================= PLAY COUNT FUNCTIONS =================
async function loadPlayCount() {
    console.log('🔄 Loading play count from shared JSONBin...');
    
    // Show loading state
    const playCountElement = document.getElementById('playCount');
    if (playCountElement) {
        playCountElement.textContent = '...';
        playCountElement.classList.add('loading');
    }
    
    // Try JSONBin first
    try {
        const response = await fetch(`${JSONBIN_CONFIG.BASE_URL}/${JSONBIN_CONFIG.SHARED_BIN_ID}/latest`, {
            headers: {
                'X-Master-Key': JSONBIN_CONFIG.API_KEY,
                'X-Bin-Meta': 'false'
            }
        });
        
        if (response.ok) {
            const data = await response.json();
            console.log('✅ JSONBin response:', data);
            
            if (data && typeof data.playCount === 'number') {
                gameState.gamesPlayed = data.playCount;
                console.log('✅ Loaded from JSONBin:', gameState.gamesPlayed);
                
                // Update localStorage backup
                localStorage.setItem('imposterGamePlayCount', gameState.gamesPlayed.toString());
                localStorage.setItem('lastPlayCountUpdate', Date.now().toString());
                
                updatePlayCountDisplay();
                return;
            } else {
                console.warn('⚠️ Invalid data format from JSONBin');
                // Try to fix the bin data
                await fixBinData();
            }
        } else {
            console.warn('⚠️ JSONBin fetch failed:', response.status);
            if (response.status === 404) {
                // Bin doesn't exist or is private
                await createOrFixBin();
            } else {
                throw new Error(`HTTP ${response.status}`);
            }
        }
    } catch (error) {
        console.log('⚠️ JSONBin failed, using fallback:', error.message);
        useLocalStorageFallback();
    }
    
    updatePlayCountDisplay();
}

async function createOrFixBin() {
    try {
        console.log('🔧 Creating/fixing bin data...');
        
        const initialData = {
            playCount: 0,
            createdAt: new Date().toISOString(),
            lastUpdated: new Date().toISOString(),
            totalPlayers: 0
        };
        
        const response = await fetch(`${JSONBIN_CONFIG.BASE_URL}/${JSONBIN_CONFIG.SHared_BIN_ID}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-Master-Key': JSONBIN_CONFIG.API_KEY
            },
            body: JSON.stringify(initialData)
        });
        
        if (response.ok) {
            console.log('✅ Bin created/fixed successfully');
            gameState.gamesPlayed = 0;
        } else {
            console.error('❌ Failed to create/fix bin');
            throw new Error('Bin creation failed');
        }
    } catch (error) {
        console.error('❌ Error creating/fixing bin:', error);
        gameState.gamesPlayed = 0;
    }
}

async function fixBinData() {
    try {
        console.log('🔧 Fixing bin data structure...');
        
        const currentResponse = await fetch(`${JSONBIN_CONFIG.BASE_URL}/${JSONBIN_CONFIG.SHARED_BIN_ID}/latest`, {
            headers: {
                'X-Master-Key': JSONBIN_CONFIG.API_KEY,
                'X-Bin-Meta': 'false'
            }
        });
        
        let currentData = {};
        if (currentResponse.ok) {
            currentData = await currentResponse.json();
        }
        
        // Ensure proper data structure
        const fixedData = {
            playCount: currentData.playCount || 0,
            createdAt: currentData.createdAt || new Date().toISOString(),
            lastUpdated: new Date().toISOString(),
            totalPlayers: currentData.totalPlayers || 0
        };
        
        const updateResponse = await fetch(`${JSONBIN_CONFIG.BASE_URL}/${JSONBIN_CONFIG.SHARED_BIN_ID}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-Master-Key': JSONBIN_CONFIG.API_KEY
            },
            body: JSON.stringify(fixedData)
        });
        
        if (updateResponse.ok) {
            const updated = await updateResponse.json();
            gameState.gamesPlayed = updated.playCount || 0;
            console.log('✅ Bin data fixed, count:', gameState.gamesPlayed);
        }
    } catch (error) {
        console.error('Error fixing bin data:', error);
        gameState.gamesPlayed = 0;
    }
}

function useLocalStorageFallback() {
    const savedCount = localStorage.getItem('imposterGamePlayCount');
    const savedTime = localStorage.getItem('lastPlayCountUpdate');
    
    if (savedCount) {
        const timeDiff = savedTime ? Date.now() - parseInt(savedTime) : Infinity;
        
        // Use local data if it's less than 10 minutes old
        if (timeDiff < 10 * 60 * 1000) {
            gameState.gamesPlayed = parseInt(savedCount);
            console.log('📁 Using localStorage value:', gameState.gamesPlayed);
        } else {
            console.log('📁 LocalStorage data is old, using 0');
            gameState.gamesPlayed = 0;
        }
    } else {
        gameState.gamesPlayed = 0;
        console.log('📁 No localStorage data, using 0');
    }
}

async function incrementPlayCount() {
    console.log('📈 Incrementing play count...');
    
    // First update local display immediately for better UX
    gameState.gamesPlayed++;
    localStorage.setItem('imposterGamePlayCount', gameState.gamesPlayed.toString());
    localStorage.setItem('lastPlayCountUpdate', Date.now().toString());
    
    updatePlayCountDisplay();
    
    // Then update JSONBin in background
    updateJSONBinInBackground(gameState.gamesPlayed);
}

async function updateJSONBinInBackground(newCount) {
    try {
        console.log('☁️ Updating JSONBin...');
        
        // Get current data first
        const getResponse = await fetch(`${JSONBIN_CONFIG.BASE_URL}/${JSONBIN_CONFIG.SHARED_BIN_ID}/latest`, {
            headers: {
                'X-Master-Key': JSONBIN_CONFIG.API_KEY,
                'X-Bin-Meta': 'false'
            }
        });
        
        let currentData = { playCount: 0 };
        if (getResponse.ok) {
            currentData = await getResponse.json();
        }
        
        const currentBinCount = currentData.playCount || 0;
        console.log('Current bin count:', currentBinCount, 'Our new count:', newCount);
        
        // Always increment from bin's current count to avoid conflicts
        const finalCount = Math.max(currentBinCount + 1, newCount);
        
        const updateData = {
            playCount: finalCount,
            lastUpdated: new Date().toISOString(),
            lastGame: new Date().toISOString(),
            totalPlayers: currentData.totalPlayers || 0
        };
        
        console.log('Setting bin count to:', finalCount);
        
        const putResponse = await fetch(`${JSONBIN_CONFIG.BASE_URL}/${JSONBIN_CONFIG.SHARED_BIN_ID}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-Master-Key': JSONBIN_CONFIG.API_KEY
            },
            body: JSON.stringify(updateData)
        });
        
        if (putResponse.ok) {
            const updatedData = await putResponse.json();
            console.log('✅ JSONBin updated to:', updatedData.playCount);
            
            // Update local if bin has higher count
            if (updatedData.playCount > gameState.gamesPlayed) {
                gameState.gamesPlayed = updatedData.playCount;
                localStorage.setItem('imposterGamePlayCount', updatedData.playCount.toString());
                updatePlayCountDisplay();
                console.log('📱 Updated local to match cloud:', updatedData.playCount);
            }
        } else {
            console.warn('⚠️ JSONBin update failed');
        }
    } catch (error) {
        console.error('❌ Error updating JSONBin:', error);
    }
}

async function syncWithJSONBin() {
    try {
        console.log('🔄 Syncing with cloud...');
        
        const response = await fetch(`${JSONBIN_CONFIG.BASE_URL}/${JSONBIN_CONFIG.SHARED_BIN_ID}/latest`, {
            headers: {
                'X-Master-Key': JSONBIN_CONFIG.API_KEY,
                'X-Bin-Meta': 'false'
            }
        });
        
        if (response.ok) {
            const data = await response.json();
            const binCount = data.playCount || 0;
            const localCount = gameState.gamesPlayed;
            
            console.log('Local:', localCount, 'Cloud:', binCount);
            
            if (binCount > localCount) {
                gameState.gamesPlayed = binCount;
                localStorage.setItem('imposterGamePlayCount', binCount.toString());
                localStorage.setItem('lastPlayCountUpdate', Date.now().toString());
                updatePlayCountDisplay();
                console.log('✅ Synced to cloud count:', binCount);
            } else if (localCount > binCount) {
                // Our local is higher - update cloud
                console.log('Local > Cloud, updating cloud...');
                await updateJSONBinInBackground(localCount);
            }
        }
    } catch (error) {
        console.log('⚠️ Sync failed:', error.message);
    }
}

function updatePlayCountDisplay() {
    const playCountElement = document.getElementById('playCount');
    if (playCountElement) {
        playCountElement.textContent = gameState.gamesPlayed;
        playCountElement.classList.remove('loading');
    }
}

// Start periodic sync (every 20 seconds)
setInterval(syncWithJSONBin, 20000);

// Sync when page becomes visible
document.addEventListener('visibilitychange', function() {
    if (!document.hidden) {
        syncWithJSONBin();
    }
});

// ================= INITIALIZATION =================
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Initializing Imposter Game...');
    
    // Load play count first
    loadPlayCount().then(() => {
        console.log('✅ Play count loaded:', gameState.gamesPlayed);
        
        // Load other settings
        loadSettings();
        loadSavedTeams();
        setupEventListeners();
        updateUI();
        updateCategoriesDisplay();
        
        // Initial sync after 3 seconds
        setTimeout(syncWithJSONBin, 3000);
        
    }).catch(error => {
        console.error('❌ Initialization error:', error);
        // Continue anyway
        loadSettings();
        loadSavedTeams();
        setupEventListeners();
        updateUI();
        updateCategoriesDisplay();
    });
});

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
    // Feedback button
    const feedbackBtn = document.getElementById('feedbackBtn');
    if (feedbackBtn) {
        feedbackBtn.addEventListener('click', showFeedbackModal);
    }
    
    // Setup feedback listeners
    setupFeedbackListeners();
    // Timer button click handler with auto-close
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
    // Feedback button
    document.getElementById('feedbackBtn').addEventListener('click', showFeedbackModal);
    
    // Setup feedback listeners
    setupFeedbackListeners();
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
    
    // Expand/Collapse sections
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
    const modal = document.getElementById('feedbackModal');
    if (modal) {
        modal.style.display = 'flex';
    }
}

// Make sure hideModal function exists and works
// Close modal function
function hideModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
    }
}

// Make sure showModal function exists
function showModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'flex';
    }
}

function copyGameLink() {
    const gameLink = 'https://kimaro-sadori.github.io/js_game/';
    
    navigator.clipboard.writeText(gameLink)
        .then(() => alert('Link copied!'))
        .catch(() => {
            const input = document.getElementById('gameLink');
            input.value = gameLink; // Make sure it has the right link
            input.select();
            document.execCommand('copy');
            alert('Link copied!');
        });
}

function shareGame(platform) {
    const url = 'https://kimaro-sadori.github.io/js_game/'; // Your actual URL
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
// ================= GOOGLE FORM FEEDBACK =================
// ================= FEEDBACK SYSTEM =================
const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSd4iWPkTWr_2p1UhqwHs4pnZqNAg8XU8zXdJKBDZvY7dv1YzA/viewform?usp=pp_url';

// Show feedback modal
function showFeedbackModal() {
    // Update display with current game info
    document.getElementById('feedbackModeDisplay').textContent = 
        gameState.gameMode === 'classic' ? 'Classic' : 'Describe It';
    document.getElementById('feedbackPlayersDisplay').textContent = gameState.players.length;
    document.getElementById('feedbackGamesDisplay').textContent = gameState.gamesPlayed;
    
    showModal('feedbackModal');
}

// Open Google Form
function openGoogleForm() {
    // Your Google Form URL
    const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSd4iWPkTWr_2p1UhqwHs4pnZqNAg8XU8zXdJKBDZvY7dv1YzA/viewform';
    
    // Open in new tab
    window.open(GOOGLE_FORM_URL, '_blank');
    
    // Close modal
    hideModal('feedbackModal');
}
// Also add this for the share modal close button
function closeAllModals() {
    document.querySelectorAll('.modal').forEach(modal => {
        modal.style.display = 'none';
    });
}
// Log feedback events locally
function logFeedbackEvent(action) {
    const events = JSON.parse(localStorage.getItem('feedbackLog') || '[]');
    events.push({
        action: action,
        timestamp: new Date().toISOString(),
        gameState: {
            mode: gameState.gameMode,
            players: gameState.players.length,
            gamesPlayed: gameState.gamesPlayed
        }
    });
    localStorage.setItem('feedbackLog', JSON.stringify(events));
}

// Show toast notification (optional)
function showToast(message) {
    // Create toast element
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: var(--primary);
        color: white;
        padding: 12px 24px;
        border-radius: 8px;
        z-index: 10000;
        font-weight: 500;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        animation: fadeInOut 3s ease;
    `;
    
    // Add styles for animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeInOut {
            0% { opacity: 0; transform: translateX(-50%) translateY(20px); }
            10% { opacity: 1; transform: translateX(-50%) translateY(0); }
            90% { opacity: 1; transform: translateX(-50%) translateY(0); }
            100% { opacity: 0; transform: translateX(-50%) translateY(20px); }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(toast);
    
    // Remove toast after animation
    setTimeout(() => {
        if (toast.parentNode) {
            toast.parentNode.removeChild(toast);
        }
        if (style.parentNode) {
            style.parentNode.removeChild(style);
        }
    }, 3000);
}

// Setup feedback event listeners
function setupFeedbackListeners() {
    // Open Google Form button
    const openFormBtn = document.getElementById('openGoogleFormBtn');
    if (openFormBtn) {
        openFormBtn.addEventListener('click', openGoogleForm);
    }
}
//close the share
// Close modal when clicking X or outside
function setupModalClose() {
    // Close when clicking X
    document.querySelectorAll('.close-modal').forEach(btn => {
        btn.addEventListener('click', function() {
            this.closest('.modal').style.display = 'none';
        });
    });
    
    // Close when clicking outside modal content
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.style.display = 'none';
            }
        });
    });
}

// Call this after DOM loads
document.addEventListener('DOMContentLoaded', setupModalClose);