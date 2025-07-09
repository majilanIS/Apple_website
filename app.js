 const express = require('express')
const app = express()
const port = 7779

app.listen(port, (err) => {
    console.log(`this is express waiting on http://localhost:7779`);
});

// app.get('/', (req, res) => {
//     res.send('Hello World!')
//   })
const path = require('path');

app.use(express.static(path.join(__dirname))); // serves current directory
