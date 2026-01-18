// ================= SIMPLE GAME STATE =================
let gameState = {
    players: [],
    gameMode: 'classic',
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
    gamesPlayed: 0
};
// ================= FOOTBALL PLAYERS IMAGES =================
// Add this array of actual football player images (21 players for 3×7 grid)
const FOOTBALL_PLAYERS = [
    // Modern Players
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
    
    // Legends
    { name: "Pelé", image: "images/images.jpg" },
    { name: "Diego Maradona", image: "images/images.jpg" },
    { name: "Johan Cruyff", image: "images/images.jpg" },
    { name: "Zinedine Zidane", image: "images/images.jpg" },
    { name: "Ronaldo Nazário", image: "images/images.jpg" },
    
    // Midfielders/Defenders
    { name: "Luka Modrić", image: "images/images.jpg" },
    { name: "Toni Kroos", image: "images/images.jpg" },
    { name: "Sergio Ramos", image: "images/images.jpg" },
    { name: "Manuel Neuer", image: "images/images.jpg" },
    { name: "Karim Benzema", image: "images/images.jpg" },
    { name: "Son Heung-min", image: "images/images.jpg" }
];

// Update the generateImageGrid function to use actual images
function generateImageGrid() {
    const imageGrid = document.getElementById('imageGrid');
    
    // Clear loading message
    imageGrid.innerHTML = '<div class="loading-images">Loading player images...</div>';
    
    // Use football players if that category is selected
    const useFootballPlayers = gameState.categories.includes('football');
    
    if (useFootballPlayers) {
        // Generate 3×7 grid (21 images)
        const numImages = 21;
        const playersToShow = [...FOOTBALL_PLAYERS]
            .sort(() => Math.random() - 0.5)
            .slice(0, numImages);
        
        // Preload images first
        const imageUrls = playersToShow.map(p => p.image);
        
        preloadImages(imageUrls, () => {
            // Images loaded, display them
            imageGrid.innerHTML = '';
            
            playersToShow.forEach((player, index) => {
                const imageCell = document.createElement('div');
                imageCell.className = 'image-cell-simple';
                imageCell.dataset.index = index;
                imageCell.title = player.name;
                
                // Create image element
                const img = document.createElement('img');
                img.src = player.image;
                img.alt = player.name;
                img.className = 'player-image';
                img.loading = 'lazy'; // For better performance
                
                // Add error handling
                img.onerror = function() {
                    console.error('Failed to load image:', player.image);
                    this.style.display = 'none';
                    
                    // Create fallback with player name
                    const fallback = document.createElement('div');
                    fallback.className = 'player-fallback';
                    fallback.innerHTML = `
                        <div>⚽</div>
                        <div style="font-size: 0.7rem; margin-top: 5px;">${player.name.split(' ')[0]}</div>
                    `;
                    imageCell.appendChild(fallback);
                };
                
                // Add number label
                const numberLabel = document.createElement('div');
                numberLabel.className = 'image-number';
                numberLabel.textContent = index + 1;
                
                // Add player name label (optional)
                const nameLabel = document.createElement('div');
                nameLabel.className = 'player-name-label';
                nameLabel.textContent = player.name;
                
                imageCell.appendChild(img);
                imageCell.appendChild(numberLabel);
                imageCell.appendChild(nameLabel);
                imageGrid.appendChild(imageCell);
            });
        });
    } else {
        // Use regular words/images from words.js (fallback)
        const filteredWords = words.filter(w => gameState.categories.includes(w.category));
        
        if (filteredWords.length === 0) {
            imageGrid.innerHTML = '<div class="loading-images" style="color: #ef4444;">No images available! Select Football Players category.</div>';
            return;
        }
        
        // Select 21 random words/images
        const numImages = 21;
        const shuffledWords = [...filteredWords].sort(() => Math.random() - 0.5);
        const wordsToShow = shuffledWords.slice(0, Math.min(numImages, shuffledWords.length));
        
        // Pad if needed
        while (wordsToShow.length < numImages) {
            wordsToShow.push({
                word: `Image ${wordsToShow.length + 1}`,
                image: "🖼️",
                category: "objects"
            });
        }
        
        // Display grid
        imageGrid.innerHTML = '';
        
        wordsToShow.forEach((wordObj, index) => {
            const imageCell = document.createElement('div');
            imageCell.className = 'image-cell-simple';
            imageCell.dataset.index = index;
            imageCell.title = `Image ${index + 1}`;
            
            // Show emoji if no image URL
            if (!wordObj.image || wordObj.image.startsWith('http')) {
                // Try to use actual image if available
                const img = document.createElement('img');
                img.src = wordObj.image || 'https://via.placeholder.com/150/1e293b/f8fafc?text=⚽';
                img.alt = wordObj.word;
                img.className = 'player-image';
                
                img.onerror = function() {
                    this.style.display = 'none';
                    const fallback = document.createElement('div');
                    fallback.className = 'image-fallback';
                    fallback.textContent = wordObj.emoji || '🖼️';
                    fallback.style.cssText = 'font-size: 2rem; color: var(--text); display: flex; align-items: center; justify-content: center; height: 100%;';
                    imageCell.appendChild(fallback);
                };
                
                imageCell.appendChild(img);
            } else {
                // Show emoji directly
                imageCell.textContent = wordObj.image || '🖼️';
                imageCell.style.fontSize = '2rem';
                imageCell.style.display = 'flex';
                imageCell.style.alignItems = 'center';
                imageCell.style.justifyContent = 'center';
            }
            
            const numberLabel = document.createElement('div');
            numberLabel.className = 'image-number';
            numberLabel.textContent = index + 1;
            
            imageCell.appendChild(numberLabel);
            imageGrid.appendChild(imageCell);
        });
    }
}

