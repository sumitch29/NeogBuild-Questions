//Write program to take a month as an input from the user and find out whether the month has 31 days or not.


const monthof31days = [1, 3, 5, 7, 10, 12];
let check31Days = (num) =>{
    let month = false
    for(let i=0; i<monthof31days.length; i++){
        if(num === monthof31days[i]){
            month = true;
        }
    }
    return month
}
console.log(check31Days(7));