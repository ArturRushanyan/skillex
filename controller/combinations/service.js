function generateItems(inputArray) {
    let items = [];
    let letterCode = 65; // using ASCII codes

    inputArray.forEach((count, idx) => {
        let prefix = String.fromCharCode(letterCode + idx);
        for (let i = 1; i <= count; i++) {
            items.push(`${prefix}${i}`);
        }
    });

    return items;
}

function backtrack(items, length, start, result, combo = []) {
    if (combo.length === length) {
        // check no same prefix
        let prefixes = combo.map((c) => c[0]);
        if (new Set(prefixes).size === combo.length) {
            result.push([...combo]);
        }
        return;
    }

    for (let i = start; i < items.length; i++) {
        combo.push(items[i]);
        backtrack(items, length, i + 1, result, combo);
        combo.pop();
    }
}

function generateCombinations(items, length) {
    let result = [];
    backtrack(items, length, 0, result);
    return result;
}


module.exports ={
    generateItems,
    generateCombinations
}