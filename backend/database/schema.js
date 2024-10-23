const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const nodeSchema = new Schema({
    type: { type: String, required: true },
    left: { type: mongoose.Schema.Types.Mixed },  // Can be another node or value
    right: { type: mongoose.Schema.Types.Mixed }, // Can be another node or value
    value: { type: String }  // Stores value (e.g., comparison operator or actual value)
});

const RuleSchema = new mongoose.Schema({
    ruleAST: nodeSchema,  // The abstract syntax tree representing the rule
    createdAt: { type: Date, default: Date.now }  // Timestamp of when the rule was created
});

const Rule = mongoose.model('Rule', RuleSchema);
module.exports = Rule;
