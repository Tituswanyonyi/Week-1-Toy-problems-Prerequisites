//Net Salary Calculator (Toy Problem)

const basicSalary = parseInt(prompt("Enter your basic salary: "));
//prompts the user to enter their basic salary and parses the input as an integer
const benefits = parseInt(prompt("Enter your benefits: "));
//prompts the user to enter their benefits and parses the input as an integer.

const grossSalary = basicSalary + benefits;
//calculates the gross salary by adding the basic salary and benefits.
let payee = 0;
let nhifDeductions = 0;
let nssfDeductions = 0;
//iniitializes all declared variables to zero
if (grossSalary > 288_000) {
  payee = (grossSalary - 288_000) * 0.3;
  //checks if the gross salary is above a certain threshold and calculates the payee (tax) accordingly.
} else if (grossSalary > 147_580) {
  payee = (grossSalary - 147_580) * 0.25;
  //checks if the gross salary is above another threshold and calculates the payee (tax) accordingly.
} else if (grossSalary > 110_000) {
  payee = (grossSalary - 110_000) * 0.2;
}
//checks if the gross salary is above another threshold and calculates the payee (tax) accordingly.


if (grossSalary < 6_000) {
  nhifDeductions = 150;
} else if (grossSalary < 8_000) {
  nhifDeductions = 300;
} else if (grossSalary < 11_000) {
  nhifDeductions = 400;
} else if (grossSalary < 15_000) {
  nhifDeductions = 500;
} else if (grossSalary < 20_000) {
  nhifDeductions = 600;
} else if (grossSalary < 25_000) {
  nhifDeductions = 750;
} else if (grossSalary < 30_000) {
  nhifDeductions = 850;
} else if (grossSalary < 35_000) {
  nhifDeductions = 900;
} else if (grossSalary < 40_000) {
  nhifDeductions = 950;
} else if (grossSalary < 45_000) {
  nhifDeductions = 1_000;
} else if (grossSalary < 50_000) {
  nhifDeductions = 1_100;
} else if (grossSalary < 60_000) {
  nhifDeductions = 1_200;
} else if (grossSalary < 70_000) {
  nhifDeductions = 1_300;
} else if (grossSalary < 80_000) {
  nhifDeductions = 1_400;
} else if (grossSalary < 90_000) {
  nhifDeductions = 1_500;
} else if (grossSalary < 100_000) {
  nhifDeductions = 1_600;
} else {
  nhifDeductions = 1_700;
}
//The above lines of code  check if the gross salary is above certain thresholds and calculate the payee (tax) accordingly.

nssfDeductions = Math.min(grossSalary * 0.06, 1_800);
//calculates the NSSF deductions as either 6% of the gross salary or a maximum of 1,800 Kes, whichever is lowe

const netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;
// calculates the net salary by subtracting the payee, NHIF deductions, and NSSF deductions from the gross salary.

console.log(`Gross Salary: ${grossSalary}`);
console.log(`Payee (Tax): ${payee}`);
console.log(`NHIF Deductions: ${nhifDeductions}`);
console.log(`NSSF Deductions: ${nssfDeductions}`);
console.log(`Net Salary: ${netSalary}`);
//ring out the calculations for the gross salary, payee (tax), NHIF deductions, NSSF deductions, and net salary.