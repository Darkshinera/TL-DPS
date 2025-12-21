const express = require('express');
const multer  = require('multer');
const path    = require('path');
const fs      = require('fs');

const app = express();
// Pour Render : prend PORT de l'environnement, sinon 3000 en local
const PORT = process.env.PORT || 3000;

// Dossier où seront stockés les logs
const uploadFolder = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadFolder)) {
  fs.mkdirSync(uploadFolder);
}

// Configuration de Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadFolder);
  },
  filename: (req, file, cb) => {
    // Nom temporaire, on renomme après lecture
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage });

// Servir la page HTML (formulaire)
app.use(express.static(path.join(__dirname, 'public')));

// Route pour TÉLÉCHARGER un log (force download)
const logsFolder = path.join(__dirname, 'uploads');

app.get('/logs/:name', (req, res) => {
  const fileName = req.params.name;
  const filePath = path.join(logsFolder, fileName);
  res.download(filePath, fileName, (err) => {
    if (err) {
      console.error('Erreur téléchargement :', err);
      if (!res.headersSent) {
        res.status(404).send('Fichier introuvable');
      }
    }
  });
});

// Route d'upload avec renommage + lien de DL
app.post('/upload', upload.single('combatlog'), (req, res) => {
});
