//Write a Program to take a number input from user and find if the number is Prime or not.

const primenumber = (num) => {
    let number = true;
    for(let i=2; i<num; i++){
        if(num % i === 0)
        number=false
    }
    return number
}
console.log(primenumber(4))