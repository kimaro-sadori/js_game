// ================= SIMPLE GAME STATE =================
let gameState = {
    players: [],
    gameMode: 'images', // CHANGED from 'classic' to 'images'
    timer: 120,
    categories: ['animals', 'food', 'movies', 'places', 'objects', 'celebrities', 'flags', 'sports', 'anime', 'football'], // NEW - all 10 categories

    // Current game
    currentPlayer: 0,
    imposter: -1,
    word: '',
    hint: '',
    wordAr: '',
    hintAr: '',
    
    // Stats
    gamesPlayed: 0,
    
    // Image game specific
    imageGame: null
};

// ================= FOOTBALL PLAYERS IMAGES =================
const FOOTBALL_PLAYERS = [
    { name: "Lionel Messi", image: "images/images.jpg" },
    { name: "Cristiano Ronaldo", image: "images/images.jpg" },
    { name: "Kylian Mbappé", image: "images/images.jpg" },
    { name: "Erling Haaland", image: "images/images.jpg" },
    { name: "Kevin De Bruyne", image: "images/images.jpg" },
    { name: "Mohamed Salah", image: "images/images.jpg" },
    { name: "Virgil van Dijk", image: "images/images.jpg" },
    { name: "Harry Kane", image: "images/images.jpg" },
    { name: "Neymar Jr", image: "images/images.jpg" },
    { name: "Robert Lewandowski", image: "images/images.jpg" },
    { name: "Pelé", image: "images/images.jpg" },
    { name: "Diego Maradona", image: "images/images.jpg" },
    { name: "Johan Cruyff", image: "images/images.jpg" },
    { name: "Zinedine Zidane", image: "images/images.jpg" },
    { name: "Ronaldo Nazário", image: "images/images.jpg" },
    { name: "Luka Modrić", image: "images/images.jpg" },
    { name: "Toni Kroos", image: "images/images.jpg" },
    { name: "Sergio Ramos", image: "images/images.jpg" },
    { name: "Manuel Neuer", image: "images/images.jpg" },
    { name: "Karim Benzema", image: "images/images.jpg" },
    { name: "Son Heung-min", image: "images/images.jpg" }
];

// ================= IMAGE MATCH FUNCTIONS =================
function generateImageGrid() {
    const imageGrid = document.getElementById('imageGrid');
    imageGrid.innerHTML = '<div class="loading-images">Loading player images...</div>';
    
    const playersToShow = [...FOOTBALL_PLAYERS]
        .sort(() => Math.random() - 0.5)
        .slice(0, 21);
    
    const imageUrls = playersToShow.map(p => p.image);
    
    preloadImages(imageUrls, () => {
        imageGrid.innerHTML = '';
        
        playersToShow.forEach((player, index) => {
            const imageCell = document.createElement('div');
            imageCell.className = 'image-cell-simple';
            imageCell.dataset.index = index;
            imageCell.title = player.name;
            
            const img = document.createElement('img');
            img.src = player.image;
            img.alt = player.name;
            img.className = 'player-image';
            img.loading = 'lazy';
            
            img.onerror = function() {
                this.style.display = 'none';
                const fallback = document.createElement('div');
                fallback.className = 'player-fallback';
                fallback.innerHTML = `
                    <div>⚽</div>
                    <div style="font-size: 0.7rem; margin-top: 5px;">${player.name.split(' ')[0]}</div>
                `;
                imageCell.appendChild(fallback);
            };
            
            const numberLabel = document.createElement('div');
            numberLabel.className = 'image-number';
            numberLabel.textContent = index + 1;
            
            const nameLabel = document.createElement('div');
            nameLabel.className = 'player-name-label';
            nameLabel.textContent = player.name;
            
            imageCell.appendChild(img);
            imageCell.appendChild(numberLabel);
            imageCell.appendChild(nameLabel);
            imageGrid.appendChild(imageCell);
        });
    });
}

function preloadImages(imageUrls, callback) {
    let loadedCount = 0;
    let errorCount = 0;
    const totalImages = imageUrls.length;
    
    if (totalImages === 0) {
        callback();
        return;
    }
    
    imageUrls.forEach(url => {
        const img = new Image();
        img.onload = () => {
            loadedCount++;
            if (loadedCount + errorCount === totalImages) {
                callback();
            }
        };
        img.onerror = () => {
            errorCount++;
            console.warn('Failed to preload image:', url);
            if (loadedCount + errorCount === totalImages) {
                callback();
            }
        };
        img.src = url;
    });
}

// ================= IMAGE MATCH MODE =================
function startImageMatch() {
    console.log('Starting Image Match (Who/What Am I?) mode...');
    
    if (gameState.players.length < 2) {
        alert('Need at least 2 players for Guess the Image!');
        backToLobby();
        return;
    }
    
    incrementPlayCount();
    
    document.querySelector('.dashboard').style.display = 'none';
    document.querySelector('.start-section').style.display = 'none';
    document.querySelector('.social-buttons').style.display = 'none';
    
    gameState.imageGame = {
        players: [...gameState.players],
        currentPlayerIndex: 0,
        playerSecrets: {},
        revealedPlayers: [],
        turnPhase: 'selection',
        currentQuestion: null,
        timer: gameState.timer,
        images: FOOTBALL_PLAYERS.slice(0, 21)
    };
    
    showImageMatchScreen();
}

function showImageMatchScreen() {
    document.querySelectorAll('.game-screen').forEach(screen => {
        screen.style.display = 'none';
    });
    
    document.getElementById('imageMatchScreen').style.display = 'block';
    
    generateImageGrid();
    updatePlayerDisplay();
    
    document.getElementById('secretSelection').style.display = 'block';
    document.getElementById('gamePhase').style.display = 'none';
    
    setupImageGameListeners();
    
    if (gameState.timer > 0) {
        startImageGameTimer();
    } else {
        document.getElementById('imageTimerDisplay').textContent = '∞';
    }
}

