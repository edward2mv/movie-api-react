export function timeConvert(mins){
    let num = mins;
let hours = (num / 60);
let rhours = Math.floor(hours);
let minutes = (hours - rhours) * 60;
let rminutes = Math.round(minutes);
return ` ${rhours}h ${rminutes}m`;
}

console.log(timeConvert(200));