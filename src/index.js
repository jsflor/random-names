const uniqueRandomArray = require('unique-random-array');
const names = require('./names.json');

const mainExport = {
    all: names,
    random: uniqueRandomArray(names)
}

module.exports = mainExport;