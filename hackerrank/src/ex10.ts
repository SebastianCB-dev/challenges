function twoArrays(k: number, A: number[], B: number[]): string {
  const sum = k * A.length; // total sum that we should exceed
  // count total sum of array elements, but every element is limited by k
  const sumA = A.reduce((acc, el) => acc += el > k ? k : el, 0);
  const sumB = B.reduce((acc, el) => acc += el > k ? k : el, 0);

  return sumA + sumB >= sum ? 'YES' : 'NO';
}