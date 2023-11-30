let arr = ["a", null, "b", null];
function removeNull() {
  arr = arr.filter(function (item) {
    return item != null;
  });
  console.log(arr);
}
removeNull();
