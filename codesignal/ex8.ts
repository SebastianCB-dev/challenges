(() => {

  function solution(s1: string, s2: string): number {
    const dictionary: Record<string, number> = {};
    let total: number = 0;
    s2.split('').forEach((letter: string) => {
      if(!dictionary[letter]) {
        dictionary[letter] = 0;
      }
      dictionary[letter] += 1;
    });

    s1.split('').forEach((el: string) => {
      if(dictionary[el] && dictionary[el] > 0) {
        total += 1;
        dictionary[el] -= 1;
      }  
    });
   return total;
  } 

  console.log(solution('aabcc', 'adcaa')); // 3


})();