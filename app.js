const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT;

const path = require('path');

const mongoose = require('mongoose')


// Import the Redis client correctly
// const client = require('./util/redisdb');
// async function init() {
//     const result = await client.get('user:3');
//     console.log('result ->', result)
// }
// init();

const app = express();

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, `${req.url}`));
});

mongoose
    .connect(process.env.MONGODB_ID)
    .then(result => {
        console.log('connected to mongoose')
        app.listen(PORT);
    }).catch(err => {
        console.log(err);
    })

// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });
