console.log("Welcome in Employee Wage Computation Program....");
var constants;
(function (constants) {
    constants[constants["isFULL_TIME"] = 1] = "isFULL_TIME";
    constants[constants["isAbsent"] = 0] = "isAbsent";
    constants[constants["wage_per_hr"] = 20] = "wage_per_hr";
    constants[constants["isPART_TIME"] = 2] = "isPART_TIME";
})(constants || (constants = {}));
var empHrs;
var NO_OF_WORKING_DAYS = 30;
var dailyWage;
var totalEmpWage = 0;
for (var day = 0; day <= NO_OF_WORKING_DAYS; day++) {
    var option = Math.floor(Math.random() * 3);
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
console.log("Total Employee wage is ", totalEmpWage);
