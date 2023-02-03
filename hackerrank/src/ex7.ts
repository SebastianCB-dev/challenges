function diagonalDifference(arr: number[][]): number {
  // Write your code here
  let totalPrincipal: number = 0;
  let totalInversa: number = 0;
  const longitud: number = arr[0].length;
  for(let i = 0; i < longitud; i++) {
    totalPrincipal += arr[i][i];
    totalInversa += arr[i][longitud - i - 1];
  }
  return Math.abs((totalPrincipal - totalInversa));
}

console.log(diagonalDifference([
  [1, 2, 5],
  [1, 2, 3],
  [6, 2, 3]
]));