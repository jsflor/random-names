'use strict';

var uniqueRandomArray = require('unique-random-array');
var names = require('./names.json');

module.exports = {
    all: names,
    random: uniqueRandomArray(names)
}