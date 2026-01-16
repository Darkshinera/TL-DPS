// ===== DONNÉES DU CALENDRIER THRONE AND LIBERTY =====
// Fichier externe : calendar-data.js

// LOGOS DES BOSS
const BOSSLOGOSBASE = {
  'Daigon': 'https://cdn.questlog.gg/throne-and-liberty/assets/GameImage/MapIcon/DEWMFB/DagonOn.webp',
  'Leviathan': 'https://cdn.questlog.gg/throne-and-liberty/assets/GameImage/MapIcon/DEWMFB/LeviathanOn.webp',
  'Pakilo': 'https://cdn.questlog.gg/throne-and-liberty/assets/GameImage/MapIcon/DEWMFB/PakiloNaruOn.webp',
  'Manticus': 'https://cdn.questlog.gg/throne-and-liberty/assets/GameImage/MapIcon/DEWMFB/ManticusOn.webp',
  'Minezerok': 'https://cdn.questlog.gg/throne-and-liberty/assets/GameImage/MapIcon/DEWMB/FB/LichMaenZerokSprite.webp',
  'Grand Aelon': 'https://cdn.questlog.gg/throne-and-liberty/assets/GameImage/MapIcon/DEWMB/FB/SpiritTreeGuardianSprite.webp',
  'Cornelius': 'https://cdn.questlog.gg/throne-and-liberty/assets/GameImage/MapIcon/DEWMB/FB/LivingArmorCornelusSprite.webp',
  'Nirma': 'https://cdn.questlog.gg/throne-and-liberty/assets/GameImage/MapIcon/DEWMB/FB/ElderSemaSprite.webp',
  'Kowazan': 'https://cdn.questlog.gg/throne-and-liberty/assets/GameImage/MapIcon/DEWMB/FB/LycanthropeNSmugglerOn.webp',
  'Morokai': 'https://cdn.questlog.gg/throne-and-liberty/assets/GameImage/MapIcon/DEWMB/FB/ElderTurncoatSprite.webp',
  'Tchernobog': 'https://cdn.questlog.gg/throne-and-liberty/assets/GameImage/MapIcon/DEWMB/FB/BasiliskDarknessOn.webp',
  'Ahzreil': 'https://cdn.questlog.gg/throne-and-liberty/assets/GameImage/MapIcon/DEWMB/FB/DeathAzraelSprite.webp',
  'Adentus': 'https://cdn.questlog.gg/throne-and-liberty/assets/GameImage/MapIcon/DEWMB/FB/BugbearWarderOnSprite.webp',
  'Aridus': 'https://cdn.questlog.gg/throne-and-liberty/assets/GameImage/MapIcon/DEWMB/FB/ElderBlathasarSprite.webp',
  'Excavateur-9': 'https://cdn.questlog.gg/throne-and-liberty/assets/GameImage/MapIcon/DEWMB/FB/KingmineBoomOn.webp',
  'Junobote': 'https://cdn.questlog.gg/throne-and-liberty/assets/GameImage/MapIcon/DEWMB/FB/LesserDemonJunoboatOn.webp',
  'Malakar': 'https://cdn.questlog.gg/throne-and-liberty/assets/GameImage/MapIcon/DEWMB/FB/EvilEyeSurveilantOn.webp',
  'Talus': 'https://cdn.questlog.gg/throne-and-liberty/assets/GameImage/MapIcon/DEWMB/FB/GolemTalusOn.webp',
  'Tevent': 'https://cdn.questlog.gg/throne-and-liberty/assets/GameImage/MapIcon/DEWMW/B/TeventOnSprite.webp',
  'Cordy': 'https://cdn.questlog.gg/throne-and-liberty/assets/GameImage/MapIcon/DEW/BW/B/GiantBroorkOnSprite.webp',
  'Bellandir': 'https://cdn.questlog.gg/throne-and-liberty/assets/GameImage/MapIcon/DEW/MW/B/QueenBlendyOnSprite.webp',
  'Deluznoah': 'https://cdn.questlog.gg/throne-and-liberty/assets/GameImage/MapIcon/DEW/MW/B/DelugeNoahOnSprite.webp',
  'Tevent Ascendant': 'https://cdn.questlog.gg/throne-and-liberty/assets/GameImage/MapIcon/DEWMB/WB/TeventOnSprite.webp',
  'Bellandir Ascendant': 'https://cdn.questlog.gg/throne-and-liberty/assets/GameImage/MapIcon/DEWMB/WB/QueenBlendyOnSprite.webp',
  'Cordy Ascendant': 'https://cdn.questlog.gg/throne-and-liberty/assets/GameImage/MapIcon/DEWMB/WB/GiantBroorkOnSprite.webp',
  'Deluznoah Ascendant': 'https://cdn.questlog.gg/throne-and-liberty/assets/GameImage/MapIcon/DEWMB/WB/DelugeNoahOnSprite.webp',
};

