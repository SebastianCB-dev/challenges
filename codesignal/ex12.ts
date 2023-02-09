(() => {

  function solution(picture: string[]): string[] {
    const pictureCopy = [...picture]
                          .map((pic: string) => `*${pic}*`);
    pictureCopy.push('*'.repeat(picture[0].length + 2));
    pictureCopy.unshift('*'.repeat(picture[0].length + 2));                         
    return pictureCopy;
  }

  // console.log(solution(["abc", "ded"]));
  // console.log(solution(["abcdd", "dedee"]));

})();