// const express = require('express');
// const path = require('path');
// const fs = require('fs');
// const app = express();
// const PORT = 3000;

// // servir carpeta /public
// app.use(express.static(path.join(__dirname, 'public')));

// // servir carpeta /images
// app.use('/images', express.static(path.join(__dirname, 'images')));

// // endpoint que devuelve la lista de imágenes
// app.get('/api/images', (req, res) => {
//   const dir = path.join(__dirname, 'images');
//   fs.readdir(dir, (err, files) => {
//     if (err) return res.status(500).json({ error: 'Error leyendo imágenes' });
//     const pngs = files.filter(f => f.endsWith('.png'));
//     res.json(pngs);
//   });
// });

// app.listen(PORT, () => console.log(`http://localhost:${PORT}`));

const express = require('express');
const path = require('path');
const fs = require('fs');
const open = require('open');
const app = express();
const PORT = process.env.PORT || 3000;

// servir carpeta /public
app.use(express.static(path.join(__dirname, 'public')));

// servir carpeta /images
app.use('/images', express.static(path.join(__dirname, 'images')));

// endpoint que devuelve la lista de imágenes
app.get('/api/images', (req, res) => {
  const dir = path.join(__dirname, 'images');
  fs.readdir(dir, (err, files) => {
    if (err) return res.status(500).json({ error: 'Error leyendo imágenes' });
    const pngs = files.filter(f => f.endsWith('.png'));
    res.json(pngs);
  });
});

app.listen(PORT, async () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
  //const open = (await import('open')).default;
  //open(`http://localhost:${PORT}`);
});