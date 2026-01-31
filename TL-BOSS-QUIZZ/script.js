// ==========================================
// FIREBASE CONFIGURATION & INITIALIZATION
// ==========================================
const firebaseConfig = {
    apiKey: "AIzaSyA5pNbVHHJ0Vs_9ZHaCjkAi3D8DMARV800",
    authDomain: "tl-boss-quiz.firebaseapp.com",
    projectId: "tl-boss-quiz",
    storageBucket: "tl-boss-quiz.firebasestorage.app",
    messagingSenderId: "77646720882",
    appId: "1:77646720882:web:3d83dce7f24e3da2a5f7eb",
    measurementId: "G-BHYYYR2DTH"
};

// Initialize Firebase using Compat SDK
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// ==========================================
// FIRESTORE UTILITY FUNCTIONS
// ==========================================

async function saveUserProfile(username) {
    try {
        const userRef = db.collection('users').doc(username.toLowerCase());
        await userRef.set({
            username: username,
            createdAt: firebase.firestore.Timestamp.now(),
            lastActive: firebase.firestore.Timestamp.now()
        }, { merge: true });
        return true;
    } catch (error) {
        console.error("Error saving user:", error);
        return false;
    }
}

async function saveAttempt(username, bossId, score, totalQuestions) {
    try {
        const attemptId = `${username.toLowerCase()}_${bossId}`;
        const attemptRef = db.collection('attempts').doc(attemptId);

        await attemptRef.set({
            username: username,
            bossId: bossId,
            score: score,
            totalQuestions: totalQuestions,
            attemptDate: firebase.firestore.Timestamp.now(),
            canRetakeAt: firebase.firestore.Timestamp.fromMillis(Date.now() + (24 * 60 * 60 * 1000))
        });
        return true;
    } catch (error) {
        console.error("Error saving attempt:", error);
        return false;
    }
}

async function getUserAttempt(username, bossId) {
    try {
        if (!username) return null;
        const attemptId = `${username.toLowerCase()}_${bossId}`;
        const attemptDoc = await db.collection('attempts').doc(attemptId).get();
        return attemptDoc.exists ? attemptDoc.data() : null;
    } catch (error) {
        console.error("Error getting attempt:", error);
        return null;
    }
}

async function getBossLeaderboard(bossId, limitCount = 10) {
    try {
        const querySnapshot = await db.collection('attempts')
            .where('bossId', '==', bossId)
            .orderBy('score', 'desc')
            .orderBy('attemptDate', 'asc')
            .limit(limitCount)
            .get();

        const leaderboard = [];
        querySnapshot.forEach((doc) => {
            leaderboard.push(doc.data());
        });
        return leaderboard;
    } catch (error) {
        console.error("Error getting leaderboard:", error);
        return [];
    }
}

async function unlockBossWithAdminCode(username, bossId, code) {
    const validCode = generateDailyCode();
    if (code !== validCode) {
        return { success: false, message: 'Code incorrect' };
    }

    try {
        const attemptId = `${username.toLowerCase()}_${bossId}`;
        await db.collection('attempts').doc(attemptId).set({
            canRetakeAt: firebase.firestore.Timestamp.now()
        }, { merge: true });
        return { success: true, message: 'Boss débloqué !' };
    } catch (error) {
        console.error("Error unlocking boss:", error);
        return { success: false, message: 'Erreur serveur' };
    }
}

function canRetakeQuiz(attemptData) {
    if (!attemptData || !attemptData.canRetakeAt) return true;
    const now = Date.now();
    const canRetakeTimestamp = attemptData.canRetakeAt.toMillis();
    return now >= canRetakeTimestamp;
}

function getTimeRemainingFromAttempt(attemptData) {
    if (!attemptData || !attemptData.canRetakeAt) return 'Disponible';
    const now = Date.now();
    const canRetakeTimestamp = attemptData.canRetakeAt.toMillis();
    const msRemaining = canRetakeTimestamp - now;
    if (msRemaining <= 0) return 'Disponible';
    const hours = Math.floor(msRemaining / (1000 * 60 * 60));
    const minutes = Math.floor((msRemaining % (1000 * 60 * 60)) / (1000 * 60));
    return `${hours}h ${minutes}m`;
}

