const emagify = require('./emagify.js');
const randomElement = require('./emagi-random.js');
const emagiSearch = require('./emagi-search.js');
const madlibThis = require('./madlibs.js');

const userInput = process.argv.slice(2);
const userFunction = userInput[0];
const userParameters = userInput.slice(1);
let result = "";

switch(userFunction) {
    case 'search':
        let searchFor = userParameters[0];
        result = emagiSearch(searchFor).join(" ");
        if(result === "") {
            result = "Your search found no results.";
        }
        break;

    case 'convert':
        result = emagify(userParameters).join(" ");
        break;

    case 'random':
        result = randomElement(userParameters);
        break;

    case 'madlibs':
        result = madlibThis(userParameters);
        break;

    default:
        result = "I don't understand your input function. " +  
        "It's the first word after main.js. I accept the following " +
        "terms:\n convert [emoji1 emoji2 ...], search [emoji], " +
        "and random [emoji1 emoji2 ...]";
        break;
}

console.log(result);