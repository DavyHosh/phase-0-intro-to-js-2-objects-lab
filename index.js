// Write your solution in this file!
const employee = {
    name: "David",
    streetAddress: { 
        POBox: "P.O. Box 867",
        city: "Nairobi",
        suburb: "Ruaraka",
        postalCode: "00618"
    },
}; 

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]: value
    };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}


console.log(updateEmployeeWithKeyAndValue(employee, "name", "David"));
console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee['streetAddress']['city']));
console.log(deleteFromEmployeeByKey(employee, "name"));
console.log(destructivelyDeleteFromEmployeeByKey(employee, "streetAddress"));