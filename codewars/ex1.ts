
(() => {
  const primeFactors = (n: number): string => {
    const primeNumbers: number[] = getPrimeNumbers(n+1);
    const data: Record<number, number> = {};
    while(n > 1) {
      if(n % primeNumbers[0] === 0) {
        if(!data[primeNumbers[0]]) {
          data[primeNumbers[0]] = 0;
        }
        data[primeNumbers[0]] += 1
        n /= primeNumbers[0];
      }
      else {
        primeNumbers.shift();
      }      
    }
    console.log(data)
    return transformData(data);
  }

  function getPrimeNumbers(maxNumber: number): number[] {
    const primeNumbers: number[] = [];
    for (let i = 2; i < maxNumber; i++) {
      if (isPrime(i)) {
        primeNumbers.push(i);
      }
    } 
    return primeNumbers;
  }

  const isPrime = (n: number): boolean => {
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }

  function transformData(data: Record<number, number>) {
    console.log(data);
    const keys = Object.keys(data).map((el) => Number(el));
    let result = ''
    keys.forEach((key: number) => {  
      if(data[key] === 1) {
        result += '(' + (key) + ')';
      } 
      else {
        result += result + '(' + `${key}`.repeat(data[key]).split('').join('x') + ')'
      }  
    });
    return result;
  }
  console.log(primeFactors(34));// (3*3)(5)
})()
