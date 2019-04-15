let divide = (x, y) => {
  if (y <= 0 || x <= 0) return 0;
  return 1 + divide(x - y, y);
};
console.log(divide(17, 5));