var againArr = [3, 6, 1, 5, 6, 3, 9];
var againNewArr = [];
var i = -1; 

while (i < againArr.length - 1) {
    i++;
    if (againNewArr.indexOf(againArr[i]) == -1) {
        againNewArr.push(againArr[i]);
    }
}
console.log(againNewArr);