import express from 'express';

const app = express();

const server = app.listen(3000, () => {
  console.log('Server running on port 3000');
});

app.get('/', (req, res) => {
    res.send('Hello World');
  });

export { app, server };  // Export both app and server for later control
