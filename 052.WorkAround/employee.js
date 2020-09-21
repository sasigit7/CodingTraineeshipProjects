let salary = 100000;

// Create an Employee Module 
// let Employee = {};
// Employee.salary = 10000;

let Employee = {
    salary: 100000
};

export let payGrades = {
    entryLevel: {
        taxMultiplier: .05,
        benefits: ['health'],
        minSalary: 10000,
        maxSalary: 49999
    },
    midLevel: {
        taxMultiplier: .1,
        benefits: ['health', 'housing'],
        minSalary: 50000,
        maxSalary: 99999
    },
    seniorLevel: {
        taxMultiplier: .2,
        benefits: ['health', 'housing', 'wellness', 'gym'],
        minSalary: 100000,
        maxSalary: 200000
    }
};

// Employee.getCadre = function() {
export function getCadre() {
    if (Employee.salary >= payGrades.entryLevel.minSalary && Employee.salary <= payGrades.entryLevel.maxSalary) {
        return 'entryLevel';
    } else if (Employee.salary >= payGrades.midLevel.minSalary && Employee.salary <= payGrades.midLevel.maxSalary) {
        return 'midLevel';
    } else return 'seniorLevel';
}

// Employee.calculateTax = function() {
export function calculateTax() {
    // return payGrades[Employee.getCadre()].taxMultiplier * Employee.salary;
    return payGrades[getCadre()].taxMultiplier * Employee.salary;
}

//Employee.getBenefits = function() {
export function getBenefits() {
    // return payGrades[Employee.getCadre()].benefits.join(', ');
    return payGrades[getCadre()].benefits.join(', ');
}

//Employee.calculateBonus = function() {
export function calculateBonus() {
    return .02 * Employee.salary;
}

//Employee.reimbursementEligibility = function() {
export function reimbursementEligibility() {
    let reimbursementCosts = {
        health: 5000,
        housing: 8000,
        wellness: 6000,
        gym: 12000
    };
    let totalBenefitsValue = 0;
    //let employeeBenefits = payGrades[Employee.getCadre()].benefits;
    let employeeBenefits = payGrades[getCadre()].benefits;
    for (let i = 0; i < employeeBenefits.length; i++) {
        totalBenefitsValue += reimbursementCosts[employeeBenefits[i]];
    }
    return totalBenefitsValue;
}

export default Employee;
//export { Employee, getCadre as cadre, calculateTax as tax, getBenefits as benefits, calculateBonus as bonus, reimbursementEligibility as reimbursement}