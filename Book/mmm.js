exports.add = add;
exports.multiply = multiply;
exports.divide = divide;
exports.now = Date.now();


function add(num1, num2)
{
    return parseInt(num1, 10) + parseInt(num2, 10);
}

function multiply(num1, num2)
{
    return parseInt(num1, 10) * parseInt(num2, 10);
}

function divide(num1, num2)
{
    return parseInt(num1, 10) / parseInt(num2, 10);
}

function factorial(num)
{
    if(num===0)
        return 1;
    return num * factorial(num-1);
}
