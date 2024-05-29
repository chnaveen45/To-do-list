
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const TodoModel = require('./Models/Todo'); // Make sure the path to your model is correct

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/book', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define routes
app.get('/get', async (req, res) => {
  try {
    const tasks = await TodoModel.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching tasks' });
  }
});

app.post('/add', async (req, res) => {
  try {
    const { task } = req.body;
    const newTask = await TodoModel.create({ task });
    res.json(newTask);
  } catch (err) {
    res.status(500).json({ error: 'Error adding task' });
  }
});


  
  

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
