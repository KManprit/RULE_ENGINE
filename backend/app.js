const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');
const { createRule, combineRules, evaluateRule } = require("./ruleController");
const mongoose = require('mongoose');
const Rule = require("./database/schema");
require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Serve the frontend static files
app.use(express.static(path.join(__dirname, '..', 'frontend'))); 


mongoose.connect(process.env.MONGO_URI, { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Failed to connect to MongoDB', err));

    

// Endpoint to create a rule
app.post("/api/create_rule", (req, res) => {
  const ruleString = req.body.rule;
  const ast = createRule(ruleString);

  // Here you would save the AST to the database using the Rule model
  const newRule = new Rule({ ruleAST: ast });
  newRule.save()
      .then(() => res.json({ success: true, ast }))
      .catch(err => res.status(500).json({ success: false, message: 'Error saving rule', error: err }));

});

// Default route to serve the frontend HTML file
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'frontend', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
