// const arr = [1, 2, 3, 4, 5, 6];
// const newArr = [];

// for (i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 == 0) {
//     newArr.push(arr[i]);
//   }
// }

// console.log(newArr);

const arr = [1, 2, 3, 4, 5, 6];

function filterLogic(n) {
  if (n % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

const ans = arr.filter(filterLogic);
console.log(ans);
