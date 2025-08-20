function repeatStringNumTimes(str, num) {
  let result = "";
  for (let i = 0; i < num; i++) {
    result += str;
  }
  if (num <= 0) {
    return "";
  }
  return result;
}

repeatStringNumTimes("*", 3);
repeatStringNumTimes("abc", 3);
repeatStringNumTimes("abc", 4);
repeatStringNumTimes("abc", 1);
repeatStringNumTimes("*", 8);
repeatStringNumTimes("abc", -2);
repeatStringNumTimes("abc", 0);
