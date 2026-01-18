// =====================================================
// CALENDRIER THRONE AND LIBERTY - DONNÉES
// Fichier externe : calendar-data.js
// =====================================================

// ===== LOGOS DES BOSS =====
const BOSSLOGOSBASE = {
  "Daigon": "https://cdn.questlog.gg/throne-and-liberty/assets/Game/Image/MapIcon/DE/WM_FB_Dagon_On.webp",
  "Leviathan": "https://cdn.questlog.gg/throne-and-liberty/assets/Game/Image/MapIcon/DE/WM_FB_Leviathan_On.webp",
  "Pakilo": "https://cdn.questlog.gg/throne-and-liberty/assets/Game/Image/MapIcon/DE/WM_FB_PakiloNaru_On.webp",
  "Manticus": "https://cdn.questlog.gg/throne-and-liberty/assets/Game/Image/MapIcon/DE/WM_FB_Manticus_On.webp",
  "Minezerok": "https://cdn.questlog.gg/throne-and-liberty/assets/Game/Image/MapIcon/DE/WM_BFB_LichMaenZerok_Sprite.webp",
  "Grand Aelon": "https://cdn.questlog.gg/throne-and-liberty/assets/Game/Image/MapIcon/DE/WM_BFB_SpiritTreeGuardian_Sprite.webp",
  "Cornelius": "https://cdn.questlog.gg/throne-and-liberty/assets/Game/Image/MapIcon/DE/WM_BFB_LivingArmorCornelus_Sprite.webp",
  "Nirma": "https://cdn.questlog.gg/throne-and-liberty/assets/Game/Image/MapIcon/DE/WM_BFB_ElderSema_Sprite.webp",
  "Kowazan": "https://cdn.questlog.gg/throne-and-liberty/assets/Game/Image/MapIcon/DE/WM_BFB_LycanthropeNSmuggler_On.webp",
  "Morokai": "https://cdn.questlog.gg/throne-and-liberty/assets/Game/Image/MapIcon/DE/WM_BFB_ElderTurncoat_Sprite.webp",
  "Tchernobog": "https://cdn.questlog.gg/throne-and-liberty/assets/Game/Image/MapIcon/DE/WM_BFB_BasiliskDarkness_On.webp",
  "Ahzreil": "https://cdn.questlog.gg/throne-and-liberty/assets/Game/Image/MapIcon/DE/WM_BFB_DeathAzrael_Sprite.webp",
  "Adentus": "https://cdn.questlog.gg/throne-and-liberty/assets/Game/Image/MapIcon/DE/WM_BFB_BugbearWarder_On_Sprite.webp",
  "Aridus": "https://cdn.questlog.gg/throne-and-liberty/assets/Game/Image/MapIcon/DE/WM_BFB_ElderBlathasar_Sprite.webp",
  "Excavateur-9": "https://cdn.questlog.gg/throne-and-liberty/assets/Game/Image/MapIcon/DE/WM_BFB_KingmineBoom_On.webp",
  "Junobote": "https://cdn.questlog.gg/throne-and-liberty/assets/Game/Image/MapIcon/DE/WM_BFB_LesserDemonJunoboat_On.webp",
  "Malakar": "https://cdn.questlog.gg/throne-and-liberty/assets/Game/Image/MapIcon/DE/WM_BFB_EvilEyeSurveilant_On.webp",
  "Talus": "https://cdn.questlog.gg/throne-and-liberty/assets/Game/Image/MapIcon/DE/WM_BFB_GolemTalus_On.webp",
  "Tevent": "https://cdn.questlog.gg/throne-and-liberty/assets/Game/Image/MapIcon/DE/WM_WB_Tevent_On_Sprite.webp",
  "Cordy": "https://cdn.questlog.gg/throne-and-liberty/assets/Game/Image/MapIcon/DE/WB_WB_GiantBroork_On_Sprite.webp",
  "Bellandir": "https://cdn.questlog.gg/throne-and-liberty/assets/Game/Image/MapIcon/DE/WM_WB_QueenBlendy_On_Sprite.webp",
  "Deluznoah": "https://cdn.questlog.gg/throne-and-liberty/assets/Game/Image/MapIcon/DE/WM_WB_DelugeNoah_On_Sprite.webp",
  "Tevent Ascendant": "https://cdn.questlog.gg/throne-and-liberty/assets/Game/Image/MapIcon/DE/WM_BWB_Tevent_On_Sprite.webp",
  "Bellandir Ascendant": "https://cdn.questlog.gg/throne-and-liberty/assets/Game/Image/MapIcon/DE/WM_BWB_QueenBlendy_On_Sprite.webp",
  "Cordy Ascendant": "https://cdn.questlog.gg/throne-and-liberty/assets/Game/Image/MapIcon/DE/WM_BWB_GiantBroork_On_Sprite.webp",
  "Deluznoah Ascendant": "https://cdn.questlog.gg/throne-and-liberty/assets/Game/Image/MapIcon/DE/WM_BWB_DelugeNoah_On_Sprite.webp"

};

const EVENTICONS = {
  "Fete des recoltes de peipors": "https://cdn.questlog.gg/throne-and-liberty/assets/Game/Image/MapIcon/DE/WM_DE_OperationFloweringFafer_On_Sprite.webp",
  "Toucher curatif pour les betes celestes": "https://cdn.questlog.gg/throne-and-liberty/assets/Game/Image/MapIcon/DE/WM_DE_HealingTouch_001_On_Sprite.webp",
  "Requiem de lumiere": "https://cdn.questlog.gg/throne-and-liberty/assets/Game/Image/MapIcon/DE/WM_DE_RequiemofLight_On_Sprite.webp",
  "Destructeurs des tenebres": "https://cdn.questlog.gg/throne-and-liberty/assets/Game/Image/MapIcon/DE/WM_DE_DarkDestroyers_On_Sprite.webp",
  "Mica brun cache": "https://cdn.questlog.gg/throne-and-liberty/assets/Game/Image/MapIcon/DE/WM_DE_Phlogopite_On_Sprite.webp",
  "Rituel des pierres stellaires": "https://cdn.questlog.gg/throne-and-liberty/assets/Game/Image/MapIcon/DE/WM_DE_StarlightStonesRitual_On_Sprite.webp",
  "Le meilleur moyen d'empecher le pire": "https://cdn.questlog.gg/throne-and-liberty/assets/Game/Image/MapIcon/DE/WM_DE_BestWorst_On_Sprite.webp",
  "La ceremonie de passage du Grand arbre": "https://cdn.questlog.gg/throne-and-liberty/assets/Game/Image/MapIcon/DE/WM_DE_BigTreeSong_001_On_Sprite.webp",
  "Fete du feu": "https://cdn.questlog.gg/throne-and-liberty/assets/Game/Image/MapIcon/DE/WM_DE_FestivalofFire_On_Sprite.webp",
  "Cueillette de champignons sanglants": "https://cdn.questlog.gg/throne-and-liberty/assets/Game/Image/MapIcon/DE/WM_DE_Mushroom_On_Sprite.webp",
  "Concours de louveterie": "https://cdn.questlog.gg/throne-and-liberty/assets/Game/Image/MapIcon/DE/WM_DE_WolfHuntingContest_On_Sprite.webp",
  "Operation Acquisition d'obsidienne": "https://cdn.questlog.gg/throne-and-liberty/assets/Game/Image/MapIcon/DE/WM_DE_ObsidianShard_001_On_Sprite.webp",
  "Le sceau du blizzard": "https://cdn.questlog.gg/throne-and-liberty/assets/Game/Image/MapIcon/DE/WM_DE_FrostStorm_001_On_Sprite.webp",
  "Operation : Livraison de talismans": "https://cdn.questlog.gg/throne-and-liberty/assets/Game/Image/MapIcon/DE/WM_DE_TalismanMission_001_On_Sprite.webp",
  "La caravane du desert": "https://cdn.questlog.gg/throne-and-liberty/assets/Game/Image/MapIcon/DE/WM_DE_Caravan_On_Sprite.webp",
  "Mettre fin a la frenesie de mana": "https://cdn.questlog.gg/throne-and-liberty/assets/Game/Image/MapIcon/DE/WM_DE_Manaflood_On_Sprite.webp",
  "Rompre le charme du clair de lune": "https://cdn.questlog.gg/throne-and-liberty/assets/Game/Image/MapIcon/DE/WM_DE_Moonlight_On_Sprite.webp",
  "Fete des graines de campanule": "https://cdn.questlog.gg/throne-and-liberty/assets/Game/Image/MapIcon/DE/WM_DE_BellFlowerSeed_001_On_Sprite.webp"
};

