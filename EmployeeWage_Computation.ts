console.log("Welcome in Employee Wage Computation Program....");

enum workingShift {
    isFULL_TIME = 1,
    isAbsent = 0
}

let option = Math.floor(Math.random() * 2);
if (option == workingShift.isFULL_TIME) {
    console.log("Employee is present");
}
else {
    console.log("Employee is absent");
}
