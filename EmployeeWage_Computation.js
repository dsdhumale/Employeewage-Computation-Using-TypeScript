console.log("Welcome in Employee Wage Computation Program....");
var constants;
(function (constants) {
    constants[constants["isFULL_TIME"] = 1] = "isFULL_TIME";
    constants[constants["isAbsent"] = 0] = "isAbsent";
    constants[constants["wage_per_hr"] = 20] = "wage_per_hr";
    constants[constants["isPART_TIME"] = 2] = "isPART_TIME";
})(constants || (constants = {}));
var empHrs;
var option = Math.floor(Math.random() * 3);
if (option == constants.isFULL_TIME) {
    console.log("Employee is present");
    empHrs = 8;
}
else if (option == constants.isPART_TIME) {
    console.log("Employee is working as Part Time Employee");
    empHrs = 4;
}
else {
    console.log("Employee is absent");
    empHrs = 0;
}
var dailyWage = empHrs * constants.wage_per_hr;
console.log("Employee wage is ", dailyWage);