function updatePlayerDisplay() {
    if (!gameState.imageGame) return;
    
    const game = gameState.imageGame;
    const currentPlayer = game.players[game.currentPlayerIndex];
    
    document.getElementById('currentImagePlayerName').textContent = currentPlayer;
    document.getElementById('imagePlayerCounter').textContent = 
        `${game.currentPlayerIndex + 1}/${game.players.length}`;
    
    const playerSelect = document.getElementById('playerSelect');
    playerSelect.innerHTML = '';
    
    game.players.forEach((player, index) => {
        if (index !== game.currentPlayerIndex && !game.revealedPlayers.includes(player)) {
            const option = document.createElement('option');
            option.value = player;
            option.textContent = player;
            playerSelect.appendChild(option);
        }
    });
    
    let instruction = '';
    if (game.turnPhase === 'selection') {
        instruction = 'Choose your secret image!';
    } else if (game.turnPhase === 'playing') {
        instruction = 'Ask a question or make a guess!';
    } else if (game.turnPhase === 'answering') {
        instruction = 'Answer the question!';
    }
    
    document.getElementById('turnInstruction').textContent = instruction;
}

function setupImageGameListeners() {
    // Remove existing listeners first
    const confirmBtn = document.getElementById('confirmSecretBtn');
    const newConfirmBtn = confirmBtn.cloneNode(true);
    confirmBtn.parentNode.replaceChild(newConfirmBtn, confirmBtn);
    
    // Add new listener
    document.getElementById('confirmSecretBtn').addEventListener('click', confirmSecret);
    
    // Setup other listeners
    document.getElementById('askQuestionBtn').addEventListener('click', showQuestionInterface);
    document.getElementById('makeGuessBtn').addEventListener('click', showGuessInterface);
    document.getElementById('endTurnBtn').addEventListener('click', endTurn);
    document.getElementById('submitQuestionBtn').addEventListener('click', submitQuestion);
    document.getElementById('submitGuessBtn').addEventListener('click', submitGuess);
    
    // Question modal
    document.querySelectorAll('.answer-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            answerQuestion(this.dataset.answer);
        });
    });
    
    document.getElementById('skipAnswerBtn').addEventListener('click', skipAnswer);
    document.getElementById('nextTurnBtn').addEventListener('click', continueAfterGuess);
}

function confirmSecret() {
    if (!gameState.imageGame) return;
    
    const currentPlayer = gameState.imageGame.players[gameState.imageGame.currentPlayerIndex];
    const randomIndex = Math.floor(Math.random() * 21); // 21 images
    gameState.imageGame.playerSecrets[currentPlayer] = randomIndex;
    
    gameState.imageGame.currentPlayerIndex++;
    
    if (gameState.imageGame.currentPlayerIndex < gameState.imageGame.players.length) {
        updatePlayerDisplay();
        alert(`${currentPlayer} has chosen their secret! Pass to next player.`);
    } else {
        gameState.imageGame.currentPlayerIndex = 0;
        gameState.imageGame.turnPhase = 'playing';
        
        document.getElementById('secretSelection').style.display = 'none';
        document.getElementById('gamePhase').style.display = 'block';
        
        updatePlayerDisplay();
        alert('All players have chosen their secrets! Game begins.');
    }
}

function showQuestionInterface() {
    document.getElementById('questionInterface').style.display = 'block';
    document.getElementById('guessInterface').style.display = 'none';
    document.getElementById('questionInput').focus();
}

function showGuessInterface() {
    document.getElementById('guessInterface').style.display = 'block';
    document.getElementById('questionInterface').style.display = 'none';
    updatePlayerSelect();
}

function updatePlayerSelect() {
    if (!gameState.imageGame) return;
    
    const game = gameState.imageGame;
    const playerSelect = document.getElementById('playerSelect');
    playerSelect.innerHTML = '<option value="">Select a player...</option>';
    
    game.players.forEach((player, index) => {
        if (index !== game.currentPlayerIndex && !game.revealedPlayers.includes(player)) {
            const option = document.createElement('option');
            option.value = player;
            option.textContent = player;
            playerSelect.appendChild(option);
        }
    });
}

function submitQuestion() {
    const question = document.getElementById('questionInput').value.trim();
    
    if (!question) {
        alert('Please enter a question!');
        return;
    }
    
    gameState.imageGame.currentQuestion = {
        text: question,
        askingPlayer: gameState.imageGame.players[gameState.imageGame.currentPlayerIndex]
    };
    
    document.getElementById('questionInterface').style.display = 'none';
    document.getElementById('questionInput').value = '';
    
    const nextPlayerIndex = (gameState.imageGame.currentPlayerIndex + 1) % gameState.imageGame.players.length;
    const answeringPlayer = gameState.imageGame.players[nextPlayerIndex];
    
    showQuestionModal(question, answeringPlayer);
}

function showQuestionModal(question, targetPlayer) {
    gameState.imageGame.turnPhase = 'answering';
    
    document.getElementById('questionText').textContent = question;
    document.getElementById('questionTarget').textContent = `Asking: ${targetPlayer}`;
    document.getElementById('questionModal').style.display = 'flex';
    
    gameState.imageGame.currentQuestion.targetPlayer = targetPlayer;
}

function answerQuestion(answer) {
    const question = gameState.imageGame.currentQuestion;
    const targetPlayer = question.targetPlayer;
    
    alert(`${targetPlayer} answers: ${answer.toUpperCase()}`);
    
    document.getElementById('questionModal').style.display = 'none';
    gameState.imageGame.turnPhase = 'playing';
    endTurn();
}

function skipAnswer() {
    alert('Question skipped / cannot be answered');
    document.getElementById('questionModal').style.display = 'none';
    gameState.imageGame.turnPhase = 'playing';
    endTurn();
}

