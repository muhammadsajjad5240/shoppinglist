const express = require('express')
const app = express()
app.use(express.json())
const path = require('path');
const port = process.env.PORT || 5000;
const Items = require('./database/routes/api/items')
require('./database/index')
// use Routes
app.use('/api/items', Items)
if (process.env.NODE_ENV === 'production') {
    // set static folder
    app.use(express.static('client/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    });
}
app.listen(port, () => console.log(`server is runing on port ${port}`))
