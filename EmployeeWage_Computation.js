console.log("Welcome in Employee Wage Computation Program....");
var workingShift;
(function (workingShift) {
    workingShift[workingShift["isFULL_TIME"] = 1] = "isFULL_TIME";
    workingShift[workingShift["isAbsent"] = 0] = "isAbsent";
})(workingShift || (workingShift = {}));
var option = Math.floor(Math.random() * 2);
if (option == workingShift.isFULL_TIME) {
    console.log("Employee is present");
}
else {
    console.log("Employee is absent");
}
