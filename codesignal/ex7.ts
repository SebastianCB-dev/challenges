(() => {

  function solution(inputArray: string[]): string[] {
    const longestLength: number = Math.max(...
                                  [...inputArray]
                                    .map((string: string) => string.length));
    return inputArray.filter((el: string) => el.length === longestLength);
  }

  console.log(solution(["aba", "aa", "ad", "vcd", "aba"]));


})();