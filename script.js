// ================= SIMPLE GAME STATE =================
let gameState = {
    players: [],
    gameMode: 'images',
    timer: 120,
    categories: ['animals', 'food', 'movies', 'places', 'objects', 'celebrities', 'flags', 'sports', 'anime', 'football'],

    // Current game
    currentPlayer: 0,
    imposter: -1,
    word: '',
    hint: '',
    wordAr: '',
    hintAr: '',
    
    // Teams for describe mode
    redTeam: [],
    blueTeam: [],
    describerTeam: '',
    
    // Stats
    gamesPlayed: 0,
    
    // Image game specific
    imageGame: null,
    
    // Rumble game specific
    rumbleGame: null,
    
    // Saved teams
    savedTeams: [],
    
    // Timer intervals
    timerInterval: null,
    rollerInterval: null
};

// Player colors for image grid
const PLAYER_COLORS = [
    '#FF6B6B', '#4ECDC4', '#FFD166', '#06D6A0', '#118AB2',
    '#EF476F', '#7B68EE', '#FF9E6D', '#9D4EDD', '#FFAFCC',
    '#A2D2FF', '#CDB4DB', '#FFC8DD', '#BDE0FE', '#FF9B85',
    '#9BF6FF', '#CAFFBF', '#FDFFB6', '#BDB2FF', '#FFC6FF'
];

// Grid background colors that rotate with players
const GRID_BACKGROUND_COLORS = [
    'rgba(255, 107, 107, 0.1)', 'rgba(78, 205, 196, 0.1)', 'rgba(255, 209, 102, 0.1)',
    'rgba(6, 214, 160, 0.1)', 'rgba(17, 138, 178, 0.1)', 'rgba(239, 71, 111, 0.1)',
    'rgba(123, 104, 238, 0.1)', 'rgba(255, 158, 109, 0.1)', 'rgba(157, 78, 221, 0.1)',
    'rgba(255, 175, 204, 0.1)', 'rgba(162, 210, 255, 0.1)', 'rgba(205, 180, 219, 0.1)',
    'rgba(255, 200, 221, 0.1)', 'rgba(189, 224, 254, 0.1)', 'rgba(255, 155, 133, 0.1)',
    'rgba(155, 246, 255, 0.1)', 'rgba(202, 255, 191, 0.1)', 'rgba(253, 255, 182, 0.1)',
    'rgba(189, 178, 255, 0.1)', 'rgba(255, 198, 255, 0.1)'
];

// ================= FOOTBALL PLAYERS IMAGES =================
const FOOTBALL_PLAYERS = [
    { name: "Karim Benzema", image: "images/karim-benzema.jpeg" },
    { name: "Mohamed Salah", image: "images/mohamed-salah.jpeg" },
    { name: "Kylian Mbappé", image: "images/kylian-mbappe.jpeg" },
    { name: "Robert Lewandowski", image: "images/robert-lewandowski.jpeg" },
    { name: "Kevin De Bruyne", image: "images/kevin-de-bruyne.jpeg" },
    { name: "Erling Haaland", image: "images/erling-haaland.jpeg" },
    { name: "Vinícius Júnior", image: "images/vinicius-junior.jpeg" },
    { name: "Harry Kane", image: "images/harry-kane.jpeg" },
    { name: "Manuel Neuer", image: "images/manuel-neuer.jpeg" },
    { name: "Luka Modrić", image: "images/luka-modric.jpeg" },
    { name: "Thibaut Courtois", image: "images/thibaut-courtois.jpeg" },
    { name: "Virgil van Dijk", image: "images/virgil-van-dijk.jpeg" },
    { name: "Joshua Kimmich", image: "images/joshua-kimmich.jpeg" },
    { name: "Sadio Mané", image: "images/sadio-mane.jpeg" },
    { name: "Ederson", image: "images/ederson.jpeg" },
    { name: "Toni Kroos", image: "images/toni-kroos.jpeg" },
    { name: "Casemiro", image: "images/casemiro.jpeg" },
    { name: "Raheem Sterling", image: "images/raheem-sterling.jpeg" },
    { name: "Jan Oblak", image: "images/jan-oblak.jpeg" },
    { name: "Marquinhos", image: "images/marquinhos.jpeg" },
    { name: "Lionel Messi", image: "images/lionel-messi.jpeg" },
    { name: "Cristiano Ronaldo", image: "images/cristiano-ronaldo.jpeg" },
    { name: "Neymar Jr", image: "images/neymar-jr.jpeg" },
    { name: "Andrea Pirlo", image: "images/andrea-pirlo.jpeg" },
    { name: "Zinedine Zidane", image: "images/zinedine-zidane.jpeg" },
    { name: "Ronaldinho", image: "images/ronaldinho.jpeg" },
    { name: "Luis Suarez", image: "images/luis-suarez.jpeg" },
    { name: "Achraf Hakimi", image: "images/achraf-hakimi.jpeg" },
    { name: "Yassine Bounou", image: "images/yassine-bounou.jpeg" },
    { name: "Sofyan Amrabat", image: "images/sofyan-amrabat.jpeg" },
    { name: "Ez Abde", image: "images/ez-abde.jpeg" },
    { name: "Riyad Mahrez", image: "images/riyad-mahrez.jpeg" },
    { name: "Islam Slimani", image: "images/islam-slimani.jpeg" },
    { name: "Yacine Brahimi", image: "images/yacine-brahimi.jpeg" },
    { name: "Paulo Dybala", image: "images/paulo-dybala.jpeg" },
    { name: "Sergio Busquets", image: "images/sergio-busquets.jpeg" },
    { name: "Jordi Alba", image: "images/jordi-alba.jpeg" },
    { name: "Gerard Pique", image: "images/gerard-pique.jpeg" },
    { name: "Andres Iniesta", image: "images/andres-iniesta.jpeg" },
    { name: "Xavi Hernandez", image: "images/xavi-hernandez.jpeg" },
    { name: "Iker Casillas", image: "images/iker-casillas.jpeg" },
    { name: "Sergio Ramos", image: "images/sergio-ramos.jpeg" },
    { name: "Karim Adeyemi", image: "images/karim-adeyemi.jpeg" },
    { name: "Jamal Musiala", image: "images/jamal-musiala.jpeg" },
    { name: "Phil Foden", image: "images/phil-foden.jpeg" },
    { name: "Bukayo Saka", image: "images/bukayo-saka.jpeg" },
    { name: "Martin Odegaard", image: "images/martin-odegaard.jpeg" },
    { name: "Declan Rice", image: "images/declan-rice.jpeg" },
    { name: "Alexander Isak", image: "images/alexander-isak.jpeg" },
    { name: "Sandro Tonali", image: "images/sandro-tonali.jpeg" },
    { name: "Julian Alvarez", image: "images/julian-alvarez.jpeg" },
    { name: "Rodri", image: "images/rodri.jpeg" },
    { name: "Jack Grealish", image: "images/jack-grealish.jpeg" },
    { name: "Bernardo Silva", image: "images/bernardo-silva.jpeg" },
    { name: "Ruben Dias", image: "images/ruben-dias.jpeg" },
    { name: "João Cancelo", image: "images/joao-cancelo.jpeg" },
    { name: "Robert Sanchez", image: "images/robert-sanchez.jpeg" },
    { name: "Enzo Fernandez", image: "images/enzo-fernandez.jpeg" },
    { name: "Nicolas Jackson", image: "images/nicolas-jackson.jpeg" },
    { name: "Mychajlo Mudryk", image: "images/mychajlo-mudryk.jpeg" },
    { name: "Christopher Nkunku", image: "images/christopher-nkunku.jpeg" },
    { name: "Alexandre Lacazette", image: "images/alexandre-lacazette.jpeg" },
    { name: "Antoine Griezmann", image: "images/antoine-griezmann.jpeg" },
    { name: "Jan Vertonghen", image: "images/jan-vertonghen.jpeg" },
    { name: "Toby Alderweireld", image: "images/toby-alderweireld.jpeg" },
    { name: "Hugo Lloris", image: "images/hugo-lloris.jpeg" },
    { name: "Son Heung Min", image: "images/son-heung-min.jpeg" },
    { name: "Alvaro Morata", image: "images/alvaro-morata.jpeg" },
    { name: "Angel Di Maria", image: "images/angel-di-maria.jpeg" },
    { name: "David Beckham", image: "images/david-beckham.jpeg" },
    { name: "Wayne Rooney", image: "images/wayne-rooney.jpeg" },
    { name: "Paul Pogba", image: "images/paul-pogba.jpeg" },
    { name: "Eden Hazard", image: "images/eden-hazard.jpeg" },
    { name: "Frank Lampard", image: "images/frank-lampard.jpeg" },
    { name: "John Terry", image: "images/john-terry.jpeg" },
    { name: "Didier Drogba", image: "images/didier-drogba.jpeg" },
    { name: "Petr Cech", image: "images/petr-cech.jpeg" },
    { name: "Thierry Henry", image: "images/thierry-henry.jpeg" },
    { name: "Dennis Bergkamp", image: "images/dennis-bergkamp.jpeg" },
    { name: "Patrick Vieira", image: "images/patrick-vieira.jpeg" },
    { name: "Roberto Carlos", image: "images/roberto-carlos.jpeg" },
    { name: "Ronaldo Nazario", image: "images/ronaldo-nazario.jpeg" },
    { name: "Kaka", image: "images/kaka.jpeg" },
    { name: "Steven Gerrard", image: "images/steven-gerrard.jpeg" },
    { name: "Fernando Torres", image: "images/fernando-torres.jpeg" },
    { name: "Jamie Carragher", image: "images/jamie-carragher.jpeg" },
    { name: "Ousmane Dembele", image: "images/ousmane-dembele.jpeg" },
    { name: "Frenkie De Jong", image: "images/frenkie-de-jong.jpeg" },
    { name: "Pedri", image: "images/pedri.jpeg" },
    { name: "Gavi", image: "images/gavi.jpeg" },
    { name: "Ronald Araujo", image: "images/ronald-araujo.jpeg" },
    { name: "Alejandro Balde", image: "images/alejandro-balde.jpeg" },
    { name: "Ilkay Gundogan", image: "images/ilkay-gundogan.jpeg" },
    { name: "Joao Felix", image: "images/joao-felix.jpeg" },
    { name: "Jules Kounde", image: "images/jules-kounde.jpeg" },
    { name: "Marc Andre Ter Stegen", image: "images/marc-andre-ter-stegen.jpeg" },
    { name: "Federico Valverde", image: "images/federico-valverde.jpeg" },
    { name: "Aurelien Tchouameni", image: "images/aurelien-tchouameni.jpeg" },
    { name: "Eduardo Camavinga", image: "images/eduardo-camavinga.jpeg" },
    { name: "David Alaba", image: "images/david-alaba.jpeg" },
    { name: "Jude Bellingham", image: "images/jude-bellingham.jpeg" },
    { name: "Arda Guler", image: "images/arda-guler.jpeg" },
    { name: "Bryan Zaragoza", image: "images/bryan-zaragoza.jpeg" },
    { name: "Leroy Sane", image: "images/leroy-sane.jpeg" },
    { name: "Serge Gnabry", image: "images/serge-gnabry.jpeg" },
    { name: "Alphonso Davies", image: "images/alphonso-davies.jpeg" },
    { name: "Bilal El Khannus", image: "images/bilal-el-khannus.jpeg" },
    { name: "Anass Zaroury", image: "images/anass-zaroury.jpeg" },
    { name: "Zakaria Aboukhla", image: "images/zakaria-aboukhla.jpeg" }
];

