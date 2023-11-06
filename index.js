const express = require('express');
const app = express();
const port = 1000;

// Votre tableau de JSON initial
let jsonData = [
  {
    nom: "John Doe",
    âge: 30,
    ville: "Paris"
  },
  {
    nom: "Papie Heian",
    âge: 36,
    ville: "Molain"
  },
  {
    nom: "figma jean viena",
    âge: 30,
    ville: "Antananarivo"
  },
  {
    nom: "Lovasoa",
    âge: 24,
    ville: "Liles"
  },
  {
    nom: "Jane Smith",
    âge: 28,
    ville: "Londres"
  }
];

// Middleware pour prendre en charge les données JSON dans les requêtes POST
app.use(express.json());

// Obtenir le tableau JSON
app.get('/data', (req, res) => {
  res.json(jsonData);
});

// Ajouter un élément au tableau JSON
app.post('/data', (req, res) => {
  const nouvelElement = req.body;
  jsonData.push(nouvelElement);
  res.json({ message: 'Élément ajouté avec succès' });
});

// Supprimer un élément du tableau JSON par index
app.delete('/data/:index', (req, res) => {
  const index = parseInt(req.params.index, 10);
  if (index >= 0 && index < jsonData.length) {
    jsonData.splice(index, 1);
    res.json({ message: 'Élément supprimé avec succès' });
  } else {
    res.status(404).json({ message: 'Index non valide' });
  }
});

app.listen(port, () => {
  console.log(`Serveur écoutant sur le port ${port}`);
});
