(() => {
  function solution(a: number[]): number[] {
    const notTrees = [...a.filter((number: number) => number !== -1)].sort(sortFunction);
    return a.map((number: number) => {
      if(number !== -1) {
        return notTrees.shift() || Infinity;
      }
      return -1;      
    });
  }

  function sortFunction(a: number, b: number) {
    return a > b ? 1 : -1
  }
  // console.log(solution([-1, 150, 190, 170, -1, -1, 160, 180]));
  console.log(solution([4, 2, 9, 11, 2, 16]));

})();