# PrimeNumbers
Generate 1000 Prime Numbers beginning with 2. The server-side application is written in Node.js, and the Jade template engine. The client-side uses Bootstrap for a front-end framework and jQuery for event handling. The "Generate" button makes an AJAX call to an API that generates prime numbers and returns the values as a JSON array object.

Installation
============
First clone the repo, then use npm to install the dependencies
- `git clone https://github.com/dgallegos/PrimeNumbers.git` - Clone Prime Numbers repo from GitHub
- `npm install` - Use npm to install dependencies

Start Server
============
Locally start Node.js server at default port
- `npm start` - Starts npm server at http://localhost:3000/

API Example
===========
The server has an API that returns prime numbers as a JSON array object.
- `http://localhost:3000/prime_numbers.json?generate=23` - Generates the first 23 prime numbers
