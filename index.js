const breedFetcher = require('./breedFetcher');
const breedName = process.argv[2];
const word = function (error, body) {
    if (error) {
        console.warn(error)
    } else {
        console.log(body)
    }

}
breedFetcher('Siberian', word)