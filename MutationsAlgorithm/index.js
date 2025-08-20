function mutation(arr) {
  let fstStr = arr[0].toLowerCase();
  let sndStr = arr[1].toLowerCase();

  for (let char of sndStr) {
    if (!fstStr.includes(char)) {
      return false;
    }
  }

  return true;
}

console.log(mutation(["hello", "Hello"]));
mutation(["hello", "hey"]);
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]);
mutation(["Mary", "Army"]);
mutation(["Mary", "Aarmy"]);
mutation(["Alien", "line"]);
mutation(["floor", "for"]);
mutation(["hello", "neo"]);
mutation(["voodoo", "no"]);
mutation(["ate", "date"]);
mutation(["Tiger", "Zebra"]);
mutation(["Noel", "Ole"]);
