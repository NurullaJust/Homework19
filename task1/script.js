function checkDigit(num) {
  let reversedNum = +num.toString().split("").reverse().join("");
  if (num > reversedNum) {
    alert(true);
  } else {
    alert(false);
  }
}
checkDigit(+prompt("ededi daxil et"));
