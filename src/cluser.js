// function school() {
//     let schoolName = "school name:"
//     function print(name) {
//         console.log(schoolName+name);
//     }
//     return print
// }
// var schoolFunc = school();
// schoolFunc("Ated");


// function outer() {
//     let num = 0
//     function foo(number) {
//         let sum = num + number
//         num = number
//         return sum
//     }
//     console.log(foo(3));
//     console.log(foo(1));
//     console.log(foo(2));
// }
function foo(number) {
    let sum = number + 10
    return sum
}


function decotator(func) {
    let a = performance.now();
    console.log(func);
    let b = performance.now();
    console.log('It took ' + (b - a) + ' ms.');
}
decotator(foo(0))
console.log(performance.now());