var arr = [2, 6, 3, 10, 2, 3, 8, 10];
var newArr = [];

for (var i = 0, len = arr.length; i < len; i++) {
    if (newArr.indexOf(arr[i]) == -1) {
        newArr.push(arr[i]);
    }
}
console.log(newArr);