const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI
mongoose.connect(db)
.then(()=>console.log('connected to the mongodb'))
.catch(err => console.log(err))