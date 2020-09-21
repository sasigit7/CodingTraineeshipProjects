const MessageMixer = {};

//MessageMixer.countCharacter =  
function countCharacter(inputString, inputCharacter) {
    let count = 0;
    let string = inputString.toLowerCase();
    let character = inputCharacter.toLowerCase();
    for (let i = 0; i < string.length; i++) {
        if (string[i] === character) {
            count++;
        }
    }
    return count;
};

//MessageMixer.capitalizeFirstCharacterOfWords =
function capitalizeFirstCharacterOfWords(string) {
    let arr = string.split(" ");
    for (let i = 0; i < arr.length; i++) {
        let word = arr[i];
        arr[i] = word[0].toUpperCase() + word.substring(1);
    }
    return arr.join(" ");
};

//MessageMixer.reverseWord = 
function reverseWord(word) {
    return word.split("").reverse().join("");
};

// MessageMixer.reverseAllWords = 
function reverseAllWords(sentence) {
    let words = sentence.split(" ");
    for (let i = 0; i < words.length; i++) {
        //words[i] = MessageMixer.reverseWord(words[i]);
        words[i] = reverseWord(words[i]);
    }
    return words.join(" ");
};

//MessageMixer.replaceFirstOccurrence =
function replaceFirstOccurrence(string, toBeReplaced, replaceWith) {
    return string.replace(toBeReplaced, replaceWith);
};

//MessageMixer.replaceAllOccurrences = 
function replaceAllOccurrences(string, toBeReplaced, replaceWith) {
    return string.split(toBeReplaced).join(replaceWith);
};

//MessageMixer.encode = 
function encode(string) {
    let replacementObject = {
        "a": "@",
        "s": "$",
        "i": "!",
        "o": "0"
    };
    for (let key in replacementObject) {
        // string = MessageMixer.replaceAllOccurrences(string, key, replacementObject[key]); 
        string = replaceAllOccurrences(string, key, replacementObject[key]);
    }
    return string;
};

//MessageMixer.palindrome = 
function palindrome(str) {
    //return str + " " + MessageMixer.reverseWord(str);
    return str + " " + reverseWord(str);
}

//MessageMixer.pigLatin = 
function pigLatin(sentence, character) {
    return sentence.split(' ').join(character + ' ');
}

// module.exports = MessageMixer;
//export default MessageMixer;
export {
    countCharacter,
    capitalizeFirstCharacterOfWords,
    reverseWord,
    reverseAllWords,
    replaceFirstOccurrence,
    replaceAllOccurrences,
    encode,
    palindrome,
    pigLatin
};