// Update the preloadImages function to handle errors better
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

// Also update your CSS to make sure images display properly:
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
//text in payers list
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
        
        // ADD THIS LINE to show the players list placeholder
        updatePlayersList();
        
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
        // ADD THIS LINE here too
        updatePlayersList();
    });
});

function loadSettings() {
    const saved = localStorage.getItem('imposterSettings');
    
    // ALL 10 categories should always be the default
  const ALL_CATEGORIES = [
    'animals', 'food', 'movies', 'places', 
    'objects', 'celebrities', 'flags', 
    'sports', 'anime', 'football'
];
    
    if (saved) {
        const settings = JSON.parse(saved);
        
        // FIX: Properly check if timer exists (even if it's 0)
        if (typeof settings.timer === 'number') {
            gameState.timer = settings.timer; // Keep the saved value, even if it's 0
        } else {
            gameState.timer = 120; // Default only if timer doesn't exist
        }
        
        // Load saved categories if they exist
        gameState.categories = settings.categories || [];
        
        // CRITICAL FIX: If user has OLD saved categories (less than 10),
        // we need to ADD the new categories to their saved settings
        if (gameState.categories.length < ALL_CATEGORIES.length) {
            console.log('🔄 Upgrading old categories to include new ones...');
            
            // Add any missing categories
            ALL_CATEGORIES.forEach(category => {
                if (!gameState.categories.includes(category)) {
                    gameState.categories.push(category);
                }
            });
            
            // Save the updated categories
            saveSettings();
        }
        
        // Timer button - IMPORTANT: Remove active class from ALL timer buttons first
        document.querySelectorAll('.timer-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Then add active class to the correct timer button
        const timerBtn = document.querySelector(`.timer-btn[data-time="${gameState.timer}"]`);
        if (timerBtn) {
            timerBtn.classList.add('active');
        }
        
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
        // No saved settings, use defaults with ALL 10 CATEGORIES
        gameState.categories = ALL_CATEGORIES;
        saveSettings();
        
        // Check all checkboxes by default
        const checkboxes = document.querySelectorAll('.category-checkbox');
        checkboxes.forEach(cb => {
            cb.checked = true;
        });
        
        // Update Select All button
        if (document.getElementById('selectAllBtn')) {
            document.getElementById('selectAllBtn').textContent = 'Deselect All';
        }
        
        updateTimerDisplay();
        updateCategoriesDisplay();
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
    console.log('Setting up event listeners...');
    
    // Player Management
    document.getElementById('addPlayerBtn').addEventListener('click', addPlayer);
    document.getElementById('playerNameInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') addPlayer();
    });
    document.getElementById('clearPlayersBtn').addEventListener('click', clearPlayers);
    document.getElementById('saveTeamBtn').addEventListener('click', saveTeam);
    
    // Game Settings - MODE
    document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            console.log('Mode clicked:', this.dataset.mode);
            selectGameMode(this.dataset.mode);
        });
    });
    // Help buttons for game modes
document.querySelectorAll('.mode-help-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent triggering mode selection
        showHelp(this.dataset.help);
    });
});

