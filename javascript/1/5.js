function oneAway(str1, str2) {
  let edited = false;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      if (edited) {
        return false;
      } else if (str1.length > str2.length) {
        str2 = str2.slice(0, i) + str1[i] + str2.slice(i, str2.length);
      } else if (str1.length < str2.length) {
        str1 = str1.slice(0, i) + str2[i] + str1.slice(i, str1.length);
      } else {
      }
      edited = true;
    }
  }
  return true;
}