// ICÔNES DES ÉVÉNEMENTS
const EVENTICONS = {
  'Fete des recoltes de peipors': 'https://cdn.questlog.gg/throne-and-liberty/assets/GameImage/MapIcon/DEWMDE/OperationFloweringFaferOnSprite.webp',
  'Toucher curatif pour les betes celestes': 'https://cdn.questlog.gg/throne-and-liberty/assets/GameImage/MapIcon/DEWMDE/HealingTouch001OnSprite.webp',
  'Requiem de lumiere': 'https://cdn.questlog.gg/throne-and-liberty/assets/GameImage/MapIcon/DEWMDE/RequiemofLightOnSprite.webp',
  'Destructeurs des tenebres': 'https://cdn.questlog.gg/throne-and-liberty/assets/GameImage/MapIcon/DEWMDE/DarkDestroyersOnSprite.webp',
  'Mica brun cache': 'https://cdn.questlog.gg/throne-and-liberty/assets/GameImage/MapIcon/DEWMDE/PhlogopiteOnSprite.webp',
  'Rituel des pierres stellaires': 'https://cdn.questlog.gg/throne-and-liberty/assets/GameImage/MapIcon/DEWMDE/StarlightStonesRitualOnSprite.webp',
  'Le meilleur moyen dempecher le pire': 'https://cdn.questlog.gg/throne-and-liberty/assets/GameImage/MapIcon/DEWMDE/BestWorstOnSprite.webp',
  'La ceremonie de passage du Grand arbre': 'https://cdn.questlog.gg/throne-and-liberty/assets/GameImage/MapIcon/DEWMDE/BigTreeSong001OnSprite.webp',
  'Fete du feu': 'https://cdn.questlog.gg/throne-and-liberty/assets/GameImage/MapIcon/DEWMDE/FestivalofFireOnSprite.webp',
  'Cueillette de champignons sanglants': 'https://cdn.questlog.gg/throne-and-liberty/assets/GameImage/MapIcon/DEWMDE/MushroomOnSprite.webp',
  'Concours de louveterie': 'https://cdn.questlog.gg/throne-and-liberty/assets/GameImage/MapIcon/DEWMDE/WolfHuntingContestOnSprite.webp',
  'Operation Acquisition dobsidienne': 'https://cdn.questlog.gg/throne-and-liberty/assets/GameImage/MapIcon/DEWMDE/ObsidianShard001OnSprite.webp',
  'Le sceau du blizzard': 'https://cdn.questlog.gg/throne-and-liberty/assets/GameImage/MapIcon/DEWMDE/FrostStorm001OnSprite.webp',
  'Operation Livraison de talismans': 'https://cdn.questlog.gg/throne-and-liberty/assets/GameImage/MapIcon/DEWMDE/TalismanMission001OnSprite.webp',
  'La caravane du desert': 'https://cdn.questlog.gg/throne-and-liberty/assets/GameImage/MapIcon/DEWMDE/CaravanOnSprite.webp',
  'Mettre fin a la frenesie de mana': 'https://cdn.questlog.gg/throne-and-liberty/assets/GameImage/MapIcon/DEWMDE/ManafloodOnSprite.webp',
  'Rompre le charme du clair de lune': 'https://cdn.questlog.gg/throne-and-liberty/assets/GameImage/MapIcon/DEWMDE/MoonlightOnSprite.webp',
  'Fete des graines de campanule': 'https://cdn.questlog.gg/throne-and-liberty/assets/GameImage/MapIcon/DEWMDE/BellFlowerSeed001OnSprite.webp',
};

// CALENDRIER COMPLET (SEMAINES PAIRES ET IMPAIRES)
    const CALENDAR_DATA = {
      "pair": {

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
            }
};
