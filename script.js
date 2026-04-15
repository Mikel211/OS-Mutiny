// ==========================================================================
// OS.MUTINY V2.0 - JAVASCRIPT
// THÈME : Flux post-boot & Icônes Glitch Tech
// ==========================================================================

// --- 1. SÉLECTION DES ÉLÉMENTS V2 ---
const bootScreen = document.getElementById('boot-screen');
const mainHub = document.getElementById('main-hub');
const displayContainer = document.getElementById('display-container');
const consoleWindow = document.getElementById('console-window');
const terminalLogs = document.getElementById('terminal-logs');

const scannerView = document.getElementById('scanner-view');
const crewView = document.getElementById('crew-view');
const socialsView = document.getElementById('socials-view');

const nathanielTarget = document.getElementById('nathaniel-target');
const crewGrid = document.getElementById('crew-grid');

// --- 2. GESTION DU BOOT FLUX (3 ÉTAPES) ---
// ÉTAPE 2.1 : Boot Screen s'affiche au chargement
window.addEventListener('load', () => {
    // Après 3.5 secondes, on passe à l'étape 2.2 (Le Hub)
    setTimeout(() => {
        bootScreen.classList.add('hidden'); // Cache le boot screen
        mainHub.classList.remove('hidden'); // Affiche le Hub Brutaliste BMTH
        consoleWindow.classList.remove('hidden'); // Affiche la console logs
        addLog("S Y S T E M_B 0 O T_C O M P L E T 3 .");
        addLog("[O P 3 N I N G // H U B]");
    }, 3500); 
});

// ÉTAPE 2.2 : Hub de Navigation (Visible)
// ÉTAPE 2.3 : Sélectionner un menu (Cliquer -> showSubMenu)

// --- 3. BASE DE DONNÉES ÉQUIPAGE V2 (Icônes Glitch Tech & Noms BMTH) ---
// *PÉDAGOGIE MIKEL:* Pour ajouter un pirate, créez un nouvel objet ici.
const crewData = [
    { 
        id: "char_marg.obj", 
        nom: "M 4 R G 0 T", 
        role: "// V 1 S 1 0 N", 
        stability: 88, 
        bio: "> Cartographie sensorielle. Écholocalisation active.", 
        icon: "<svg class='glitch-icon' viewBox='0 0 100 100' style='filter: sepia(30%) hue-rotate(170deg);'><path d='M20 20 L80 20 L80 80 L20 80 Z' fill='none' stroke='#00ff41' stroke-width='2'/><circle cx='50' cy='50' r='10' fill='none' stroke='#00ff41' stroke-width='2'/><path d='M30 40 L40 50 L30 60' fill='none' stroke='#00ff41' stroke-width='1'/><path d='M70 40 L60 50 L70 60' fill='none' stroke='#00ff41' stroke-width='1'/></svg>" 
    },
    { 
        id: "char_syl.obj", 
        nom: "S Y L 4 S", 
        role: "// V 0 1 X", 
        stability: 95, 
        bio: "> Protocoles diplomatiques et archives poétiques.", 
        icon: "<svg class='glitch-icon' viewBox='0 0 100 100' style='filter: sepia(30%) hue-rotate(170deg);'><path d='M50 10 L60 40 L50 80 L40 40 Z' fill='none' stroke='#00ff41' stroke-width='2'/><line x1='10' y1='50' x2='90' y2='50' stroke='#00ff41' stroke-width='1' stroke-dasharray='4,4'/><circle cx='50' cy='50' r='5' fill='#00ff41'/></svg>" 
    }
];

// --- 4. AFFICHAGE DES SOUS-MENUS V2 ---
// Fonction pour afficher un sous-menu et cacher le Hub
function showSubMenu(viewName) {
    mainHub.classList.add('hidden'); 
    displayContainer.classList.remove('hidden'); 

    scannerView.classList.add('hidden');
    crewView.classList.add('hidden');

    if(viewName === 'crew') {
        crewView.classList.remove('hidden');
        addLog("[O P 3 N I N G // C R 3 W _ W I K I]");
        renderCrew(); 
        renderNathanielCard(); 
    } else if (viewName === 'art') {
        scannerView.classList.remove('hidden');
        addLog("[O P 3 N I N G // A R T _ S C 4 N N 3 R]");
    }
}

// Fonction pour fermer une vue et retourner au Hub
function closeView(viewName) {
    displayContainer.classList.add('hidden'); // Cache le container
    mainHub.classList.remove('hidden'); // Réaffiche le Hub Brutaliste
    addLog(`[C L 0 S 1 N G // ${viewName.toUpperCase()}]`);
}

// --- 5. LOGIQUE DES FICHES ÉQUIPAGE V2 ---

