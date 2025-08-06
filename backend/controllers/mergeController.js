const fs = require('fs');
const path = require('path');
const PDFMerger = require('pdf-merger-js');

exports.mergePDFs = async (req, res) => {
  try {
    const merger = new PDFMerger();

    for (const file of req.files) {
      await merger.add(file.path);
    }

    const outputPath = path.join(__dirname, '../merged', `merged-${Date.now()}.pdf`);
    await merger.save(outputPath);

    res.download(outputPath, 'merged.pdf', err => {
      req.files.forEach(f => fs.unlinkSync(f.path));
      fs.unlinkSync(outputPath);
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Merging failed' });
  }
};
