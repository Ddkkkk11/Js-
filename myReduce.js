Array.prototype.myReduce = function(callback, initialValue) {
  const arr = this;
  let accumulator = initialValue !== undefined? initialValue : arr[0];
  for(let i = initialValue !== undefined? 0 : 1; i < arr.length; i ++) {
    callback(accumulator, arr[i], i, arr);
  } 
  return accumulator;
}
Array.prototype.myReduce = function(callback, initialValue) {
let arr = this;
let accumulator = initialValue !== undefined ? initialValue : arr[0];
for (let i = initialValue !== undefined ? 0 : 1; i < arr.length; i++) {
  accumulator = callback(accumulator, arr[i], i, arr);
}
return accumulator;
};