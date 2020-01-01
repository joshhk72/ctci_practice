function stringComp(str) {
  let compressed = '';
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i + 1] === str[i]) {
      count += 1;
    } else {
      compressed = compressed + str[i] + count.toString();
      count = 1;
    }
  }
  return compressed.length < str.length ? compressed : str;
}