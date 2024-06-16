const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const Content = require('../models/Content');

const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadPath = path.join(__dirname, '..', 'uploads');
        if (!fs.existsSync(uploadPath)) {
            fs.mkdirSync(uploadPath);
        }
        cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

const upload = multer({ storage });

router.post('/content', upload.single('image'), async (req, res) => {
    try {
        const contentData = JSON.parse(req.body.content);
        const newContent = {
            ...contentData,
            imageUrl: req.file ? `/uploads/${req.file.filename}` : '',
        };

        const savedContent = await saveContentToDB(newContent);

        res.status(201).json(savedContent);
    } catch (error) {
        console.error('Error storing data in DB:', error);
        res.status(500).json({ error: 'Failed to store content' });
    }
});

const saveContentToDB = async (content) => {
    const newContent = new Content(content);
    await newContent.save();
    return newContent;
};

router.get('/content', async (req, res) => {
    try {
        const contents = await Content.find();
        res.json(contents);
    } catch (error) {
        console.error('Error fetching contents from DB:', error);
        res.status(500).json({ error: 'Failed to fetch contents' });
    }
});

router.get('/uploads/:imageName', (req, res) => {
    const imageName = req.params.imageName;
    res.sendFile(path.join(__dirname, '..', 'uploads', imageName));
});


module.exports = router;
