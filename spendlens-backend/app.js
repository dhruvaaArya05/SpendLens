const http = require('http');

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');

//Routers 
const authRouter = require('./routers/authRouter');

const app = express();

const server = http.createServer(app);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded());
app.use(express.json());

app.use(session({
  secret: "mysecretwillalwaysremainsecret",
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24,
    sameSite: 'lax'  // Add this
  }
}));

// Move CORS before routes
app.use(cors({
  credentials: true,
  origin: "http://localhost:5173",
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type']
}));

app.use((req, res, next) => {
  console.log('Hnadling request:', req.url, req.method);
  next();
});

app.use(authRouter);

const DB_PATH = "mongodb+srv://dhruvaa866:dhruvaadbroot%4005@completecoding.z7yhero.mongodb.net/Spendlens?retryWrites=true&w=majority&appName=CompleteCoding";

const PORT = 4000;
mongoose.connect(DB_PATH).then(() => {
  console.log('Connected to MongoDB');
  server.listen(PORT, () => {
    console.log(`server running on address http://localhost:${PORT}`);
  });
}).catch((err) => {
  console.log('Error connecting to MongoDB:', err);
});