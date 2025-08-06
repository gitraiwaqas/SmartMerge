const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const mergeController = require('../controllers/mergeController');

const upload = multer({ dest: path.join(__dirname, '../uploads/') });

router.post('/merge-pdfs', upload.array('pdfs'), mergeController.mergePDFs);

module.exports = router;
