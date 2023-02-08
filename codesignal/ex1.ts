(() => {
  function solution(year: number): number {
    const lastNumber: number = year % 10;
    const firstNumbers: number = Math.floor(year / 100);
    console.log(firstNumbers)
    if (year <= 100) return 1;
    else if (lastNumber === 0) return firstNumbers
    else return firstNumbers + 1
  }


  console.log(solution(1))
  console.log(solution(305))
  console.log(solution(2001))
  console.log(solution(1700))
  console.log(solution(1905))
  console.log(solution(1988))
})()
