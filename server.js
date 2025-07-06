const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const cors = require("cors");
app.use(cors());


// Middleware
app.use(express.json());

// Routes
const taskRoutes = require('./routes/tasks');
app.use('/tasks', taskRoutes);

// Connect to DB and start server
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })

  
  .catch(err => console.log(err));
