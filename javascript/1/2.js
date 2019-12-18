function permutations (str1, str2) {
  const hash = {};

  for (let i = 0; i < str1.length; i++) {
    if (str1[i] in hash) {
      hash[str1[i]] += 1;
    } else {
      hash[str1[i]] = 1;
    }
  }

  for (let j = 0; j < str2.length; j++) {
    if (!(str2[j] in hash)) return false;
    if (hash[str2[j]] === 0) return false; // can't be negative
    hash[str2[j]] -= 1;
  }

  return !Object.values(hash).some(val => val !== 0);
}