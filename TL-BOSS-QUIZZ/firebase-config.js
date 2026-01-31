// Firebase Configuration
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, collection, doc, setDoc, getDoc, getDocs, query, where, orderBy, limit, Timestamp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyA5pNbVHHJ0Vs_9ZHaCjkAi3D8DMARV800",
    authDomain: "tl-boss-quiz.firebaseapp.com",
    projectId: "tl-boss-quiz",
    storageBucket: "tl-boss-quiz.firebasestorage.app",
    messagingSenderId: "77646720882",
    appId: "1:77646720882:web:3d83dce7f24e3da2a5f7eb",
    measurementId: "G-BHYYYR2DTH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ==========================================
// FIRESTORE FUNCTIONS
// ==========================================

// Save user profile
async function saveUserProfile(username) {
    try {
        const userRef = doc(db, 'users', username.toLowerCase());
        await setDoc(userRef, {
            username: username,
            createdAt: Timestamp.now(),
            lastActive: Timestamp.now()
        }, { merge: true });
        return true;
    } catch (error) {
        console.error("Error saving user:", error);
        return false;
    }
}

// Save quiz attempt
async function saveAttempt(username, bossId, score, totalQuestions) {
    try {
        const attemptId = `${username.toLowerCase()}_${bossId}`;
        const attemptRef = doc(db, 'attempts', attemptId);

        await setDoc(attemptRef, {
            username: username,
            bossId: bossId,
            score: score,
            totalQuestions: totalQuestions,
            attemptDate: Timestamp.now(),
            canRetakeAt: Timestamp.fromMillis(Date.now() + (24 * 60 * 60 * 1000))
        });

        return true;
    } catch (error) {
        console.error("Error saving attempt:", error);
        return false;
    }
}

// Get user's attempt for a specific boss
async function getUserAttempt(username, bossId) {
    try {
        const attemptId = `${username.toLowerCase()}_${bossId}`;
        const attemptRef = doc(db, 'attempts', attemptId);
        const attemptSnap = await getDoc(attemptRef);

        if (attemptSnap.exists()) {
            return attemptSnap.data();
        }
        return null;
    } catch (error) {
        console.error("Error getting attempt:", error);
        return null;
    }
}

// Get leaderboard for a specific boss
async function getBossLeaderboard(bossId, limitCount = 10) {
    try {
        const attemptsRef = collection(db, 'attempts');
        const q = query(
            attemptsRef,
            where('bossId', '==', bossId),
            orderBy('score', 'desc'),
            orderBy('attemptDate', 'asc'),
            limit(limitCount)
        );

        const querySnapshot = await getDocs(q);
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

// Unlock boss with admin code
async function unlockBossWithAdminCode(username, bossId, code) {
    const validCode = generateDailyCode();

    if (code !== validCode) {
        return { success: false, message: 'Code incorrect' };
    }

    try {
        const attemptId = `${username.toLowerCase()}_${bossId}`;
        const attemptRef = doc(db, 'attempts', attemptId);

        // Reset the canRetakeAt timestamp to now
        await setDoc(attemptRef, {
            canRetakeAt: Timestamp.now()
        }, { merge: true });

        return { success: true, message: 'Boss débloqué !' };
    } catch (error) {
        console.error("Error unlocking boss:", error);
        return { success: false, message: 'Erreur serveur' };
    }
}

// Check if user can retake quiz
function canRetakeQuiz(attemptData) {
    if (!attemptData || !attemptData.canRetakeAt) return true;

    const now = Date.now();
    const canRetakeTimestamp = attemptData.canRetakeAt.toMillis();

    return now >= canRetakeTimestamp;
}

// Get time remaining until can retake
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

// Admin code generation
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

    const code = Math.abs(hash % 1000000).toString().padStart(6, '0');
    return code;
}

export {
    db,
    saveUserProfile,
    saveAttempt,
    getUserAttempt,
    getBossLeaderboard,
    unlockBossWithAdminCode,
    canRetakeQuiz,
    getTimeRemainingFromAttempt,
    generateDailyCode
};