// 5A. Affiche Nathaniel (Capitaine) avec ses Sliders
// *PÉDAGOGIE MIKEL:* Les sliders n'ont pas besoin d'être déclarés globalement car on les cherche à l'intérieur de la fiche.
function renderNathanielCard() {
    nathanielTarget.innerHTML = `
        <article class="glass-window card warning-active" style="width: 100%; max-width: 600px; margin: 0 auto;">
            <div class="window-titlebar"><span>[E R R _ M U 7 I N Y // O V E R R 1 D 3]</span></div>
            <div class="window-content mono-font">
                <h2 class="sigil-font fire-text" style="font-size: 1.2rem; margin-bottom: 5px; color: #ff003c;">N 4 T H 4 N I E L</h2>
                <p class="mono-font" style="color: var(--neon-blue); margin-bottom: 15px;">// C 4 P 1 T 4 I N E</p>
                <div style="font-size: 2.5rem; text-align: center; margin-bottom: 15px;">
                    <svg class='glitch-icon fire-text' viewBox='0 0 100 100' style='width: 60px; height: 60px;'><path d='M50 10 L60 30 L80 40 L60 50 L50 80 L40 50 L20 40 L40 30 Z' fill='none' stroke='#ff003c' stroke-width='2'/><circle cx='50' cy='50' r='5' fill='#ff003c'/><path d='M30 70 L50 90 L70 70 L50 60 Z' fill='#ff003c'/></svg>
                </div>
                <p class="mono-font" style="font-size: 0.8rem; color: #aaa; margin-bottom: 15px; height: 40px;">> ${getStatusLog(5, 10)}</p>
                <div class="mono-font">
                    <div style="margin-bottom: 15px;">
                        <label>S T 4 B 1 L 1 T Y : <span id="val-stability" style="color: #ff003c">5</span>%</label>
                        <input type="range" id="slider-stability" min="0" max="100" value="5" style="width: 100%; accent-color: #ff003c;">
                    </div>
                    <div>
                        <label>E M O T I O N (Surchauffe) : <span id="val-emotion" style="color: var(--neon-blue)">10</span>%</label>
                        <input type="range" id="slider-emotion" min="0" max="100" value="10" style="width: 100%; accent-color: #ff4500;">
                    </div>
                </div>
            </div>
        </article>
    `;
    // *PÉDAGOGIE MIKEL:* Ajoutez les écouteurs d'événements après avoir injecté le HTML.
    setupNathanielSliders();
}

// 5B. Logique de texte conditionnelle pour Nathaniel
function getStatusLog(stability, emotion) {
    if (stability < 40) return "⚠️ RISQUE DE MUTINERIE CRITIQUE";
    if (emotion > 80) return "🔥 SURCHAUFFE COLLIER IMMINENTE";
    return "Calcul tactique normal.";
}

// 5C. Configuration des Sliders Nathaniel
function setupNathanielSliders() {
    const sliderStability = document.getElementById('slider-stability');
    const sliderEmotion = document.getElementById('slider-emotion');
    const valStability = document.getElementById('val-stability');
    const valEmotion = document.getElementById('val-emotion');
    const stabilityFill = nathanielTarget.querySelector('.gauge-fill'); // Jauge Nathaniel
    
    sliderStability.addEventListener('input', (event) => {
        valStability.textContent = event.target.value;
        nathanielTarget.querySelector('.mono-font p').textContent = `> ${getStatusLog(event.target.value, sliderEmotion.value)}`;
        // *PÉDAGOGIE MIKEL:* Pour modifier les stats visuellement, on modifie la jauge Nathaniel.
        stabilityFill.style.width = event.target.value + '%';
        if (event.target.value < 50) {
            stabilityFill.style.background = '#ff003c';
            nathanielTarget.querySelector('.sigil-font').classList.add('fire-text');
        } else {
            stabilityFill.style.background = 'var(--neon-green)';
            nathanielTarget.querySelector('.sigil-font').classList.remove('fire-text');
        }
    });

    sliderEmotion.addEventListener('input', (event) => {
        valEmotion.textContent = event.target.value;
        nathanielTarget.querySelector('.mono-font p').textContent = `> ${getStatusLog(sliderStability.value, event.target.value)}`;
        if (event.target.value > 80) {
            nathanielTarget.querySelector('.card').classList.add('warning-active');
        } else {
            nathanielTarget.querySelector('.card').classList.remove('warning-active');
        }
    });
}

// 5D. Affiche Margot et Silas (Équipage normal)
function renderCrew() {
    crewGrid.innerHTML = crewData.map(char => `
        <article class="glass-window card">
            <div class="window-titlebar"><span>[${char.id}]</span></div>
            <div class="window-content">
                <h2 class="sigil-font" style="font-size: 1.2rem; margin-bottom: 5px; color: #fff;">${char.nom}</h2>
                <p class="mono-font" style="color: var(--neon-blue); margin-bottom: 15px;">// ${char.role}</p>
                <div style="width: 60px; height: 60px; text-align: center; margin: 0 auto 15px auto;">
                    ${char.icon} </div>
                <p class="mono-font" style="font-size: 0.8rem; color: #aaa; margin-bottom: 15px; height: 40px;">${char.bio}</p>
                <div class="mono-font">
                    <div style="display: flex; justify-content: space-between; font-size: 0.8rem;">
                        <span>S T 4 B 1 L 1 T Y</span><span style="color: var(--neon-green)">${char.stability}%</span>
                    </div>
                    <div class="gauge-track">
                        <div class="gauge-fill" style="width: ${char.stability}%; background: var(--neon-green); box-shadow: 0 0 8px var(--neon-green);"></div>
                    </div>
                </div>
            </div>
        </article>
    `).join('');
}

// --- 6. LOGIQUE SCANNER ART & LOGS (Inchangée) ---
function switchTab(clickedBtn, imageSrc) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    clickedBtn.classList.add('active');
    document.getElementById('art-image').src = imageSrc;
    addLog(`[SCANNER] Archive ciblée : ${imageSrc}`);
}

function addLog(message) {
    terminalLogs.innerHTML += `<li>> ${message}</li>`;
    terminalLogs.parentElement.scrollTop = terminalLogs.parentElement.scrollHeight;
}