const { FIRST_LETTER_CODE } = require('../../utils/constants')

function generateItems(inputArray) {
    let items = [];

    inputArray.forEach((count, idx) => {
        let prefix = String.fromCharCode(FIRST_LETTER_CODE + idx);
        for (let i = 1; i <= count; i++) {
            items.push(`${prefix}${i}`);
        }
    });

    return items;
}

function generateUniqueCombinations (items, combinationLength) {
    let result = [];
    let itemsLength = items.length;

    if (combinationLength > itemsLength) {
        return result;
    }

    let combinationIndexes = [...Array(combinationLength).keys()];

    while (true) {
        let combo = combinationIndexes.map((i) => items[i]);

        let prefixes = combo.map((c) => c[0]);
        if (new Set(prefixes).size === combo.length) {
            result.push(combo);
        }

        let moveIndex = combinationLength - 1;

        // Move leftwards until we find an index that can still be incremented
        while (
            moveIndex >= 0 &&
            combinationIndexes[moveIndex] ===
            itemsLength - combinationLength + moveIndex
            ) {
            moveIndex--;
        }

        if (moveIndex < 0) {
            break;
        }

        combinationIndexes[moveIndex]++;

        for (let j = moveIndex + 1; j < combinationLength; j++) {
            combinationIndexes[j] = combinationIndexes[j - 1] + 1;
        }
    }

    return result;
}

function generateCombinations(preparedItems, lengthOfCombinations) {
    const uniqueCombinations = generateUniqueCombinations(preparedItems, lengthOfCombinations);
    return uniqueCombinations;
}


module.exports ={
    generateItems,
    generateCombinations
}