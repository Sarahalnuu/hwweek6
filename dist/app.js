"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
let peop = [];
app.get('/people', (req, res, next) => {
    return res.json(peop);
});
app.post('/people', (req, res) => {
    const newpeop = req.body;
    peop.push(newpeop);
    return res.json({
        name: "nme add",
    });
});
app.put('/people', (req, res) => {
    const updatedname = req.body;
    const id = req.params;
    const updatenamelist = peop.filter((people) => {
        return people.id === id;
    });
    updatenamelist.push(updatedname);
    peop = updatenamelist;
    return res.json({
        message: 'names updated',
    });
});
app.delete('/people', (req, res, next) => {
    const id = req.params;
    const delname = peop.filter(people => {
        people.id === id;
    });
    peop = delname;
    return res.json({
        message: 'name deleted',
    });
});
//
let gradee = [];
app.get('/grade', (req, res, next) => {
    return res.json(gradee);
});
app.post('/grade', (req, res) => {
    const newgrade = req.body;
    gradee.push(newgrade);
    return res.json({
        grade: "grade added",
    });
});
app.put('/grade/:id', (req, res) => {
    const updategrade = req.body;
    const { id } = req.params;
    const updategradelist = gradee.filter((grades) => {
        return grades.id === id;
    });
    updategradelist.push(updategrade);
    gradee = updategradelist;
    return res.json({
        message: 'grades updated !',
    });
});
app.delete('/grade/:id', (req, res) => {
    const { id } = req.params;
    const delgrade = gradee.filter(grades => {
        grades.id !== id;
    });
    gradee = delgrade;
    return res.json({
        message: 'grade deleted ',
    });
});
app.listen(5000, () => {
    console.log('Server is running in port' + 5000);
});
