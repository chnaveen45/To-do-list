const mongoose = require('mongoose');

const regSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
});

const Reg = mongoose.model('Reg', regSchema);

module.exports = Reg;
