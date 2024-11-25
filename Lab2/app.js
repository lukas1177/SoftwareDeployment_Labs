import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

// Make the server start only when it's explicitly called.
if (process.env.NODE_ENV !== 'test') {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

export default app;