function palindrome(str){
    if (str.length <= 1) {
        return true;
    } else if (str[0] === str.slice[-1]) {
        return palindrome(str.slice(1, -1));
    } else {
        return false;
    }


}

console.log(palindrome("radar"));
console.log(palindrome("cars"));

function palindromeRegex(str) {
    str = str.toLowerCase().replace(/[\W_]/g, "");
    if (str === str.split("").reverse().join("")) {
        return true;
    } else {
        return false;
    }

}

console.log(palindromeRegex("A man. A Plan. A canal. Panama"))
console.log(palindromeRegex("boom bow"))