// ================= JSONBin CONFIG =================
const JSONBIN_CONFIG = {
    API_KEY: '$2a$10$gFVqUzzSAOQUgLJc42CpWeGT33e40Nwki66XGI6x/R.uCj6m/8XHe',
    BASE_URL: 'https://api.jsonbin.io/v3/b',
    SHARED_BIN_ID: '696a646ad0ea881f40704b06'
};

// ================= INITIALIZATION =================
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Initializing Imposter Game...');
    
    loadPlayCount().then(() => {
        console.log('✅ Play count loaded:', gameState.gamesPlayed);
        initializeGame();
    }).catch(error => {
        console.error('❌ Initialization error:', error);
        initializeGame();
    });
});

function initializeGame() {
    loadSettings();
    loadSavedTeams();
    setupEventListeners();
    updateUI();
    updateCategoriesDisplay();
    updatePlayersList();
    
    setTimeout(syncWithJSONBin, 3000);
}

// ================= SETTINGS MANAGEMENT =================
function loadSettings() {
    const saved = localStorage.getItem('imposterSettings');
    
    const ALL_CATEGORIES = [
        'animals', 'food', 'movies', 'places', 
        'objects', 'celebrities', 'flags', 
        'sports', 'anime', 'football'
    ];
    
    if (saved) {
        const settings = JSON.parse(saved);
        
        gameState.timer = typeof settings.timer === 'number' ? settings.timer : 120;
        gameState.categories = settings.categories || [];
        gameState.gameMode = settings.gameMode || 'classic';
        
        // Upgrade old categories
        ALL_CATEGORIES.forEach(category => {
            if (!gameState.categories.includes(category)) {
                gameState.categories.push(category);
            }
        });
        
        saveSettings();
        
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
    } else {
        gameState.categories = ALL_CATEGORIES;
        gameState.gameMode = 'classic';
        
        saveSettings();
        
        const checkboxes = document.querySelectorAll('.category-checkbox');
        checkboxes.forEach(cb => {
            cb.checked = true;
        });
        
        if (document.getElementById('selectAllBtn')) {
            document.getElementById('selectAllBtn').textContent = 'Deselect All';
        }
    }
    
    // Apply the loaded game mode
    selectGameMode(gameState.gameMode);
    
    updateCategoriesDisplay();
}

function saveSettings() {
    const settings = {
        timer: gameState.timer,
        categories: gameState.categories,
        gameMode: gameState.gameMode,
        lastPlayed: new Date().toISOString()
    };
    localStorage.setItem('imposterSettings', JSON.stringify(settings));
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
    
    if (!list) return;
    
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

// ================= TEAM MANAGEMENT =================
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

function loadTeam(index) {
    const team = gameState.savedTeams[index];
    gameState.players = [...team.players];
    updatePlayersList();
    updateUI();
}

function deleteTeam(index) {
    if (confirm('Delete this saved team?')) {
        gameState.savedTeams.splice(index, 1);
        localStorage.setItem('savedTeams', JSON.stringify(gameState.savedTeams));
        updateSavedTeamsList();
    }
}

// ================= GAME SETTINGS =================
function selectGameMode(mode) {
    console.log('Changing mode to:', mode);
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
        case 'rumble':
            modeText = 'Rumble';
            break;
        default:
            modeText = 'Classic';
    }
    
    const gameModeTextElement = document.getElementById('gameModeText');
    if (gameModeTextElement) {
        gameModeTextElement.textContent = modeText;
    }
    
    const timerDisplay = document.getElementById('timerDisplay');
    const timerTextElement = document.getElementById('timerText');
    
    if (mode === 'images' || mode === 'rumble') {
        if (timerDisplay) {
            timerDisplay.innerHTML = '<span style="color: var(--accent); font-size: 0.9rem;">⏱️ No timer - Special mode!</span>';
        }
        if (timerTextElement) {
            timerTextElement.textContent = 'No timer';
        }
    } else {
        updateTimerDisplay();
    }
    
    updateUI();
    saveSettings();
}

function selectTimer(seconds) {
    gameState.timer = seconds;
    
    document.querySelectorAll('.timer-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    const selectedBtn = document.querySelector(`.timer-btn[data-time="${seconds}"]`);
    if (selectedBtn) {
        selectedBtn.classList.add('active');
    }
    
    const timerDisplay = document.getElementById('timerDisplay');
    const timerTextElement = document.getElementById('timerText');
    
    if (gameState.gameMode === 'images' || gameState.gameMode === 'rumble') {
        if (timerDisplay) {
            timerDisplay.innerHTML = '<span style="color: var(--accent); font-size: 0.9rem;">⏱️ No timer - Special mode!</span>';
        }
        if (timerTextElement) {
            timerTextElement.textContent = 'No timer';
        }
    } else {
        updateTimerDisplay();
    }
    
    saveSettings();
}

function updateTimerDisplay() {
    const timerText = gameState.timer === 0 ? 'No timer' : formatTime(gameState.timer);
    
    const timerTextElement = document.getElementById('timerText');
    if (timerTextElement) {
        timerTextElement.textContent = timerText;
    }
    
    const timerDisplay = document.getElementById('timerDisplay');
    if (timerDisplay) {
        if (gameState.gameMode === 'images' || gameState.gameMode === 'rumble') {
            return;
        }
        
        const currentTimerText = document.getElementById('currentTimerText');
        if (currentTimerText) {
            currentTimerText.textContent = timerText;
        } else {
            timerDisplay.innerHTML = timerText;
        }
    }
}

function updateCategories() {
    const checkboxes = document.querySelectorAll('.category-checkbox:checked');
    gameState.categories = Array.from(checkboxes).map(cb => cb.value);
    
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
    
    const canStart = gameState.players.length >= 1;
    document.getElementById('startGameBtn').disabled = !canStart;
    
    if (!canStart) {
        document.getElementById('startGameBtn').innerHTML = '<i class="fas fa-exclamation-circle"></i> Need a team';
    } else {
        document.getElementById('startGameBtn').innerHTML = '<i class="fas fa-play"></i> START GAME';
    }
    
    updatePlayCountDisplay();
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
            selectGameMode(this.dataset.mode);
        });
    });
    
    document.querySelectorAll('.mode-help-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            showHelp(this.dataset.help);
        });
    });
    
    document.querySelectorAll('.timer-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            selectTimer(parseInt(this.dataset.time));
            
            const buttons = document.getElementById('timerButtons');
            const expandIcon = document.getElementById('timerExpand');
            buttons.style.display = 'none';
            expandIcon.classList.remove('expanded');
        });
    });
    
    const checkboxes = document.querySelectorAll('.category-checkbox');
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
    
    const timerGroup = document.querySelector('.setting-group:nth-child(3)');
    const categoriesGroup = document.querySelector('.setting-group:nth-child(2)');
    
    if (timerGroup) {
        timerGroup.addEventListener('click', function(e) {
            if (e.target.classList.contains('timer-btn') || 
                e.target.closest('.timer-btn')) {
                return;
            }
            
            const buttons = document.getElementById('timerButtons');
            const expandIcon = document.getElementById('timerExpand');
            const isHidden = buttons.style.display === 'none' || buttons.style.display === '';
            buttons.style.display = isHidden ? 'grid' : 'none';
            expandIcon.classList.toggle('expanded', isHidden);
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
            
            const grid = document.getElementById('categoriesGrid');
            const expandIcon = document.getElementById('categoriesExpand');
            const isHidden = grid.style.display === 'none' || grid.style.display === '';
            grid.style.display = isHidden ? 'grid' : 'none';
            expandIcon.classList.toggle('expanded', isHidden);
        });
    }
    
    document.getElementById('startGameBtn').addEventListener('click', startGame);
    document.getElementById('roleCard').addEventListener('click', revealRole);
    document.getElementById('nextPlayerBtn').addEventListener('click', nextPlayer);
    document.getElementById('stopRollerBtn').addEventListener('click', stopNameRoller);
    document.getElementById('revealImposterBtn').addEventListener('click', revealImposterEarly);
    document.getElementById('endDiscussionBtn').addEventListener('click', endDiscussion);
    document.getElementById('secretCard').addEventListener('click', revealImposter);
    document.getElementById('playAgainBtn').addEventListener('click', playAgain);
    document.getElementById('newGameBtn').addEventListener('click', backToLobby);
    document.getElementById('shareBtn').addEventListener('click', showShareModal);
    document.getElementById('feedbackBtn').addEventListener('click', showFeedbackModal);
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
}