// ===== DONNÉES CALENDRIER =====
const CALENDARDATA = {
"impair": {

        //  LUNDI 
        "Lundi": {
          "00h": [
            { name: "La ceremonie de passage du Grand arbre", type: "event" },
            { name: "Mettre fin a la frenesie de mana", type: "event" },
            { name: "Concours de louveterie", type: "event" },
            { name: "Requiem de lumiere", type: "event" },
            { name: "Le meilleur moyen d'empecher le pire", type: "event" },
            { name: "Le sceau du blizzard", type: "event" }
          ],
          "01h": [
            { name: "Daigon", type: "normal" },
            { name: "Excavateur-9", type: "ascendant" }
          ],
          "03h": [
            { name: "Fete des recoltes de peipors", type: "event" },
            { name: "Mica brun cache", type: "event" },
            { name: "Concours de louveterie", type: "event" },
            { name: "Fete des graines de campanule", type: "event" },
            { name: "Le sceau du blizzard", type: "event" },
            { name: "Operation Acquisition d'obsidienne", type: "event" }
          ],
          "06h": [
            { name: "Le meilleur moyen d'empecher le pire", type: "event" },
            { name: "Cueillette de champignons sanglants", type: "event" },
            { name: "Rituel des pierres stellaires", type: "event" },
            { name: "Fete du feu", type: "event" },
            { name: "La ceremonie de passage du Grand arbre", type: "event" },
            { name: "Fete des recoltes de peipors", type: "event" }            
          ],
          "09h": [
            { name: "Operation Acquisition d'obsidienne", type: "event" },
            { name: "Operation : Livraison de talismans", type: "event" },
            { name: "Concours de louveterie", type: "event" },
            { name: "Fete des graines de campanule", type: "event" },
            { name: "Le meilleur moyen d'empecher le pire", type: "event" },
            { name: "Le sceau du blizzard", type: "event" }
          ],
          "12h": [
            { name: "Fete des recoltes de peipors", type: "event" },
            { name: "Mica brun cache", type: "event" },
            { name: "Rituel des pierres stellaires", type: "event" },
            { name: "Toucher curatif pour les betes celestes", type: "event" },
            { name: "Destructeurs des tenebres", type: "event" },
            { name: "Requiem de lumiere", type: "event" }
          ],
          "13h": [
            { name: "Manticus", type: "normal" },
            { name: "Minezerok", type: "ascendant" }
          ],
          "15h": [
            { name: "Le meilleur moyen d'empecher le pire", type: "event" },
            { name: "Cueillette de champignons sanglants", type: "event" },
            { name: "Concours de louveterie", type: "event" },
            { name: "Fete du feu", type: "event" },
            { name: "Requiem de lumiere", type: "event" },
            { name: "La ceremonie de passage du Grand arbre", type: "event" }
          ],
          "16h": [
            { name: "Leviathan", type: "normal" },
            { name: "Junobote", type: "ascendant" }
          ],
          "19h": [
            { name: "Le sceau du blizzard", type: "event" },
            { name: "La caravane du desert", type: "event" },
            { name: "Rituel des pierres stellaires", type: "event" },
            { name: "Toucher curatif pour les betes celestes", type: "event" },
            { name: "Operation Acquisition d'obsidienne", type: "event" },
            { name: "Operation : Livraison de talismans", type: "event" }
          ],
          "20h": [
            { name: "Pakilo", type: "normal" },
            { name: "Morokai", type: "ascendant" }
          ],
          "22h": [
            { name: "La ceremonie de passage du Grand arbre", type: "event" },
            { name: "Mettre fin a la frenesie de mana", type: "event" },
            { name: "Concours de louveterie", type: "event" },
            { name: "Requiem de lumiere", type: "event" },
            { name: "Fete des recoltes de peipors", type: "event" },
            { name: "Destructeurs des tenebres", type: "event" }
          ],
          "23h": [
            { name: "Daigon", type: "normal" },
            { name: "Cornelius", type: "ascendant" }
          ]
        },

        //  MARDI 
        "Mardi": {
          "00h": [
            { name: "Operation Acquisition d'obsidienne", type: "event" },
            { name: "Operation : Livraison de talismans", type: "event" },
            { name: "Rituel des pierres stellaires", type: "event" },
            { name: "Fete du feu", type: "event" },
            { name: "Le sceau du blizzard", type: "event" },
            { name: "Le meilleur moyen d'empecher le pire", type: "event" }
          ],
          "01h": [
            { name: "Pakilo", type: "normal" },
            { name: "Adentus", type: "ascendant" }
          ],
          "03h": [
            { name: "Fete des recoltes de peipors", type: "event" },
            { name: "Cueillette de champignons sanglants", type: "event" },
            { name: "Concours de louveterie", type: "event" },
            { name: "Fete des graines de campanule", type: "event" },
            { name: "Fete du feu", type: "event" },
            { name: "La ceremonie de passage du Grand arbre", type: "event" }
          ],
          "06h": [
            { name: "Le meilleur moyen d'empecher le pire", type: "event" },
            { name: "Mettre fin a la frenesie de mana", type: "event" },
            { name: "Rituel des pierres stellaires", type: "event" },
            { name: "Toucher curatif pour les betes celestes", type: "event" },
            { name: "Requiem de lumiere", type: "event" },
            { name: "Fete du feu", type: "event" }
          ],
          "09h": [
            { name: "Fete des recoltes de peipors", type: "event" },
            { name: "Mica brun cache", type: "event" },
            { name: "Concours de louveterie", type: "event" },
            { name: "Fete du feu", type: "event" },
            { name: "La ceremonie de passage du Grand arbre", type: "event" },
            { name: "Destructeurs des tenebres", type: "event" }
          ],
          "12h": [
            { name: "Operation Acquisition d'obsidienne", type: "event" },
            { name: "Operation : Livraison de talismans", type: "event" },
            { name: "Rituel des pierres stellaires", type: "event" },
            { name: "Toucher curatif pour les betes celestes", type: "event" },
            { name: "Destructeurs des tenebres", type: "event" },
            { name: "Fete du feu", type: "event" }
          ],
          "13h": [
            { name: "Daigon", type: "normal" },
            { name: "Tchernobog", type: "ascendant" }
          ],
          "15h": [
            { name: "Le sceau du blizzard", type: "event" },
            { name: "La caravane du desert", type: "event" },
            { name: "Concours de louveterie", type: "event" },
            { name: "Requiem de lumiere", type: "event" },
            { name: "Operation : Livraison de talismans", type: "event" },
            { name: "Le meilleur moyen d'empecher le pire", type: "event" }
          ],
          "16h": [
            { name: "Manticus", type: "normal" },
            { name: "Ahzreil", type: "ascendant" }
          ],
          "19h": [
            { name: "Le meilleur moyen d'empecher le pire", type: "event" },
            { name: "Cueillette de champignons sanglants", type: "event" },
            { name: "Rituel des pierres stellaires", type: "event" },
            { name: "Fete du feu", type: "event" },
            { name: "Rompre le charme du clair de lune", type: "event" },
            { name: "La ceremonie de passage du Grand arbre", type: "event" }
          ],
          "20h": [
            { name: "Leviathan", type: "normal" },
            { name: "Aridus", type: "ascendant" },
            { name: "Tevent Ascendant", type: "ascendant" },
            { name: "Bellandir Ascendant", type: "ascendant" }
          ],
          "22h": [
            { name: "La ceremonie de passage du Grand arbre", type: "event" },
            { name: "Mettre fin a la frenesie de mana", type: "event" },
            { name: "Concours de louveterie", type: "event" },
            { name: "Toucher curatif pour les betes celestes", type: "event" },
            { name: "Operation : Livraison de talismans", type: "event" },
            { name: "Fete des recoltes de peipors", type: "event" }
          ],
          "23h": [
            { name: "Manticus", type: "normal" },
            { name: "Malakar", type: "ascendant" }
          ]
        },

        //  MERCREDI 
        "Mercredi": {
          "00h": [
            { name: "Le sceau du blizzard", type: "event" },
            { name: "La caravane du desert", type: "event" },
            { name: "Rituel des pierres stellaires", type: "event" },
            { name: "Requiem de lumiere", type: "event" },
            { name: "Fete du feu", type: "event" },
            { name: "Operation Acquisition d'obsidienne", type: "event" }
          ],
          "01h": [
            { name: "Pakilo", type: "normal" },
            { name: "Kowazan", type: "ascendant" }
          ],
          "03h": [
            { name: "Le meilleur moyen d'empecher le pire", type: "event" },
            { name: "Cueillette de champignons sanglants", type: "event" },
            { name: "Concours de louveterie", type: "event" },
            { name: "Toucher curatif pour les betes celestes", type: "event" },
            { name: "Operation Acquisition d'obsidienne", type: "event" },
            { name: "Operation : Livraison de talismans", type: "event" }
          ],
          "06h": [
            { name: "Le sceau du blizzard", type: "event" },
            { name: "La caravane du desert", type: "event" },
            { name: "Rituel des pierres stellaires", type: "event" },
            { name: "Fete des graines de campanule", type: "event" },
            { name: "Fete des recoltes de peipors", type: "event" },
            { name: "Requiem de lumiere", type: "event" }
          ],
          "09h": [
            { name: "La ceremonie de passage du Grand arbre", type: "event" },
            { name: "Mettre fin a la frenesie de mana", type: "event" },
            { name: "Concours de louveterie", type: "event" },
            { name: "Requiem de lumiere", type: "event" },
            { name: "Le meilleur moyen d'empecher le pire", type: "event" },
            { name: "Le sceau du blizzard", type: "event" }
          ],
          "12h": [
            { name: "Fete des recoltes de peipors", type: "event" },
            { name: "Mica brun cache", type: "event" },
            { name: "Concours de louveterie", type: "event" },
            { name: "Fete des graines de campanule", type: "event" },
            { name: "Le sceau du blizzard", type: "event" },
            { name: "Operation Acquisition d'obsidienne", type: "event" }
          ],
          "13h": [
            { name: "Leviathan", type: "normal" },
            { name: "Talus", type: "ascendant" }
          ],
          "15h": [
            { name: "Le meilleur moyen d'empecher le pire", type: "event" },
            { name: "Cueillette de champignons sanglants", type: "event" },
            { name: "Rituel des pierres stellaires", type: "event" },
            { name: "Fete du feu", type: "event" },
            { name: "La ceremonie de passage du Grand arbre", type: "event" },
            { name: "Fete des graines de campanule", type: "event" }
          ],
          "16h": [
            { name: "Manticus", type: "normal" },
            { name: "Grand Aelon", type: "ascendant" }
          ],
          "19h": [
            { name: "Operation Acquisition d'obsidienne", type: "event" },
            { name: "Operation : Livraison de talismans", type: "event" },
            { name: "Concours de louveterie", type: "event" },
            { name: "Fete des graines de campanule", type: "event" },
            { name: "Le meilleur moyen d'empecher le pire", type: "event" },
            { name: "Le sceau du blizzard", type: "event" }
          ],
          "20h": [
            { name: "Daigon", type: "normal" },
            { name: "Aridus", type: "ascendant" },
            { name: "Cordy", type: "normal" },
            { name: "Tevent", type: "normal" }
          ],
          "22h": [
            { name: "Fete des recoltes de peipors", type: "event" },
            { name: "Mica brun cache", type: "event" },
            { name: "Rituel des pierres stellaires", type: "event" },
            { name: "Toucher curatif pour les betes celestes", type: "event" },
            { name: "Destructeurs des tenebres", type: "event" },
            { name: "Requiem de lumiere", type: "event" }
          ],
          "23h": [
            { name: "Pakilo", type: "normal" },
            { name: "Nirma", type: "ascendant" }
          ]
        },

        //  JEUDI 
        "Jeudi": {
          "00h": [
            { name: "", type: "event" },
            { name: "", type: "event" },
            { name: "", type: "event" },
            { name: "", type: "event" },
            { name: "", type: "event" },
            { name: "", type: "event" }
          ],
          "01h": [
            { name: "Leviathan", type: "normal" },
            { name: "Ahzreil", type: "ascendant" }
          ],
          "03h": [
            { name: "Le sceau du blizzard", type: "event" },
            { name: "La caravane du desert", type: "event" },
            { name: "Rituel des pierres stellaires", type: "event" },
            { name: "Toucher curatif pour les betes celestes", type: "event" },
            { name: "Operation Acquisition d'obsidienne", type: "event" },
            { name: "Operation : Livraison de talismans", type: "event" }
          ],
          "06h": [
            { name: "La ceremonie de passage du Grand arbre", type: "event" },
            { name: "Mettre fin a la frenesie de mana", type: "event" },
            { name: "Concours de louveterie", type: "event" },
            { name: "Requiem de lumiere", type: "event" },
            { name: "Fete des recoltes de peipors", type: "event" },
            { name: "Destructeurs des tenebres", type: "event" }
          ],
          "09h": [
            { name: "Operation Acquisition d'obsidienne", type: "event" },
            { name: "Operation : Livraison de talismans", type: "event" },
            { name: "Rituel des pierres stellaires", type: "event" },
            { name: "Fete du feu", type: "event" },
            { name: "Le sceau du blizzard", type: "event" },
            { name: "Le meilleur moyen d'empecher le pire", type: "event" }
          ],
          "12h": [
            { name: "Fete des recoltes de peipors", type: "event" },
            { name: "Cueillette de champignons sanglants", type: "event" },
            { name: "Concours de louveterie", type: "event" },
            { name: "Toucher curatif pour les betes celestes", type: "event" },
            { name: "Requiem de lumiere", type: "event" },
            { name: "Fete du feu", type: "event" }
          ],
          "13h": [
            { name: "Daigon", type: "normal" },
            { name: "Excavateur-9", type: "ascendant" }
          ],
          "15h": [
            { name: "Le meilleur moyen d'empecher le pire", type: "event" },
            { name: "Mettre fin a la frenesie de mana", type: "event" },
            { name: "Rituel des pierres stellaires", type: "event" },
            { name: "Toucher curatif pour les betes celestes", type: "event" },
            { name: "Requiem de lumiere", type: "event" },
            { name: "Fete du feu", type: "event" }
          ],
          "16h": [
            { name: "Manticus", type: "normal" },
            { name: "Minezerok", type: "ascendant" }
          ],
          "19h": [
            { name: "Fete des recoltes de peipors", type: "event" },
            { name: "Mica brun cache", type: "event" },
            { name: "Concours de louveterie", type: "event" },
            { name: "Fete du feu", type: "event" },
            { name: "La ceremonie de passage du Grand arbre", type: "event" },
            { name: "Destructeurs des tenebres", type: "event" }
          ],
          "20h": [
            { name: "Leviathan", type: "normal" },
            { name: "Junobote", type: "ascendant" }
          ],
          "22h": [
            { name: "Operation Acquisition d'obsidienne", type: "event" },
            { name: "Operation : Livraison de talismans", type: "event" },
            { name: "Rituel des pierres stellaires", type: "event" },
            { name: "Toucher curatif pour les betes celestes", type: "event" },
            { name: "Destructeurs des tenebres", type: "event" },
            { name: "Fete du feu", type: "event" }
          ],
          "23h": [
            { name: "Pakilo", type: "normal" },
            { name: "Morokai", type: "ascendant" }
          ]
        },

        //  VENDREDI 
        "Vendredi": {
          "00h": [
            { name: "Le sceau du blizzard", type: "event" },
            { name: "La caravane du desert", type: "event" },
            { name: "Concours de louveterie", type: "event" },
            { name: "Requiem de lumiere", type: "event" },
            { name: "Operation : Livraison de talismans", type: "event" },
            { name: "Le meilleur moyen d'empecher le pire", type: "event" }
          ],
          "01h": [
            { name: "Daigon", type: "normal" },
            { name: "Cornelius", type: "ascendant" }
          ],
          "03h": [
            { name: "Le meilleur moyen d'empecher le pire", type: "event" },
            { name: "Cueillette de champignons sanglants", type: "event" },
            { name: "Rituel des pierres stellaires", type: "event" },
            { name: "Fete du feu", type: "event" },
            { name: "Requiem de lumiere", type: "event" },
            { name: "La ceremonie de passage du Grand arbre", type: "event" }
          ],
          "06h": [
            { name: "La ceremonie de passage du Grand arbre", type: "event" },
            { name: "Mettre fin a la frenesie de mana", type: "event" },
            { name: "Concours de louveterie", type: "event" },
            { name: "Toucher curatif pour les betes celestes", type: "event" },
            { name: "Operation : Livraison de talismans", type: "event" },
            { name: "Fete des recoltes de peipors", type: "event" }
          ],
          "09h": [
            { name: "Le sceau du blizzard", type: "event" },
            { name: "La caravane du desert", type: "event" },
            { name: "Rituel des pierres stellaires", type: "event" },
            { name: "Requiem de lumiere", type: "event" },
            { name: "Fete du feu", type: "event" },
            { name: "Operation Acquisition d'obsidienne", type: "event" }
          ],
          "12h": [
            { name: "Le meilleur moyen d'empecher le pire", type: "event" },
            { name: "Cueillette de champignons sanglants", type: "event" },
            { name: "Concours de louveterie", type: "event" },
            { name: "Toucher curatif pour les betes celestes", type: "event" },
            { name: "Operation Acquisition d'obsidienne", type: "event" },
            { name: "Rompre le charme du clair de lune", type: "event" }
          ],
          "13h": [
            { name: "Pakilo", type: "normal" },
            { name: "Adentus", type: "ascendant" }
          ],
          "15h": [
            { name: "Le sceau du blizzard", type: "event" },
            { name: "La caravane du desert", type: "event" },
            { name: "Rituel des pierres stellaires", type: "event" },
            { name: "Fete des graines de campanule", type: "event" },
            { name: "Fete des recoltes de peipors", type: "event" },
            { name: "Requiem de lumiere", type: "event" }
          ],
          "16h": [
            { name: "Daigon", type: "normal" },
            { name: "Tchernobog", type: "ascendant" }
          ],
          "19h": [
            { name: "La ceremonie de passage du Grand arbre", type: "event" },
            { name: "Mettre fin a la frenesie de mana", type: "event" },
            { name: "Concours de louveterie", type: "event" },
            { name: "Requiem de lumiere", type: "event" },
            { name: "Le meilleur moyen d'empecher le pire", type: "event" },
            { name: "Le sceau du blizzard", type: "event" }
          ],
          "20h": [
            { name: "Manticus", type: "normal" },
            { name: "Ahzreil", type: "ascendant" },
            { name: "Bellandir", type: "normal" },
            { name: "Deluznoah", type: "normal" }
          ],
          "22h": [
            { name: "Fete des recoltes de peipors", type: "event" },
            { name: "Mica brun cache", type: "event" },
            { name: "Concours de louveterie", type: "event" },
            { name: "Fete des graines de campanule", type: "event" },
            { name: "Le sceau du blizzard", type: "event" },
            { name: "Operation Acquisition d'obsidienne", type: "event" }
          ],
          "23h": [
            { name: "Leviathan", type: "normal" },
            { name: "Aridus", type: "ascendant" }
          ]
        },

        //  SAMEDI 
        "Samedi": {
          "00h": [
            { name: "Le meilleur moyen d'empecher le pire", type: "event" },
            { name: "Cueillette de champignons sanglants", type: "event" },
            { name: "", type: "event" },
            { name: "Fete du feu", type: "event" },
            { name: "La ceremonie de passage du Grand arbre", type: "event" },
            { name: "Fete des recoltes de peipors", type: "event" }
          ],
          "01h": [
            { name: "Manticus", type: "normal" },
            { name: "Malakar", type: "ascendant" }
          ],
          "03h": [
            { name: "Operation Acquisition d'obsidienne", type: "event" },
            { name: "Rompre le charme du clair de lune", type: "event" },
            { name: "Concours de louveterie", type: "event" },
            { name: "Fete des graines de campanule", type: "event" },
            { name: "Le meilleur moyen d'empecher le pire", type: "event" },
            { name: "Le sceau du blizzard", type: "event" }
          ],
          "06h": [
            { name: "Fete des recoltes de peipors", type: "event" },
            { name: "Mica brun cache", type: "event" },
            { name: "Rituel des pierres stellaires", type: "event" },
            { name: "Toucher curatif pour les betes celestes", type: "event" },
            { name: "Destructeurs des tenebres", type: "event" },
            { name: "Requiem de lumiere", type: "event" }
          ],
          "09h": [
            { name: "Le meilleur moyen d'empecher le pire", type: "event" },
            { name: "Cueillette de champignons sanglants", type: "event" },
            { name: "Concours de louveterie", type: "event" },
            { name: "Fete du feu", type: "event" },
            { name: "Requiem de lumiere", type: "event" },
            { name: "La ceremonie de passage du Grand arbre", type: "event" }
          ],
          "12h": [
            { name: "Le sceau du blizzard", type: "event" },
            { name: "La caravane du desert", type: "event" },
            { name: "Rituel des pierres stellaires", type: "event" },
            { name: "Toucher curatif pour les betes celestes", type: "event" },
            { name: "Operation Acquisition d'obsidienne", type: "event" },
            { name: "Operation : Livraison de talismans", type: "event" }
          ],
          "13h": [
            { name: "Pakilo", type: "normal" },
            { name: "Kowazan", type: "ascendant" }
          ],
          "15h": [
            { name: "La ceremonie de passage du Grand arbre", type: "event" },
            { name: "Mettre fin a la frenesie de mana", type: "event" },
            { name: "Concours de louveterie", type: "event" },
            { name: "Requiem de lumiere", type: "event" },
            { name: "Fete des recoltes de peipors", type: "event" },
            { name: "Destructeurs des tenebres", type: "event" }
          ],
          "16h": [
            { name: "Leviathan", type: "normal" },
            { name: "Talus", type: "ascendant" }
          ],
          "19h": [
            { name: "Operation Acquisition d'obsidienne", type: "event" },
            { name: "Operation : Livraison de talismans", type: "event" },
            { name: "Rituel des pierres stellaires", type: "event" },
            { name: "Fete du feu", type: "event" },
            { name: "Le sceau du blizzard", type: "event" },
            { name: "Le meilleur moyen d'empecher le pire", type: "event" }
          ],
          "20h": [
            { name: "Manticus", type: "normal" },
            { name: "Grand Aelon", type: "ascendant" },
            { name: "Tevent Ascendant", type: "ascendant" },
            { name: "Bellandir Ascendant", type: "ascendant" }
          ],
          "22h": [
            { name: "Fete des recoltes de peipors", type: "event" },
            { name: "Cueillette de champignons sanglants", type: "event" },
            { name: "Concours de louveterie", type: "event" },
            { name: "Fete des graines de campanule", type: "event" },
            { name: "Fete du feu", type: "event" },
            { name: "La ceremonie de passage du Grand arbre", type: "event" }
          ],
          "23h": [
            { name: "Daigon", type: "normal" },
            { name: "Adentus", type: "ascendant" }
          ]
        },

        //  DIMANCHE 
        "Dimanche": {
          "00h": [
            { name: "Le meilleur moyen d'empecher le pire", type: "event" },
            { name: "Mettre fin a la frenesie de mana", type: "event" },
            { name: "Rituel des pierres stellaires", type: "event" },
            { name: "Toucher curatif pour les betes celestes", type: "event" },
            { name: "Requiem de lumiere", type: "event" },
            { name: "Fete du feu", type: "event" }
          ],
          "01h": [
            { name: "Pakilo", type: "normal" },
            { name: "Nirma", type: "ascendant" }
          ],
          "03h": [
            { name: "Fete des recoltes de peipors", type: "event" },
            { name: "Mica brun cache", type: "event" },
            { name: "Concours de louveterie", type: "event" },
            { name: "Fete du feu", type: "event" },
            { name: "La ceremonie de passage du Grand arbre", type: "event" },
            { name: "Destructeurs des tenebres", type: "event" }
          ],
          "06h": [
            { name: "Operation Acquisition d'obsidienne", type: "event" },
            { name: "Operation : Livraison de talismans", type: "event" },
            { name: "Rituel des pierres stellaires", type: "event" },
            { name: "Toucher curatif pour les betes celestes", type: "event" },
            { name: "Destructeurs des tenebres", type: "event" },
            { name: "Fete du feu", type: "event" }
          ],
          "09h": [
            { name: "Le sceau du blizzard", type: "event" },
            { name: "La caravane du desert", type: "event" },
            { name: "Concours de louveterie", type: "event" },
            { name: "Requiem de lumiere", type: "event" },
            { name: "Operation : Livraison de talismans", type: "event" },
            { name: "Le meilleur moyen d'empecher le pire", type: "event" }
          ],
          "12h": [
            { name: "Le meilleur moyen d'empecher le pire", type: "event" },
            { name: "Cueillette de champignons sanglants", type: "event" },
            { name: "Rituel des pierres stellaires", type: "event" },
            { name: "Fete du feu", type: "event" },
            { name: "Requiem de lumiere", type: "event" },
            { name: "La ceremonie de passage du Grand arbre", type: "event" }
          ],
          "13h": [
            { name: "Leviathan", type: "normal" },
            { name: "Ahzreil", type: "ascendant" }
          ],
          "15h": [
            { name: "La ceremonie de passage du Grand arbre", type: "event" },
            { name: "Mettre fin a la frenesie de mana", type: "event" },
            { name: "Concours de louveterie", type: "event" },
            { name: "Toucher curatif pour les betes celestes", type: "event" },
            { name: "Rompre le charme du clair de lune", type: "event" },
            { name: "Fete des recoltes de peipors", type: "event" }
          ],
          "16h": [
            { name: "Daigon", type: "normal" },
            { name: "Talus", type: "ascendant" }
          ],
          "19h": [
            { name: "Le sceau du blizzard", type: "event" },
            { name: "La caravane du desert", type: "event" },
            { name: "Rituel des pierres stellaires", type: "event" },
            { name: "Requiem de lumiere", type: "event" },
            { name: "Fete du feu", type: "event" },
            { name: "Operation Acquisition d'obsidienne", type: "event" }
          ],
          "20h": [
            { name: "Manticus", type: "normal" },
            { name: "Minezerok", type: "ascendant" }
          ],
          "22h": [
            { name: "Le meilleur moyen d'empecher le pire", type: "event" },
            { name: "Cueillette de champignons sanglants", type: "event" },
            { name: "Concours de louveterie", type: "event" },
            { name: "Toucher curatif pour les betes celestes", type: "event" },
            { name: "Operation Acquisition d'obsidienne", type: "event" },
            { name: "Operation : Livraison de talismans", type: "event" }
          ],
          "23h": [
            { name: "Leviathan", type: "normal" },
            { name: "Junobote", type: "ascendant" }
          ]
        }
      },

      // 
      // SEMAINE PAIRE
      // 
       "pair": {

        //  LUNDI 
        "Lundi": {
          "00h": [
            { name: "Fete des recoltes de peipors", type: "event" },
            { name: "Mica brun cache", type: "event" },
            { name: "Concours de louveterie", type: "event" },
            { name: "Fete des graines de campanule", type: "event" },
            { name: "Le sceau du blizzard", type: "event" },
            { name: "Operation Acquisition d'obsidienne", type: "event" }
          ],
          "01h": [
            { name: "Daigon", type: "normal" },
            { name: "Adentus", type: "ascendant" }
          ],
          "03h": [
            { name: "Fete des recoltes de peipors", type: "event" },
            { name: "Cueillette de champignons sanglants", type: "event" },
            { name: "Concours de louveterie", type: "event" },
            { name: "Fete des graines de campanule", type: "event" },
            { name: "Le meilleur moyen d'empecher le pire", type: "event" },
            { name: "Fete du feu", type: "event" }
          ],
          "06h": [
            { name: "Operation Acquisition d'obsidienne", type: "event" },
            { name: "Rompre le charme du clair de lune", type: "event" },
            { name: "Concours de louveterie", type: "event" },
            { name: "Fete des graines de campanule", type: "event" },
            { name: "Le meilleur moyen d'empecher le pire", type: "event" },
            { name: "Le sceau du blizzard", type: "event" }
          ],
          "09h": [
            { name: "Fete des recoltes de peipors", type: "event" },
            { name: "Mica brun cache", type: "event" },
            { name: "Rituel des pierres stellaires", type: "event" },
            { name: "Toucher curatif pour les betes celestes", type: "event" },
            { name: "Destructeurs des tenebres", type: "event" },
            { name: "Requiem de lumiere", type: "event" }
          ],
          "12h": [
            { name: "Le meilleur moyen d'empecher le pire", type: "event" },
            { name: "Cueillette de champignons sanglants", type: "event" },
            { name: "Concours de louveterie", type: "event" },
            { name: "Fete du feu", type: "event" },
            { name: "Requiem de lumiere", type: "event" },
            { name: "La ceremonie de passage du Grand arbre", type: "event" }
          ],
          "13h": [
            { name: "Pakilo", type: "normal" },
            { name: "Nirma", type: "ascendant" }
          ],
          "15h": [
            { name: "Le sceau du blizzard", type: "event" },
            { name: "La caravane du desert", type: "event" },
            { name: "Rituel des pierres stellaires", type: "event" },
            { name: "Toucher curatif pour les betes celestes", type: "event" },
            { name: "Operation Acquisition d'obsidienne", type: "event" },
            { name: "Operation : Livraison de talismans", type: "event" }
          ],
          "16h": [
            { name: "Leviathan", type: "normal" },
            { name: "Ahzreil", type: "ascendant" }
          ],
          "19h": [
            { name: "La ceremonie de passage du Grand arbre", type: "event" },
            { name: "Mettre fin a la frenesie de mana", type: "event" },
            { name: "Concours de louveterie", type: "event" },
            { name: "Requiem de lumiere", type: "event" },
            { name: "Fete des recoltes de peipors", type: "event" },
            { name: "Destructeurs des tenebres", type: "event" }
          ],
          "20h": [
            { name: "Daigon", type: "normal" },
            { name: "Excavateur-9", type: "ascendant" }
          ],
          "22h": [
            { name: "Operation Acquisition d'obsidienne", type: "event" },
            { name: "Operation : Livraison de talismans", type: "event" },
            { name: "Rituel des pierres stellaires", type: "event" },
            { name: "Fete du feu", type: "event" },
            { name: "Le sceau du blizzard", type: "event" },
            { name: "Le meilleur moyen d'empecher le pire", type: "event" }
          ],
          "23h": [
            { name: "Manticus", type: "normal" },
            { name: "Minezerok", type: "ascendant" }
          ]
        },

        //  MARDI 
        "Mardi": {
          "00h": [
            { name: "Fete des recoltes de peipors", type: "event" },
            { name: "Cueillette de champignons sanglants", type: "event" },
            { name: "Concours de louveterie", type: "event" },
            { name: "Fete des graines de campanule", type: "event" },
            { name: "Fete du feu", type: "event" },
            { name: "La ceremonie de passage du Grand arbre", type: "event" }
          ],
          "01h": [
            { name: "Leviathan", type: "normal" },
            { name: "Junobote", type: "ascendant" }
          ],
          "03h": [
            { name: "Toucher curatif pour les betes celestes", type: "event" },
            { name: "Mettre fin a la frenesie de mana", type: "event" },
            { name: "Rituel des pierres stellaires", type: "event" },
            { name: "Requiem de lumiere", type: "event" },
            { name: "Fete des recoltes de peipors", type: "event" },
            { name: "Fete du feu", type: "event" }
          ],
          "06h": [
            { name: "Fete des recoltes de peipors", type: "event" },
            { name: "Mica brun cache", type: "event" },
            { name: "Concours de louveterie", type: "event" },
            { name: "Fete du feu", type: "event" },
            { name: "La ceremonie de passage du Grand arbre", type: "event" },
            { name: "Destructeurs des tenebres", type: "event" }
          ],
          "09h": [
            { name: "Operation Acquisition d'obsidienne", type: "event" },
            { name: "Operation : Livraison de talismans", type: "event" },
            { name: "Rituel des pierres stellaires", type: "event" },
            { name: "Toucher curatif pour les betes celestes", type: "event" },
            { name: "Destructeurs des tenebres", type: "event" },
            { name: "Fete du feu", type: "event" }
          ],
          "12h": [
            { name: "Le sceau du blizzard", type: "event" },
            { name: "La caravane du desert", type: "event" },
            { name: "Concours de louveterie", type: "event" },
            { name: "Requiem de lumiere", type: "event" },
            { name: "Rompre le charme du clair de lune", type: "event" },
            { name: "Le meilleur moyen d'empecher le pire", type: "event" }
          ],
          "13h": [
            { name: "Pakilo", type: "normal" },
            { name: "Morokai", type: "ascendant" }
          ],
          "15h": [
            { name: "Le meilleur moyen d'empecher le pire", type: "event" },
            { name: "Cueillette de champignons sanglants", type: "event" },
            { name: "Rituel des pierres stellaires", type: "event" },
            { name: "Fete du feu", type: "event" },
            { name: "Requiem de lumiere", type: "event" },
            { name: "La ceremonie de passage du Grand arbre", type: "event" }
          ],
          "16h": [
            { name: "Daigon", type: "normal" },
            { name: "Cornelius", type: "ascendant" }
          ],
          "19h": [
            { name: "La ceremonie de passage du Grand arbre", type: "event" },
            { name: "Mettre fin a la frenesie de mana", type: "event" },
            { name: "Concours de louveterie", type: "event" },
            { name: "Toucher curatif pour les betes celestes", type: "event" },
            { name: "Operation : Livraison de talismans", type: "event" },
            { name: "Fete des recoltes de peipors", type: "event" }
          ],
          "20h": [
            { name: "Pakilo", type: "normal" },
            { name: "Adentus", type: "ascendant" },
            { name: "Bellandir Ascendant", type: "ascendant" },
            { name: "Tevent Ascendant", type: "ascendant" }
          ],
          "22h": [
            { name: "Le sceau du blizzard", type: "event" },
            { name: "La caravane du desert", type: "event" },
            { name: "Rituel des pierres stellaires", type: "event" },
            { name: "Requiem de lumiere", type: "event" },
            { name: "Fete du feu", type: "event" },
            { name: "Operation Acquisition d'obsidienne", type: "event" }
          ],
          "23h": [
            { name: "Daigon", type: "normal" },
            { name: "Tchernobog", type: "ascendant" }
          ]
        },

        //  MERCREDI 
        "Mercredi": {
          "00h": [
            { name: "Le meilleur moyen d'empecher le pire", type: "event" },
            { name: "Cueillette de champignons sanglants", type: "event" },
            { name: "Concours de louveterie", type: "event" },
            { name: "Toucher curatif pour les betes celestes", type: "event" },
            { name: "Operation Acquisition d'obsidienne", type: "event" },
            { name: "Operation : Livraison de talismans", type: "event" }
          ],
          "01h": [
            { name: "Manticus", type: "normal" },
            { name: "Ahzreil", type: "ascendant" }
          ],
          "03h": [
            { name: "Fete des graines de campanule", type: "event" },
            { name: "La caravane du desert", type: "event" },
            { name: "Rituel des pierres stellaires", type: "event" },
            { name: "Le sceau du blizzard", type: "event" },
            { name: "Fete des recoltes de peipors", type: "event" },
            { name: "Rompre le charme du clair de lune", type: "event" }
          ],
          "06h": [
            { name: "La ceremonie de passage du Grand arbre", type: "event" },
            { name: "Mettre fin a la frenesie de mana", type: "event" },
            { name: "Concours de louveterie", type: "event" },
            { name: "Requiem de lumiere", type: "event" },
            { name: "Le meilleur moyen d'empecher le pire", type: "event" },
            { name: "Le sceau du blizzard", type: "event" }
          ],
          "09h": [
            { name: "Fete des recoltes de peipors", type: "event" },
            { name: "Mica brun cache", type: "event" },
            { name: "Concours de louveterie", type: "event" },
            { name: "Fete des graines de campanule", type: "event" },
            { name: "Le sceau du blizzard", type: "event" },
            { name: "Operation Acquisition d'obsidienne", type: "event" }
          ],
          "12h": [
            { name: "Le meilleur moyen d'empecher le pire", type: "event" },
            { name: "Cueillette de champignons sanglants", type: "event" },
            { name: "Rituel des pierres stellaires", type: "event" },
            { name: "Fete du feu", type: "event" },
            { name: "La ceremonie de passage du Grand arbre", type: "event" },
            { name: "Fete des recoltes de peipors", type: "event" }
          ],
          "13h": [
            { name: "Leviathan", type: "normal" },
            { name: "Aridus", type: "ascendant" }
          ],
          "15h": [
            { name: "Le meilleur moyen d'empecher le pire", type: "event" },
            { name: "Operation : Livraison de talismans", type: "event" },
            { name: "Concours de louveterie", type: "event" },
            { name: "Fete des graines de campanule", type: "event" },
            { name: "Le meilleur moyen d'empecher le pire", type: "event" },
            { name: "Le sceau du blizzard", type: "event" }
          ],
          "16h": [
            { name: "Manticus", type: "normal" },
            { name: "Malakar", type: "ascendant" }
          ],
          "19h": [
            { name: "Fete des recoltes de peipors", type: "event" },
            { name: "Mica brun cache", type: "event" },
            { name: "Rituel des pierres stellaires", type: "event" },
            { name: "Toucher curatif pour les betes celestes", type: "event" },
            { name: "Destructeurs des tenebres", type: "event" },
            { name: "Requiem de lumiere", type: "event" }
          ],
          "20h": [
            { name: "Pakilo", type: "normal" },
            { name: "Kowazan", type: "ascendant" },
            { name: "Tevent", type: "normal" },
            { name: "Cordy", type: "normal" }
          ],
          "22h": [
            { name: "Requiem de lumiere", type: "event" },
            { name: "Le meilleur moyen d'empecher le pire", type: "event" },
            { name: "Concours de louveterie", type: "event" },
            { name: "Fete du feu", type: "event" },
            { name: "Requiem de lumiere", type: "event" },
            { name: "La ceremonie de passage du Grand arbre", type: "event" }
          ],
          "23h": [
            { name: "Leviathan", type: "normal" },
            { name: "Talus", type: "ascendant" }
          ]
        },

        //  JEUDI 
        "Jeudi": {
          "00h": [
            { name: "Le sceau du blizzard", type: "event" },
            { name: "La caravane du desert", type: "event" },
            { name: "Rituel des pierres stellaires", type: "event" },
            { name: "Toucher curatif pour les betes celestes", type: "event" },
            { name: "Operation Acquisition d'obsidienne", type: "event" },
            { name: "Operation : Livraison de talismans", type: "event" }
          ],
          "01h": [
            { name: "Manticus", type: "normal" },
            { name: "Grand Aelon", type: "ascendant" }
          ],
          "03h": [
            { name: "Requiem de lumiere", type: "event" },
            { name: "La ceremonie de passage du Grand arbre", type: "event" },
            { name: "Concours de louveterie", type: "event" },
            { name: "La ceremonie de passage du Grand arbre", type: "event" },
            { name: "Fete des recoltes de peipors", type: "event" },
            { name: "Destructeurs des tenebres", type: "event" }
          ],
          "06h": [
            { name: "Operation Acquisition d'obsidienne", type: "event" },
            { name: "Operation : Livraison de talismans", type: "event" },
            { name: "Rituel des pierres stellaires", type: "event" },
            { name: "Fete du feu", type: "event" },
            { name: "Le sceau du blizzard", type: "event" },
            { name: "Mettre fin a la frenesie de mana", type: "event" }
          ],
          "09h": [
            { name: "Fete des recoltes de peipors", type: "event" },
            { name: "Cueillette de champignons sanglants", type: "event" },
            { name: "Concours de louveterie", type: "event" },
            { name: "Fete des graines de campanule", type: "event" },
            { name: "Fete du feu", type: "event" },
            { name: "La ceremonie de passage du Grand arbre", type: "event" }
          ],
          "12h": [
            { name: "Le meilleur moyen d'empecher le pire", type: "event" },
            { name: "Mettre fin a la frenesie de mana", type: "event" },
            { name: "Rituel des pierres stellaires", type: "event" },
            { name: "Toucher curatif pour les betes celestes", type: "event" },
            { name: "Requiem de lumiere", type: "event" },
            { name: "Fete du feu", type: "event" }
          ],
          "13h": [
            { name: "Daigon", type: "normal" },
            { name: "Adentus", type: "ascendant" }
          ],
          "15h": [
            { name: "Operation Acquisition d'obsidienne", type: "event" },
            { name: "Operation : Livraison de talismans", type: "event" },
            { name: "Concours de louveterie", type: "event" },
            { name: "Fete du feu", type: "event" },
            { name: "La ceremonie de passage du Grand arbre", type: "event" },
            { name: "Destructeurs des tenebres", type: "event" }
          ],
          "16h": [
            { name: "Pakilo", type: "normal" },
            { name: "Nirma", type: "ascendant" }
          ],
          "19h": [
            { name: "Operation Acquisition d'obsidienne", type: "event" },
            { name: "Rompre le charme du clair de lune", type: "event" },
            { name: "Rituel des pierres stellaires", type: "event" },
            { name: "Toucher curatif pour les betes celestes", type: "event" },
            { name: "Fete des graines de campanule", type: "event" },
            { name: "Fete du feu", type: "event" }
          ],
          "20h": [
            { name: "Leviathan", type: "normal" },
            { name: "Ahzreil", type: "ascendant" }
          ],
          "22h": [
            { name: "Le sceau du blizzard", type: "event" },
            { name: "Cueillette de champignons sanglants", type: "event" },
            { name: "Concours de louveterie", type: "event" },
            { name: "Requiem de lumiere", type: "event" },
            { name: "Operation : Livraison de talismans", type: "event" },
            { name: "Le meilleur moyen d'empecher le pire", type: "event" }
          ],
          "23h": [
            { name: "Daigon", type: "normal" },
            { name: "Excavateur-9", type: "ascendant" }
          ]
        },

        //  VENDREDI 
        "Vendredi": {
          "00h": [
            { name: "Le meilleur moyen d'empecher le pire", type: "event" },
            { name: "Cueillette de champignons sanglants", type: "event" },
            { name: "Rituel des pierres stellaires", type: "event" },
            { name: "Fete du feu", type: "event" },
            { name: "Rompre le charme du clair de lune", type: "event" },
            { name: "La ceremonie de passage du Grand arbre", type: "event" }
          ],
          "01h": [
            { name: "Manticus", type: "normal" },
            { name: "Minezerok", type: "ascendant" }
          ],
          "03h": [
            { name: "Toucher curatif pour les betes celestes", type: "event" },
            { name: "Mettre fin a la frenesie de mana", type: "event" },
            { name: "Concours de louveterie", type: "event" },
            { name: "Requiem de lumiere", type: "event" },
            { name: "Operation : Livraison de talismans", type: "event" },
            { name: "Fete des recoltes de peipors", type: "event" }
          ],
          "06h": [
            { name: "Le sceau du blizzard", type: "event" },
            { name: "La caravane du desert", type: "event" },
            { name: "Rituel des pierres stellaires", type: "event" },
            { name: "Requiem de lumiere", type: "event" },
            { name: "Fete du feu", type: "event" },
            { name: "Operation Acquisition d'obsidienne", type: "event" }
          ],
          "09h": [
            { name: "Le meilleur moyen d'empecher le pire", type: "event" },
            { name: "Cueillette de champignons sanglants", type: "event" },
            { name: "Concours de louveterie", type: "event" },
            { name: "Toucher curatif pour les betes celestes", type: "event" },
            { name: "Operation Acquisition d'obsidienne", type: "event" },
            { name: "Operation : Livraison de talismans", type: "event" }
          ],
          "12h": [
            { name: "Le meilleur moyen d'empecher le pire", type: "event" },
            { name: "Cueillette de champignons sanglants", type: "event" },
            { name: "Rituel des pierres stellaires", type: "event" },
            { name: "Fete du feu", type: "event" },
            { name: "Le sceau du blizzard", type: "event" },
            { name: "La ceremonie de passage du Grand arbre", type: "event" }
          ],
          "13h": [
            { name: "Leviathan", type: "normal" },
            { name: "Junobote", type: "ascendant" }
          ],
          "15h": [
            { name: "Le sceau du blizzard", type: "event" },
            { name: "Le meilleur moyen d'empecher le pire", type: "event" },
            { name: "Rituel des pierres stellaires", type: "event" },
            { name: "Fete des graines de campanule", type: "event" },
            { name: "Requiem de lumiere", type: "event" },
            { name: "Le meilleur moyen d'empecher le pire", type: "event" }
          ],
          "16h": [
            { name: "Pakilo", type: "normal" },
            { name: "Morokai", type: "ascendant" }
          ],
          "19h": [
            { name: "Le sceau du blizzard", type: "event" },
            { name: "Mica brun cache", type: "event" },
            { name: "Concours de louveterie", type: "event" },
            { name: "Fete des graines de campanule", type: "event" },
            { name: "Fete du feu", type: "event" },
            { name: "Operation Acquisition d'obsidienne", type: "event" }
          ],
          "20h": [
            { name: "Daigon", type: "normal" },
            { name: "Cornelius", type: "ascendant" },
            { name: "Deluznoah", type: "normal" },
            { name: "Bellandir", type: "normal" }
          ],
          "22h": [
            { name: "Le meilleur moyen d'empecher le pire", type: "event" },
            { name: "Cueillette de champignons sanglants", type: "event" },
            { name: "Rituel des pierres stellaires", type: "event" },
            { name: "Fete du feu", type: "event" },
            { name: "Destructeurs des tenebres", type: "event" },
            { name: "Fete des recoltes de peipors", type: "event" }
          ],
          "23h": [
            { name: "Pakilo", type: "normal" },
            { name: "Adentus", type: "ascendant" }
          ]
        },

        //  SAMEDI 
        "Samedi": {
          "00h": [
            { name: "Operation Acquisition d'obsidienne", type: "event" },
            { name: "Operation : Livraison de talismans", type: "event" },
            { name: "Concours de louveterie", type: "event" },
            { name: "Fete des graines de campanule", type: "event" },
            { name: "Le meilleur moyen d'empecher le pire", type: "event" },
            { name: "Le sceau du blizzard", type: "event" }
          ],
          "01h": [
            { name: "Daigon", type: "normal" },
            { name: "Tchernobog", type: "ascendant" }
          ],
          "03h": [
            { name: "Toucher curatif pour les betes celestes", type: "event" },
            { name: "Mica brun cache", type: "event" },
            { name: "Rituel des pierres stellaires", type: "event" },
            { name: "Toucher curatif pour les betes celestes", type: "event" },
            { name: "Fete des recoltes de peipors", type: "event" },
            { name: "Destructeurs des tenebres", type: "event" }
          ],
          "06h": [
            { name: "Le meilleur moyen d'empecher le pire", type: "event" },
            { name: "Cueillette de champignons sanglants", type: "event" },
            { name: "Concours de louveterie", type: "event" },
            { name: "Fete du feu", type: "event" },
            { name: "Rompre le charme du clair de lune", type: "event" },
            { name: "La ceremonie de passage du Grand arbre", type: "event" }
          ],
          "09h": [
            { name: "Le sceau du blizzard", type: "event" },
            { name: "La caravane du desert", type: "event" },
            { name: "Rituel des pierres stellaires", type: "event" },
            { name: "Toucher curatif pour les betes celestes", type: "event" },
            { name: "Operation Acquisition d'obsidienne", type: "event" },
            { name: "Operation : Livraison de talismans", type: "event" }
          ],
          "12h": [
            { name: "La ceremonie de passage du Grand arbre", type: "event" },
            { name: "Mettre fin a la frenesie de mana", type: "event" },
            { name: "Concours de louveterie", type: "event" },
            { name: "Requiem de lumiere", type: "event" },
            { name: "Destructeurs des tenebres", type: "event" },
            { name: "La ceremonie de passage du Grand arbre", type: "event" }
          ],
          "13h": [
            { name: "Manticus", type: "normal" },
            { name: "Ahzreil", type: "ascendant" }
          ],
          "15h": [
            { name: "Le sceau du blizzard", type: "event" },
            { name: "Mica brun cache", type: "event" },
            { name: "Concours de louveterie", type: "event" },
            { name: "Requiem de lumiere", type: "event" },
            { name: "Le sceau du blizzard", type: "event" },
            { name: "Le meilleur moyen d'empecher le pire", type: "event" }
          ],
          "16h": [
            { name: "Leviathan", type: "normal" },
            { name: "Aridus", type: "ascendant" }
          ],
          "19h": [
            { name: "La ceremonie de passage du Grand arbre", type: "event" },
            { name: "Mettre fin a la frenesie de mana", type: "event" },
            { name: "Concours de louveterie", type: "event" },
            { name: "Fete des graines de campanule", type: "event" },
            { name: "Fete du feu", type: "event" },
            { name: "La ceremonie de passage du Grand arbre", type: "event" }
          ],
          "20h": [
            { name: "Manticus", type: "normal" },
            { name: "Grand Aelon", type: "ascendant" },
            { name: "Bellandir Ascendant", type: "ascendant" },
            { name: "Tevent Ascendant", type: "ascendant" }
          ],
          "22h": [
            { name: "Requiem de lumiere", type: "event" },
            { name: "Le meilleur moyen d'empecher le pire", type: "event" },
            { name: "Rituel des pierres stellaires", type: "event" },
            { name: "Toucher curatif pour les betes celestes", type: "event" },
            { name: "Le sceau du blizzard", type: "event" },
            { name: "Fete du feu", type: "event" }
          ],
          "23h": [
            { name: "Pakilo", type: "normal" },
            { name: "Kowazan", type: "ascendant" }
          ]
        },

        //  DIMANCHE 
        "Dimanche": {
          "00h": [
            { name: "Fete des recoltes de peipors", type: "event" },
            { name: "Mica brun cache", type: "event" },
            { name: "Concours de louveterie", type: "event" },
            { name: "Fete du feu", type: "event" },
            { name: "La ceremonie de passage du Grand arbre", type: "event" },
            { name: "Destructeurs des tenebres", type: "event" }
          ],
          "01h": [
            { name: "Leviathan", type: "normal" },
            { name: "Talus", type: "ascendant" }
          ],
          "03h": [
            { name: "Toucher curatif pour les betes celestes", type: "event" },
            { name: "Fete du feu", type: "event" },
            { name: "Rituel des pierres stellaires", type: "event" },
            { name: "Requiem de lumiere", type: "event" },
            { name: "Destructeurs des tenebres", type: "event" },
            { name: "Fete du feu", type: "event" }
          ],
          "06h": [
            { name: "Le sceau du blizzard", type: "event" },
            { name: "La caravane du desert", type: "event" },
            { name: "Concours de louveterie", type: "event" },
            { name: "Requiem de lumiere", type: "event" },
            { name: "Operation : Livraison de talismans", type: "event" },
            { name: "Le meilleur moyen d'empecher le pire", type: "event" }
          ],
          "09h": [
            { name: "Le meilleur moyen d'empecher le pire", type: "event" },
            { name: "Cueillette de champignons sanglants", type: "event" },
            { name: "Rituel des pierres stellaires", type: "event" },
            { name: "Fete du feu", type: "event" },
            { name: "Requiem de lumiere", type: "event" },
            { name: "La ceremonie de passage du Grand arbre", type: "event" }
          ],
          "12h": [
            { name: "La ceremonie de passage du Grand arbre", type: "event" },
            { name: "Mettre fin a la frenesie de mana", type: "event" },
            { name: "Concours de louveterie", type: "event" },
            { name: "Toucher curatif pour les betes celestes", type: "event" },
            { name: "Rompre le charme du clair de lune", type: "event" },
            { name: "Fete des recoltes de peipors", type: "event" }
          ],
          "13h": [
            { name: "Manticus", type: "normal" },
            { name: "Grand Aelon", type: "ascendant" }
          ],
          "15h": [
            { name: "Le sceau du blizzard", type: "event" },
            { name: "La caravane du desert", type: "event" },
            { name: "Rituel des pierres stellaires", type: "event" },
            { name: "Requiem de lumiere", type: "event" },
            { name: "Fete du feu", type: "event" },
            { name: "Operation Acquisition d'obsidienne", type: "event" }
          ],
          "16h": [
            { name: "Daigon", type: "normal" },
            { name: "Adentus", type: "ascendant" }
          ],
          "19h": [
            { name: "Mettre fin a la frenesie de mana", type: "event" },
            { name: "Cueillette de champignons sanglants", type: "event" },
            { name: "Concours de louveterie", type: "event" },
            { name: "Toucher curatif pour les betes celestes", type: "event" },
            { name: "Operation : Livraison de talismans", type: "event" },
            { name: "Operation Acquisition d'obsidienne", type: "event" }
          ],
          "20h": [
            { name: "Pakilo", type: "normal" },
            { name: "Nirma", type: "ascendant" }
          ],
          "22h": [
            { name: "Le sceau du blizzard", type: "event" },
            { name: "La caravane du desert", type: "event" },
            { name: "Rituel des pierres stellaires", type: "event" },
            { name: "Fete des graines de campanule", type: "event" },
            { name: "Fete des recoltes de peipors", type: "event" },
            { name: "Rompre le charme du clair de lune", type: "event" }
          ],
          "23h": [
            { name: "Leviathan", type: "normal" },
            { name: "Ahzreil", type: "ascendant" }
          ]
        }
      }
    };
