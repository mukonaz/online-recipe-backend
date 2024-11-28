// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');
// const dotenv = require('dotenv');

// dotenv.config();

// app.use(cors());
// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(express.json());

// const recipeRoutes = require('./routes/recipeRoutes');
// app.use('/api/recipes', recipeRoutes);


// // MongoDB Connection
// mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
// .then(() => console.log('MongoDB connected'))
// .catch((err) => console.error('Connection error:', err));

// // Start the server
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });


const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// Initialize app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());


// app.post('/api/recipes', (req, res) => {
// const recipeRoutes = require('./routes/recipeRoutes');
// app.use('/api/recipes', recipeRoutes);

// });

const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

const recipeRoutes = require('./routes/recipeRoutes');
app.use('/api/recipes', recipeRoutes);

// Connect to MongoDB and start server
mongoose
  .connect('mongodb+srv://livhumukona9:uDDRgZ6fWjWR6v0P@cluster0.w6pih.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

app.listen(5000, () => console.log('Server running on port 5000'));
