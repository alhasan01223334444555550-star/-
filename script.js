// script.js
// Core game logic for 100 Levels

// App State
let appState = {
    unlockedLevels: JSON.parse(localStorage.getItem('englishMastery_unlocked Levels')) || 1, // Unlock up to 1 by default
    score: parseInt(localStorage.getItem('englishMastery_score')) || 0,
    currentLevel: null,
    currentSentenceIndex: 0,
    levelSentences: [],
    correctAnswerText: "",
};

// Update UI
const scoreDisplay = document.getElementById("scoreDisplay");
scoreDisplay.innerText = appState.score;

// Views
const levelSelector = document.getElementById("levelSelector");
const gameScreen = document.getElementById("gameScreen");
const successScreen = document.getElementById("successScreen");

// DOM Elements Game Game
const levelGrid = document.getElementById("levelGrid");
const currentLevelSpan = document.getElementById("currentLevelSpan");
const progressText = document.getElementById("progressText");
const progressFill = document.getElementById("progressFill");
const englishSentenceEl = document.getElementById("englishSentence");
const optionsGrid = document.getElementById("optionsGrid");
const feedbackBox = document.getElementById("feedbackBox");
const feedbackIcon = document.getElementById("feedbackIcon");
const feedbackText = document.getElementById("feedbackText");
const nextBtn = document.getElementById("nextBtn");

// 1. Initialize App: Render Level Buttons
function init() {
    renderLevels();
}

function renderLevels() {
    levelGrid.innerHTML = "";
    for (let i = 1; i <= 100; i++) {
        const btn = document.createElement("button");
        btn.classList.add("level-btn");
        btn.innerText = i;
        
        if (i < appState.unlockedLevels) {
            btn.classList.add("completed");
            btn.onclick = () => startLevel(i);
        } else if (i === appState.unlockedLevels) {
            btn.classList.add("current");
            btn.onclick = () => startLevel(i);
        } else {
            btn.classList.add("locked");
            btn.innerHTML = `<i class="fa-solid fa-lock"></i>`;
        }
        levelGrid.appendChild(btn);
    }
}

// 2. Start Game Level
function startLevel(levelNum) {
    appState.currentLevel = levelNum;
    appState.currentSentenceIndex = 0;
    
    // Grab sentences (safeguard in case data is missing)
    appState.levelSentences = window.getSentencesForLevel ? window.getSentencesForLevel(levelNum) : fallbackSentences;
    
    if(!appState.levelSentences || appState.levelSentences.length === 0) {
        alert("Oops! No data available for this level.");
        return;
    }

    // Switch view
    levelSelector.classList.remove('active');
    successScreen.classList.add("hidden");
    gameScreen.classList.add('active');
    
    currentLevelSpan.innerText = levelNum;
    
    loadSentence();
}

// 3. Load Sentence Question
function loadSentence() {
    // Reset state and views
    feedbackBox.classList.add("hidden");
    optionsGrid.innerHTML = "";
    
    const sentenceData = appState.levelSentences[appState.currentSentenceIndex];
    englishSentenceEl.innerText = sentenceData.en;
    appState.correctAnswerText = sentenceData.ar;
    
    // Update progress
    progressText.innerText = `${appState.currentSentenceIndex + 1}/${appState.levelSentences.length}`;
    const percent = Math.floor((appState.currentSentenceIndex / appState.levelSentences.length) * 100);
    progressFill.style.width = percent + "%";

    // Generate Multiple Choices
    generateOptions(sentenceData.ar);
    
    // Auto speak
    setTimeout(() => speakSentence(), 200);
}

// Setup options generator
function generateOptions(correctStr) {
    let options = [correctStr];
    
    // grab 3 random wrong answers from the massive 10,000 sentences pool
    let allSents = window.gameSentences || [];
    let attempts = 0;
    while(options.length < 4 && attempts < 50) {
        attempts++;
        let randomIdx = Math.floor(Math.random() * allSents.length);
        let randomAr = allSents[randomIdx].ar;
        if(!options.includes(randomAr) && randomAr) {
            options.push(randomAr);
        }
    }
    
    // Shuffle Options
    options = options.sort(() => Math.random() - 0.5);
    
    // Render options
    options.forEach(opt => {
        let btn = document.createElement("button");
        btn.classList.add("option-btn");
        btn.innerText = opt;
        btn.onclick = () => checkAnswer(opt, btn);
        optionsGrid.appendChild(btn);
    });
}

