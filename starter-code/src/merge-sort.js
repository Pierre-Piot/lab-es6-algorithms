function mergeSort(array) {
  if(array.length < 2) { return array }

  var middle  = Math.floor(array.length / 2);
  var left    = array.slice(0, middle);
  var right   = array.slice(middle);

  return sortHalves(mergeSort(left), mergeSort(right));
}

function sortHalves(left, right) {
  var array = [];

  while(left.length && right.length) {
    if(left[0] < right[0]) {
      array.push(left.shift());
    } else {
      array.push(right.shift());
    }
  }
  // array.slice() with no arguments is a trick to make a copy of the array
  // .concat is to smash all of the arrays together
  // ...maybe there's an ES6 way to do this?
  // console.log(arr.left.slice());
  // console.log(arr.right.slice());

  return [...array,...left,...right];
  // return array.concat(left.concat(right));

  // return array.concat(left.concat(right));

}

const ARR = [2, 4, 8, 12, 33, 17]
mergeSort(ARR);
console.log(mergeSort(ARR));



module.exports = mergeSort;
