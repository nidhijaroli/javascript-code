function calculateGrossSalary(basicSalary) {
    // Calculating allowances
    let houseRentAllowance = basicSalary * 0.05;
    let travelAllowance = basicSalary * 0.08;
    let medicalAllowance = basicSalary * 0.07;
// total
    let totalAllowance = houseRentAllowance + travelAllowance + medicalAllowance;

    //  gross salary
    let grossSalary = basicSalary + totalAllowance - 200;

    return grossSalary;
}

let basicSalary = 5000;
let grossSalary = calculateGrossSalary(basicSalary);

console.log("Basic Salary:", basicSalary);
console.log("Gross Salary:", grossSalary);
