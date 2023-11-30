let arr = ["a", null, "b", null];

function removeNullArray() {
  arr = arr.filter(function (item) {
    return item != null;
  });
}

removeNullArray();
console.log(arr); 
