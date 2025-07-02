// let age = 17;
// let canVote = (age >= 18) ? "Yes, can vote" : "No, cannot vote";
// console.log(canVote);

// const fruits = ["apple", "banana", "cherry"];
// for (const fruit of fruits){
//     console.log(fruit);
// }
// const str = "hello";
// for (const char of str){
//     console.log(char);
// }

// const car = {
//     make: "Toyota",
//     model: "Camry",
//     year: 2020
// };

// for (const key in car){
//     console.log(`${key}: ${car[key]}`);
// }

// const factorial = function calculateFactorial(n){
//     if (n <= 1) return 1;
//     return n * calculateFactorial(n - 1);
// };
// console.log(factorial(5));

// function sumAll(...numbers){
//     return numbers.reduce((total, num) => total + num, 0);
// }
// console.log(sumAll(1, 2, 3, 4))


function outerFunction(){
    let outerVar = "I am from outer";
    function innerFunction(){
        console.log(outerVar);
    }
    return innerFunction;
}

const myInnerFunc = outerFunction();
myInnerFunc();