function countingSort(arr: number[]): number[] {
  // Write your code here
  const arrayResult = [...('0'.repeat(100)
                                .split('')
                                .map(letter => Number(letter)))]
  arr.forEach( el => {
    arrayResult[el] += 1
  })
  return arrayResult;
}