function submitGuess() {
    const targetPlayer = document.getElementById('playerSelect').value;
    
    if (!targetPlayer) {
        alert('Please select a player to guess!');
        return;
    }
    
    const imageNumber = prompt(`What image number do you think ${targetPlayer} chose? (1-21)`);
    
    if (!imageNumber || isNaN(imageNumber)) {
        alert('Please enter a valid image number!');
        return;
    }
    
    const guessedIndex = parseInt(imageNumber) - 1;
    
    if (guessedIndex < 0 || guessedIndex >= 21) {
        alert('Please enter a number between 1 and 21!');
        return;
    }
    
    const actualIndex = gameState.imageGame.playerSecrets[targetPlayer];
    const isCorrect = (guessedIndex === actualIndex);
    
    showGuessResult(targetPlayer, isCorrect, guessedIndex, actualIndex);
}

function showGuessResult(targetPlayer, isCorrect, guessedIndex, actualIndex) {
    const guesser = gameState.imageGame.players[gameState.imageGame.currentPlayerIndex];
    
    if (isCorrect) {
        document.getElementById('guessResultTitle').textContent = 'Correct Guess! 🎉';
        document.getElementById('guessResultText').innerHTML = `
            <p><strong>${guesser}</strong> correctly guessed that <strong>${targetPlayer}</strong> chose:</p>
            <div style="font-size: 2rem; margin: 15px 0;">⚽</div>
            <p><strong>${gameState.imageGame.images[actualIndex].name}</strong></p>
            <p style="color: var(--text-secondary); margin-top: 10px;">${targetPlayer} is now revealed!</p>
        `;
        
        gameState.imageGame.revealedPlayers.push(targetPlayer);
        
        if (gameState.imageGame.revealedPlayers.length >= gameState.imageGame.players.length - 1) {
            setTimeout(() => {
                endImageGame();
            }, 3000);
        }
    } else {
        document.getElementById('guessResultTitle').textContent = 'Wrong Guess! ❌';
        document.getElementById('guessResultText').innerHTML = `
            <p><strong>${guesser}</strong> guessed wrong!</p>
            <p>${targetPlayer}'s secret remains hidden.</p>
            <div style="margin-top: 15px; padding: 10px; background: rgba(255,255,255,0.05); border-radius: 8px;">
                <p><small>You guessed: Image ${guessedIndex + 1}</small></p>
                <p><small>${targetPlayer} chose a different image</small></p>
            </div>
        `;
    }
    
    document.getElementById('guessInterface').style.display = 'none';
    document.getElementById('guessResultModal').style.display = 'flex';
}

function continueAfterGuess() {
    document.getElementById('guessResultModal').style.display = 'none';
    endTurn();
}

function endTurn() {
    if (!gameState.imageGame) return;
    
    let nextPlayerIndex = (gameState.imageGame.currentPlayerIndex + 1) % gameState.imageGame.players.length;
    let attempts = 0;
    
    while (gameState.imageGame.revealedPlayers.includes(gameState.imageGame.players[nextPlayerIndex]) && attempts < gameState.imageGame.players.length) {
        nextPlayerIndex = (nextPlayerIndex + 1) % gameState.imageGame.players.length;
        attempts++;
    }
    
    gameState.imageGame.currentPlayerIndex = nextPlayerIndex;
    updatePlayerDisplay();
}

function startImageGameTimer() {
    if (!gameState.imageGame) return;
    
    let timeLeft = gameState.timer;
    const timerDisplay = document.getElementById('imageTimerDisplay');
    
    gameState.imageGame.timerInterval = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = formatTime(timeLeft);
        
        if (timeLeft <= 30) {
            timerDisplay.style.color = '#ef4444';
        }
        
        if (timeLeft <= 0) {
            clearInterval(gameState.imageGame.timerInterval);
            timeUpInImageGame();
        }
    }, 1000);
}

function timeUpInImageGame() {
    alert('Time\'s up! Game ends.');
    endImageGame();
}

function endImageGame() {
    if (!gameState.imageGame) return;
    
    if (gameState.imageGame.timerInterval) {
        clearInterval(gameState.imageGame.timerInterval);
    }
    
    alert('Game Over! Here are the results:\n\n' + 
        gameState.imageGame.players.map(player => {
            const isRevealed = gameState.imageGame.revealedPlayers.includes(player);
            return `${player}: ${isRevealed ? 'REVEALED' : 'STILL HIDDEN'}`;
        }).join('\n'));
    
    if (confirm('Play another round?')) {
        restartImageGame();
    } else {
        backToLobby();
    }
}

function restartImageGame() {
    if (gameState.imageGame && gameState.imageGame.timerInterval) {
        clearInterval(gameState.imageGame.timerInterval);
    }
    startImageMatch();
}

// ================= JSONBin CONFIG =================
const JSONBIN_CONFIG = {
    API_KEY: '$2a$10$gFVqUzzSAOQUgLJc42CpWeGT33e40Nwki66XGI6x/R.uCj6m/8XHe',
    BASE_URL: 'https://api.jsonbin.io/v3/b',
    SHARED_BIN_ID: '696a646ad0ea881f40704b06'
};

