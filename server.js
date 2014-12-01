/**
 * Created by STI on 12/1/2014.
 */
var express = require('express');

var app = express();

app.use(express.static(__dirname));

app.listen(process.env.PORT || 5000);