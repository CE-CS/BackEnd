"use strict";

const mongoose = require("mongoose");
const databaseURL = 'databaseURL';

mongoose
.connect(databaseUrl, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('MongoDB Connected.'))
.catch((e) => console.log(e));

module.exports = {};

// Should Add codes to use this script. - 03.09