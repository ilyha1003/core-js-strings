function getStringLength(value) {
  return typeof value === 'string' || value ? value.length : 0;
}

function isString(value) {
  return typeof value === 'string' || value instanceof String;
}

function concatenateStrings(value1, value2) {
  return value1.concat('', value2);
}

function getFirstChar(value) {
  return value.charAt(0);
}

function removeLeadingAndTrailingWhitespaces(value) {
  return value.trim();
}

function removeLeadingWhitespaces(value) {
  return value.trimStart();
}

function removeTrailingWhitespaces(value) {
  return value.trimEnd();
}

function repeatString(str, times) {
  return times > 0 ? str.repeat(times) : '';
}

function removeFirstOccurrences(str, value) {
  return str.indexOf(value) >= 0 ? str.replace(value, '') : str;
}

function removeLastOccurrences(str, value) {
  const reversedStr = str.split('').reverse().join('');
  const reversedValue = value.split('').reverse().join('');
  const newStr = reversedStr
    .replace(reversedValue, '')
    .split('')
    .reverse()
    .join('');
  return str.lastIndexOf(value) >= 0 ? newStr : str;
}

function sumOfCodes(str) {
  let sum = null;
  if (typeof str === 'string') {
    for (let i = 0; i < str.length; i += 1) {
      sum += str.charCodeAt(i);
    }
  }
  return sum == null ? 0 : sum;
}

function startsWith(str, substr) {
  return str.startsWith(substr);
}

function endsWith(str, substr) {
  return str.endsWith(substr);
}

function formatTime(minutes, seconds) {
  let finalMinutes = null;
  let finalSeconds = null;

  if (minutes < 10) {
    finalMinutes = String(minutes).padStart(2, '0');
    if (seconds < 10) {
      finalSeconds = String(seconds).padStart(2, '0');
    } else {
      finalSeconds = seconds;
    }
  } else {
    finalMinutes = minutes;
    if (seconds < 10) {
      finalSeconds = String(seconds).padStart(2, '0');
    } else {
      finalSeconds = seconds;
    }
  }
  return finalMinutes.concat(':', finalSeconds);
}

function reverseString(str) {
  return str.split('').reverse().join('');
}

function orderAlphabetically(str) {
  return str.split('').sort().join('');
}

function containsSubstring(str, substring) {
  return str.includes(substring);
}

function countVowels(str) {
  let counter = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u', 'y', 'A', 'E', 'I', 'O', 'U', 'Y'];
  for (let i = 0; i < str.length; i += 1) {
    for (let j = 0; j < vowels.length; j += 1) {
      if (str[i] === vowels[j]) {
        counter += 1;
      }
    }
  }
  return counter;
}

function isPalindrome(str) {
  const reverseStr = str
    .toLowerCase()
    .replace(/[,?! ]/g, '')
    .split('')
    .reverse()
    .join('');
  return reverseStr === str.toLowerCase().replace(/[,?! ]/g, '');
}

function findLongestWord(sentence) {
  const words = sentence.split(' ');
  let longestWord = '';
  for (let i = 0; i < words.length; i += 1) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  return longestWord;
}

function reverseWords(str) {
  return str
    .split(' ')
    .map((el) => el.split('').reverse().join(''))
    .join(' ');
}

function invertCase(str) {
  return str
    .split('')
    .map((el) =>
      el === el.toUpperCase() ? el.toLowerCase() : el.toUpperCase()
    )
    .join('');
}

function getStringFromTemplate(firstName, lastName) {
  return `Hello, ${firstName} ${lastName}!`;
}

function extractNameFromTemplate(value) {
  return value.split(', ')[1].slice(0, -1);
}

function unbracketTag(str) {
  return str.slice(1).slice(0, -1);
}

function extractEmails(str) {
  return str.split(';');
}

function encodeToRot13(str) {
  return str
    .split('')
    .map((x) => {
      if (x.charCodeAt() >= 65 && x.charCodeAt() <= 90) {
        if (x.charCodeAt() >= 78) {
          return String.fromCharCode(x.charCodeAt() - 13);
        }
        return String.fromCharCode(x.charCodeAt() + 13);
      }
      if (x.charCodeAt() >= 97 && x.charCodeAt() <= 122) {
        if (x.charCodeAt() >= 110) {
          return String.fromCharCode(x.charCodeAt() - 13);
        }
        return String.fromCharCode(x.charCodeAt() + 13);
      }
      return x;
    })
    .join('');
}

function getCardId(value) {
  const cardValue = [
    'A',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'J',
    'Q',
    'K',
  ];
  const cardSuit = ['♣', '♦', '♥', '♠'];

  const number = cardValue.indexOf(value.slice(0, -1));
  const suit = cardSuit.indexOf(value[value.length - 1]) * 13;

  return number + suit;
}

module.exports = {
  getStringLength,
  isString,
  concatenateStrings,
  getFirstChar,
  removeLeadingAndTrailingWhitespaces,
  removeLeadingWhitespaces,
  removeTrailingWhitespaces,
  repeatString,
  removeFirstOccurrences,
  removeLastOccurrences,
  sumOfCodes,
  endsWith,
  startsWith,
  formatTime,
  reverseString,
  countVowels,
  orderAlphabetically,
  containsSubstring,
  isPalindrome,
  findLongestWord,
  reverseWords,
  invertCase,
  getStringFromTemplate,
  extractNameFromTemplate,
  extractEmails,
  unbracketTag,
  encodeToRot13,
  getCardId,
};
