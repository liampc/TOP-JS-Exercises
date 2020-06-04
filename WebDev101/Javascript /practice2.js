/// 
let add7 = n => n + 7;

console.log(add7(4)); // 11 - working

///
let multiply = (a,b) => a * b;

console.log(multiply(5,4)); // 20 - working

/// 
function capitalize(text1) {
    let textString = text1;
    let capital = textString.charAt().toUpperCase();
    let small = textInput.substr(1).toLowerCase();
    return capital + small;
    
}

console.log(capitalize("KaThliA")); // Kathlia

///

function lastLetter(text2) {
    let textString = text2.charAt(text2.length-1);
    return textString;
}

console.log(lastLetter("abcd"));

