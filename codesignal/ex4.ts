(() => {

  function solution(n: number): number {
    if(n === 1) return n;
    const lado: number = (n * 2 - 1) * (n * 2 - 1);
    return (lado - ((n- 1) * 2 * n) );
  }

  console.log(solution(1));
  console.log(solution(2));
  console.log(solution(3));
  console.log(solution(4));
  // console.log(solution(5));
})();