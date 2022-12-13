console.log("Welcome in Employee Wage Computation Program....");

enum constants {
    isFULL_TIME = 1,
    isAbsent = 0,
    wage_per_hr = 20,
    isPART_TIME = 2
}
let empHrs;
const NO_OF_WORKING_DAYS = 30;
let dailyWage;
let totalEmpWage =0;
for (let day = 0; day <= NO_OF_WORKING_DAYS; day++) {
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

dailyWage = empHrs * constants.wage_per_hr;
totalEmpWage = dailyWage + totalEmpWage;
}
console.log("Total Employee wage is ", totalEmpWage );
