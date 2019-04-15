let compareStr = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  if (str1.length === 0 && str2.length === 0) return true;
  if (str1[0] === str2[0]) return compareStr(str1.slice(1), str2.slice(1));
  else return false;
};
console.log(compareStr('hi', 'ho'));