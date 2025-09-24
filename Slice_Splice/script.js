function frankenSplice(arr1, arr2, i) {
  let newArr = arr2.slice();
  newArr.splice(i, 0, ...arr1);

  return newArr;
}

console.log(frankenSplice([1, 2, 3], [4, 5], 1));
console.log(frankenSplice([1, 2], ["a", "b"], 1));
console.log(
  frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)
);
console.log(frankenSplice([1, 2, 3, 4], [], 0));
