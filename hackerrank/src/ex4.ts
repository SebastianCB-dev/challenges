
function matchingStrings(strings: string[], queries: string[]): number[] {
  // Write your code here
  const result: number[] = [];
  queries.forEach( (el: string) => 
    result.push(strings.filter((string: string) => string === el).length)
  )
  return result;
}


matchingStrings(['ab', 'ab', 'abc'], ['ab', 'abc', 'bc']);