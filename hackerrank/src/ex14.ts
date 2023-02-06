function findMedian(arr: number[]): number {
  // Write your code here
  const arraySorted: number[] = arr.sort((a, b) => {
    if(Number(a) > Number(b)) {
      return 1
    }
    else {
      return -1
    }
  });
  console.log(arr)
  const medianPosition: number = Number((arr.length / 2).toPrecision(1)) - 1;
  return arraySorted[medianPosition];
}


console.log(findMedian([5,3,1,2,4, 2, 3,0 ,4,5,6,0,3, 10, 12, 13]));