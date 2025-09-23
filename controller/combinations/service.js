function generateItems(inputArray) {
    let items = [];
    let letterCode = 65; // ASCII code of letter "A"

    for (let i = 0; i < inputArray.length; i++) {
        let prefix = String.fromCharCode(letterCode + i);
        items.push(`${prefix}1`);
    }

    return items;
}
function generateUniqueCombinations(items, combinationLength) {
    let result = [];
    let itemsLength = items.length;

    if (combinationLength > itemsLength) {
        return result;
    }

    let combinationIndexes = [...Array(combinationLength).keys()];

    while (true) {
        let currentCombo = combinationIndexes.map((index) => items[index]);

        let prefixes = currentCombo.map((item) => item[0]);

        result.push(currentCombo);

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

function expandCombinations(combinations, counts) {
    let result = [];

    for (let i = 0; i < counts.length; i++) {
        if (counts[i] === 1) {
            continue;
        }
        const letter = String.fromCharCode(65 + i);

        for (let j = 2; j <= counts[i]; j++) {
            for (let combo of combinations) {
                const indexofItem = combo.indexOf(`${letter}1`);

                if (indexofItem >= 0) {
                    const newCombo = [...combo];
                    newCombo[indexofItem] = `${letter}${j}`;
                    result.push([...newCombo]);
                }
            }
        }
    }

    return result;
}

function generateCombinations(preparedItems, lengthOfCombinations, items) {
    const uniqueCombinations = generateUniqueCombinations(preparedItems, lengthOfCombinations);
    const expendedCombinations = expandCombinations(uniqueCombinations, items)
    return [...uniqueCombinations, ...expendedCombinations];
}


module.exports ={
    generateItems,
    generateCombinations
}