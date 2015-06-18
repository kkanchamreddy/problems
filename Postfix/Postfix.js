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
        }else if(isDigit(str[i])){
            var num = 0;
            while(isDigit(str[i])){
                num =  num * 10 + parseInt(str[i]);
                i++;
            }
            stack.push(num);
        }
        i++;
    }
    return stack.pop();
}

function isDigit(character) {
    return character >= '0' && character <= '9';
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