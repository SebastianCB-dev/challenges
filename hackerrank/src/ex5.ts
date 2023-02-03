function lonelyinteger(a: number[]): number {
  // Write your code here
  const dict: any = {};
  let result: number = 0;
  a.forEach((number: number) => {
    if(! (dict[number + ''])) {
      dict[number + ''] = 0;
    }
    dict[number + ''] += 1;
  });
  Object.keys(dict).forEach((key: string) => {
    if(dict[key] < 2) {
      result = Number(key);
    }
  });
  
  return result;
}

console.log(lonelyinteger([1, 2, 3, 4, 3, 2, 1]));