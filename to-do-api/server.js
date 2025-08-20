const express = require("express");
const app = express();

app.use(express.json());

let todos = [
    { id: 1, task: "Learn Node.js", completed: false },
    { id: 2, task: "Build a Todo API", completed: false },
];

app.get("/todos", (req, res)  => {
    res.json(todos)
})

app.get("/todos/:id", (req, res) => {
    console.log("Requested Id :", req.params.id);
    const todo = todos.find(t => t.id === parseInt(req.params.id));
    if(!todo) return res.status(404).json({message : "Todo not found"});
    res.json(todo);
});

app.listen(2000, () => {
    console.log("To DO API running on http://localhost:2000/todos")
});