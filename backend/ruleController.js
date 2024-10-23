function createRule(ruleString) {
    // Split the rule string into parts (for basic parsing)
    const parts = ruleString.split(' AND ');

    if (parts.length !== 2) {
        throw new Error("Invalid rule format. Please use the format: 'operand1 AND operand2'");
    }

    // Create an AST from the parts
    const left = { type: 'operand', value: parts[0].trim() };  // e.g., "age > 30"
    const right = { type: 'operand', value: parts[1].trim() }; // e.g., "salary > 50000"

    const ast = {
        type: 'operator',
        value: 'AND',
        left: left,
        right: right
    };
    return ast;
}

function evaluateRule(ast, data) {
    if (ast.type === 'operator') {
        const left = evaluateRule(ast.left, data);
        const right = evaluateRule(ast.right, data);

        if (ast.value === 'AND') {
            return left && right;
        } else if (ast.value === 'OR') {
            return left || right;
        }
    } else if (ast.type === 'operand') {
        const [attribute, operator, comparisonValue] = ast.value.split(" ");
        const attributeValue = data[attribute];

        switch (operator) {
            case '>':
                return attributeValue > parseFloat(comparisonValue);
            case '<':
                return attributeValue < parseFloat(comparisonValue);
            case '=':
                return attributeValue == comparisonValue;
            default:
                return false;
        }
    }
    return false;
}

module.exports = { createRule, evaluateRule };
