console.log("Welcome in Employee Wage Computation Program....");
const IS_Full_Time: number = 1;
const IS_Part_Time: number = 2;
const EMP_RATE_PER_HOUR: number = 20;
const NO_OF_WORKING_DAYS: number = 20;
const MAX_HRS_IN_MONTH: number = 100;
let empHrs: number = 0;
let empWage: number = 0;
let totalEmployeeWage: number = 0;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
while (totalEmpHrs < MAX_HRS_IN_MONTH && totalWorkingDays < NO_OF_WORKING_DAYS) {
    totalWorkingDays++;
    var empCheck = Math.floor(Math.random() * 3) + 0;
    switch (empCheck) {
        case IS_Part_Time:
            empHrs = 4;
            break;
        case IS_Full_Time:
            empHrs = 8;
            break;
        default:
            empHrs = 0;
    }
    empWage = empHrs * EMP_RATE_PER_HOUR;
    totalEmployeeWage = empWage + totalEmployeeWage;
}
console.log("Total Employee Wage of Month: " + totalEmployeeWage);