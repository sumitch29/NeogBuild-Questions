//Write a program to take an input from a user and find its Factorial. Example: Factorial of 5 is 120

const factorial = (num) => {
    let number = 1;
    for(let i=2; i<=num; i++){
        number *= i; 
    }
    return number
}
console.log(factorial(5))