// Make sure mode buttons still work properly
document.querySelectorAll('.mode-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        // Only trigger if not clicking on help button
        if (!e.target.closest('.mode-help-btn')) {
            selectGameMode(this.dataset.mode);
        }
    });
});
    
    // Timer buttons - SETUP CORRECTLY
    setTimeout(() => {
        const timerBtns = document.querySelectorAll('.timer-btn');
        console.log('Timer buttons found:', timerBtns.length);
        
        timerBtns.forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.stopPropagation(); // Prevent event bubbling
                console.log('Timer clicked:', this.dataset.time);
                selectTimer(parseInt(this.dataset.time));
                
                // Auto-close the timer options after selection
                const buttons = document.getElementById('timerButtons');
                const expandIcon = document.getElementById('timerExpand');
                buttons.style.display = 'none';
                expandIcon.classList.remove('expanded');
            });
        });
    }, 100); // Small delay to ensure DOM is ready
    
    // Categories checkboxes
    const checkboxes = document.querySelectorAll('.category-checkbox');
    console.log('Category checkboxes found:', checkboxes.length);
    
    checkboxes.forEach(cb => {
        cb.addEventListener('change', updateCategories);
    });
    
    // Select All button functionality
    const selectAllBtn = document.getElementById('selectAllBtn');
    if (selectAllBtn) {
        selectAllBtn.addEventListener('click', function() {
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
    }
    
    // Expand/Collapse sections - FIXED CLICK HANDLER
   // Expand/Collapse sections - FIXED CLICK HANDLER
const timerGroup = document.querySelector('.setting-group:nth-child(2)'); // Timer group
const categoriesGroup = document.querySelector('.setting-group:nth-child(3)'); // Categories group

if (timerGroup) {
    timerGroup.addEventListener('click', function(e) {
        // Don't trigger if clicking on a timer button or checkbox
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
        
        // Scroll to make expanded content visible
        if (isHidden) setTimeout(() => this.scrollIntoView({behavior: 'smooth', block: 'center'}), 100);
    });
}

if (categoriesGroup) {
    categoriesGroup.addEventListener('click', function(e) {
        // Don't trigger if clicking on checkbox or select all button
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
        
        // Scroll to make expanded content visible
        if (isHidden) setTimeout(() => this.scrollIntoView({behavior: 'smooth', block: 'center'}), 100);
    });
}
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
    
    // Feedback button - ONLY ONCE
    const feedbackBtn = document.getElementById('feedbackBtn');
    if (feedbackBtn) {
        feedbackBtn.addEventListener('click', showFeedbackModal);
    }
    
    document.getElementById('copyLinkBtn').addEventListener('click', copyGameLink);
    
    // Setup feedback listeners
    setupFeedbackListeners();
    
    // Close modal buttons
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
        // THIS IS THE MESSAGE THAT SHOULD APPEAR
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
    const checkboxes = document.querySelectorAll('.category-checkbox:checked');
    
    // Update categories state
    gameState.categories = Array.from(checkboxes).map(cb => cb.value);
    
    console.log('Selected categories:', gameState.categories);
    console.log('Selected count:', gameState.categories.length);
    
    // Update Select All button text
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
    if (gameState.gameMode === 'images') {
        // Check if ONLY football category is selected
        if (gameState.categories.length !== 1 || gameState.categories[0] !== 'football') {
            alert('Guess the Image mode requires ONLY Football Players category!\n\nPlease:\n1. Deselect ALL other categories\n2. Select ONLY Football Players category');
            backToLobby();
            return;
        }
        
        startImageMatch();
        return;
    }
    
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
        gameState.categories = ['animals', 'food', 'movies', 'places', 'objects', 'celebrities', 'flags', 'sports', 'anime', 'football'];
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

// images game
function startImageMatch() {
    gameState.players = gameState.players.sort(() => Math.random() - 0.5);
    gameState.currentRound = 0;
    gameState.activePlayers = [...gameState.players];
    
    // Show first image pair
    showImagePair();
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
    document.getElementById('describerWord').textContent = 'Your Mission';
    document.getElementById('describerHint').innerHTML =
  'Reveal the word below<br>Describe it to your team without saying it';
    
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
    // CLEAR THE TIMER FIRST
    if (gameState.timerInterval) {
        clearInterval(gameState.timerInterval);
    }
    
    // Rest of your existing code...
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
    const modal = document.getElementById('shareModal');
    if (modal) {
        modal.style.display = 'flex';
    }
}

// ADD THIS FUNCTION BACK
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

// ================= HELP MODAL FUNCTIONS =================//
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
        content = getClassicHelp(); // fallback
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
    
    // Close when clicking X
    modal.querySelector('.close-modal').addEventListener('click', () => {
        document.body.removeChild(modal);
    });
    
    // Close when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
    
    // Prevent clicks inside modal from closing it
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

// Add to showHelp() function
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

// ================= IMAGE MATCH MODE =================
function startImageMatch() {
    console.log('Starting Image Match mode...');
    
    // Check if players are added
    if (gameState.players.length < 2) {
        alert('Need at least 2 players for Guess the Image!');
        backToLobby();
        return;
    }
    
    // Update stats
    incrementPlayCount();
    
    // Hide UI
    document.querySelector('.dashboard').style.display = 'none';
    document.querySelector('.start-section').style.display = 'none';
    document.querySelector('.social-buttons').style.display = 'none';
    
    // Set up game state for image match
    gameState.players = gameState.players.sort(() => Math.random() - 0.5);
    gameState.currentRound = 0;
    gameState.activePlayers = [...gameState.players];
    gameState.playerScores = {};
    gameState.players.forEach(player => {
        gameState.playerScores[player] = 0;
    });
    gameState.currentImageIndex = 0;
    
    // Show image match screen
    showImageMatchScreen();
}

function updatePlayerDisplay() {
    const game = gameState.imageGame;
    const currentPlayer = game.players[game.currentPlayerIndex];
    
    document.getElementById('currentImagePlayerName').textContent = currentPlayer;
    document.getElementById('imagePlayerCounter').textContent = 
        `${game.currentPlayerIndex + 1}/${game.players.length}`;
    
    // Update player select dropdown for guesses
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
    
    // Update turn instruction - THIS IS WHAT'S OVERRIDING YOUR HTML
    let instruction = '';
    if (game.turnPhase === 'selection') {
        instruction = 'Choose your secret image!'; // ← Change this text
    } else if (game.turnPhase === 'playing') {
        instruction = 'Ask a question or make a guess!';
    } else if (game.turnPhase === 'answering') {
        instruction = 'Answer the question!';
    }
    
    document.getElementById('turnInstruction').textContent = instruction;
}

function generateImageGrid() {
    // Filter words based on selected categories
    const filteredWords = words.filter(w => gameState.categories.includes(w.category));
    
    if (filteredWords.length === 0) {
        alert('No images available in selected categories!');
        backToLobby();
        return;
    }
    
    // Select random words for the grid (35 images or less)
    const numImages = Math.min(35, filteredWords.length);
    const shuffledWords = [...filteredWords].sort(() => Math.random() - 0.5);
    gameState.imageGame.images = shuffledWords.slice(0, numImages);
    
    // Display the grid
    const imageGrid = document.getElementById('imageGrid');
    imageGrid.innerHTML = '';
    
    gameState.imageGame.images.forEach((wordObj, index) => {
        const imageCell = document.createElement('div');
        imageCell.className = 'image-cell-simple';
        imageCell.dataset.index = index;
        imageCell.title = `Image ${index + 1}`;
        
        // CREATE IMAGE ELEMENT instead of showing URL text
        const img = document.createElement('img');
        img.src = wordObj.image; // This is the URL from words.js
        img.alt = wordObj.word;
        img.className = 'player-image';
        
        // Add number label
        const numberLabel = document.createElement('div');
        numberLabel.className = 'image-number';
        numberLabel.textContent = index + 1;
        
        imageCell.appendChild(img);
        imageCell.appendChild(numberLabel);
        imageGrid.appendChild(imageCell);
    });
}
// Add this function to handle image loading
function preloadImages(imageUrls, callback) {
    let loadedCount = 0;
    const totalImages = imageUrls.length;
    
    if (totalImages === 0) {
        callback();
        return;
    }
    
    imageUrls.forEach(url => {
        const img = new Image();
        img.onload = img.onerror = () => {
            loadedCount++;
            if (loadedCount === totalImages) {
                callback();
            }
        };
        img.src = url;
    });
}

// Update generateImageGrid to preload images
function generateImageGrid() {
    // ... [previous code] ...
    
    // Display loading message
    const imageGrid = document.getElementById('imageGrid');
    imageGrid.innerHTML = '<div class="loading-images">Loading images...</div>';
    
    // Preload images first
    const imageUrls = gameState.imageGame.images.map(img => img.image);
    
    preloadImages(imageUrls, () => {
        // Images loaded, now display them
        imageGrid.innerHTML = '';
        
        gameState.imageGame.images.forEach((wordObj, index) => {
            const imageCell = document.createElement('div');
            imageCell.className = 'image-cell-simple';
            imageCell.dataset.index = index;
            imageCell.title = `Image ${index + 1}`;
            
            const img = document.createElement('img');
            img.src = wordObj.image;
            img.alt = wordObj.word;
            img.className = 'player-image';
            
            // Add loading error handling
            img.onerror = function() {
                // If image fails to load, show emoji fallback
                this.style.display = 'none';
                const fallback = document.createElement('div');
                fallback.className = 'image-fallback';
                fallback.textContent = '⚽';
                fallback.style.cssText = 'font-size: 2rem; color: var(--text);';
                imageCell.appendChild(fallback);
            };
            
            const numberLabel = document.createElement('div');
            numberLabel.className = 'image-number';
            numberLabel.textContent = index + 1;
            
            imageCell.appendChild(img);
            imageCell.appendChild(numberLabel);
            imageGrid.appendChild(imageCell);
        });
    });
}

function showCurrentImage(index) {
    gameState.currentImageIndex = index;
    const wordObj = gameState.imageWords[index];
    const currentImageDisplay = document.getElementById('currentImageDisplay');
    
    currentImageDisplay.innerHTML = `
        <div class="current-image-content">
            <div class="current-image-emoji">${wordObj.image || '🖼️'}</div>
            <div class="current-image-label">Image ${index + 1} of ${gameState.imageWords.length}</div>
        </div>
    `;
    
    // Set hint
    document.getElementById('imageHint').textContent = `Hint: ${wordObj.hints[0]}`;
}

function startImageTimer() {
    if (gameState.timer > 0) {
        let timeLeft = gameState.timer;
        const timerDisplay = document.getElementById('imageTimerDisplay');
        
        gameState.imageTimerInterval = setInterval(() => {
            timeLeft--;
            timerDisplay.textContent = formatTime(timeLeft);
            
            if (timeLeft <= 30) {
                timerDisplay.style.color = '#ef4444';
            }
            
            if (timeLeft <= 0) {
                clearInterval(gameState.imageTimerInterval);
                timeUp();
            }
        }, 1000);
    } else {
        document.getElementById('imageTimerDisplay').textContent = '∞';
    }
}

function updateCurrentPlayer() {
    if (!gameState.currentPlayerIndex) {
        gameState.currentPlayerIndex = 0;
    }
    
    const player = gameState.activePlayers[gameState.currentPlayerIndex];
    document.getElementById('currentImagePlayer').textContent = player;
}

function attemptGuess(imageIndex) {
    if (imageIndex === gameState.currentImageIndex) {
        // Player is trying to guess the current image
        const guessModal = document.createElement('div');
        guessModal.className = 'modal';
        guessModal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h2>Make Your Guess</h2>
                    <button class="close-modal">&times;</button>
                </div>
                <div style="padding: 20px;">
                    <p>What do you think this image represents?</p>
                    <input type="text" id="guessInput" placeholder="Enter your guess..." style="width: 100%; padding: 10px; margin: 10px 0;">
                    <div style="display: flex; gap: 10px; margin-top: 20px;">
                        <button id="submitGuessBtn" class="btn btn-primary">Submit</button>
                        <button id="cancelGuessBtn" class="btn btn-secondary">Cancel</button>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(guessModal);
        guessModal.style.display = 'flex';
        
        guessModal.querySelector('.close-modal').addEventListener('click', () => {
            document.body.removeChild(guessModal);
        });
        
        document.getElementById('cancelGuessBtn').addEventListener('click', () => {
            document.body.removeChild(guessModal);
        });
        
        document.getElementById('submitGuessBtn').addEventListener('click', () => {
            const guess = document.getElementById('guessInput').value.trim().toUpperCase();
            const correctWord = gameState.imageWords[imageIndex].word.toUpperCase();
            
            if (guess === correctWord) {
                alert('Correct!');
                revealImage(imageIndex);
                gameState.playerScores[gameState.activePlayers[gameState.currentPlayerIndex]]++;
                document.body.removeChild(guessModal);
            } else {
                alert('Wrong guess! Try again.');
            }
        });
    } else {
        alert("You can only guess the current highlighted image!");
    }
}

function revealImage(index) {
    gameState.revealedImages[index] = true;
    
    // Update the specific image cell
    const imageCell = document.querySelector(`.image-cell[data-index="${index}"]`);
    const wordObj = gameState.imageWords[index];
    
    imageCell.innerHTML = `
        <div class="image-revealed">
            <div class="image-emoji">${wordObj.image || '🖼️'}</div>
            <div class="image-word">${wordObj.word}</div>
        </div>
    `;
    
    // Check if all images are revealed
    if (gameState.revealedImages.every(revealed => revealed)) {
        setTimeout(showImageMatchResults, 1000);
    } else {
        // Find next unrevealed image
        const nextIndex = gameState.revealedImages.findIndex(revealed => !revealed);
        if (nextIndex !== -1) {
            showCurrentImage(nextIndex);
        }
    }
}

function correctGuess() {
    const player = gameState.activePlayers[gameState.currentPlayerIndex];
    gameState.playerScores[player]++;
    revealImage(gameState.currentImageIndex);
}

function nextPlayerImage() {
    gameState.currentPlayerIndex = (gameState.currentPlayerIndex + 1) % gameState.activePlayers.length;
    updateCurrentPlayer();
}

function skipImage() {
    // Find next unrevealed image
    const currentIndex = gameState.currentImageIndex;
    let nextIndex = (currentIndex + 1) % gameState.imageWords.length;
    
    // Look for next unrevealed image
    while (nextIndex !== currentIndex && gameState.revealedImages[nextIndex]) {
        nextIndex = (nextIndex + 1) % gameState.imageWords.length;
    }
    
    showCurrentImage(nextIndex);
}

function shuffleImages() {
    clearInterval(gameState.imageTimerInterval);
    generateImageGrid();
    startImageTimer();
}

function revealImageWord() {
    const wordObj = gameState.imageWords[gameState.currentImageIndex];
    alert(`The correct answer is: ${wordObj.word}\n\n${wordObj.wordAr}`);
}

function timeUp() {
    alert('Time\'s up!');
    // Auto-reveal current image
    revealImage(gameState.currentImageIndex);
}

function showImageMatchResults() {
    clearInterval(gameState.imageTimerInterval);
    
    const resultsScreen = document.createElement('div');
    resultsScreen.className = 'game-screen';
    resultsScreen.id = 'imageResultsScreen';
    resultsScreen.innerHTML = `
        <div class="game-container">
            <div class="results-header">
                <div class="results-title">Game Results</div>
            </div>
            
            <div class="score-board">
                <h3>Scores</h3>
                <div id="scoreList" style="margin: 20px 0;">
                    <!-- Scores will be inserted here -->
                </div>
            </div>
            
            <div class="results-buttons">
                <button id="playAgainImageBtn" class="btn btn-primary">
                    <i class="fas fa-redo"></i> Play Again
                </button>
                <button id="backToLobbyImageBtn" class="btn btn-secondary">
                    <i class="fas fa-home"></i> Back to Menu
                </button>
            </div>
        </div>
    `;
    
    // Hide other screens
    document.querySelectorAll('.game-screen').forEach(screen => {
        screen.style.display = 'none';
    });
    
    // Add to body and show
    document.body.appendChild(resultsScreen);
    resultsScreen.style.display = 'block';
    
    // Display scores
    const scoreList = document.getElementById('scoreList');
    const sortedPlayers = Object.entries(gameState.playerScores)
        .sort((a, b) => b[1] - a[1]);
    
    scoreList.innerHTML = sortedPlayers.map(([player, score], index) => `
        <div class="score-item" style="display: flex; justify-content: space-between; padding: 10px; background: ${index === 0 ? 'rgba(245, 158, 11, 0.1)' : 'rgba(255,255,255,0.05)'}; border-radius: 8px; margin: 5px 0;">
            <span>${index + 1}. ${player}</span>
            <span style="font-weight: bold; color: var(--accent);">${score} points</span>
        </div>
    `).join('');
    
    // Add event listeners
    document.getElementById('playAgainImageBtn').addEventListener('click', () => {
        document.body.removeChild(resultsScreen);
        startImageMatch();
    });
    
    document.getElementById('backToLobbyImageBtn').addEventListener('click', () => {
        document.body.removeChild(resultsScreen);
        backToLobby();
    });
}

// Add this to the startGame function to handle image mode
function startGame() {
    if (gameState.gameMode === 'images') {
        startImageMatch();
        return;
    }
    
    // ... rest of your existing startGame code ...
}
// ================= IMAGE MATCH MODE - Social Deduction =================
function startImageMatch() {
    console.log('Starting Image Match (Who/What Am I?) mode...');
    
    // Check if players are added
    if (gameState.players.length < 2) {
        alert('Need at least 2 players for Guess the Image!');
        backToLobby();
        return;
    }
    
    // Update stats
    incrementPlayCount();
    
    // Hide UI
    document.querySelector('.dashboard').style.display = 'none';
    document.querySelector('.start-section').style.display = 'none';
    document.querySelector('.social-buttons').style.display = 'none';
    
    // Set up game state
    gameState.imageGame = {
        players: [...gameState.players],
        currentPlayerIndex: 0,
        playerSecrets: {}, // Stores each player's chosen image index
        revealedPlayers: [], // Players who have been guessed correctly
        turnPhase: 'selection', // 'selection', 'playing', 'ended'
        currentQuestion: null,
        timer: gameState.timer
    };
    
    // Show image match screen
    showImageMatchScreen();
}

function showImageMatchScreen() {
    // Show the screen
    document.querySelectorAll('.game-screen').forEach(screen => {
        screen.style.display = 'none';
    });
    
    document.getElementById('imageMatchScreen').style.display = 'block';
    
    // Initialize screen
    generateImageGrid();
    updatePlayerDisplay();
    
    // Show selection phase
    document.getElementById('secretSelection').style.display = 'block';
    document.getElementById('gamePhase').style.display = 'none';
    
    // Set up event listeners if not already done
    setupImageGameListeners();
    
    // Start timer if enabled
    if (gameState.timer > 0) {
        startImageGameTimer();
    } else {
        document.getElementById('imageTimerDisplay').textContent = '∞';
    }
}

function setupImageGameListeners() {
    // Confirm secret button
    document.getElementById('confirmSecretBtn').addEventListener('click', confirmSecret);
    
    // Phase buttons
    document.getElementById('askQuestionBtn').addEventListener('click', showQuestionInterface);
    document.getElementById('makeGuessBtn').addEventListener('click', showGuessInterface);
    document.getElementById('endTurnBtn').addEventListener('click', endTurn);
    
    // Question interface
    document.getElementById('submitQuestionBtn').addEventListener('click', submitQuestion);
    
    // Guess interface
    document.getElementById('submitGuessBtn').addEventListener('click', submitGuess);
    
    // Question modal buttons
    document.querySelectorAll('.answer-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            answerQuestion(this.dataset.answer);
        });
    });
    
    document.getElementById('skipAnswerBtn').addEventListener('click', skipAnswer);
    
    // Guess result modal
    document.getElementById('nextTurnBtn').addEventListener('click', continueAfterGuess);
}