// ================= PLAY COUNT FUNCTIONS =================
async function loadPlayCount() {
    console.log('🔄 Loading play count from shared JSONBin...');
    
    const playCountElement = document.getElementById('playCount');
    if (playCountElement) {
        playCountElement.textContent = '...';
        playCountElement.classList.add('loading');
    }
    
    try {
        const response = await fetch(`${JSONBIN_CONFIG.BASE_URL}/${JSONBIN_CONFIG.SHARED_BIN_ID}/latest`, {
            headers: {
                'X-Master-Key': JSONBIN_CONFIG.API_KEY,
                'X-Bin-Meta': 'false'
            }
        });
        
        if (response.ok) {
            const data = await response.json();
            
            if (data && typeof data.playCount === 'number') {
                gameState.gamesPlayed = data.playCount;
                localStorage.setItem('imposterGamePlayCount', gameState.gamesPlayed.toString());
                localStorage.setItem('lastPlayCountUpdate', Date.now().toString());
                updatePlayCountDisplay();
                return;
            } else {
                await fixBinData();
            }
        } else {
            if (response.status === 404) {
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
        
        const response = await fetch(`${JSONBIN_CONFIG.BASE_URL}/${JSONBIN_CONFIG.SHARED_BIN_ID}`, {
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
    
    gameState.gamesPlayed++;
    localStorage.setItem('imposterGamePlayCount', gameState.gamesPlayed.toString());
    localStorage.setItem('lastPlayCountUpdate', Date.now().toString());
    
    updatePlayCountDisplay();
    updateJSONBinInBackground(gameState.gamesPlayed);
}

async function updateJSONBinInBackground(newCount) {
    try {
        console.log('☁️ Updating JSONBin...');
        
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

setInterval(syncWithJSONBin, 20000);

document.addEventListener('visibilitychange', function() {
    if (!document.hidden) {
        syncWithJSONBin();
    }
});

// ================= INITIALIZATION =================
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Initializing Imposter Game...');
    
    loadPlayCount().then(() => {
        console.log('✅ Play count loaded:', gameState.gamesPlayed);
        
        loadSettings();
        loadSavedTeams();
        setupEventListeners();
        updateUI();
        updateCategoriesDisplay();
        updatePlayersList();
        
        setTimeout(syncWithJSONBin, 3000);
        
    }).catch(error => {
        console.error('❌ Initialization error:', error);
        loadSettings();
        loadSavedTeams();
        setupEventListeners();
        updateUI();
        updateCategoriesDisplay();
        updatePlayersList();
    });
});

function loadSettings() {
    const saved = localStorage.getItem('imposterSettings');
    
    const ALL_CATEGORIES = [
        'animals', 'food', 'movies', 'places', 
        'objects', 'celebrities', 'flags', 
        'sports', 'anime', 'football'
    ];
    
    if (saved) {
        const settings = JSON.parse(saved);
        
        if (typeof settings.timer === 'number') {
            gameState.timer = settings.timer;
        } else {
            gameState.timer = 120;
        }
        
        gameState.categories = settings.categories || [];
        
        if (gameState.categories.length < ALL_CATEGORIES.length) {
            console.log('🔄 Upgrading old categories to include new ones...');
            
            ALL_CATEGORIES.forEach(category => {
                if (!gameState.categories.includes(category)) {
                    gameState.categories.push(category);
                }
            });
            
            saveSettings();
        }
        
        document.querySelectorAll('.timer-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        const timerBtn = document.querySelector(`.timer-btn[data-time="${gameState.timer}"]`);
        if (timerBtn) {
            timerBtn.classList.add('active');
        }
        
        const checkboxes = document.querySelectorAll('.category-checkbox');
        checkboxes.forEach(cb => {
            cb.checked = gameState.categories.includes(cb.value);
        });
        
        const allChecked = gameState.categories.length === checkboxes.length;
        if (document.getElementById('selectAllBtn')) {
            document.getElementById('selectAllBtn').textContent = allChecked ? 'Deselect All' : 'Select All';
        }
        
        updateTimerDisplay();
        updateCategoriesDisplay();
    } else {
        gameState.categories = ALL_CATEGORIES;
        gameState.gameMode = 'images';
        
        saveSettings();
        
        const checkboxes = document.querySelectorAll('.category-checkbox');
        checkboxes.forEach(cb => {
            cb.checked = true;
        });
        
        if (document.getElementById('selectAllBtn')) {
            document.getElementById('selectAllBtn').textContent = 'Deselect All';
        }
        
        updateTimerDisplay();
        updateCategoriesDisplay();
    }
    
    selectGameMode(gameState.gameMode);
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
    console.log('Setting up event listeners...');
    
    document.getElementById('addPlayerBtn').addEventListener('click', addPlayer);
    document.getElementById('playerNameInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') addPlayer();
    });
    document.getElementById('clearPlayersBtn').addEventListener('click', clearPlayers);
    document.getElementById('saveTeamBtn').addEventListener('click', saveTeam);
    
    document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            console.log('Mode clicked:', this.dataset.mode);
            selectGameMode(this.dataset.mode);
        });
    });
    
    document.querySelectorAll('.mode-help-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            showHelp(this.dataset.help);
        });
    });
    
    document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            if (!e.target.closest('.mode-help-btn')) {
                selectGameMode(this.dataset.mode);
            }
        });
    });
    
    setTimeout(() => {
        const timerBtns = document.querySelectorAll('.timer-btn');
        console.log('Timer buttons found:', timerBtns.length);
        
        timerBtns.forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                console.log('Timer clicked:', this.dataset.time);
                selectTimer(parseInt(this.dataset.time));
                
                const buttons = document.getElementById('timerButtons');
                const expandIcon = document.getElementById('timerExpand');
                buttons.style.display = 'none';
                expandIcon.classList.remove('expanded');
            });
        });
    }, 100);
    
    const checkboxes = document.querySelectorAll('.category-checkbox');
    console.log('Category checkboxes found:', checkboxes.length);
    
    checkboxes.forEach(cb => {
        cb.addEventListener('change', updateCategories);
    });
    
    const selectAllBtn = document.getElementById('selectAllBtn');
    if (selectAllBtn) {
        selectAllBtn.addEventListener('click', function() {
            const checkboxes = document.querySelectorAll('.category-checkbox');
            const allChecked = Array.from(checkboxes).every(cb => cb.checked);
            
            checkboxes.forEach(cb => {
                cb.checked = !allChecked;
            });
            
            this.textContent = allChecked ? 'Select All' : 'Deselect All';
            
            updateCategories();
        });
    }
    
    const timerGroup = document.querySelector('.setting-group:nth-child(2)');
    const categoriesGroup = document.querySelector('.setting-group:nth-child(3)');
    
    if (timerGroup) {
        timerGroup.addEventListener('click', function(e) {
            if (e.target.classList.contains('timer-btn') || 
                e.target.closest('.timer-btn') || 
                e.target.type === 'checkbox') {
                return;
            }
            
            console.log('Timer group clicked');
            const buttons = document.getElementById('timerButtons');
            const expandIcon = document.getElementById('timerExpand');
            const isHidden = buttons.style.display === 'none' || buttons.style.display === '';
            buttons.style.display = isHidden ? 'grid' : 'none';
            expandIcon.classList.toggle('expanded', isHidden);
            
            if (isHidden) setTimeout(() => this.scrollIntoView({behavior: 'smooth', block: 'center'}), 100);
        });
    }
    
    if (categoriesGroup) {
        categoriesGroup.addEventListener('click', function(e) {
            if (e.target.type === 'checkbox' || 
                e.target.closest('.category-option') ||
                e.target.id === 'selectAllBtn' || 
                e.target.closest('#selectAllBtn')) {
                return;
            }
            
            console.log('Categories group clicked');
            const grid = document.getElementById('categoriesGrid');
            const expandIcon = document.getElementById('categoriesExpand');
            const isHidden = grid.style.display === 'none' || grid.style.display === '';
            grid.style.display = isHidden ? 'grid' : 'none';
            expandIcon.classList.toggle('expanded', isHidden);
            
            if (isHidden) setTimeout(() => this.scrollIntoView({behavior: 'smooth', block: 'center'}), 100);
        });
    }
    
    document.getElementById('startGameBtn').addEventListener('click', startGame);
    
    document.getElementById('roleCard').addEventListener('click', revealRole);
    document.getElementById('nextPlayerBtn').addEventListener('click', nextPlayer);
    
    document.getElementById('stopRollerBtn').addEventListener('click', stopNameRoller);
    document.getElementById('startDescribeBtn').addEventListener('click', startDescribing);
    document.getElementById('showWordBtn').addEventListener('click', function() {
        document.getElementById('describerWordDisplay').style.display = 'block';
    });
    
    document.getElementById('revealImposterBtn').addEventListener('click', revealImposterEarly);
    document.getElementById('endDiscussionBtn').addEventListener('click', endDiscussion);
    
    document.getElementById('secretCard').addEventListener('click', revealImposter);
    document.getElementById('playAgainBtn').addEventListener('click', playAgain);
    document.getElementById('newGameBtn').addEventListener('click', backToLobby);
    
    document.getElementById('shareBtn').addEventListener('click', showShareModal);
    
    const feedbackBtn = document.getElementById('feedbackBtn');
    if (feedbackBtn) {
        feedbackBtn.addEventListener('click', showFeedbackModal);
    }
    
    document.getElementById('copyLinkBtn').addEventListener('click', copyGameLink);
    
    setupFeedbackListeners();
    
    document.querySelectorAll('.close-modal').forEach(btn => {
        btn.addEventListener('click', function() {
            const modal = this.closest('.modal');
            if (modal) {
                modal.style.display = 'none';
            }
        });
    });
    
    document.querySelectorAll('.social-btn[data-share]').forEach(btn => {
        btn.addEventListener('click', function() {
            shareGame(this.dataset.share);
        });
    });
    
    let startY;
    document.getElementById('secretCard').addEventListener('touchstart', function(e) {
        startY = e.touches[0].clientY;
    });
    
    document.getElementById('secretCard').addEventListener('touchend', function(e) {
        if (startY - e.changedTouches[0].clientY > 50) {
            revealImposter();
        }
    });
    
    console.log('Event listeners setup complete');
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
    
    if (!list) {
        console.error('playersList element not found!');
        return;
    }
    
    if (gameState.players.length === 0) {
        list.innerHTML = '<p style="text-align: center; color: #94a3b8; padding: 20px;">👤 Enter player names above<br><small>Players will appear here</small></p>';
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
    console.log('Changing game mode to:', mode);
    
    gameState.gameMode = mode;
    
    document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    const selectedBtn = document.querySelector(`.mode-btn[data-mode="${mode}"]`);
    if (selectedBtn) {
        selectedBtn.classList.add('active');
    }
    
    let modeText = '';
    switch(mode) {
        case 'classic':
            modeText = 'Classic';
            break;
        case 'describe':
            modeText = 'Describe It';
            break;
        case 'images':
            modeText = 'Guess the Image';
            break;
        default:
            modeText = 'Classic';
    }
    
    document.getElementById('gameModeText').textContent = modeText;
    saveSettings();
    
    console.log('Game mode set to:', gameState.gameMode);
}

