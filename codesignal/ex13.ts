(() => {

  function solution(a: number[], b: number[]): boolean {
    const sortNumber = (a: number, b: number): number => (a > b) ? 1 : -1;
    const aString = [...a].sort(sortNumber).join('');
    const bString = [...b].sort(sortNumber).join('');
    return aString === bString;
  }

  console.log(solution([1, 2, 2], [2, 1, 1]));
  console.log(solution([1, 2, 3], [2, 1, 3]));
  console.log(solution([9, -1, 70, 90, 100], [100, -1, 70, 90, 9]));
  console.log(solution([832, 998, 148, 570, 533, 561, 894, 147, 455, 279],
    [832, 570, 148, 998, 533, 561, 455, 147, 894, 279]))

})();