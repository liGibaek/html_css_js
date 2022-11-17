var letters = [];
var word = "racecar";
var rWord = "";

for (let i = 0; i < word.length; i++) {
    letters.push(word[i]);
}

for (let i = 0; i < word.length; i++) {
    rWord += letters.pop();
}

if (rWord === word) {
    console.log(word + " is a palindrome");
} else {
    console.log(word + " is not a palindrome");
}

console.log(rWord);


function gcr(a, b) {
    while (a != 0 && b != 0) {
        console.log(a + " " + b);
        if (a > b) {
            a = a % b;
        } else {
            b = b % a;
        }
    }
    return a + b;

}


console.log(gcr(16, 14));
