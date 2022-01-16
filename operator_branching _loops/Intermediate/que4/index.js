//Write a program to return a Fibonacci series : 0,1,1,2,3,5,8,13,21....

let arr = [0,1];
const fibonacci = (n)=>{
    
    let num1 = 0;
    let num2 = 1;
    let nextnumber
    for(let i=0; i<n ; i++){
        nextnumber = num1 + num2;
        arr.push(nextnumber);
        num1 = num2;
        num2 = nextnumber;
    }
}

fibonacci(10);
console.log(arr);