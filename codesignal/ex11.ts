(() => {

  // function solution(a: number[]): number[] {
  //   const teamA: number = a.filter((a: number, i: number) => i % 2 === 0 )
  //                            .reduce((prev, curr) => prev + curr);
  //   const teamB: number = a.filter((a: number, i: number) => i % 2 !== 0)
  //                            .reduce((prev, curr) => prev + curr);  

  //   return [teamA, teamB];
  // }

  function solution(a: number[]): number[] {
    let teamA: number = 0;
    let teamB: number = 0;
    a.forEach((number: number, index: number) => 
      (index % 2 === 0) ? teamA += number : teamB += number)

    return [teamA, teamB];
  }

  console.log(solution([50, 60, 60, 45, 70]));
  
})();