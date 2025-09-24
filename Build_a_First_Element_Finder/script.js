function findElement(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      return arr[i];
    }
  }
  return undefined;
}

console.log(
  findElement([1, 3, 5, 9], function (num) {
    return num % 2 === 0;
  })
);
console.log(
  findElement([1, 2, 3, 4], function (num) {
    return num > 2;
  })
);
console.log(
  findElement(["hello", "world", "javascript"], function (str) {
    return str.length > 5;
  })
);
