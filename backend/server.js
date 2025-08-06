const express = require('express');
const cors = require('cors');
const pdfRoutes = require('./routes/pdfRoutes');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use('/api', pdfRoutes);

app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
