// Lodash Object which contains all the functionality to the library.
const _ = {

    // Implement _.clamp()
    clamp(number, lower, upper) {
        const lowerClampedValue = Math.max(number, lower);
        const clampedValue = Math.min(lowerClampedValue, upper);
        return clampedValue;
    },

    // Implement .inRange()
    inRange(number, start, end) {
        if (end === undefined) {
            end = start;
            start = 0;
        }
        if (start > end) {
            let temp = end;
            end = start;
            start = temp;
        }
        let isInRange = start <= number && number < end;
        return isInRange;
    },

    // Implement .words()
    words(string) {
        const words = string.split(' ');
        return words;
    },

    // Implement .pad()
    pad(string, length) {
        if (length <= string.length) {
            return string;
        }
        const startPaddingLength =
            Math.floor((length - string.length) / 2);
        const endPaddingLength =
            length - string.length - startPaddingLength;
        const paddedString =
            (' ').repeat(startPaddingLength) +
            string + ' '.repeat(endPaddingLength)
        return paddedString;
    },

    // Implement _.has()
    has(object, key) {
        const hasValue = object[key];
        if (hasValue != undefined) {
            return true;
        }
        return false;
    },

    // Implement _.invert()
    invert(object) {
        let invertedObject = {};
        for (let key in object) {
            const originalValue = object[key];
            invertedObject = {
                originalValue: key
            }
        }
        return invertedObject;
    },

    // Implement _.findKey()
    findKey(object, predicate) {
        for (let key in object) {
            let value = object[key];
            let predicateReturnValue = predicate(value);
            if (predicateReturnValue) {
                return key;
            }
        }
        undefined;
        return undefined;
    },

    // Implement _.drop()
    drop(array, n) {
        if (n === undefined) {
            n = 1;
        }
        let droppedArray = array.slice(n, array.length);
        return droppedArray;
    },

    // Implement _.dropWhile()
    dropWhile(array, predicate) {
        let dropNumber = array.findIndex((element, index) => {
            return !predicate(element, index, array);
        });
        let droppedArray = this.drop(array, dropNumber);
        return droppedArray;
    },

    // Implement _.chunk()
    chunk(array, size = 1) {
        // if(size === undefined) {
        //   set = 1;
        // }
        let arrayChunks = [];
        for (let i = 0; i < array.length; i += size) {
            let arrayChunk = array.slice(i, i + size);
            arrayChunks.push(arrayChunk);
        }
        return arrayChunks;
    }

};

// Do not write or modify code below this line.
module.exports = _;