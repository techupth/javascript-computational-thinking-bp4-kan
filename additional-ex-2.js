function countVowels(word){
    let count=0
    for (let str of word.toLowerCase()){
        if (["a","e","i","o","u"].includes(str)){
            count++
        }
    }
    return count
}
console.log(countVowels('Hello World'))
console.log(countVowels('TechUp'))