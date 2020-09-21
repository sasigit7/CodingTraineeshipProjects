// const MessageMixer = require('./messageMixer.js');
//import MessageMixer from './messageMixer';

import {
    countCharacter,
    capitalizeFirstCharacterOfWords,
    reverseWord,
    reverseAllWords,
    replaceFirstOccurrence,
    replaceAllOccurrences,
    encode,
    palindrome,
    pigLatin
} from './messageMixer.js';

function displayMessage() {
    //console.log(MessageMixer.countCharacter("What is the color of the sky?", "t"));
    console.log(countCharacter("What is the color of the sky?", "t"));

    // console.log(MessageMixer.capitalizeFirstCharacterOfWords("What is the color of the sky?"));
    console.log(capitalizeFirstCharacterOfWords("What is the color of the sky?"));

    // console.log(MessageMixer.reverseWord("What is the color of the sky?"));
    console.log(reverseWord("What is the color of the sky?"));

    // console.log(MessageMixer.reverseAllWords("What is the color of the sky?"));
    console.log(reverseAllWords("What is the color of the sky?"));

    // console.log(MessageMixer.replaceFirstOccurrence("What is the color of the sky?", "sky", "water"));
    console.log(replaceFirstOccurrence("What is the color of the sky?", "sky", "water"));

    //console.log(replaceAllOccurrences("What is the color of the sky?", "Why the shape of the earth is round?"));
    console.log(replaceAllOccurrences("What is the color of the sky?", "What is the shape of the earth?"));

    // console.log(MessageMixer.encode("What is the color of the sky?"));
    console.log(encode("What is the color of the sky?"));


    // console.log(MessageMixer.palindrome("What is the color of the sky?"));
    console.log(palindrome("What is the color of the sky?"));

    // console.log(MessageMixer.pigLatin("What is the color of the sky?", "ay "));
    console.log(pigLatin("What is the color of the sky?", "ay "));
}

displayMessage();