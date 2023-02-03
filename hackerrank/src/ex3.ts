

function timeConversion(s: string): string {
  let typeTime: string = s.slice(-2,);
  let hour: string | number = Number(s.slice(0, 2));
  if(typeTime === 'PM' && hour < 12) {
    hour += 12
  }
  else if(typeTime === 'AM') {
    if(hour >= 12) {
      hour -= 12
    }
  }
  if((hour + '').length < 2) hour = '0' + hour
  return hour + s.slice(2, -2);
}

console.log(timeConversion('12:45:54PM')); // 19:05:45
// console.log(timeConversion('12:01:00AM')); // 00:01:00