function generateDailyCode() {
    const today = new Date();
    const dateStr = `${today.getFullYear()}${String(today.getMonth() + 1).padStart(2, '0')}${String(today.getDate()).padStart(2, '0')}`;
    const secretKey = 'TL-BOSS-QUIZ';
    let hash = 0;
    const input = dateStr + secretKey;
    for (let i = 0; i < input.length; i++) {
        hash = ((hash << 5) - hash) + input.charCodeAt(i);
        hash = hash & hash;
    }
    return Math.abs(hash % 1000000).toString().padStart(6, '0');
}

// ==========================================
// BOSS DATA
// ==========================================
const BOSSES = [
    {
        id: 'boss-dim6-1',
        name: 'Boss Exemple Dim 6+',
        category: 'dim6',
        icon: '🐉',
        questions: [
            { question: 'Quelle est la première mécanique du boss ?', options: ['Option A', 'Option B', 'Option C', 'Option D'], correct: 0 },
            { question: 'Comment éviter l\'attaque ultime ?', options: ['Bouclier', 'Esquive', 'CC le boss', 'Tank'], correct: 1 },
            { question: 'Question 3 ?', options: ['Réponse A', 'Réponse B', 'Réponse C', 'Réponse D'], correct: 2 },
            { question: 'Question 4 ?', options: ['Réponse A', 'Réponse B', 'Réponse C', 'Réponse D'], correct: 0 },
            { question: 'Question 5 ?', options: ['Réponse A', 'Réponse B', 'Réponse C', 'Réponse D'], correct: 3 },
            { question: 'Question 6 ?', options: ['Réponse A', 'Réponse B', 'Réponse C', 'Réponse D'], correct: 1 },
            { question: 'Question 7 ?', options: ['Réponse A', 'Réponse B', 'Réponse C', 'Réponse D'], correct: 2 },
            { question: 'Question 8 ?', options: ['Réponse A', 'Réponse B', 'Réponse C', 'Réponse D'], correct: 0 },
            { question: 'Question 9 ?', options: ['Réponse A', 'Réponse B', 'Réponse C', 'Réponse D'], correct: 1 },
            { question: 'Question 10 ?', options: ['Réponse A', 'Réponse B', 'Réponse C', 'Réponse D'], correct: 3 }
        ]
    },
    {
        id: 'boss-hard-1',
        name: 'Boss Exemple Raid Difficile',
        category: 'hard',
        icon: '⚔️',
        questions: [
            { question: 'Quelle phase est la plus dangereuse ?', options: ['Phase 1', 'Phase 2', 'Phase 3', 'Toutes'], correct: 3 },
            { question: 'Question 2 ?', options: ['Réponse A', 'Réponse B', 'Réponse C', 'Réponse D'], correct: 1 },
            { question: 'Question 3 ?', options: ['Réponse A', 'Réponse B', 'Réponse C', 'Réponse D'], correct: 0 },
            { question: 'Question 4 ?', options: ['Réponse A', 'Réponse B', 'Réponse C', 'Réponse D'], correct: 2 },
            { question: 'Question 5 ?', options: ['Réponse A', 'Réponse B', 'Réponse C', 'Réponse D'], correct: 1 },
            { question: 'Question 6 ?', options: ['Réponse A', 'Réponse B', 'Réponse C', 'Réponse D'], correct: 3 },
            { question: 'Question 7 ?', options: ['Réponse A', 'Réponse B', 'Réponse C', 'Réponse D'], correct: 0 },
            { question: 'Question 8 ?', options: ['Réponse A', 'Réponse B', 'Réponse C', 'Réponse D'], correct: 2 },
            { question: 'Question 9 ?', options: ['Réponse A', 'Réponse B', 'Réponse C', 'Réponse D'], correct: 1 },
            { question: 'Question 10 ?', options: ['Réponse A', 'Réponse B', 'Réponse C', 'Réponse D'], correct: 3 }
        ]
    },
    {
        id: 'boss-nightmare-dragaryle',
        name: 'Dragaryle',
        category: 'nightmare',
        icon: '🐉',
        questions: [
            { question: 'À quel pourcentage de HP Dragaryle lance-t-il sa première Fear ?', options: ['100%', '90%', '70%', '50%'], correct: 1 },
            { question: 'À quel pourcentage de HP apparaît le Shield qui déclenche la phase Lightning ?', options: ['75%', '60%', '50%', '40%'], correct: 2 },
            { question: 'Combien de joueurs doivent être désignés comme "line baiters" pour attirer les clones ?', options: ['2 joueurs', '3 joueurs', '4 joueurs', '5 joueurs'], correct: 2 },
            { question: 'Que doit faire le tank pour bien gérer les lignes vertes ?', options: ['Les tanker de face', 'Les placer loin des spawns de tours', 'Les ignorer', 'Les partager avec le groupe'], correct: 1 },
            { question: 'Pendant la phase Fear, combien de sauts fait le boss avant de retourner au centre ?', options: ['1 saut', '2 sauts puis 1 au centre', '3 sauts', '4 sauts'], correct: 1 },
            { question: 'Combien de tours doivent gérer les orbes Lightning en phase sous 50% HP ?', options: ['3 tours', '4 tours', '5 tours', '6 tours'], correct: 2 },
            { question: 'Quelle attaque du boss est blockable pendant la phase Towers ?', options: ['Les swipes', 'Le Charge et Pounce', 'Les green lines', 'Le Jump'], correct: 1 },
            { question: 'Après 50% HP, quelle nouvelle mécanique apparaît avec les orbes ?', options: ['Orbes rouges', 'Orbes jaunes uniquement', 'Orbes jaunes et bleues', 'Aucune orbe'], correct: 2 },
            { question: 'Dans la rotation normale, que fait le boss après l\'Eye Mech ?', options: ['Fear phase', 'Clone baiters', 'Rancorwood', 'Restart rotation'], correct: 3 },
            { question: 'Quelle est la direction recommandée pour que le tank face le boss ?', options: ['Sud', 'Nord', 'Est', 'Ouest'], correct: 1 }
        ]
    },
    {
        id: 'boss-nightmare-vulkan-zairos',
        name: 'Vulkan & Zairos',
        category: 'nightmare',
        icon: '🔥❄️',
        questions: [
            { question: 'À quels pourcentages les boss déclenchent-ils les Tethers en Phase 1 ?', options: ['90%, 70% et 20%', '80%, 50% et 10%', '100% et 50%', 'Toutes les 2 minutes'], correct: 0 },
            { question: 'Pourquoi faut-il synchroniser le DPS des deux groupes en Phase 1 ?', options: ['Pour booster les dégâts', 'Pour gérer les Tethers simultanément', 'Pour éviter le wipe à 100%', 'Ce n\'est pas nécessaire'], correct: 1 },
            { question: 'À quel pourcentage de HP Zairos active-t-il son Bouclier ?', options: ['70%', '60%', '50%', '30%'], correct: 2 },
            { question: 'En Phase 2, à quel moment les stacks commencent-ils à s\'accumuler ?', options: ['Dès le début (100% HP)', 'À 50% HP', 'Après le premier cristal', 'Toutes les 30 secondes'], correct: 0 },
            { question: 'À quel pourcentage apparaissent les premiers orbes élémentaires en Phase 2 ?', options: ['100%', '95%', '90%', '85%'], correct: 1 },
            { question: 'À quel pourcentage les cristaux élémentaires apparaissent-ils en Phase 2 ?', options: ['60%', '50%', '40%', '30%'], correct: 2 },
            { question: 'Comment obtenir le buff de protection pendant les "Punches" en Phase 2 ?', options: ['Utiliser un blocage parfait', 'Sauter au bon moment', 'Être du côté approprié selon son groupe', 'S\'éloigner au bord de la salle'], correct: 2 },
            { question: 'Comment se déplacent les orbes jaunes quand on les attaque ?', options: ['Elles viennent vers le joueur', 'Elles s\'éloignent du joueur', 'Elles tournent en cercle', 'Elles explosent immédiatement'], correct: 1 },
            { question: 'Comment se déplacent les orbes bleues quand on les attaque ?', options: ['Elles s\'éloignent du joueur', 'Elles sont attirées vers le joueur', 'Elles ne bougent pas', 'Elles montent en l\'air'], correct: 1 },
            { question: 'Où doivent être menées les orbes bleues pour valider la mécanique ?', options: ['Vers les piliers jaunes', 'Vers le centre de la salle', 'Vers les piliers bleus', 'Vers le boss adverse'], correct: 2 }
        ]
    }
];

