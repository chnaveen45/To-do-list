
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Reg = require('../Models/Reg');

router.post('/', async (req, res) => {
    try {
        const { email, password } = req.body;

       
        const user = await Reg.findOne({ email });

        if (!user) {
            return res.status(401).send({ message: 'Invalid email or password' });
        }

  
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(401).send({ message: 'Invalid email or password' });
        }

      
        const token = jwt.sign({ userId: user._id }, 'your-secret-key', { expiresIn: '1h' });

        res.json({ message: 'Login successful', token });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Server error' });
    }
});

module.exports = router;
