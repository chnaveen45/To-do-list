
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const TodoModel = require('./Models/Todo'); 

const app = express(); 


const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const postlogin = require('./routes/postlogin'); 
const loginRoute = require('./routes/Login');

app.use(cors());
app.use(express.json());


mongoose.connect('mongodb://127.0.0.1:27017/book', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});


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


app.put('/update/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { task } = req.body;
    const updatedTask = await TodoModel.findByIdAndUpdate(id, { task }, { new: true });
    res.json(updatedTask);
  } catch (err) {
    res.status(500).json({ error: 'Error updating task' });
  }
});


app.delete('/delete/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await TodoModel.findByIdAndDelete(id);
    res.json({ message: 'Task deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Error deleting task' });
  }
});


app.use('/postlogin', postlogin);
app.use('/login', loginRoute);


const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
