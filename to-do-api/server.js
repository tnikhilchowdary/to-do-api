const express = require("express");
const app = express();

app.use(express.json());

let todos = [
    { id: 1, task: "Learn Node.js", completed: false },
    { id: 2, task: "Build a Todo API", completed: false },
];



