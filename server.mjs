import express from 'express';
import os from 'os';

process.env.NODE_ENV = 'development';

const app = express();
const PORT = process.env.PORT || 3000;
console.log("process.env.PORT", process.env.PORT);

app.get('/', (req, res) => {
    res.send(`Hello, from Pod : ${os.hostname()}`);
})

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log(os.hostname());
})