function selectTimer(seconds) {
    document.querySelectorAll('.timer-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
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
    const checkboxes = document.querySelectorAll('.category-checkbox:checked');
    
    gameState.categories = Array.from(checkboxes).map(cb => cb.value);
    
    console.log('Selected categories:', gameState.categories);
    console.log('Selected count:', gameState.categories.length);
    
    const allCheckboxes = document.querySelectorAll('.category-checkbox');
    const allChecked = gameState.categories.length === allCheckboxes.length;
    const selectAllBtn = document.getElementById('selectAllBtn');
    
    if (selectAllBtn) {
        selectAllBtn.textContent = allChecked ? 'Deselect All' : 'Select All';
    }
    
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
    
    // Always enable the button if there's at least 1 player
    const canStart = gameState.players.length >= 1;
    document.getElementById('startGameBtn').disabled = !canStart;
    
    if (!canStart) {
        document.getElementById('startGameBtn').innerHTML = '<i class="fas fa-exclamation-circle"></i> Need a team';
    } else {
        document.getElementById('startGameBtn').innerHTML = '<i class="fas fa-play"></i> START GAME';
    }
    
    updatePlayCountDisplay();
}

// ================= GAME START =================
// ================= GAME START =================
function startGame() {
    console.log('Starting game with mode:', gameState.gameMode);
    
    // Check mode-specific player requirements
    if (gameState.gameMode === 'images') {
        // Image mode needs at least 2 players
        if (gameState.players.length < 2) {
            alert('Guess the Image mode needs at least 2 players!');
            return;
        }
        
        if (!gameState.categories.includes('football')) {
            alert('Guess the Image mode requires Football Players category!');
            return;
        }
        
        startImageMatch();
        return;
    } 
    else if (gameState.gameMode === 'classic' || gameState.gameMode === 'describe') {
        // Classic and Describe modes need at least 3 players
        if (gameState.players.length < 3) {
            alert(`${gameState.gameMode === 'classic' ? 'Classic' : 'Describe It'} mode needs at least 3 players!`);
            return;
        }
    }
    
    // Filter words for classic/describe modes
    const filteredWords = words.filter(w =>
        gameState.categories.includes(w.category)
    );

    console.log('Filtered words count:', filteredWords.length);

    if (filteredWords.length === 0) {
        alert('No words in selected categories! Please select at least one valid category.');
        console.log(
            'Available categories in words.js:',
            [...new Set(words.map(w => w.category))]
        );
        console.log('Selected categories:', gameState.categories);
        return;
    }

    incrementPlayCount();

    document.querySelector('.dashboard').style.display = 'none';
    document.querySelector('.start-section').style.display = 'none';
    document.querySelector('.social-buttons').style.display = 'none';

    gameState.currentPlayer = 0;
    gameState.imposter = -1;

    const random = filteredWords[Math.floor(Math.random() * filteredWords.length)];
    gameState.word = random.word;
    gameState.wordAr = random.wordAr;

    const hintIndex = Math.floor(Math.random() * random.hints.length);
    gameState.hint = random.hints[hintIndex];
    gameState.hintAr = random.hintsAr[hintIndex];

    if (gameState.gameMode === 'classic') {
        startClassicGame();
    } else if (gameState.gameMode === 'describe') {
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
    
    document.getElementById('cardHidden').classList.remove('hidden');
    document.getElementById('cardContent').classList.remove('visible');
    document.getElementById('nextPlayerBtn').style.display = 'none';
    
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


// ================= DESCRIBE GAME =================
function startDescribeGame() {
    const shuffled = [...gameState.players].sort(() => Math.random() - 0.5);
    const half = Math.ceil(shuffled.length / 2);
    gameState.redTeam = shuffled.slice(0, half);
    gameState.blueTeam = shuffled.slice(half);
    
    console.log('Teams created:', {
        redTeam: gameState.redTeam,
        blueTeam: gameState.blueTeam,
        totalPlayers: gameState.players.length
    });
    
    document.getElementById('describeGame').style.display = 'block';
    updateTeamsDisplay();
    
    startNameRoller();
}

function startNameRoller() {
    let index = 0;
    
    // Create a pool of eligible players (only from teams with at least 2 players)
    let eligiblePlayers = [];
    
    if (gameState.redTeam.length >= 2) {
        eligiblePlayers = eligiblePlayers.concat(gameState.redTeam);
    }
    
    if (gameState.blueTeam.length >= 2) {
        eligiblePlayers = eligiblePlayers.concat(gameState.blueTeam);
    }
    
    // Fallback: if somehow all teams have 1 player, use all players
    if (eligiblePlayers.length === 0) {
        eligiblePlayers = [...gameState.redTeam, ...gameState.blueTeam];
        console.warn('All teams have only 1 player, using all players as eligible');
    }
    
    console.log('Eligible players for describer:', eligiblePlayers);
    
    gameState.rollerInterval = setInterval(() => {
        document.getElementById('rollingName').textContent = eligiblePlayers[index];
        index = (index + 1) % eligiblePlayers.length;
    }, 100);
}

function stopNameRoller() {
    clearInterval(gameState.rollerInterval);
    
    // Determine eligible players (same logic as startNameRoller)
    let eligiblePlayers = [];
    
    if (gameState.redTeam.length >= 2) {
        eligiblePlayers = eligiblePlayers.concat(gameState.redTeam);
    }
    
    if (gameState.blueTeam.length >= 2) {
        eligiblePlayers = eligiblePlayers.concat(gameState.blueTeam);
    }
    
    // Fallback
    if (eligiblePlayers.length === 0) {
        eligiblePlayers = [...gameState.redTeam, ...gameState.blueTeam];
    }
    
    // Select random describer from eligible players
    const describerIndex = Math.floor(Math.random() * eligiblePlayers.length);
    const describer = eligiblePlayers[describerIndex];
    
    // Determine which team the describer is from
    gameState.describerTeam = gameState.redTeam.includes(describer) ? 'Red Team' : 'Blue Team';
    
    document.getElementById('rollingName').textContent = describer;
    
    setTimeout(() => {
        document.getElementById('describeGame').style.display = 'none';
        showDescriberWord();
    }, 1500);
}

function showDescriberWord() {
    document.getElementById('describerTeam').textContent = gameState.describerTeam;
    
    // Show "Your Mission" text
    document.getElementById('describerWord').textContent = 'Your Mission';
    document.getElementById('describerHint').textContent = 'Describe it to your team without saying the word';
    
    // Set up the word display (but keep it hidden initially)
    document.getElementById('describerActualWord').textContent = gameState.word;
    document.getElementById('describerArabicWord').textContent = gameState.wordAr;
    document.getElementById('describerWordDisplay').style.display = 'none';
    
    document.getElementById('describeWordScreen').style.display = 'block';
}

function updateTeamsDisplay() {
    document.getElementById('redTeamPlayers').innerHTML = gameState.redTeam.map(p => 
        `<div class="team-player">${p}</div>`
    ).join('');
    
    document.getElementById('blueTeamPlayers').innerHTML = gameState.blueTeam.map(p => 
        `<div class="team-player">${p}</div>`
    ).join('');
}

// Update the showWordBtn event listener
document.getElementById('showWordBtn').addEventListener('click', function() {
    const wordDisplay = document.getElementById('describerWordDisplay');
    
    if (wordDisplay.style.display === 'none') {
        // Show the word in both languages
        wordDisplay.style.display = 'block';
        this.innerHTML = '<i class="fas fa-eye-slash"></i> Hide Word';
        
        // Update the main display to show the actual word
        document.getElementById('describerWord').textContent = gameState.word;
        document.getElementById('describerHint').innerHTML = 
            `<strong>Arabic:</strong> ${gameState.wordAr}`;
    } else {
        // Hide the word
        wordDisplay.style.display = 'none';
        this.innerHTML = '<i class="fas fa-eye"></i> Show Word';
        
        // Return to the mission text
        document.getElementById('describerWord').textContent = 'Your Mission';
        document.getElementById('describerHint').textContent = 'Describe it to your team without saying the word';
    }
});


// ================= DESCRIBE GAME =================
function validateTeamsForDescribe() {
    // For 3 players: teams will be 2 vs 1
    // For 4 players: teams will be 2 vs 2  
    // For 5 players: teams will be 3 vs 2
    // etc.
    
    const redCount = gameState.redTeam.length;
    const blueCount = gameState.blueTeam.length;
    
    console.log('Team validation:', {
        redTeamCount: redCount,
        blueTeamCount: blueCount,
        isValid: redCount >= 2 || blueCount >= 2
    });
    
    // Return true if at least one team has 2+ players
    return redCount >= 2 || blueCount >= 2;
}

function startDescribeGame() {
    const shuffled = [...gameState.players].sort(() => Math.random() - 0.5);
    const half = Math.ceil(shuffled.length / 2);
    gameState.redTeam = shuffled.slice(0, half);
    gameState.blueTeam = shuffled.slice(half);
    
    // Validate teams
    if (!validateTeamsForDescribe()) {
        console.error('Invalid team configuration for Describe It mode');
        // This shouldn't happen with 3+ players, but just in case
        alert('Teams need to be reconfigured. Please add more players.');
        backToLobby();
        return;
    }
    
    console.log('Teams created:', {
        redTeam: gameState.redTeam,
        blueTeam: gameState.blueTeam,
        totalPlayers: gameState.players.length
    });
    
    document.getElementById('describeGame').style.display = 'block';
    updateTeamsDisplay();
    
    startNameRoller();
}





// Update the showWordBtn event listener
function showDescriberWord() {
    document.getElementById('describerTeam').textContent = gameState.describerTeam;
    
    // Show "Your Mission" text
    document.getElementById('describerWord').textContent = 'Your Mission';
    document.getElementById('describerHint').textContent = 'Describe it to your team without saying the word';
    
    // Set up the word display (but keep it hidden initially)
    document.getElementById('describerActualWord').textContent = gameState.word;
    document.getElementById('describerArabicWord').textContent = gameState.wordAr;
    document.getElementById('describerWordDisplay').style.display = 'none';
    
    document.getElementById('describeWordScreen').style.display = 'block';
}

// Update the showWordBtn event listener
document.getElementById('showWordBtn').addEventListener('click', function() {
    const wordDisplay = document.getElementById('describerWordDisplay');
    
    if (wordDisplay.style.display === 'none') {
        // Show the word in both languages
        wordDisplay.style.display = 'block';
        this.innerHTML = '<i class="fas fa-eye-slash"></i> Hide Word';
        
        // Update the main display to show the actual word
        document.getElementById('describerWord').textContent = gameState.word;
        document.getElementById('describerHint').innerHTML = 
            `<strong>Arabic:</strong> ${gameState.wordAr}`;
    } else {
        // Hide the word
        wordDisplay.style.display = 'none';
        this.innerHTML = '<i class="fas fa-eye"></i> Show Word';
        
        // Return to the mission text
        document.getElementById('describerWord').textContent = 'Your Mission';
        document.getElementById('describerHint').textContent = 'Describe it to your team without saying the word';
    }
});

function startDescribing() {
    document.getElementById('describeWordScreen').style.display = 'none';
    
    const mode = document.querySelector('.mode-btn.active')?.dataset.mode || 'speech';
    const instruction = mode === 'speech' ?
        `${gameState.describerTeam}'s describer is describing the word. Both teams guess!` :
        `${gameState.describerTeam}'s describer is using gestures only. Both teams guess!`;
    
    document.getElementById('roundInstruction').textContent = instruction;
    document.getElementById('discussionRound').style.display = 'block';
    
    document.getElementById('revealImposterBtn').style.display = 'none';
    
    if (gameState.timer === 0) {
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
    
    if (gameState.gameMode === 'classic') {
        document.getElementById('revealImposterBtn').style.display = 'block';
    } else {
        document.getElementById('revealImposterBtn').style.display = 'none';
    }
    
    if (gameState.timer > 0) {
        startDiscussionTimer();
    } else {
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
    
    if (gameState.gameMode === 'classic') {
        document.getElementById('resultsTitle').textContent = 'Game Results';
        document.getElementById('secretText').textContent = 'The Imposter Was...';
        document.getElementById('secretCard').style.display = 'block';
    } else {
        document.getElementById('resultsTitle').textContent = 'Round Complete';
        document.getElementById('secretText').textContent = 'The Word Was...';
        document.getElementById('secretCard').style.display = 'block';
    }
    
    document.getElementById('revealContent').classList.remove('show');
}

function revealImposter() {
    if (gameState.gameMode === 'classic') {
        const imposter = gameState.players[gameState.imposter];
        document.getElementById('imposterName').textContent = imposter;
        document.getElementById('correctWord').textContent = gameState.word;
        document.getElementById('arabicWord').textContent = gameState.wordAr; // Changed from imposterHint to arabicWord
    } else {
        document.getElementById('imposterName').textContent = gameState.describerTeam;
        document.getElementById('correctWord').textContent = gameState.word;
         document.getElementById('arabicWord').textContent = gameState.wordAr; // Changed from imposterHint to arabicWord
    }
    
    document.getElementById('secretCard').style.display = 'none';
    document.getElementById('revealContent').classList.add('show');
}

function playAgain() {
    if (gameState.timerInterval) {
        clearInterval(gameState.timerInterval);
    }
    
    gameState.currentPlayer = 0;
    
    const filteredWords = words.filter(w => gameState.categories.includes(w.category));
    if (filteredWords.length > 0) {
        const random = filteredWords[Math.floor(Math.random() * filteredWords.length)];
        gameState.word = random.word;
        gameState.wordAr = random.wordAr;
        
        const hintIndex = Math.floor(Math.random() * random.hints.length);
        gameState.hint = random.hints[hintIndex];
        gameState.hintAr = random.hintsAr[hintIndex];
    }
    
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
    
    if (gameState.imageGame && gameState.imageGame.timerInterval) {
        clearInterval(gameState.imageGame.timerInterval);
    }
    
    document.querySelectorAll('.game-screen').forEach(screen => {
        screen.style.display = 'none';
    });
    
    document.querySelector('.dashboard').style.display = 'block';
    document.querySelector('.start-section').style.display = 'block';
    document.querySelector('.social-buttons').style.display = 'flex';
}

// ================= MODALS =================
function showShareModal() {
    const modal = document.getElementById('shareModal');
    if (modal) {
        modal.style.display = 'flex';
    }
}

function showFeedbackModal() {
    const modal = document.getElementById('feedbackModal');
    if (modal) {
        modal.style.display = 'flex';
    }
}

function hideModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
    }
}

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
            input.value = gameLink;
            input.select();
            document.execCommand('copy');
            alert('Link copied!');
        });
}

