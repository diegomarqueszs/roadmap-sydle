//Basic Types
let id:number = 5;
let company: string = 'SYDLE';
let isPublished: boolean = true;
let x: any = 'Helo';

let ids: number[] = [1,2,3,4];
let arr: any[] = [1,2,true,'Hello'];

// Tuple
let person: [number, string, boolean] = [1,'Diego', true];
// Tuple Array
let employee: [number, string][];

employee = [
    [1,'Diego'],
    [2,'Souza'],
    [3,'Marques'],
]

// Union - Diferentes tipos
let project_id: string | number = 22;
project_id = 'WORK';

// Enum
enum Direction1{
    Up = 1,
    Down,
    Left,
    Right
}

enum Direction2{
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}

console.log(Direction1.Up, Direction2.Left)

//Objects
type User = {
    id:number,
    name:string
}

const user: User = {
    id: 1,
    name: 'Diego'
}

// Type Assertion //casting
let cid: any = 1;
// let costumerId = <number>cid
let costumerId = cid as number;

// Functions -> numero, numero, return = numero
function addNum(x:number,y:number):number{
    return x+y;
}

function log(message: string | number): void{
    console.log(message);
}

log(addNum(1,5));

// Interfaces

interface UserInterface {
    readonly id:number, //bloqueia escrita user1.id = 5
    name:string,
    age?:number //torna o atributo opcional
}

const user1: UserInterface = {
    id: 1,
    name: 'Diego'
}


//diferença interface x type
type Point = number | string;
const p1: Point = 1;

//Não funciona
// interface Point2 = number | string  ;
// const p2: Point = 1;


interface MathFunc{
    (x: number, y:number):number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
const plus: MathFunc = (x: number, y: number): number => x * y;

// Classes
interface PersonInterface {
    id: number
    name: string
    register():string;
}

class Person implements PersonInterface {
    id: number //acesso somente dentro da classe
    name: string

    constructor(id:number, name: string){
        this.id = id;
        this.name = name;
        console.log(id, name);
    }
    register(){
        return`${this.name} is now registered`;
    }
}

const brad = new Person(1,'Brad');
console.log(brad.register());
//brad.id = 5; nao funciona porque se id for privado 

// Subclasses
class Employee extends Person{
    position:string
    
    constructor(id:number, name:string, position:string){
        super(id,name);
        this.position = position;
    }
}

const emp = new Employee(3, 'Shwan', 'Developer')

console.log(emp.register());

// Generics
function getArray<T>(items: T[]): T[]{
    return new Array().concat(items);
}

let numArray = getArray<number>([1,2,3,4]);
let strArray = getArray<string>(['Diego', 'Brad']);

//numArray.push('Hello'); Não funciona porque definimos como number o generics