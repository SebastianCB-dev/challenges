

const strings_xor = (stringA: string, stringB: string): string => {
  let result: string = '';

  stringA.split('').forEach((binary: string, index: number) => 
    (binary === stringB[index]) ? result += '0' : result += '1'  )


  return result;
}


console.log(strings_xor('10101', '00101')) // 10000