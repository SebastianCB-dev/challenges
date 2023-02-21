

const compressString = (string: string): string => {  
  const array: (string | number)[] = [];
  let currentLetter: string;
  string.split('').forEach((el: string) => {
    if(el === currentLetter) {
      array[array.length - 1] = (array[array.length - 1] as number) + 1;
    }
    else {
      currentLetter = el;
      array.push(currentLetter);
      array.push(1);
    }
  });
  
  return array.filter((el) => el !== 1).join('');
}

console.log(compressString('abaaaccdddd'))
