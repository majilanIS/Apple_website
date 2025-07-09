 const express = require('express')
const app = express()
const port = 7779

app.listen(port, (err) => {
    console.log(`this is express waiting on http://localhost:7779`);
});

// app.get('/', (req, res) => {
//     res.send('Hello World!')
//   })
app.use(express.static(Apple_Website));