// ==========================================
// GLOBAL STATE
// ==========================================
let currentUsername = null;
let currentBoss = null;
let currentQuestionIndex = 0;
let userAnswers = [];
let selectedAnswer = null;
let timerInterval = null;
let timeRemaining = 20;

// ==========================================
// CORE FUNCTIONS
// ==========================================

async function init() {
    // Check if user already has a username
    const storedUsername = localStorage.getItem('tlQuizUsername');

    if (storedUsername) {
        currentUsername = storedUsername.trim();
        const displayUsername = document.getElementById('display-username');
        if (displayUsername) {
            displayUsername.innerHTML = `Connecté en tant que : <strong>${currentUsername}</strong>`;
        }
        showScreen('boss-selection');
        await renderBossList();
    } else {
        showScreen('username-screen');
        setupUsernameScreen();
    }

    setupEventListeners();
}

function setupUsernameScreen() {
    const usernameInput = document.getElementById('username-input');
    const startBtn = document.getElementById('start-btn');
    usernameInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') handleUsernameSubmit(); });
    startBtn.addEventListener('click', handleUsernameSubmit);
}

async function handleUsernameSubmit() {
    try {
        const usernameInput = document.getElementById('username-input');
        const username = usernameInput.value.trim();
        if (!username || username.length < 3) {
            alert('⚠️ Votre pseudo doit faire au moins 3 caractères');
            return;
        }
        currentUsername = username;
        localStorage.setItem('tlQuizUsername', username);
        const success = await saveUserProfile(username);
        if (success) {
            console.log("User profile saved successfully");
            const displayUsername = document.getElementById('display-username');
            if (displayUsername) {
                displayUsername.innerHTML = `Connecté en tant que : <strong>${currentUsername}</strong>`;
            }
            showScreen('boss-selection');
            await renderBossList();
        } else {
            alert('❌ Erreur de connexion Firebase. Vérifiez la configuration Firestore.');
        }
    } catch (error) {
        alert('❌ Erreur : ' + error.message);
    }
}

