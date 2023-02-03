function pangrams(s: string): string {
  let isPangram: boolean = true;
  const alphabet: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
                              'm', 'n','o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
                              'y', 'z'];
  const phrase: string = s.toLowerCase().split(' ').join('');
  
  alphabet.forEach((letter: string) => {
    if(!phrase.includes(letter)) {
      isPangram = false;
      return;      
    }
  });

  return (isPangram) ? 'pangram' : 'not pangram';
}

console.log(pangrams('We promptly judged antique ivory buckles for the prize')) // pangram
