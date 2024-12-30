const { setDriver } = require("mongoose");
const Todo = require("../models/Todo");

exports.getTodos = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.json(todos);
    }   catch (err) {
        res.status(500).json({ message: "Server error" });
    }
};

exports.createTodo = async (req, res) => {
    try {
        const newTodo = new Todo({
            title: req.body.title,
        });
        const savedTodo = await newTodo.save();
        res.json(savedTodo);
    }   catch (err) {
        res.status(500).json({ message: "Server error" });
    }
};

exports.updateTodo = async (req, res) => {
    try {
        const updatedTodo = await Todo.findByIdAndUpdate(req.param.id, req.body, { new: true });
        res.json(upatedTodo);
    }   catch (err) {
        res.status(500).json({ message: "Server error" });
    }
};

exports.deleteTodo = async (req, res) => {
    try {
        await Todo.findByIdAndDelete(req.params.id);
        res.json({ message: "Todo deleted" });
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
};