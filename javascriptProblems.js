/* 
-----------------Sum Zero-----------------

Write a function that takes in an array of 
numbers. The function should return True 
if any two numberss in list sum to 0, and 
false otherwise. 

*/



let array = [5, 4, 3, 2, 1, 0]

function sumZero(array) {
let sum = false;
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length; j++) {
    if (i !== j) {
      if (array[i] + array[j] === 0) {
        sum = true;
      } 
    }
  }
}
return sum
}
console.log(sumZero(array))

//RUNTIME: O(N^2)

/* 
-------------Unique Characters-------------

Write a function that takes in a single word,
as a string. It should return True if that 
word contains only unique characters. Return 
False otherwise.

*/

function hasUniqueChars(str) {
    for(let i = 0; i < str.length; i++)
    for(let j = i + 1; j < str.length; j++)
        if (str[i] == str[j])
            return false; 
        else (str[i] !== str[j])
            return true;
    }
    
    console.log(hasUniqueChars('Meghana'))

    //RUNTIME: O(N^2)

/* 
-------------Pangram Sentence--------------

A pangram is a sentence that contains all 
the letters of the English alphabet at least 
once, like “The quick brown fox jumps over the 
lazy dog.”

Write a function to check a sentence to see 
if it is a pangram or not.

*/

function isPangram(str) {
    let onlyAlphabetStr = str.replaceAll(/[^a-z0-9]/gi, '');
    let lowerCaseStr = onlyAlphabetStr.toLowerCase();
    let uniqueStr = ""
    for (let i = 0; i < lowerCaseStr.length; i++) {
      if (uniqueStr.includes(lowerCaseStr[i])) {
        continue
      } else {
        uniqueStr += lowerCaseStr[i]
      }
    }
    if (uniqueStr.length === 26) {
        return true
    } else {
        return false
    }
}

console.log(isPangram("Foxy diva Jennifer Lopez wasn't baking my quiche."))

//RUNTIME: O(N)

/* 
-------------Longest Word-------------

Write a function, find_longest_word, 
that takes a list of words and returns 
the length of the longest one.

*/


let words = ['cat', 'book', 'flower', 'meghana', 'minnesota'] 

function find_longest_word(words) {
    let longestWord = ""
    for(let i = 0; i < words.length; i++)
        if (longestWord.length < words[i].length) {
            longestWord = words[i]
        }
       return longestWord 
    }

console.log(find_longest_word(words))

//RUNTIME: o(N)






