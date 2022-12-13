console.log("Welcome in Employee Wage Computation Program....");

enum constants {
    isFULL_TIME = 1,
    isAbsent = 0,
    wage_per_hr = 20,
    isPART_TIME = 2
}
let empHrs;
let option = Math.floor(Math.random() * 3);
switch (option) {
    case constants.isFULL_TIME:
        empHrs = 8;
        break;
    case constants.isPART_TIME:
        empHrs = 4;
        break;
    default:
        empHrs = 0;
}

let dailyWage = empHrs * constants.wage_per_hr;
console.log("Employee wage is ", dailyWage);