async function renderBossList() {
    const grids = {
        dim6: document.getElementById('boss-grid-dim6'),
        hard: document.getElementById('boss-grid-hard'),
        nightmare: document.getElementById('boss-grid-nightmare')
    };
    Object.values(grids).forEach(g => g.innerHTML = '');
    const cleanName = currentUsername ? currentUsername.toLowerCase().trim() : "";
    const isAdmin = cleanName.includes('darkshou') || cleanName.includes('tipeuz');

    // Show/hide get-admin-code-btn
    const adminCodeBtn = document.getElementById('get-admin-code-btn');
    if (adminCodeBtn) {
        adminCodeBtn.style.display = isAdmin ? 'inline-block' : 'none';
    }

    for (const boss of BOSSES) {
        const card = await createBossCard(boss);
        if (grids[boss.category]) grids[boss.category].appendChild(card);
    }
}

async function createBossCard(boss) {
    const card = document.createElement('div');
    card.className = 'boss-card';
    const attemptData = await getUserAttempt(currentUsername, boss.id);
    const canRetake = canRetakeQuiz(attemptData);
    const timeRem = getTimeRemainingFromAttempt(attemptData);

    // Admin check: robust trimming and check
    const cleanName = currentUsername ? currentUsername.toLowerCase().trim() : "";
    const isAdmin = cleanName.includes('darkshou') || cleanName.includes('tipeuz');

    // Debug log for admin status
    console.log(`Checking boss ${boss.name}: user=${cleanName}, isAdmin=${isAdmin}, canRetake=${canRetake}`);

    let statusText = '';
    let statusClass = '';
    if (attemptData && !canRetake) {
        statusText = `Score: ${attemptData.score}/${attemptData.totalQuestions} 🔒 ${timeRem}`;
        statusClass = 'locked';
        card.classList.add('locked');
    } else if (attemptData && canRetake) {
        statusText = `Dernier: ${attemptData.score}/${attemptData.totalQuestions} ✅ Dispo`;
        statusClass = 'available';
    } else {
        statusText = 'Jamais tenté';
        statusClass = 'new';
    }

    card.innerHTML = `
        <div class="boss-icon">${boss.icon}</div>
        <h3>${boss.name} ${isAdmin ? '<span class="admin-badge">⭐</span>' : ''}</h3>
        <p class="boss-score ${statusClass}">${statusText}</p>
        ${!canRetake && isAdmin ? `<button class="admin-unlock-btn" data-boss-id="${boss.id}">🔑 Code Admin</button>` : ''}
    `;

    if (canRetake) {
        card.addEventListener('click', () => startQuiz(boss));
    } else {
        card.style.cursor = 'not-allowed';
        card.style.opacity = '0.6';
        if (isAdmin) {
            const unlockBtn = card.querySelector('.admin-unlock-btn');
            if (unlockBtn) unlockBtn.addEventListener('click', (e) => { e.stopPropagation(); handleAdminUnlock(boss.id); });
        }
    }
    return card;
}