function generateImageGrid() {
    const imageGrid = document.getElementById('imageGrid');
    
    // Clear loading message
    imageGrid.innerHTML = '<div class="loading-images">Loading player images...</div>';
    
    // Use football players (this mode only works with football category)
    const playersToShow = [...FOOTBALL_PLAYERS]
        .sort(() => Math.random() - 0.5)
        .slice(0, 21); // 3×7 = 21 images
    
    // Preload images first
    const imageUrls = playersToShow.map(p => p.image);
    
    preloadImages(imageUrls, () => {
        // Images loaded, display them
        imageGrid.innerHTML = '';
        
        playersToShow.forEach((player, index) => {
            const imageCell = document.createElement('div');
            imageCell.className = 'image-cell-simple';
            imageCell.dataset.index = index;
            imageCell.title = player.name;
            
            // Create image element
            const img = document.createElement('img');
            img.src = player.image;
            img.alt = player.name;
            img.className = 'player-image';
            img.loading = 'lazy'; // For better performance
            
            // Add error handling
            img.onerror = function() {
                console.error('Failed to load image:', player.image);
                this.style.display = 'none';
                
                // Create fallback with player name
                const fallback = document.createElement('div');
                fallback.className = 'player-fallback';
                fallback.innerHTML = `
                    <div>⚽</div>
                    <div style="font-size: 0.7rem; margin-top: 5px;">${player.name.split(' ')[0]}</div>
                `;
                imageCell.appendChild(fallback);
            };
            
            // Add number label
            const numberLabel = document.createElement('div');
            numberLabel.className = 'image-number';
            numberLabel.textContent = index + 1;
            
            // Add player name label
            const nameLabel = document.createElement('div');
            nameLabel.className = 'player-name-label';
            nameLabel.textContent = player.name;
            
            // Append everything in correct order
            imageCell.appendChild(img);
            imageCell.appendChild(numberLabel);
            imageCell.appendChild(nameLabel);
            imageGrid.appendChild(imageCell);
        });
    });
}

