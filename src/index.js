
module.exports = function towelSort (matrix) {
  if ( arguments.length == 0) {
    return [];
   }
   if ( matrix.length == 0) {
    return [];
   }
    for (let i = 1; i < matrix.length; i++) {
    matrix[i].reverse();
    i = i + 1;
   }
   let arr = [];
   arr = (matrix.join(",")).split (",");
   return arr.map(Number);
}
