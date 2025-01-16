// тернарный оператор
// условие ? значение1 : значение2

let value = -8;
let absValue = value < 0 ?  -value : value;

let passCustom = true;
console.log(passCustom ? "Растаможен" : " не растаможен");



let inn = "26457475";
console.log(inn[0] === "1" ? "Жен." : "Муж.")
console.log(inn.startsWith("1")  ? "Жен." : "Муж.")


// Functions

function getAbs(value) {
    return value < 0 ? -value : value;
    //     // function body
//     if(value < 0){
//         return -value;
//     }else {
//         return value;
//     }
}

console.log('my | 5 | -> ', getAbs(5));
console.log('my | -5 | -> ', getAbs(-5));
console.log('my |  | -> ', getAbs());

console.log('js | 5 | -> ', Math.abs(-5));
console.log('js | -5 | -> ', Math.abs(-5));

console.clear();

// DRY - Don't repeat yourself


// KISS - Keep It Simple and Stupid

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function buildAutoCode(regionCode){
    const flag = "🇰🇬"
    let digitPart = "";
    let letterPart = "";

    for (let i = 0; i < 3; i++) {
        digitPart += getRandomInt(0, 9);
    }
    for (let i = 0; i < 3; i++) {
        let temp = getRandomInt(65, 90);
        letterPart += String.fromCharCode(temp);
    }

    return regionCode + digitPart + letterPart;
}



function maskVINCode(value, mask){
    let result = ""
    for(let i = 0; i < value.length; i++){
        if(i >= 0 && i <= 2){
            result += value[i];
        }else{
            result +=mask;
        }
    }
    return result;
}
function maskVINCode_v2(value, mask){
    let result = ""
    let visiblePart = value.slice(0, 3);
    let hiddenPart = mask.repeat(value.length - 3);
    return visiblePart + hiddenPart

}