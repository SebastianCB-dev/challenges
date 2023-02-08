(() => {

  function solution(n: number): boolean {
    const nString: string = n.toString();
    const firstHalf: number = getReduce(nString.slice(0, nString.length / 2).split(''))                                
    const secondHalf: number = getReduce(nString.slice(nString.length / 2).split(''));    
    return firstHalf === secondHalf;
  }

  function getReduce(array: string[]): number {
    return array
            .map((el: string) => Number(el))
            .reduce((prev, curr) => prev + curr);
  }

  console.log(solution(1230));
  // console.log(solution(239017));
})();