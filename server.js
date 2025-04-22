const express = require('express');
const path = require('path');
const { readDataFromScale } = require('./function_library');

const app = express();
const PORT = 3000;
const SERIAL_PORT = 'COM3';

app.use(express.static(path.join(__dirname, 'public')));

app.get('/read-weight', async (req, res) => {
    try {
        const weight = await readDataFromScale(SERIAL_PORT);
        res.json({ weight });
    } catch (err) {
        res.status(500).json({ error: err.toString() });
    }
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`🌐 Web interface running at http://localhost:${PORT}`);
});
