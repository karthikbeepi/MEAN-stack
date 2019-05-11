const employeeDB = require('../database/employees.json');
exports.getEmployees = getEmployees;
exports.getEmployee = getEmployee;

function getEmployees(callback){
    setTimeout( () => {
        callback(null, employeeDB);
    }, 500);
}

function getEmployee(employeeID, callback){
    getEmployees( (error, data) => {
        if(error) {
            return callback(error);
        }

        var result = data.find( (item) => {
            return item.id === employeeID;
        });

        callback(null, result);
    });
}