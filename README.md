[![travis build](https://img.shields.io/travis/jsflor/random-names.svg?style=flat-square)](https://travis-ci.org/jsflor/random-names)
[![codecov coverage](https://img.shields.io/codecov/c/github/jsflor/random-names.svg?style=flat-square)](https://codecov.io/github/jsflor/random-names)
[![version](https://img.shields.io/npm/v/random-names-generator.svg?style=flat-square)](http://npm.im/random-names-generator)
[![downloads](https://img.shields.io/npm/dm/random-names-generator.svg?style=flat-square)](http://npm-stat.com/charts.html?package=random-names-generator&from=2020-10-20)
[![MIT License](https://img.shields.io/npm/l/random-names-generator.svg?style=flat-square)](http://opensource.org/licenses/MIT)

# Random Name Generator
Simplest way to generate random names in JavaScript projects.

## Installation
NPM Installation:

```
    npm install random-names-generator
```

## Usage

### JavaScript
```javascript
    // Make sure to include package
    const names = require('random-names-generator');

    // Load entire array of names
    const allNames = names.all;

    // Generate a single random name
    const randomName = names.random();
```
### React / React Hooks
```javascript
    // Include useState and useEffect hooks
    import {useState, useEffect} from 'react'

    // Import random-names-generator package into the project
    import names from  'random-names-generator'

    // Setting up a randomName state using the useState hook
    const  [randomName,  setRandomName]  =  useState(null);

    // Generating and setting the random name within useEffect
    useEffect(()  => {
        // Generate a random name
        let name = names.random();

    	// Set the randomName state to the generated random name
        setRandomName(name)
    }, [])

    // Return the randomly generated name
    return(
    	<>
    		...
    		<h1>Welcome {randomName}!</h1>
    		...
    	<>
    )
```