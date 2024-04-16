/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  // Helper function to normalize and sort string
  const normalize = str => str
      .replace(/[^\w]/g, '')  // Remove non-word characters
      .toLowerCase()          // Convert to lowercase
      .split('')              // Split into an array of characters
      .sort()                 // Sort the array alphabetically
      .join('');              // Join back to a string

  // Normalize and compare both strings
  return normalize(str1) === normalize(str2);
}

// Examples of usage
console.log(isAnagram('spar', 'rasp'));       // true
console.log(isAnagram('listen', 'silent'));   // true
console.log(isAnagram('STATE', 'taste'));       // true
console.log(isAnagram('ARC', 'car'));   // true
console.log(isAnagram('bad credit', 'debit card'));   // true
console.log(isAnagram('stressed', 'desserts'));   // true
console.log(isAnagram('hell', 'hello'));   // false
console.log(isAnagram('hello', 'world'));     // false



module.exports = isAnagram;