async function handleAdminUnlock(bossId) {
    const code = prompt('🔑 Entrez le code admin du jour :');
    if (!code) return;
    const result = await unlockBossWithAdminCode(currentUsername, bossId, code);
    alert(result.success ? '✅ ' + result.message : '❌ ' + result.message);
    if (result.success) await renderBossList();
}

async function startQuiz(boss) {
    const attemptData = await getUserAttempt(currentUsername, boss.id);
    if (!canRetakeQuiz(attemptData)) {
        alert(`⏰ Réessayez dans ${getTimeRemainingFromAttempt(attemptData)}.`);
        return;
    }
    currentBoss = boss;
    currentQuestionIndex = 0;
    userAnswers = [];
    showScreen('quiz-screen');
    document.getElementById('boss-name').textContent = boss.name;
    document.getElementById('total-q').textContent = boss.questions.length;
    renderQuestion();
}

function renderQuestion() {
    const question = currentBoss.questions[currentQuestionIndex];
    document.getElementById('current-q').textContent = currentQuestionIndex + 1;
    document.getElementById('question-text').textContent = question.question;
    const progressPercent = ((currentQuestionIndex + 1) / currentBoss.questions.length) * 100;
    document.getElementById('quiz-progress-bar').style.width = `${progressPercent}%`;
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    question.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = option;
        btn.addEventListener('click', () => selectAnswer(index));
        optionsContainer.appendChild(btn);
    });
    selectedAnswer = null;
    document.getElementById('submit-answer').disabled = true;
    startTimer();
}

function startTimer() {
    if (timerInterval) clearInterval(timerInterval);
    timeRemaining = 20;
    updateTimerDisplay();
    timerInterval = setInterval(() => {
        timeRemaining--;
        updateTimerDisplay();
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            if (selectedAnswer === null) selectedAnswer = -1;
            submitAnswer();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const timerText = document.getElementById('timer-text');
    const timerCircle = document.getElementById('timer-circle');
    timerText.textContent = timeRemaining;
    const offset = 220 - (timeRemaining / 20) * 220;
    timerCircle.style.strokeDashoffset = offset;
    if (timeRemaining <= 10) {
        timerText.classList.add('warning');
        timerCircle.classList.add('warning');
    } else {
        timerText.classList.remove('warning');
        timerCircle.classList.remove('warning');
    }
}

function selectAnswer(index) {
    selectedAnswer = index;
    document.querySelectorAll('.option-btn').forEach((btn, i) => {
        btn.classList.remove('selected');
        if (i === index) btn.classList.add('selected');
    });
    document.getElementById('submit-answer').disabled = false;
}

function submitAnswer() {
    if (timerInterval) clearInterval(timerInterval);
    userAnswers.push(selectedAnswer);
    currentQuestionIndex++;
    if (currentQuestionIndex < currentBoss.questions.length) renderQuestion();
    else showResults();
}

async function showResults() {
    let score = 0;
    currentBoss.questions.forEach((q, i) => { if (userAnswers[i] === q.correct) score++; });
    await saveAttempt(currentUsername, currentBoss.id, score, currentBoss.questions.length);
    showScreen('results-screen');
    document.getElementById('results-boss-name').textContent = currentBoss.name;
    document.getElementById('score-value').textContent = score;
    const messages = ['Besoin d\'entraînement...', 'Pas mal !', 'Bien joué !', 'Excellent !', 'Parfait ! 🏆'];
    const messageIndex = Math.min(Math.floor(score / 2.1), messages.length - 1);
    document.getElementById('score-message').textContent = messages[messageIndex];
}

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

function setupEventListeners() {
    document.getElementById('back-btn').addEventListener('click', () => { showScreen('boss-selection'); renderBossList(); });
    document.getElementById('submit-answer').addEventListener('click', submitAnswer);
    document.getElementById('retry-btn').addEventListener('click', () => { showScreen('boss-selection'); renderBossList(); });
    document.getElementById('home-btn').addEventListener('click', () => { showScreen('boss-selection'); renderBossList(); });

    // Logout button
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            localStorage.removeItem('tlQuizUsername');
            currentUsername = null;
            location.reload(); // Quickest way to reset app state
        });
    }

    // Admin Get Code button
    const adminCodeBtn = document.getElementById('get-admin-code-btn');
    if (adminCodeBtn) {
        adminCodeBtn.addEventListener('click', () => {
            window.showTodayCode();
        });
    }
}

window.showTodayCode = function () {
    const code = generateDailyCode();
    alert(`🔑 Code admin du jour :\n\n${code}`);
};

// Start app
document.addEventListener('DOMContentLoaded', init);
