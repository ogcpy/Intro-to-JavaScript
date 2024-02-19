function longestWord(str) {
    var biggest = 0;
    str.split(" ").forEach(function(word){
        if (word.length > biggest) {
            biggest = word.length;
        }

    });
    return biggest;
}


console.log(longestWord("supercalifragilisticexpielidocious quick brown fox jumped over the lazy dog"))