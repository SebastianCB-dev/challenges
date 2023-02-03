
function flippingBits(n: number): number {
  // Convert number to Binary
  const numberInBinary = (n >>> 0).toString(2);
  const totalBinary = '0'.repeat(32 - numberInBinary.length) + numberInBinary;
  const splitting = totalBinary.split('').map((number) => {
    return (number === '1') ? '0' : '1'
  }).join('');
  // Return number from binary
  return parseInt(splitting, 2);
}

console.log(flippingBits(10))