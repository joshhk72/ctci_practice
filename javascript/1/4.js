function palinPermute(str) {
  const hash = {};
  for (let i = 0; i < str.length; i++) {
    if (str[i] in hash) {
      hash[str[i]] += 1;
    } else {
      hash[str[i]] = 1;
    }
  }

  let foundOdd = false;
  for (let key of Object.keys(hash)) {
    if (hash[key] % 2 !== 0) {
      if (foundOdd) return false;
      foundOdd = true;
    }
  }
  return true;
}