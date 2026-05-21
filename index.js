console.log("Hello, world!");

function upperCase(str) {
    return str.toUpperCase();
}

// 配列の各文字数を数える
function countCharacters(arr) {
    let result = {};
    arr.forEach(item => {
        result[item] = item.length;
        console.log(result);
        return result;
    });
}

// 配列の各要素の出現回数を数える
function countOccurrences(arr) {
    let result = {};
    arr.forEach(item => {
        if (result[item]) {
            result[item]++;
        } else {
            result[item] = 1;
        }
    });
    return result;
}
