import express from 'express';

const app = express();
const port = process.env.port || 8080;

const server = app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.get('/', (req, res) => {
  res.send('Root');
});

app.get('/api/hello', (req, res) => {
    res.send('Hello World');
  });

export { app, server };
