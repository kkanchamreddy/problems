function evaluate(str) {
    var stack = [];
    var length = str.length, i = 0;
    var operators = ['+', '-', '*', '/'], op1, op2, result;
    while (i < length) {

        if (operators.indexOf(str[i]) > -1) {
            op2 = stack.pop();
            op1 = stack.pop();
            result = operate(parseInt(op1), parseInt(op2), str[i]);
            stack.push(result);
        }else {
            stack.push(str[i]);
        }
        i++;
    }
    console.log(stack);
    return stack.pop();
}

function operate(op1, op2, operator) {
    var val;
    switch (operator) {
        case '+':
            val = op1 + op2;
            break;
        case '*':
            val = op1 * op2;
            break;
        case '-':
            val = op1 - op2;
            break;
        case '/':
            val = op1 / op2;
            break;
    }

    return val;
}

module.exports.evaluate = evaluate;