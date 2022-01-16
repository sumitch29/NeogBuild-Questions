// Print the following star pattern :-

// *
// * *
// * * *
// * * * *
// * * * * *

let pattern = "";
let star = (n) =>{
    for(i=0; i<n; i++){
        for(j=0; j<i; j++){
             pattern += "*"
        }
        pattern += "\n"
    }
}
star(5)
console.log(pattern)