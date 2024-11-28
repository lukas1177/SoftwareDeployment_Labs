import express from 'express';

const app = express();
const port = process.env.port || 3000;

const server = app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.get('/hello', (req, res) => {
    res.send('Hello World');
  });

export { app, server };  // Export both app and server for later control
