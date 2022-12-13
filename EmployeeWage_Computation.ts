console.log("Welcome in Employee Wage Computation Program....");

enum constants {
    isFULL_TIME = 1,
    isAbsent = 0,
    wage_per_hr = 20,
    isPART_TIME = 2
}
let empHrs;
let option = Math.floor(Math.random() * 3);
if (option == constants.isFULL_TIME) {
    console.log("Employee is present");
    empHrs = 8;
}
else if(option == constants.isPART_TIME){
    console.log("Employee is working as Part Time Employee");
    empHrs = 4;
}
else {
    console.log("Employee is absent");
    empHrs = 0;
}
let dailyWage = empHrs * constants.wage_per_hr;
console.log("Employee wage is ", dailyWage);