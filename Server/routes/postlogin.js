const express = require('express');
const mongoose = require('mongoose');
const Reg = require('../Models/Reg');
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const newUser = new Reg({ name, email, password });
        await newUser.save();
        res.send({ message: '1 document inserted' });
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: 'Error inserting document' });
    }
});

module.exports = router;