// 4. Verify Answer logic
function checkAnswer(selected, btnElement) {
    // Disable all buttons
    const buttons = document.querySelectorAll(".option-btn");
    buttons.forEach(b => b.disabled = true);
    
    let isCorrect = (selected === appState.correctAnswerText);
    
    if(isCorrect) {
        btnElement.classList.add("correct");
        
        // Show success feedback
        feedbackBox.classList.remove("hidden");
        feedbackBox.className = "feedback-box success";
        feedbackIcon.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
        feedbackText.innerText = "Excellent!";
        
        // Add Score Update UI slowly
        addScore(10);
    } else {
        btnElement.classList.add("wrong");
        // highlight correct answer naturally
        buttons.forEach(b => {
             if(b.innerText === appState.correctAnswerText) b.classList.add("correct");
        });
        
        // Show error feedback
        feedbackBox.classList.remove("hidden");
        feedbackBox.className = "feedback-box error";
        feedbackIcon.innerHTML = `<i class="fa-solid fa-circle-xmark"></i>`;
        feedbackText.innerText = `Incorrect. The answer is: ${appState.correctAnswerText}`;
    }
    
    // Bind Next button action
    nextBtn.onclick = handleNext;
}

function handleNext() {
    appState.currentSentenceIndex++;
    if(appState.currentSentenceIndex < appState.levelSentences.length) {
        loadSentence();
    } else {
        completeLevel();
    }
}

function completeLevel() {
    // We finished! Unlock next level
    if(appState.currentLevel >= appState.unlockedLevels && appState.currentLevel < 100) {
        appState.unlockedLevels = appState.currentLevel + 1;
        saveState();
    }
    
    // Give bonus score
    addScore(100);
    
    // Show success view
    gameScreen.classList.remove("active");
    successScreen.classList.remove("hidden");
    successScreen.classList.add("active");
    
    document.getElementById("victoryScore").innerText = "+100 (Bonus)";
}

function addScore(amount) {
    appState.score += amount;
    // Animate score
    scoreDisplay.innerText = appState.score;
    scoreDisplay.style.transform = "scale(1.2)";
    scoreDisplay.style.color = "var(--success)";
    setTimeout(() => {
        scoreDisplay.style.transform = "scale(1)";
        scoreDisplay.style.color = "inherit";
    }, 400);
    saveState();
}

function saveState() {
    localStorage.setItem('englishMastery_unlockedLevels', JSON.stringify(appState.unlockedLevels));
    localStorage.setItem('englishMastery_score', appState.score);
}

// Load locally saved data at start 
function loadState() {
     let uLevel = parseFloat(localStorage.getItem('englishMastery_unlockedLevels'));
     if(uLevel) appState.unlockedLevels = uLevel;
     renderLevels();
}

// 5. Utility Functions
function speakSentence() {
    if(!englishSentenceEl.innerText) return;
    try {
        let speech = new SpeechSynthesisUtterance(englishSentenceEl.innerText);
        speech.lang = "en-US";
        speech.rate = 0.9;
        speechSynthesis.speak(speech);
    } catch(e) {
        console.error("Speech Synthesis not supported in this environment");
    }
}

function goBack() {
    gameScreen.classList.remove('active');
    successScreen.classList.add('hidden');
    successScreen.classList.remove("active");
    levelSelector.classList.add('active');
    renderLevels();
}

// Start immediately
loadState();

// Fallback just in case sentences.js didn't load properly
const fallbackSentences = Array(100).fill().map((_, i) => ({en: `Fallback sentence ${i+1}`, ar: `جملة احتياطية ${i+1}`}));