// ================= GAME START =================
function startGame() {
    if (gameState.gameMode === 'images') {
        if (gameState.players.length < 2) {
            alert('Guess the Image mode needs at least 2 players!');
            return;
        }
        
        if (gameState.categories.length === 0) {
            alert('Please select at least one category for Guess the Image mode!');
            return;
        }
        
        startImageMatch();
        return;
    } else if (gameState.gameMode === 'rumble') {
        startRumbleGame();
        return;
    } else if (gameState.gameMode === 'classic' || gameState.gameMode === 'describe') {
        if (gameState.players.length < 3) {
            alert(`${gameState.gameMode === 'classic' ? 'Classic' : 'Describe It'} mode needs at least 3 players!`);
            return;
        }
    }
    
    const filteredWords = words.filter(w => gameState.categories.includes(w.category));

    if (filteredWords.length === 0) {
        alert('No words in selected categories! Please select at least one valid category.');
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

// ================= RUMBLE GAME FUNCTIONS - FIXED =================
function startRumbleGame() {
    console.log('Starting Rumble Game...');
    
    if (gameState.players.length < 1) {
        alert('Rumble mode needs at least 1 player!');
        backToLobby();
        return;
    }
    
    if (gameState.categories.length === 0) {
        alert('Please select at least one category for Rumble mode!');
        return;
    }
    
    incrementPlayCount();
    
    document.querySelector('.dashboard').style.display = 'none';
    document.querySelector('.start-section').style.display = 'none';
    document.querySelector('.social-buttons').style.display = 'none';
    
    gameState.rumbleGame = {
        isRumbling: false,
        currentImage: null,
        imagePool: [],
        animationInterval: null,
        animationSpeed: 80,
        finalImageIndex: -1,
        isSpinning: false
    };
    
    showRumbleStartScreen();
}

function showRumbleStartScreen() {
    console.log('Showing Rumble Start Screen...');
    
    document.querySelectorAll('.game-screen').forEach(screen => {
        screen.style.display = 'none';
    });
    
    const rumbleScreen = document.getElementById('rumbleScreen');
    rumbleScreen.style.display = 'block';
    
    // Reset to start state
    gameState.rumbleGame.isRumbling = false;
    gameState.rumbleGame.isSpinning = false;
    gameState.rumbleGame.currentImage = null;
    gameState.rumbleGame.finalImageIndex = -1;
    
    // Show start area, hide game area
    document.getElementById('rumbleStartArea').style.display = 'flex';
    document.getElementById('rumbleGameArea').style.display = 'none';
    
    // Clear any previous content
    document.getElementById('spinningWheel').innerHTML = '';
    document.getElementById('rumbleFinalContainer').innerHTML = '';
    document.getElementById('rumbleNameDisplayActive').innerHTML = '';
    
    // Show placeholder
    document.getElementById('spinPlaceholder').style.display = 'flex';
    document.getElementById('spinRing').style.display = 'none';
    
    // Update start text
    const nameDisplay = document.getElementById('rumbleNameDisplay');
    if (nameDisplay) {
        nameDisplay.innerHTML = `
            <h2 style="color: var(--text); font-size: 2.5rem; margin-bottom: 10px; font-weight: 800; text-shadow: 0 2px 10px rgba(99, 102, 241, 0.5);">Click Anywhere to Spin</h2>
            <p style="color: var(--text-secondary); font-size: 1.1rem; margin-bottom: 10px;">Click to spin the wheel and see what you get!</p>
        `;
    }
    
    // Build image pool
    buildRumbleImagePool();
    
    // Add click event to start rumble
    const rumbleContent = document.getElementById('rumbleContent');
    if (rumbleContent) {
        rumbleContent.onclick = function(e) {
            if (!e.target.closest('.action-buttons') && !gameState.rumbleGame.isRumbling) {
                startRumbleSpin();
            }
        };
    }
    
    // Setup restart button
    const restartBtn = document.getElementById('rumbleRestartBtn');
    if (restartBtn) {
        restartBtn.onclick = function() {
            showRumbleStartScreen();
        };
    }
}

function buildRumbleImagePool() {
    gameState.rumbleGame.imagePool = [];
    
    gameState.categories.forEach(category => {
        if (category === 'football') {
            FOOTBALL_PLAYERS.forEach(player => {
                gameState.rumbleGame.imagePool.push({
                    type: 'football',
                    name: player.name,
                    image: player.image,
                    category: 'football',
                    displayName: player.name,
                    arabicName: ''
                });
            });
        } else {
            const categoryWords = words.filter(w => w.category === category);
            categoryWords.forEach(word => {
                if (word.image) {
                    gameState.rumbleGame.imagePool.push({
                        type: word.image.includes('images/') || word.image.includes('.jpg') || word.image.includes('.jpeg') || word.image.includes('.png') ? 'image' : 'emoji',
                        name: word.word,
                        image: word.image,
                        category: category,
                        displayName: word.word,
                        arabicName: word.wordAr || ''
                    });
                }
            });
        }
    });
    
    // Add fallback if pool is empty
    if (gameState.rumbleGame.imagePool.length === 0) {
        console.warn('No images found in selected categories, adding fallback items');
        gameState.rumbleGame.imagePool = [
            { type: 'emoji', name: 'Question', image: '❓', category: 'misc', displayName: 'Mystery Item', arabicName: '' },
            { type: 'emoji', name: 'Star', image: '⭐', category: 'misc', displayName: 'Star', arabicName: '' },
            { type: 'emoji', name: 'Heart', image: '❤️', category: 'misc', displayName: 'Heart', arabicName: '' },
            { type: 'emoji', name: 'Smile', image: '😊', category: 'misc', displayName: 'Smile', arabicName: '' },
            { type: 'emoji', name: 'Fire', image: '🔥', category: 'misc', displayName: 'Fire', arabicName: '' }
        ];
    }
    
    shuffleArray(gameState.rumbleGame.imagePool);
    console.log('Built rumble image pool with', gameState.rumbleGame.imagePool.length, 'items');
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}





function restartRumbleGame() {
    console.log('Restarting Rumble Game...');
    
    // Clear any existing intervals
    if (gameState.rumbleGame && gameState.rumbleGame.animationInterval) {
        clearInterval(gameState.rumbleGame.animationInterval);
    }
    
    showRumbleStartScreen();
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
function startDescribeGame() {
    const shuffled = [...gameState.players].sort(() => Math.random() - 0.5);
    const half = Math.ceil(shuffled.length / 2);
    gameState.redTeam = shuffled.slice(0, half);
    gameState.blueTeam = shuffled.slice(half);
    
    document.getElementById('describeGame').style.display = 'block';
    updateTeamsDisplay();
    
    startNameRoller();
}

function startNameRoller() {
    let index = 0;
    
    let eligiblePlayers = [];
    if (gameState.redTeam.length >= 2) {
        eligiblePlayers = eligiblePlayers.concat(gameState.redTeam);
    }
    if (gameState.blueTeam.length >= 2) {
        eligiblePlayers = eligiblePlayers.concat(gameState.blueTeam);
    }
    if (eligiblePlayers.length === 0) {
        eligiblePlayers = [...gameState.redTeam, ...gameState.blueTeam];
    }
    
    gameState.rollerInterval = setInterval(() => {
        document.getElementById('rollingName').textContent = eligiblePlayers[index];
        index = (index + 1) % eligiblePlayers.length;
    }, 100);
}

function stopNameRoller() {
    clearInterval(gameState.rollerInterval);
    
    let eligiblePlayers = [];
    if (gameState.redTeam.length >= 2) {
        eligiblePlayers = eligiblePlayers.concat(gameState.redTeam);
    }
    if (gameState.blueTeam.length >= 2) {
        eligiblePlayers = eligiblePlayers.concat(gameState.blueTeam);
    }
    if (eligiblePlayers.length === 0) {
        eligiblePlayers = [...gameState.redTeam, ...gameState.blueTeam];
    }
    
    const describerIndex = Math.floor(Math.random() * eligiblePlayers.length);
    const describer = eligiblePlayers[describerIndex];
    
    gameState.describerTeam = gameState.redTeam.includes(describer) ? 'Red Team' : 'Blue Team';
    
    document.getElementById('rollingName').textContent = describer;
    
    setTimeout(() => {
        document.getElementById('describeGame').style.display = 'none';
        showDescriberWord();
    }, 1500);
}

function showDescriberWord() {
    document.getElementById('describerTeam').textContent = gameState.describerTeam;
    
    const describerWordElement = document.getElementById('describerWord');
    const describerHintElement = document.getElementById('describerHint');
    const wordDisplay = document.getElementById('describerWordDisplay');
    
    describerWordElement.textContent = 'Your Mission';
    describerHintElement.textContent = 'Describe it to your team without saying the word';
    describerWordElement.style.display = 'block';
    describerHintElement.style.display = 'block';
    wordDisplay.style.display = 'none';
    
    const arabicWordElement = document.getElementById('describerWordEn');
    const englishWordElement = document.getElementById('describerWordAr');
    
    if (arabicWordElement) {
        arabicWordElement.textContent = '';
        arabicWordElement.style.display = 'none';
    }
    
    if (englishWordElement) {
        englishWordElement.textContent = '';
        englishWordElement.style.display = 'none';
    }
    
    const existingShowBtn = document.getElementById('showWordBtn');
    const existingStartBtn = document.getElementById('startDescribeBtn');
    
    if (existingShowBtn) {
        existingShowBtn.remove();
    }
    if (existingStartBtn) {
        existingStartBtn.remove();
    }
    
    const button = document.createElement('button');
    button.id = 'showWordBtn';
    button.className = 'btn btn-secondary';
    button.style.marginTop = '10px';
    button.style.marginBottom = '20px';
    button.style.width = '100%';
    button.innerHTML = '<i class="fas fa-eye"></i> Show Word';
    
    const roleCard = document.querySelector('#describeWordScreen .role-card');
    if (roleCard) {
        roleCard.parentNode.insertBefore(button, roleCard.nextSibling);
    }
    
    button.onclick = function() {
        const filteredWords = words.filter(w => gameState.categories.includes(w.category));
        if (filteredWords.length > 0) {
            const random = filteredWords[Math.floor(Math.random() * filteredWords.length)];
            gameState.word = random.word;
            gameState.wordAr = random.wordAr;
            
            const hintIndex = Math.floor(Math.random() * random.hints.length);
            gameState.hint = random.hints[hintIndex];
            gameState.hintAr = random.hintsAr[hintIndex];
            
            const arabicWordElement = document.getElementById('describerWordEn');
            const englishWordElement = document.getElementById('describerWordAr');
            
            if (arabicWordElement && gameState.wordAr) {
                arabicWordElement.textContent = gameState.wordAr;
                arabicWordElement.style.display = 'block';
                arabicWordElement.dir = 'rtl';
                arabicWordElement.style.fontSize = '2.5rem';
                arabicWordElement.style.fontWeight = 'bold';
                arabicWordElement.style.color = 'var(--accent)';
            }
            
            if (englishWordElement && gameState.word) {
                englishWordElement.textContent = gameState.word;
                englishWordElement.style.display = 'block';
                englishWordElement.style.fontSize = '1.4rem';
                englishWordElement.style.fontWeight = 'bold';
                englishWordElement.style.color = 'var(--text-secondary)';
            }
            
            describerWordElement.style.display = 'none';
            describerHintElement.style.display = 'none';
            wordDisplay.style.display = 'block';
        }
        
        this.style.display = 'none';
        
        const startBtn = document.createElement('button');
        startBtn.id = 'startDescribeBtn';
        startBtn.className = 'btn btn-primary';
        startBtn.style.marginTop = '10px';
        startBtn.style.marginBottom = '20px';
        startBtn.style.width = '100%';
        startBtn.innerHTML = '<i class="fas fa-play"></i> Start Describing';
        
        this.parentNode.insertBefore(startBtn, this.nextSibling);
        
        startBtn.onclick = function() {
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
        };
    };
    
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

// ================= DISCUSSION =================
function startDiscussion() {
    const instruction = gameState.gameMode === 'classic' ?
        `Find the imposter! You have ${formatTime(gameState.timer)} to discuss.` :
        'Teams, try to guess the word! The describer can give hints.';
    
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
        
        const imposterNameElement = document.getElementById('imposterName');
        const correctWordElement = document.getElementById('correctWord');
        const arabicWordElement = document.getElementById('arabicWord');
        
        if (imposterNameElement) {
            imposterNameElement.textContent = imposter;
        }
        if (correctWordElement) {
            correctWordElement.textContent = gameState.word;
        }
        if (arabicWordElement) {
            arabicWordElement.textContent = gameState.wordAr;
        }
    } else {
        const describerTeamElement = document.getElementById('imposterName');
        const correctWordElement = document.getElementById('correctWord');
        const arabicWordElement = document.getElementById('arabicWord');
        
        if (describerTeamElement) {
            describerTeamElement.textContent = gameState.describerTeam;
        }
        if (correctWordElement) {
            correctWordElement.textContent = gameState.word;
        }
        if (arabicWordElement) {
            arabicWordElement.textContent = gameState.wordAr;
        }
    }
    
    document.getElementById('secretCard').style.display = 'none';
    document.getElementById('revealContent').classList.add('show');
}

function playAgain() {
    if (gameState.timerInterval) {
        clearInterval(gameState.timerInterval);
    }
    
    if (gameState.rollerInterval) {
        clearInterval(gameState.rollerInterval);
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

function backToLobby() {
    clearInterval(gameState.timerInterval);
    
    if (gameState.rollerInterval) {
        clearInterval(gameState.rollerInterval);
    }
    
    if (gameState.imageGame && gameState.imageGame.timerInterval) {
        clearInterval(gameState.imageGame.timerInterval);
    }
    
    if (gameState.rumbleGame && gameState.rumbleGame.animationInterval) {
        clearInterval(gameState.rumbleGame.animationInterval);
    }
    
    document.querySelectorAll('.game-screen').forEach(screen => {
        screen.style.display = 'none';
    });
    
    document.querySelector('.dashboard').style.display = 'block';
    document.querySelector('.start-section').style.display = 'block';
    document.querySelector('.social-buttons').style.display = 'flex';
}

// ================= RESTART GAME =================
function restartGame() {
    if (gameState.gameMode === 'classic') {
        if (gameState.timerInterval) {
            clearInterval(gameState.timerInterval);
        }
        
        gameState.currentPlayer = 0;
        gameState.imposter = Math.floor(Math.random() * gameState.players.length);
        
        const filteredWords = words.filter(w => gameState.categories.includes(w.category));
        if (filteredWords.length > 0) {
            const random = filteredWords[Math.floor(Math.random() * filteredWords.length)];
            gameState.word = random.word;
            gameState.wordAr = random.wordAr;
            
            const hintIndex = Math.floor(Math.random() * random.hints.length);
            gameState.hint = random.hints[hintIndex];
            gameState.hintAr = random.hintsAr[hintIndex];
        }
        
        document.querySelectorAll('.game-screen').forEach(screen => {
            screen.style.display = 'none';
        });
        
        document.getElementById('classicGame').style.display = 'block';
        showCurrentPlayer();
        
    } else if (gameState.gameMode === 'describe') {
        if (gameState.timerInterval) {
            clearInterval(gameState.timerInterval);
        }
        if (gameState.rollerInterval) {
            clearInterval(gameState.rollerInterval);
        }
        
        document.querySelectorAll('.game-screen').forEach(screen => {
            screen.style.display = 'none';
        });
        
        startDescribeGame();
        
    } else if (gameState.gameMode === 'images') {
        restartImageGame();
    } else if (gameState.gameMode === 'rumble') {
        restartRumbleGame();
    }
}

// ================= IMAGE MATCH FUNCTIONS =================
function generateImageGrid() {
    const imageGrid = document.getElementById('imageGrid');
    imageGrid.innerHTML = '<div class="loading-images">Loading images...</div>';
    
    let imagePool = [];
    
    gameState.categories.forEach(category => {
        if (category === 'football') {
            FOOTBALL_PLAYERS.forEach(player => {
                imagePool.push({
                    type: 'football',
                    name: player.name,
                    image: player.image,
                    category: 'football',
                    displayName: player.name
                });
            });
        } else {
            const categoryWords = words.filter(w => w.category === category);
            categoryWords.forEach(word => {
                if (word.image && (word.image.includes('images/') || word.image.includes('.jpg') || word.image.includes('.jpeg') || word.image.includes('.png'))) {
                    imagePool.push({
                        type: 'image',
                        name: word.word,
                        image: word.image,
                        category: category,
                        displayName: word.word
                    });
                } else {
                    imagePool.push({
                        type: 'emoji',
                        name: word.word,
                        image: word.image || '❓',
                        category: category,
                        displayName: word.word
                    });
                }
            });
        }
    });
    
    const isMobile = window.innerWidth <= 768;
    const itemCount = isMobile ? 18 : 16;
    
    if (imagePool.length < itemCount) {
        imageGrid.innerHTML = `
            <div class="loading-images" style="color: #ef4444;">
                Not enough images in selected categories.<br>
                Please select more categories or add more images.
            </div>
        `;
        return;
    }
    
    const selectedItems = [...imagePool].sort(() => Math.random() - 0.5).slice(0, itemCount);
    
    gameState.imageGame = gameState.imageGame || {};
    gameState.imageGame.images = selectedItems;
    gameState.imageGame.selections = {};
    gameState.imageGame.guesses = {};
    gameState.imageGame.playerMarks = {};
    gameState.imageGame.playerPredictions = {};
    
    renderImageGrid(selectedItems);
}

function renderImageGrid(items) {
    const imageGrid = document.getElementById('imageGrid');
    imageGrid.innerHTML = '';
    
    const isMobile = window.innerWidth <= 768;
    const columns = isMobile ? 3 : 4;
    const rows = isMobile ? 6 : 4;
    
    imageGrid.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    imageGrid.style.gridAutoRows = 'minmax(130px, auto)';
    imageGrid.style.display = 'grid';
    imageGrid.style.gap = '10px';
    
    items.forEach((item, index) => {
        const imageCell = document.createElement('div');
        imageCell.className = 'image-cell-simple';
        imageCell.dataset.index = index;
        imageCell.dataset.category = item.category;
        
        if (gameState.imageGame && gameState.imageGame.currentPlayerIndex !== undefined) {
            const playerColor = PLAYER_COLORS[gameState.imageGame.currentPlayerIndex % PLAYER_COLORS.length];
            imageCell.style.borderColor = playerColor;
            imageCell.style.borderWidth = '3px';
            imageCell.style.boxShadow = `0 0 10px ${playerColor}40`;
        }
        
        const content = document.createElement('div');
        content.className = 'image-content';
        content.style.height = isMobile ? '65%' : '70%';
        content.style.position = 'relative';
        content.style.display = 'flex';
        content.style.alignItems = 'center';
        content.style.justifyContent = 'center';
        content.style.overflow = 'hidden';
        content.style.backgroundColor = '#1a1a2e';
        
        if (item.type === 'football' || item.type === 'image') {
            const img = document.createElement('img');
            img.src = item.image;
            img.alt = item.name;
            img.className = 'player-image';
            img.style.objectFit = 'cover';
            img.style.width = '100%';
            img.style.height = '100%';
            img.style.borderRadius = '4px';
            img.loading = 'lazy';
            img.decoding = 'async';
            
            img.onerror = function() {
                console.error('Failed to load image:', this.src);
                this.style.display = 'none';
                const fallback = document.createElement('div');
                fallback.className = 'emoji-display';
                fallback.textContent = item.type === 'football' ? '⚽' : '🖼️';
                fallback.style.fontSize = isMobile ? '2.5rem' : '3rem';
                fallback.style.padding = '10px';
                fallback.style.display = 'flex';
                fallback.style.alignItems = 'center';
                fallback.style.justifyContent = 'center';
                fallback.style.height = '100%';
                fallback.style.width = '100%';
                fallback.style.backgroundColor = '#2d3748';
                fallback.style.borderRadius = '4px';
                content.appendChild(fallback);
            };
            
            img.onload = function() {
                console.log('Image loaded successfully:', this.src);
            };
            
            content.appendChild(img);
        } else {
            const emojiDisplay = document.createElement('div');
            emojiDisplay.className = 'emoji-display';
            emojiDisplay.textContent = item.image;
            emojiDisplay.style.fontSize = isMobile ? '2.5rem' : '3rem';
            emojiDisplay.style.height = '100%';
            emojiDisplay.style.width = '100%';
            emojiDisplay.style.display = 'flex';
            emojiDisplay.style.alignItems = 'center';
            emojiDisplay.style.justifyContent = 'center';
            emojiDisplay.style.padding = '10px';
            emojiDisplay.style.backgroundColor = '#2d3748';
            emojiDisplay.style.borderRadius = '4px';
            content.appendChild(emojiDisplay);
        }
        
        const centerPrediction = document.createElement('div');
        centerPrediction.className = 'center-prediction';
        centerPrediction.dataset.playerIndex = gameState.imageGame.currentPlayerIndex;
        centerPrediction.style.cssText = `
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: ${isMobile ? '3rem' : '4rem'};
            color: rgba(239, 68, 68, 0.8);
            display: none;
            z-index: 5;
            pointer-events: none;
            text-shadow: 0 0 20px rgba(0,0,0,0.7);
            opacity: 0.8;
        `;
        centerPrediction.textContent = '❌';
        content.appendChild(centerPrediction);
        
        const numberLabel = document.createElement('div');
        numberLabel.className = 'image-number';
        numberLabel.textContent = index + 1;
        numberLabel.style.cssText = `
            position: absolute;
            top: 3px;
            left: 3px;
            background: rgba(0, 0, 0, 0.85);
            color: white;
            font-size: ${isMobile ? '0.7rem' : '0.8rem'};
            font-weight: bold;
            padding: 4px 8px;
            border-radius: 50%;
            z-index: 3;
            min-width: 22px;
            min-height: 22px;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 2px 5px rgba(0,0,0,0.3);
        `;
        
        const nameLabel = document.createElement('div');
        nameLabel.className = 'player-name-label';
        nameLabel.style.cssText = `
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: ${isMobile ? '35%' : '30%'};
            background: linear-gradient(to top, rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.7));
            color: white;
            font-size: ${isMobile ? '0.75rem' : '0.8rem'};
            padding: ${isMobile ? '6px 3px' : '8px 4px'};
            text-align: center;
            font-weight: 600;
            z-index: 2;
            word-break: break-word;
            display: flex;
            align-items: center;
            justify-content: center;
            box-sizing: border-box;
            overflow: hidden;
            border-top: 2px solid rgba(255,255,255,0.1);
        `;
        
        nameLabel.innerHTML = `
            <div class="english-text" style="font-size: ${isMobile ? '0.75rem' : '0.8rem'}; line-height: 1.2; font-weight: bold;">
                ${item.displayName}
            </div>
        `;
        
        const selectionIndicator = document.createElement('div');
        selectionIndicator.className = 'selection-indicator';
        selectionIndicator.style.cssText = `
            position: absolute;
            top: 5px;
            right: 5px;
            background: rgba(0, 0, 0, 0.8);
            color: white;
            width: ${isMobile ? '28px' : '30px'};
            height: ${isMobile ? '28px' : '30px'};
            border-radius: 50%;
            display: none;
            align-items: center;
            justify-content: center;
            font-size: ${isMobile ? '1.1rem' : '1.2rem'};
            font-weight: bold;
            z-index: 10;
            box-shadow: 0 2px 5px rgba(0,0,0,0.3);
        `;
        
        const marksContainer = document.createElement('div');
        marksContainer.className = 'player-marks-container';
        marksContainer.style.cssText = `
            position: absolute;
            bottom: 8px;
            right: 8px;
            display: flex;
            flex-wrap: wrap;
            gap: 3px;
            z-index: 10;
            max-width: ${isMobile ? '50px' : '60px'};
            justify-content: flex-end;
        `;
        
        imageCell.appendChild(content);
        imageCell.appendChild(numberLabel);
        imageCell.appendChild(nameLabel);
        imageCell.appendChild(selectionIndicator);
        imageCell.appendChild(marksContainer);
        imageGrid.appendChild(imageCell);
        
        imageCell.addEventListener('click', function(e) {
            if (gameState.imageGame && gameState.imageGame.turnPhase === 'guessing') {
                const currentPlayer = gameState.imageGame.players[gameState.imageGame.currentPlayerIndex];
                const cellIndex = parseInt(this.dataset.index);
                toggleCenterPrediction(cellIndex, currentPlayer, this);
            }
        });
        
        imageCell.addEventListener('click', handleImageClick);
    });
    
    updateGridBackground();
    addResetPredictionsButton();
    updatePlayerPredictionsDisplay();
}

function updateGridBackground() {
    const imageGrid = document.getElementById('imageGrid');
    if (imageGrid && gameState.imageGame && gameState.imageGame.currentPlayerIndex !== undefined) {
        const bgColor = GRID_BACKGROUND_COLORS[gameState.imageGame.currentPlayerIndex % GRID_BACKGROUND_COLORS.length];
        imageGrid.style.backgroundColor = bgColor;
        imageGrid.style.borderRadius = '12px';
        imageGrid.style.padding = '15px';
        imageGrid.style.boxShadow = `0 4px 20px ${bgColor.replace('0.1', '0.2')}`;
    }
}

function addResetPredictionsButton() {
    const existingBtn = document.getElementById('resetPredictionsBtn');
    if (existingBtn) {
        existingBtn.remove();
    }
    
    if (gameState.imageGame && gameState.imageGame.turnPhase === 'guessing') {
        const resetBtn = document.createElement('button');
        resetBtn.id = 'resetPredictionsBtn';
        resetBtn.innerHTML = '<i class="fas fa-redo"></i> Reset My Predictions';
        resetBtn.style.cssText = `
            display: block;
            margin: 10px auto;
            padding: 12px 20px;
            background: #ef4444;
            color: white;
            border: none;
            border-radius: 8px;
            font-weight: bold;
            cursor: pointer;
            font-size: 0.9rem;
            box-shadow: 0 4px 10px rgba(239, 68, 68, 0.5);
        `;
        
        resetBtn.addEventListener('click', function() {
            const currentPlayer = gameState.imageGame.players[gameState.imageGame.currentPlayerIndex];
            if (gameState.imageGame.playerPredictions[currentPlayer]) {
                gameState.imageGame.playerPredictions[currentPlayer] = [];
            }
            
            document.querySelectorAll('.center-prediction').forEach(x => {
                x.style.display = 'none';
            });
            
            updateAllMarksForCurrentPlayer();
        });
        
        const gamePhase = document.getElementById('gamePhase');
        if (gamePhase) {
            gamePhase.parentNode.insertBefore(resetBtn, gamePhase.nextSibling);
        }
    }
}

function toggleCenterPrediction(imageIndex, playerName, cellElement) {
    if (!gameState.imageGame.playerPredictions[playerName]) {
        gameState.imageGame.playerPredictions[playerName] = [];
    }
    
    const predictions = gameState.imageGame.playerPredictions[playerName];
    const centerX = cellElement.querySelector('.center-prediction');
    
    if (predictions.includes(imageIndex)) {
        const idx = predictions.indexOf(imageIndex);
        predictions.splice(idx, 1);
        centerX.style.display = 'none';
    } else {
        predictions.push(imageIndex);
        centerX.style.display = 'block';
        const playerIndex = gameState.imageGame.players.indexOf(playerName);
        if (playerIndex !== -1) {
            const playerColor = PLAYER_COLORS[playerIndex % PLAYER_COLORS.length];
            centerX.style.color = playerColor.replace(')', ', 0.8)').replace('rgb', 'rgba');
        }
    }
}

function updatePlayerPredictionsDisplay() {
    document.querySelectorAll('.center-prediction').forEach(x => {
        x.style.display = 'none';
    });
    
    if (gameState.imageGame && gameState.imageGame.currentPlayerIndex !== undefined) {
        const currentPlayer = gameState.imageGame.players[gameState.imageGame.currentPlayerIndex];
        const predictions = gameState.imageGame.playerPredictions[currentPlayer] || [];
        
        const playerIndex = gameState.imageGame.currentPlayerIndex;
        const playerColor = PLAYER_COLORS[playerIndex % PLAYER_COLORS.length];
        
        predictions.forEach(index => {
            const cell = document.querySelector(`.image-cell-simple[data-index="${index}"]`);
            if (cell) {
                const centerX = cell.querySelector('.center-prediction');
                if (centerX) {
                    centerX.style.display = 'block';
                    centerX.style.color = playerColor.replace(')', ', 0.8)').replace('rgb', 'rgba');
                }
            }
        });
    }
}

function updateAllMarksForCurrentPlayer() {
    const currentPlayer = gameState.imageGame.players[gameState.imageGame.currentPlayerIndex];
    
    const itemCount = gameState.imageGame.images.length;
    for (let i = 0; i < itemCount; i++) {
        updateImageMarksDisplay(i, currentPlayer);
    }
}

function updateImageMarksDisplay(imageIndex, viewingPlayer) {
    const imageCell = document.querySelector(`.image-cell-simple[data-index="${imageIndex}"]`);
    if (!imageCell) return;
    
    let marksContainer = imageCell.querySelector('.player-marks-container');
    if (!marksContainer) {
        marksContainer = document.createElement('div');
        marksContainer.className = 'player-marks-container';
        marksContainer.style.cssText = `
            position: absolute;
            bottom: 8px;
            right: 8px;
            display: flex;
            flex-wrap: wrap;
            gap: 3px;
            z-index: 10;
            max-width: 60px;
            justify-content: flex-end;
        `;
        imageCell.appendChild(marksContainer);
    }
    
    marksContainer.innerHTML = '';
    
    const marks = gameState.imageGame.playerMarks[imageIndex] || [];
    
    marks.forEach((mark) => {
        const isViewingPlayersMark = mark.player === viewingPlayer;
        const isCorrectMarkForRevealed = mark.mark === '✅' && 
            gameState.imageGame.revealedPlayers.includes(mark.player);
        
        if (isViewingPlayersMark || isCorrectMarkForRevealed) {
            const markElement = document.createElement('div');
            markElement.className = 'player-mark';
            markElement.textContent = mark.mark;
            markElement.title = `${mark.player}'s ${mark.mark === '✅' ? 'correct guess' : 'guess'}`;
            markElement.style.cssText = `
                background: rgba(0, 0, 0, 0.8);
                color: ${mark.mark === '✅' ? '#22c55e' : 'white'};
                border-radius: 50%;
                width: 28px;
                height: 28px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 1rem;
                font-weight: bold;
                box-shadow: 0 2px 4px rgba(0,0,0,0.3);
                animation: ${mark.mark === '✅' ? 'pulse 1s infinite' : 'none'};
            `;
            
            const playerIndex = gameState.imageGame.players.indexOf(mark.player);
            if (playerIndex !== -1) {
                const playerColor = PLAYER_COLORS[playerIndex % PLAYER_COLORS.length];
                markElement.style.border = `2px solid ${playerColor}`;
            }
            
            marksContainer.appendChild(markElement);
        }
    });
}

function handleImageClick(event) {
    if (!gameState.imageGame) return;
    
    const cell = event.currentTarget;
    const index = parseInt(cell.dataset.index);
    const currentPlayer = gameState.imageGame.players[gameState.imageGame.currentPlayerIndex];
    
    if (gameState.imageGame.turnPhase === 'selection') {
        const selectedIndex = gameState.imageGame.selections[currentPlayer];
        
        if (selectedIndex === index) {
            delete gameState.imageGame.selections[currentPlayer];
            cell.querySelector('.selection-indicator').style.display = 'none';
        } else {
            gameState.imageGame.selections[currentPlayer] = index;
            
            document.querySelectorAll('.selection-indicator').forEach(ind => {
                ind.style.display = 'none';
            });
            
            const indicator = cell.querySelector('.selection-indicator');
            indicator.textContent = '✔';
            indicator.style.display = 'flex';
            indicator.className = 'selection-indicator selected';
            indicator.style.background = 'rgba(34, 197, 94, 0.9)';
        }
    }
}

function startImageMatch() {
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
        turnPhase: 'selection',
        selections: {},
        guesses: {},
        revealedPlayers: [],
        playerMarks: {},
        playerPredictions: {},
        timer: gameState.timer
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
    
    const secretSection = document.getElementById('secretSelection');
    const gamePhase = document.getElementById('gamePhase');
    
    if (gameState.imageGame.turnPhase === 'selection') {
        secretSection.style.display = 'block';
        gamePhase.style.display = 'none';
        
        const instructionEl = document.querySelector('.selection-instruction');
        if (instructionEl) {
            instructionEl.innerHTML = `
                <i class="fas fa-user-secret"></i>
                <h3>Choose Your Secret Image!</h3>
                <p><strong>${gameState.imageGame.players[gameState.imageGame.currentPlayerIndex]}</strong>, tap an image to select it.</p>
                <p>✔ will appear. Pass to next player when done.</p>
            `;
        }
    } else {
        secretSection.style.display = 'none';
        gamePhase.style.display = 'block';
    }
    
    setupImageGameListeners();
}

function updatePlayerDisplay() {
    if (!gameState.imageGame) return;
    
    const game = gameState.imageGame;
    const currentPlayer = game.players[game.currentPlayerIndex];
    const playerColor = PLAYER_COLORS[game.currentPlayerIndex % PLAYER_COLORS.length];
    
    document.getElementById('currentImagePlayerName').textContent = currentPlayer;
    document.getElementById('imagePlayerCounter').textContent = `${game.currentPlayerIndex + 1}/${game.players.length}`;
    
    document.getElementById('currentImagePlayerName').style.color = playerColor;
    document.getElementById('currentImagePlayerName').style.fontWeight = 'bold';
    
    let instruction = game.turnPhase === 'selection' 
        ? 'Tap an image to choose your secret!' 
        : 'Now guess other players\' secrets!';
    
    document.getElementById('turnInstruction').textContent = instruction;
    document.getElementById('turnInstruction').style.color = playerColor;
    
    document.querySelectorAll('.image-cell-simple').forEach(cell => {
        cell.style.borderColor = playerColor;
        cell.style.borderWidth = '3px';
        cell.style.boxShadow = `0 0 10px ${playerColor}40`;
    });
    
    updateGridBackground();
    updatePlayerPredictionsDisplay();
    updateAllMarksForCurrentPlayer();
    addResetPredictionsButton();
}

function confirmSecret() {
    if (!gameState.imageGame) return;
    
    const currentPlayer = gameState.imageGame.players[gameState.imageGame.currentPlayerIndex];
    
    if (gameState.imageGame.selections[currentPlayer] === undefined) {
        alert('Please select an image first!');
        return;
    }
    
    document.querySelectorAll('.selection-indicator').forEach(ind => {
        ind.style.display = 'none';
    });
    
    gameState.imageGame.currentPlayerIndex++;
    
    if (gameState.imageGame.currentPlayerIndex < gameState.imageGame.players.length) {
        updatePlayerDisplay();
        
        const instructionEl = document.querySelector('.selection-instruction');
        if (instructionEl) {
            instructionEl.innerHTML = `
                <i class="fas fa-user-secret"></i>
                <h3>Choose Your Secret Image!</h3>
                <p><strong>${gameState.imageGame.players[gameState.imageGame.currentPlayerIndex]}</strong>, tap an image to select it.</p>
                <p>✔ will appear. Pass to next player when done.</p>
            `;
        }
    } else {
        gameState.imageGame.currentPlayerIndex = 0;
        gameState.imageGame.turnPhase = 'guessing';
        
        document.getElementById('secretSelection').style.display = 'none';
        document.getElementById('gamePhase').style.display = 'block';
        
        updatePlayerDisplay();
        autoSelectNextPlayer();
    }
}

function autoSelectNextPlayer() {
    if (!gameState.imageGame) return;
    
    const game = gameState.imageGame;
    const playerSelect = document.getElementById('playerSelect');
    
    let targetIndex = (game.currentPlayerIndex + 1) % game.players.length;
    let attempts = 0;
    
    while ((targetIndex === game.currentPlayerIndex || 
            game.revealedPlayers.includes(game.players[targetIndex])) && 
           attempts < game.players.length) {
        targetIndex = (targetIndex + 1) % game.players.length;
        attempts++;
    }
    
    playerSelect.innerHTML = '';
    
    game.players.forEach((player, index) => {
        if (index !== game.currentPlayerIndex && !game.revealedPlayers.includes(player)) {
            const option = document.createElement('option');
            option.value = player;
            option.textContent = player;
            if (playerSelect.children.length === 0) {
                option.selected = true;
            }
            playerSelect.appendChild(option);
        }
    });
    
    if (playerSelect.children.length === 0) {
        const defaultOption = document.createElement('option');
        defaultOption.value = '';
        defaultOption.textContent = 'No players to guess';
        defaultOption.disabled = true;
        defaultOption.selected = true;
        playerSelect.appendChild(defaultOption);
    }
}

function submitGuess() {
    if (!gameState.imageGame) return;
    
    const guessingPlayer = gameState.imageGame.players[gameState.imageGame.currentPlayerIndex];
    const targetPlayer = document.getElementById('playerSelect').value;
    
    if (!targetPlayer || targetPlayer === '' || targetPlayer === 'No players to guess') {
        alert('Please select a player to guess!');
        return;
    }
    
    showNumberSelection(targetPlayer);
}

function showNumberSelection(targetPlayer) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'flex';
    
    const playerColor = PLAYER_COLORS[gameState.imageGame.currentPlayerIndex % PLAYER_COLORS.length];
    const guessingPlayer = gameState.imageGame.players[gameState.imageGame.currentPlayerIndex];
    
    const alreadyGuessed = [];
    
    if (gameState.imageGame.guesses[guessingPlayer] && 
        gameState.imageGame.guesses[guessingPlayer][targetPlayer]) {
        alreadyGuessed.push(...gameState.imageGame.guesses[guessingPlayer][targetPlayer]);
    }
    
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 500px;">
            <div class="modal-header" style="background: ${playerColor}20; border-bottom: 2px solid ${playerColor};">
                <h2 style="color: ${playerColor}; font-size: 1.5rem;">Guess ${targetPlayer}'s Image</h2>
                <button class="close-modal" style="color: ${playerColor};">&times;</button>
            </div>
            <div class="modal-body" style="padding: 20px;">
                <p style="margin-bottom: 20px; text-align: center; font-size: 1rem;">
                    Select the image number you think <strong>${targetPlayer}</strong> chose:
                </p>
                <div class="number-grid" style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin: 20px 0;">
                    ${Array.from({length: gameState.imageGame.images.length}, (_, i) => {
                        const isAlreadyGuessed = alreadyGuessed.includes(i);
                        const buttonText = isAlreadyGuessed ? '❌' : (i + 1);
                        const buttonColor = isAlreadyGuessed ? '#666' : playerColor;
                        const cursorStyle = isAlreadyGuessed ? 'not-allowed' : 'pointer';
                        const opacity = isAlreadyGuessed ? 0.5 : 1;
                        
                        return `
                            <button class="number-btn" data-number="${i + 1}" 
                                data-index="${i}"
                                style="padding: 15px; border: 2px solid ${buttonColor}; 
                                       border-radius: 10px; background: rgba(255,255,255,0.05); 
                                       color: ${buttonColor}; font-size: 1.1rem; font-weight: bold; 
                                       cursor: ${cursorStyle}; transition: all 0.2s; opacity: ${opacity};"
                                ${isAlreadyGuessed ? 'disabled' : ''}>
                                ${buttonText}
                            </button>
                        `;
                    }).join('')}
                </div>
                <p style="text-align: center; color: var(--text-secondary); font-size: 0.85rem;">
                    ${alreadyGuessed.length > 0 ? '❌ = Already guessed this number for ${targetPlayer}<br>' : ''}
                    Click an available number to make your guess
                </p>
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
    
    modal.querySelectorAll('.number-btn:not([disabled])').forEach(btn => {
        btn.addEventListener('click', function() {
            const guessNum = parseInt(this.dataset.number) - 1;
            processGuess(targetPlayer, guessNum);
            document.body.removeChild(modal);
        });
        
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.boxShadow = `0 0 12px ${playerColor}`;
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = 'none';
        });
    });
}

function processGuess(targetPlayer, guessNum) {
    const guessingPlayer = gameState.imageGame.players[gameState.imageGame.currentPlayerIndex];
    const actualIndex = gameState.imageGame.selections[targetPlayer];
    const isCorrect = guessNum === actualIndex;
    
    if (!gameState.imageGame.guesses[guessingPlayer]) {
        gameState.imageGame.guesses[guessingPlayer] = {};
    }
    if (!gameState.imageGame.guesses[guessingPlayer][targetPlayer]) {
        gameState.imageGame.guesses[guessingPlayer][targetPlayer] = [];
    }
    
    if (!gameState.imageGame.guesses[guessingPlayer][targetPlayer].includes(guessNum)) {
        gameState.imageGame.guesses[guessingPlayer][targetPlayer].push(guessNum);
    }
    
    addPlayerMark(guessNum, guessingPlayer, '❌');
    
    if (isCorrect) {
        gameState.imageGame.revealedPlayers.push(targetPlayer);
        
        const imageCell = document.querySelector(`.image-cell-simple[data-index="${actualIndex}"]`);
        const indicator = imageCell.querySelector('.selection-indicator');
        indicator.textContent = '🎯';
        indicator.style.display = 'flex';
        indicator.className = 'selection-indicator correct';
        indicator.style.background = 'rgba(239, 68, 68, 0.9)';
        indicator.style.animation = 'pulse 1s infinite';
        
        addPlayerMark(actualIndex, guessingPlayer, '✅');
        
        if (gameState.imageGame.playerPredictions[targetPlayer]) {
            gameState.imageGame.playerPredictions[targetPlayer] = [];
        }
        
        if (gameState.imageGame.guesses[guessingPlayer][targetPlayer]) {
            delete gameState.imageGame.guesses[guessingPlayer][targetPlayer];
        }
        
        if (gameState.imageGame.revealedPlayers.length >= gameState.imageGame.players.length - 1) {
            setTimeout(endImageGame, 1500);
            return;
        }
        
        autoSelectNextPlayer();
        updatePlayerDisplay();
    } else {
        autoSelectNextPlayer();
        endTurn();
    }
}

function addPlayerMark(imageIndex, playerName, mark = '❌') {
    if (!gameState.imageGame.playerMarks[imageIndex]) {
        gameState.imageGame.playerMarks[imageIndex] = [];
    }
    
    const existingMarkIndex = gameState.imageGame.playerMarks[imageIndex].findIndex(
        m => m.player === playerName && m.mark === mark
    );
    
    if (existingMarkIndex === -1) {
        gameState.imageGame.playerMarks[imageIndex].push({ player: playerName, mark: mark });
    } else {
        gameState.imageGame.playerMarks[imageIndex][existingMarkIndex].mark = mark;
    }
    
    const currentPlayer = gameState.imageGame.players[gameState.imageGame.currentPlayerIndex];
    updateImageMarksDisplay(imageIndex, currentPlayer);
}

function endTurn() {
    if (!gameState.imageGame) return;
    
    let nextPlayerIndex = (gameState.imageGame.currentPlayerIndex + 1) % gameState.imageGame.players.length;
    let attempts = 0;
    
    while (gameState.imageGame.revealedPlayers.includes(gameState.imageGame.players[nextPlayerIndex]) && 
           attempts < gameState.imageGame.players.length) {
        nextPlayerIndex = (nextPlayerIndex + 1) % gameState.imageGame.players.length;
        attempts++;
    }
    
    gameState.imageGame.currentPlayerIndex = nextPlayerIndex;
    updatePlayerDisplay();
    autoSelectNextPlayer();
}

function endImageGame() {
    if (!gameState.imageGame) return;
    
    const playerColor = PLAYER_COLORS[gameState.imageGame.currentPlayerIndex % PLAYER_COLORS.length];
    
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'flex';
    
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 500px; text-align: center; background: linear-gradient(135deg, ${playerColor}20, rgba(0,0,0,0.1));">
            <div class="modal-header" style="border: none; justify-content: center;">
                <h2 style="color: ${playerColor}; font-size: 1.8rem;">🎉 Game Over! 🎉</h2>
            </div>
            <div class="modal-body" style="padding: 25px;">
                <div style="font-size: 1.3rem; color: var(--text); margin-bottom: 15px;">
                    <strong>Final Results:</strong>
                </div>
                <div style="background: rgba(0,0,0,0.2); border-radius: 10px; padding: 12px; margin-bottom: 20px;">
                    ${gameState.imageGame.players.map(player => {
                        const isRevealed = gameState.imageGame.revealedPlayers.includes(player);
                        const imageIndex = gameState.imageGame.selections[player];
                        const playerIndex = gameState.imageGame.players.indexOf(player);
                        const playerColor = PLAYER_COLORS[playerIndex % PLAYER_COLORS.length];
                        return `
                            <div style="display: flex; justify-content: space-between; align-items: center; padding: 8px; border-bottom: 1px solid rgba(255,255,255,0.1);">
                                <span style="color: ${playerColor}; font-weight: bold; font-size: 0.9rem;">${player}</span>
                                <span style="color: ${isRevealed ? '#ef4444' : '#22c55e'}; font-weight: bold; font-size: 0.85rem;">
                                    ${isRevealed ? `REVEALED (Image ${imageIndex + 1})` : 'STILL HIDDEN'}
                                </span>
                            </div>
                        `;
                    }).join('')}
                </div>
                <div style="display: flex; gap: 8px; margin-top: 20px;">
                    <button id="playAgainImageBtn" class="btn" style="flex: 1; background: ${playerColor}; color: white; padding: 12px; font-size: 1rem;">
                        <i class="fas fa-redo"></i> Play Again
                    </button>
                    <button id="backToLobbyBtn" class="btn" style="flex: 1; background: rgba(255,255,255,0.1); color: var(--text); padding: 12px; font-size: 1rem;">
                        <i class="fas fa-home"></i> Back to Menu
                    </button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    modal.querySelector('#playAgainImageBtn').addEventListener('click', function() {
        document.body.removeChild(modal);
        restartImageGame();
    });
    
    modal.querySelector('#backToLobbyBtn').addEventListener('click', function() {
        document.body.removeChild(modal);
        backToLobby();
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
}

function restartImageGame() {
    startImageMatch();
}

function setupImageGameListeners() {
    const confirmSecretBtn = document.getElementById('confirmSecretBtn');
    const makeGuessBtn = document.getElementById('makeGuessBtn');
    const endTurnBtn = document.getElementById('endTurnBtn');
    const submitGuessBtn = document.getElementById('submitGuessBtn');
    
    if (confirmSecretBtn) {
        confirmSecretBtn.onclick = confirmSecret;
    }
    if (makeGuessBtn) {
        makeGuessBtn.onclick = function() {
            document.getElementById('guessInterface').style.display = 'block';
            document.getElementById('questionInterface').style.display = 'none';
            autoSelectNextPlayer();
        };
    }
    if (endTurnBtn) {
        endTurnBtn.onclick = endTurn;
    }
    if (submitGuessBtn) {
        submitGuessBtn.onclick = submitGuess;
    }
}

window.addEventListener('resize', function() {
    if (gameState.imageGame && document.getElementById('imageMatchScreen').style.display === 'block') {
        if (gameState.imageGame.images) {
            renderImageGrid(gameState.imageGame.images);
        }
    }
});

// ================= MODALS =================
function showShareModal() {
    document.getElementById('shareModal').style.display = 'flex';
}

function showFeedbackModal() {
    document.getElementById('feedbackModal').style.display = 'flex';
}

function hideModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
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

// ================= FEEDBACK SYSTEM =================
function openGoogleForm() {
    const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSd4iWPkTWr_2p1UhqwHs4pnZqNAg8XU8zXdJKBDZvY7dv1YzA/viewform';
    
    window.open(GOOGLE_FORM_URL, '_blank');
    hideModal('feedbackModal');
}

function setupFeedbackListeners() {
    const openFormBtn = document.getElementById('openGoogleFormBtn');
    if (openFormBtn) {
        openFormBtn.addEventListener('click', openGoogleForm);
    }
}

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
            const responseData = await getResponse.json();
            if (responseData.record) {
                currentData = responseData.record;
            } else {
                currentData = responseData;
            }
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
            const updatedResponse = await putResponse.json();
            const updatedData = updatedResponse.record || updatedResponse;
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

// ================= UTILITIES =================
function formatTime(seconds) {
    if (seconds === 0) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

function startRumbleSpin() {
    console.log('Starting cinema reel animation...');

    if (gameState.rumbleGame.imagePool.length === 0) {
        buildRumbleImagePool();
    }

    gameState.rumbleGame.isRumbling = true;
    gameState.rumbleGame.isSpinning = true;

    // UI setup
    document.getElementById('rumbleStartArea').style.display = 'none';
    document.getElementById('rumbleGameArea').style.display = 'flex';
    document.getElementById('rumbleFinalContainer').style.display = 'none';
    document.getElementById('rumbleNameDisplayActive').style.display = 'none';
    document.getElementById('rumbleRestartSection').style.display = 'none';

    const spinningWheel = document.getElementById('spinningWheel');
    spinningWheel.innerHTML = '';
    spinningWheel.style.display = 'flex';
    spinningWheel.style.alignItems = 'center';
    spinningWheel.style.justifyContent = 'center';
    spinningWheel.style.position = 'relative';
    spinningWheel.style.overflow = 'hidden';
    spinningWheel.style.background = 'linear-gradient(135deg, #0f172a, #1e293b)';
    spinningWheel.style.borderRadius = '15px';
    spinningWheel.style.border = '3px solid rgba(99, 102, 241, 0.3)';

    // Reel container
    const reelContainer = document.createElement('div');
    reelContainer.id = 'reelContainer';
    reelContainer.style.cssText = `
        position: absolute;
        display: flex;
        height: 70%;
        top: 15%;
        left: 0;
        will-change: transform;
    `;
    spinningWheel.appendChild(reelContainer);

    // Center indicator
    const centerIndicator = document.createElement('div');
    centerIndicator.style.cssText = `
        position: absolute;
        left: 50%;
        top: 10%;
        bottom: 10%;
        width: 6px;
        background: linear-gradient(to bottom, #fbbf24, #f59e0b, #fbbf24);
        transform: translateX(-50%);
        z-index: 20;
        pointer-events: none;
        border-radius: 3px;
        box-shadow: 0 0 15px rgba(251, 191, 36, 0.7);
    `;
    spinningWheel.appendChild(centerIndicator);

    // Center glow
    const centerGlow = document.createElement('div');
    centerGlow.style.cssText = `
        position: absolute;
        left: 50%;
        top: 0;
        bottom: 0;
        width: 150px;
        background: linear-gradient(90deg, 
            transparent 0%, 
            rgba(99, 102, 241, 0.1) 20%, 
            rgba(251, 191, 36, 0.2) 50%, 
            rgba(99, 102, 241, 0.1) 80%, 
            transparent 100%);
        transform: translateX(-50%);
        z-index: 10;
        pointer-events: none;
        opacity: 0.7;
    `;
    spinningWheel.appendChild(centerGlow);

    // Pick final image
    const randomIndex = Math.floor(Math.random() * gameState.rumbleGame.imagePool.length);
    const finalImage = gameState.rumbleGame.imagePool[randomIndex];
    gameState.rumbleGame.finalImageIndex = randomIndex;
    gameState.rumbleGame.currentImage = finalImage;

    // Build reel
    const reelItemsCount = 60;
    const reelItems = [];
    for (let i = 0; i < reelItemsCount; i++) {
        reelItems.push(
            gameState.rumbleGame.imagePool[
                Math.floor(Math.random() * gameState.rumbleGame.imagePool.length)
            ]
        );
    }

    const targetPositionInReel = Math.floor(reelItemsCount / 2);
    reelItems[targetPositionInReel] = finalImage;

    // Create cards
    reelItems.forEach((item, index) => {
        const imageCard = document.createElement('div');
        imageCard.className = 'reel-card';
        imageCard.style.cssText = `
            width: 140px;
            height: 100%;
            margin: 0 8px;
            background: rgba(30, 41, 59, 0.9);
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            border: 3px solid rgba(99, 102, 241, 0.4);
            overflow: hidden;
            box-shadow: 0 6px 16px rgba(0, 0, 0, 0.4);
        `;

        if (index === targetPositionInReel) {
            imageCard.style.border = '3px solid #fbbf24';
            imageCard.style.boxShadow = '0 0 25px rgba(251, 191, 36, 0.5)';
        }

        if (item.type === 'football' || item.type === 'image') {
            const img = document.createElement('img');
            img.src = item.image;
            img.alt = item.name;
            img.style.cssText = `width:100%;height:100%;object-fit:cover;`;
            imageCard.appendChild(img);
        } else {
            const emoji = document.createElement('div');
            emoji.textContent = item.image;
            emoji.style.fontSize = '3rem';
            imageCard.appendChild(emoji);
        }
        reelContainer.appendChild(imageCard);
    });

    // Positioning
    const cardTotalWidth = 156;
    const initialOffset = (spinningWheel.offsetWidth / 2) - (cardTotalWidth / 2);
    const targetPosition = -(targetPositionInReel * cardTotalWidth) + initialOffset;

    // ===== FAST CINEMATIC SPIN (GUARANTEED QUICK STOP) =====
// ===== ULTRA SMOOTH CINEMATIC SPIN =====

const startOffset = 1200;
reelContainer.style.transform = `translateX(${startOffset}px)`;

// force layout reflow
reelContainer.getBoundingClientRect();

// animation duration
const spinDuration = 4600;

// GPU smooth easing
reelContainer.style.transition = `
    transform ${spinDuration}ms cubic-bezier(0.08, 0.82, 0.17, 1)
`;

// move to final target
requestAnimationFrame(() => {
    reelContainer.style.transform = `translateX(${targetPosition}px)`;
});

// highlight center card
setTimeout(() => {
    const centerCard = reelContainer.children[targetPositionInReel];
    if (centerCard) {
        centerCard.style.transition = 'transform 300ms ease, box-shadow 300ms ease';
        centerCard.style.transform = 'scale(1.12)';
        centerCard.style.border = '3px solid #fbbf24';
        centerCard.style.boxShadow = '0 0 45px rgba(251, 191, 36, 0.9)';
        setTimeout(() => {
            centerCard.style.transform = 'scale(1)';
        }, 300);
    }
}, spinDuration - 350);

// final reveal
setTimeout(() => {
    finishRumbleSpin();
}, spinDuration + 150);


    // ===== Final reveal =====
    function finishRumbleSpin() {
        setTimeout(() => {
            spinningWheel.style.display = 'none';
        }, 150);

        const finalContainer = document.getElementById('rumbleFinalContainer');
        finalContainer.style.display = 'flex';
        finalContainer.innerHTML = '';

        const imageWrapper = document.createElement('div');
        imageWrapper.style.cssText = `display:flex;align-items:center;justify-content:center;width:100%;height:100%;`;

        if (finalImage.type === 'football' || finalImage.type === 'image') {
            const img = document.createElement('img');
            img.src = finalImage.image;
            img.style.cssText = `max-width:90%;max-height:80%;border-radius:20px;box-shadow:0 20px 50px rgba(0,0,0,0.7);border:4px solid rgba(251,191,36,0.5);`;
            imageWrapper.appendChild(img);
        } else {
            const emoji = document.createElement('div');
            emoji.textContent = finalImage.image;
            emoji.style.fontSize = '7rem';
            imageWrapper.appendChild(emoji);
        }

        finalContainer.appendChild(imageWrapper);
        document.getElementById('rumbleRestartSection').style.display = 'block';

        gameState.rumbleGame.isRumbling = false;
        gameState.rumbleGame.isSpinning = false;
    }
}

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
    } else if (mode === 'rumble') {
        content = getRumbleHelp();
        title = '🎲 Rumble Mode';
    } else {
        content = getClassicHelp();
        title = 'Game Help';
    }
    
    modal.innerHTML = `
        <div class="modal-content help-modal">
            <div class="modal-header">
                <h2 style="font-size: 1.5rem;">${title}</h2>
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
                <div class="step-num">🎭</div>
                <div class="step-text-container">
                    <div class="step-text-en" style="font-size: 0.9rem;">1 Imposter hides among innocents! Find them!</div>
                    <div class="step-text-ar" style="font-size: 0.9rem; color: var(--accent); direction: rtl; text-align: right;">
                        1 مخادع يختبئ بين الأبرياء! اكتشفوه!
                    </div>
                </div>
            </div>
            <div class="step">
                <div class="step-num">🤫</div>
                <div class="step-text-container">
                    <div class="step-text-en" style="font-size: 0.9rem;">Innocents see WORD, Imposter sees HINT</div>
                    <div class="step-text-ar" style="font-size: 0.9rem; color: var(--accent); direction: rtl; text-align: right;">
                        الأبرياء يرون كلمة، المخادع يرى تلميح
                    </div>
                </div>
            </div>
            <div class="step">
                <div class="step-num">🗣️</div>
                <div class="step-text-container">
                    <div class="step-text-en" style="font-size: 0.9rem;">Everyone describes, Imposter blends in</div>
                    <div class="step-text-ar" style="font-size: 0.9rem; color: var(--accent); direction: rtl; text-align: right;">
                        الجميع يصف، المخادع يندمج
                    </div>
                </div>
            </div>
            <div class="step">
                <div class="step-num">🤔</div>
                <div class="step-text-container">
                    <div class="step-text-en" style="font-size: 0.9rem;">Vote who's sus! Catch the Imposter!</div>
                    <div class="step-text-ar" style="font-size: 0.9rem; color: var(--accent); direction: rtl; text-align: right;">
                        صوتوا على المشبوه! القوا القبض على المخادع!
                    </div>
                </div>
            </div>
        </div>
    `;
}

function getDescribeHelp() {
    return `
        <div class="help-steps">
            <div class="step">
                <div class="step-num">🎲</div>
                <div class="step-text-container">
                    <div class="step-text-en" style="font-size: 0.9rem;">
                        <strong>Pro Tip:</strong> Just 2 players? Use Rumble mode!
                    </div>
                    <div class="step-text-ar" style="font-size: 0.9rem; color: var(--accent); direction: rtl; text-align: right;">
                        <strong>نصيحة:</strong> فقط لاعبين؟ استخدم وضع الرمبل!
                    </div>
                </div>
            </div>
            <div class="step">
                <div class="step-num">🔴🔵</div>
                <div class="step-text-container">
                    <div class="step-text-en" style="font-size: 0.9rem;">
                        Teams compete: Red vs Blue
                    </div>
                    <div class="step-text-ar" style="font-size: 0.9rem; color: var(--accent); direction: rtl; text-align: right;">
                        فرق تتنافس: أحمر ضد أزرق
                    </div>
                </div>
            </div>
            <div class="step">
                <div class="step-num">🎤</div>
                <div class="step-text-container">
                    <div class="step-text-en" style="font-size: 0.9rem;">
                        Describer gets secret word, describes without saying it
                    </div>
                    <div class="step-text-ar" style="font-size: 0.9rem; color: var(--accent); direction: rtl; text-align: right;">
                        الموصف يحصل على كلمة سرية، يصفها بدون قولها
                    </div>
                </div>
            </div>
            <div class="step">
                <div class="step-num">🏆</div>
                <div class="step-text-container">
                    <div class="step-text-en" style="font-size: 0.9rem;">
                        First team to guess wins! Race against time!
                    </div>
                    <div class="step-text-ar" style="font-size: 0.9rem; color: var(--accent); direction: rtl; text-align: right;">
                        أول فريق يخمن يفوز! تسابقوا ضد الوقت!
                    </div>
                </div>
            </div>
        </div>
    `;
}

function getImagesHelp() {
    return `
        <div class="help-steps">
            <div class="step">
                <div class="step-num">🖼️</div>
                <div class="step-text-container">
                    <div class="step-text-en" style="font-size: 0.9rem;">
                        Each player secretly picks one image
                    </div>
                    <div class="step-text-ar" style="font-size: 0.9rem; color: var(--accent); direction: rtl; text-align: right;">
                        كل لاعب يختار صورة سرية
                    </div>
                </div>
            </div>
            <div class="step">
                <div class="step-num">🤔</div>
                <div class="step-text-container">
                    <div class="step-text-en" style="font-size: 0.9rem;">
                        Guess others' picks. Right = they're out!
                    </div>
                    <div class="step-text-ar" style="font-size: 0.9rem; color: var(--accent); direction: rtl; text-align: right;">
                        خمّن اختيارات الآخرين. صح = يخرجون!
                    </div>
                </div>
            </div>
            <div class="step">
                <div class="step-num">👑</div>
                <div class="step-text-container">
                    <div class="step-text-en" style="font-size: 0.9rem;">
                        Last player standing wins! No time limit!
                    </div>
                    <div class="step-text-ar" style="font-size: 0.9rem; color: var(--accent); direction: rtl; text-align: right;">
                        آخر لاعب باقٍ يفوز! بدون حد زمني!
                    </div>
                </div>
            </div>
            <div class="step">
                <div class="step-num">🎮</div>
                <div class="step-text-container">
                    <div class="step-text-en" style="font-size: 0.9rem;">
                        <strong>Need:</strong> 2+ players, any categories
                    </div>
                    <div class="step-text-ar" style="font-size: 0.9rem; color: var(--accent); direction: rtl; text-align: right;">
                        <strong>يلزم:</strong> لاعبين أو أكثر، أي فئة
                    </div>
                </div>
            </div>
        </div>
    `;
}

function getRumbleHelp() {
    return `
        <div class="help-steps">
            <div class="step">
                <div class="step-num">📱</div>
                <div class="step-text-container">
                    <div class="step-text-en" style="font-size: 0.9rem;">
                        <strong>Perfect for 2 players!</strong> Show phone to friend
                    </div>
                    <div class="step-text-ar" style="font-size: 0.9rem; color: var(--accent); direction: rtl; text-align: right;">
                        <strong>مثالي لـ2 لاعبين!</strong> أظهر هاتفك لصديق
                    </div>
                </div>
            </div>
            <div class="step">
                <div class="step-num">🙈</div>
                <div class="step-text-container">
                    <div class="step-text-en" style="font-size: 0.9rem;">
                        DON'T look at your phone! Only your friend sees it
                    </div>
                    <div class="step-text-ar" style="font-size: 0.9rem; color: var(--accent); direction: rtl; text-align: right;">
                        لا تنظر إلى هاتفك! فقط صديقك يراه
                    </div>
                </div>
            </div>
            <div class="step">
                <div class="step-num">❓</div>
                <div class="step-text-container">
                    <div class="step-text-en" style="font-size: 0.9rem;">
                        Ask questions to guess YOUR image! "Is it red? Animal?"
                    </div>
                    <div class="step-text-ar" style="font-size: 0.9rem; color: var(--accent); direction: rtl; text-align: right;">
                        اسأل أسئلة لتخمين صورتك! "هل هو أحمر؟ حيوان؟"
                    </div>
                </div>
            </div>
            <div class="step">
                <div class="step-num">🔄</div>
                <div class="step-text-container">
                    <div class="step-text-en" style="font-size: 0.9rem;">
                        Take turns! You guess yours, friend guesses theirs
                    </div>
                    <div class="step-text-ar" style="font-size: 0.9rem; color: var(--accent); direction: rtl; text-align: right;">
                        تناوبوا! أنت تخمن صورتك، صديقك يخمن صورته
                    </div>
                </div>
            </div>
            <div class="step">
                <div class="step-num">👥</div>
                <div class="step-text-container">
                    <div class="step-text-en" style="font-size: 0.9rem;">
                        Groups? Make a circle! P1→P2→P3→P1
                    </div>
                    <div class="step-text-ar" style="font-size: 0.9rem; color: var(--accent); direction: rtl; text-align: right;">
                        جماعة؟ كونوا دائرة! ل1→ل2→ل3→ل1
                    </div>
                </div>
            </div>
            <div class="step">
                <div class="step-num">🎭</div>
                <div class="step-text-container">
                    <div class="step-text-en" style="font-size: 0.9rem;">
                        <strong>No peeking!</strong> The fun is in guessing blind! 😂
                    </div>
                    <div class="step-text-ar" style="font-size: 0.9rem; color: var(--accent); direction: rtl; text-align: right;">
                        <strong>لا تختلس النظر!</strong> المتعة في التخمين الأعمى! 😂
                    </div>
                </div>
            </div>
        </div>
    `;
}

// ================= GLOBAL FUNCTIONS =================
window.removePlayer = removePlayer;
window.backToLobby = backToLobby;
window.restartGame = restartGame;
window.hideModal = hideModal;
window.loadTeam = loadTeam;
window.deleteTeam = deleteTeam;
window.restartImageGame = restartImageGame;
window.restartRumbleGame = restartRumbleGame;