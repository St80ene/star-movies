/* eslint-disable import/extensions */
import http from 'http';
import express from 'express';
import cors from 'cors';
import vm from 'v-response';
import ApiVersions from './api/index.js';

const app = express();

const server = http.createServer(app);

app.use(cors());

// logger middleware
app.use((req, res, next) => {
  vm.log(`[${new Date().toTimeString()}]: ${req.method} ${req.url}`);
  next();
});

// Add middlewares for parsing JSON and urlencoded data and populating `req.body`
app.use(express.urlencoded({ extended: false }));

// parse requests of content-type - application/json
app.use(express.json());

// simple route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Star Movies' });
});

app.use('/api', ApiVersions);

app.use((req, res) => {
  res.status(404).json({ message: 'Page not found.' });
});

// set port, listen for requests
server.listen(process.env.PORT).on('listening', () => {
  vm.log(`app is listening on ${process.env.PORT}`);
});
