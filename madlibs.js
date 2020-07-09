const foodSymbols = require('./emagi-food-symbols.js');
const emotionSymbols = require('./emagi-emotion-symbols.js');
const randomElement = require('./emagi-random.js');

const madlibThis = function(sentence) {
    const madlib = [];
    
    const randomFood = randomElement(foodSymbols);
    const randomEmotion = randomElement(emotionSymbols);

    for(let word of sentence) {
        let currWord = word.toLowerCase();
        if(currWord.includes("food")) {
            let punctuation = currWord.slice(4);
            madlib.push(randomFood + punctuation);
        }

        else if(currWord.includes("emotion")) {
            let punctuation = currWord.slice(7);
            madlib.push(randomEmotion + punctuation);
        }

        else {
            madlib.push(word);
        }
    }
    
    return madlib.join(" ");
}

module.exports = madlibThis;