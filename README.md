# Rule Engine

A simple Rule Engine application built with Node.js and MongoDB. This application allows users to create rules using a user-friendly interface, which are then stored in a MongoDB database.

## Features

- Create rules using a simple input form
- Store and retrieve rules in/from MongoDB
- Evaluate rules based on user-defined conditions
- Frontend interface built with HTML and JavaScript

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- HTML
- CSS
- JavaScript

## Getting Started

### Prerequisites

- Node.js installed on your machine
- MongoDB Atlas account
- Basic knowledge of JavaScript and Express.js

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/KManprit/your-repo-name.git
   cd your-repo-name

   ```

2. **Install dependencies:**

npm install

3. **Create a .env file:**

In the root of the project, create a file named .env and add the following environment variables:

MONGO_URI=mongodb+srv://<username>:<password>@cluster0.aqpip.mongodb.net/ruleEngineDB?retryWrites=true&w=majority
PORT=3000
Replace <username> and <password> with your MongoDB Atlas credentials.

4. **Start the server:**

node app.js

5. **Access the application:**

Open your web browser and navigate to http://localhost:3000.

**Usage**
Enter your rule in the input box (e.g., age > 30 AND salary > 50000).
Click the "Create Rule" button to save the rule to the database.
Rules will be evaluated based on the defined logic.

**Contributing**
Contributions are welcome! If you would like to contribute to this project, please fork the repository and submit a pull request.


**Acknowledgements**
    MongoDB
    Express.js
    Node.js

