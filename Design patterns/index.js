///console.log('Hello!');

//first class citizens
//It means we could use as functions everywhere as variable
const calc = () => {
    return 4 * 3; 
}

let aNumber = calc();

console.log(aNumber);

//callback function
//use a function inside another function

const printCalc = (callback) => {
    console.log(callback());
}

printCalc(calc);









