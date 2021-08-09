// Write your solution in this file!
const employee = {
    name: "Sam",
    streetAddress: "22 Broadway" 
}

function updateEmployeeWithKeyAndValue(employee,key,value){
    const newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee){
    const newEmployee = {...employee};
    delete newEmployee.name;
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee){
    delete employee.name;
    return employee;
}