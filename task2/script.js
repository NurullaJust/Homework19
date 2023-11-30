function findHighestNum(num) {
  let numStr = num.toString();
  let biggestNum = parseInt(numStr[0]);
  for (let i = 0; i < numStr.length; i++) {
    let digit = parseInt(numStr[i]);
    if (digit > biggestNum) {
      biggestNum = digit;
    }
  }
  return biggestNum;
}
alert("en boyuk eded" + ":" + findHighestNum(+prompt("ededi daxil et")));
