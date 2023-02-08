(() => {
  function solution(statues: number[]): number {
    statues.sort();    
    const maxNumber: number = Math.max(...statues);
    const minNumber: number = Math.min(...statues);
    return (maxNumber - minNumber + 1) - statues.length;
  }

  console.log(solution([6,2,3,8])) // 3


})();