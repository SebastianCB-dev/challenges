(()=> {
  function solution(inputString: string): boolean {
    const inputCleaned = inputString.trim().toLowerCase().split(" ").join("");
    if (inputCleaned === inputCleaned.split('').reverse().join(''))
      return true;
    return false;
  }

  console.log(solution("aabaa aabaa")) // true
  console.log(solution("abac")) // false
  console.log(solution("az")) // true
})()
