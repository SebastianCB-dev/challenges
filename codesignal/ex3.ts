(() => {

  function solution(inputArray: number[]): number {
    let max: number = -Infinity;

    for (let i = 0; i < inputArray.length - 1; i++) {
      if (inputArray[i] * inputArray[i + 1] > max)
        max = inputArray[i] * inputArray[i + 1];
    }

    return max;
  }
  console.log(solution([-23, 4, -3, 8, -12]))
})();