function shareGame(platform) {
    const url = 'https://kimaro-sadori.github.io/js_game/';
    const text = "🎭 Play Imposter Game with me!";
    
    if (platform === 'whatsapp') {
        window.open(`https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`);
    } else if (platform === 'copy') {
        copyGameLink();
    }
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
window.restartImageGame = restartImageGame;

// ================= FEEDBACK SYSTEM =================
function openGoogleForm() {
    const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSd4iWPkTWr_2p1UhqwHs4pnZqNAg8XU8zXdJKBDZvY7dv1YzA/viewform';
    
    window.open(GOOGLE_FORM_URL, '_blank');
    hideModal('feedbackModal');
}

function closeAllModals() {
    document.querySelectorAll('.modal').forEach(modal => {
        modal.style.display = 'none';
    });
}

function setupFeedbackListeners() {
    const openFormBtn = document.getElementById('openGoogleFormBtn');
    if (openFormBtn) {
        openFormBtn.addEventListener('click', openGoogleForm);
    }
}

function setupModalClose() {
    document.querySelectorAll('.close-modal').forEach(btn => {
        btn.addEventListener('click', function() {
            this.closest('.modal').style.display = 'none';
        });
    });
    
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.style.display = 'none';
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', setupModalClose);

// ================= HELP MODAL FUNCTIONS =================
function showHelp(mode) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'flex';
    
    let content;
    let title;
    
    if (mode === 'classic') {
        content = getClassicHelp();
        title = '🎭 Classic Mode';
    } else if (mode === 'describe') {
        content = getDescribeHelp();
        title = '🎤 Describe It Mode';
    } else if (mode === 'images') {
        content = getImagesHelp();
        title = '🖼️ Guess the Image';
    } else {
        content = getClassicHelp();
        title = 'Game Help';
    }
    
    modal.innerHTML = `
        <div class="modal-content help-modal">
            <div class="modal-header">
                <h2>${title}</h2>
                <span class="close-modal">&times;</span>
            </div>
            <div class="modal-body">
                ${content}
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    modal.querySelector('.close-modal').addEventListener('click', () => {
        document.body.removeChild(modal);
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
    
    modal.querySelector('.modal-content').addEventListener('click', (e) => {
        e.stopPropagation();
    });
}

function getClassicHelp() {
    return `
        <div class="help-steps">
            <div class="step">
                <div class="step-num">1</div>
                <div class="step-text">One player is secretly the <strong>Imposter</strong></div>
            </div>
            <div class="step">
                <div class="step-num">2</div>
                <div class="step-text">Innocents see the <strong>word</strong>, Imposter sees a <strong>hint</strong></div>
            </div>
            <div class="step">
                <div class="step-num">3</div>
                <div class="step-text">All players describe the word (Imposter tries to blend in)</div>
            </div>
            <div class="step">
                <div class="step-num">4</div>
                <div class="step-text">Discuss and vote to find the Imposter!</div>
            </div>
        </div>
    `;
}

function getDescribeHelp() {
    return `
        <div class="help-steps">
            <div class="step">
                <div class="step-num">1</div>
                <div class="step-text">Players split into <strong class="red">Red</strong> and <strong class="blue">Blue</strong> teams</div>
            </div>
            <div class="step">
                <div class="step-num">2</div>
                <div class="step-text">A <strong>Describer</strong> is randomly chosen from a team</div>
            </div>
            <div class="step">
                <div class="step-num">3</div>
                <div class="step-text">Describer sees a secret word</div>
            </div>
            <div class="step">
                <div class="step-num">4</div>
                <div class="step-text">Describer explains the word (speech or gestures only)</div>
            </div>
            <div class="step">
                <div class="step-num">5</div>
                <div class="step-text">Teams race to guess the word first!</div>
            </div>
        </div>
    `;
}

function getImagesHelp() {
    return `
        <div class="help-steps">
            <div class="step">
                <div class="step-num">1</div>
                <div class="step-text">All players see a <strong>list of images</strong> from selected categories</div>
            </div>
            <div class="step">
                <div class="step-num">2</div>
                <div class="step-text">Race to <strong>guess what's in the image</strong> first</div>
            </div>
            <div class="step">
                <div class="step-num">3</div>
                <div class="step-text">Correct guess <strong>eliminates</strong> another player</div>
            </div>
            <div class="step">
                <div class="step-num">4</div>
                <div class="step-text">Eliminated players sit out, <strong>circle continues</strong> with remaining players</div>
            </div>
            <div class="step">
                <div class="step-num">5</div>
                <div class="step-text">Last player standing <strong>wins!</strong></div>
            </div>
            <div class="step">
                <div class="step-num">☆</div>
                <div class="step-text"><strong>Required categories:</strong> Football Players</div>
            </div>
        </div>
    `;
}