function updatePlayerDisplay() {
    const game = gameState.imageGame;
    const currentPlayer = game.players[game.currentPlayerIndex];
    
    document.getElementById('currentImagePlayerName').textContent = currentPlayer;
    document.getElementById('imagePlayerCounter').textContent = 
        `${game.currentPlayerIndex + 1}/${game.players.length}`;
    
    // Update player select dropdown for guesses
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
    
    // Update turn instruction - CHANGE THIS LINE
    let instruction = '';
    if (game.turnPhase === 'selection') {
        instruction = "It's your turn!"; // ← Changed to "It's your turn!"
    } else if (game.turnPhase === 'playing') {
        instruction = 'Ask a question or make a guess!';
    } else if (game.turnPhase === 'answering') {
        instruction = 'Answer the question!';
    }
    
    document.getElementById('turnInstruction').textContent = instruction;
}

function confirmSecret() {
    const currentPlayer = gameState.imageGame.players[gameState.imageGame.currentPlayerIndex];
    
    // In a real game, each player would secretly choose an image
    // For this demo, we'll assign a random image to each player
    const randomIndex = Math.floor(Math.random() * gameState.imageGame.images.length);
    gameState.imageGame.playerSecrets[currentPlayer] = randomIndex;
    
    // Move to next player for selection
    gameState.imageGame.currentPlayerIndex++;
    
    if (gameState.imageGame.currentPlayerIndex < gameState.imageGame.players.length) {
        // Still players selecting
        updatePlayerDisplay();
        alert(`${currentPlayer} has chosen their secret! Pass to next player.`);
    } else {
        // All players have selected, start game
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
    
    // Store the question
    gameState.imageGame.currentQuestion = {
        text: question,
        askingPlayer: gameState.imageGame.players[gameState.imageGame.currentPlayerIndex]
    };
    
    // Hide question interface
    document.getElementById('questionInterface').style.display = 'none';
    document.getElementById('questionInput').value = '';
    
    // Show question to all players (in real game, this would be shown to everyone)
    alert(`Question for the group: "${question}"`);
    
    // For demo, we'll ask the next player to answer
    const nextPlayerIndex = (gameState.imageGame.currentPlayerIndex + 1) % gameState.imageGame.players.length;
    const answeringPlayer = gameState.imageGame.players[nextPlayerIndex];
    
    showQuestionModal(question, answeringPlayer);
}

function showQuestionModal(question, targetPlayer) {
    gameState.imageGame.turnPhase = 'answering';
    
    document.getElementById('questionText').textContent = question;
    document.getElementById('questionTarget').textContent = `Asking: ${targetPlayer}`;
    
    // In real game, this modal would appear on target player's device
    // For this demo, we show it to everyone
    document.getElementById('questionModal').style.display = 'flex';
    
    // Set up answer handlers
    gameState.imageGame.currentQuestion.targetPlayer = targetPlayer;
}

function answerQuestion(answer) {
    const question = gameState.imageGame.currentQuestion;
    const targetPlayer = question.targetPlayer;
    
    // Record the answer (in real game, this would be broadcast to all players)
    alert(`${targetPlayer} answers: ${answer.toUpperCase()}`);
    
    // Hide modal
    document.getElementById('questionModal').style.display = 'none';
    
    // Return to playing phase
    gameState.imageGame.turnPhase = 'playing';
    
    // End turn after asking question
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
    
    // In real game, the guessing player would point to an image on their screen
    // For this demo, we'll prompt for image number
    const imageNumber = prompt(`What image number do you think ${targetPlayer} chose? (1-${gameState.imageGame.images.length})`);
    
    if (!imageNumber || isNaN(imageNumber)) {
        alert('Please enter a valid image number!');
        return;
    }
    
    const guessedIndex = parseInt(imageNumber) - 1;
    
    if (guessedIndex < 0 || guessedIndex >= gameState.imageGame.images.length) {
        alert(`Please enter a number between 1 and ${gameState.imageGame.images.length}!`);
        return;
    }
    
    // Check if guess is correct
    const actualIndex = gameState.imageGame.playerSecrets[targetPlayer];
    const isCorrect = (guessedIndex === actualIndex);
    
    // Show result
    showGuessResult(targetPlayer, isCorrect, guessedIndex, actualIndex);
}

function showGuessResult(targetPlayer, isCorrect, guessedIndex, actualIndex) {
    const guesser = gameState.imageGame.players[gameState.imageGame.currentPlayerIndex];
    
    if (isCorrect) {
        document.getElementById('guessResultTitle').textContent = 'Correct Guess! 🎉';
        document.getElementById('guessResultText').innerHTML = `
            <p><strong>${guesser}</strong> correctly guessed that <strong>${targetPlayer}</strong> chose:</p>
            <div style="font-size: 2rem; margin: 15px 0;">${gameState.imageGame.images[actualIndex].image}</div>
            <p><strong>${gameState.imageGame.images[actualIndex].word}</strong></p>
            <p style="color: var(--text-secondary); margin-top: 10px;">${targetPlayer} is now revealed!</p>
        `;
        
        // Mark player as revealed
        gameState.imageGame.revealedPlayers.push(targetPlayer);
        
        // Check if game should end
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
    // Move to next player who hasn't been revealed
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
    clearInterval(gameState.imageGame.timerInterval);
    
    // Show results
    alert('Game Over! Here are the results:\n\n' + 
        gameState.imageGame.players.map(player => {
            const isRevealed = gameState.imageGame.revealedPlayers.includes(player);
            return `${player}: ${isRevealed ? 'REVEALED' : 'STILL HIDDEN'}`;
        }).join('\n'));
    
    // Ask to play again or go to lobby
    if (confirm('Play another round?')) {
        restartImageGame();
    } else {
        backToLobby();
    }
}

function restartImageGame() {
    clearInterval(gameState.imageGame.timerInterval);
    startImageMatch();
}

// Add this to global functions
window.restartImageGame = restartImageGame;