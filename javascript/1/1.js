// see if all characters in a string are unique

// This solution uses sets, O(n)
function uniqStr(str) {
  const seen = new Set();
  for (let i = 0; i < str.length; i++) {
    if (seen.has(str[i])) return false;
    seen.add(str[i]);
  }
  return true;
}

// No other data structures, but O(n^2) time.
function uniqStr(str) {
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str.length; j++) {
      if ((j !== i) && (str[i] === str[j])) return false;
    }
  }
  return true;
}