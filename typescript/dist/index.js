"use strict";
//Basic Types
let id = 5;
let company = 'SYDLE';
let isPublished = true;
let x = 'Helo';
let ids = [1, 2, 3, 4];
let arr = [1, 2, true, 'Hello'];
// Tuple
let person = [1, 'Diego', true];
// Tuple Array
let employee;
employee = [
    [1, 'Diego'],
    [2, 'Souza'],
    [3, 'Marques'],
];
// Union - Diferentes tipos
let project_id = 22;
project_id = 'WORK';
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction1.Up, Direction2.Left);
const user = {
    id: 1,
    name: 'Diego'
};
// Type Assertion //casting
let cid = 1;
// let costumerId = <number>cid
let costumerId = cid;
// Functions -> numero, numero, return = numero
function addNum(x, y) {
    return x + y;
}
function log(message) {
    console.log(message);
}
log(addNum(1, 5));
const user1 = {
    id: 1,
    name: 'Diego'
};
const p1 = 1;
const add = (x, y) => x + y;
const plus = (x, y) => x * y;
class Person {
    id; //acesso somente dentro da classe
    name;
    constructor(id, name) {
        this.id = id;
        this.name = name;
        console.log(id, name);
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const brad = new Person(1, 'Brad');
console.log(brad.register());
//brad.id = 5; nao funciona porque se id for privado 
// Subclasses
class Employee extends Person {
    position;
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, 'Shwan', 'Developer');
console.log(emp.register());
// Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['Diego', 'Brad']);
//numArray.push('Hello'); Não funciona porque definimos como number o generics
