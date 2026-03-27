const arr1 = ['a', 'b', 'c'];
const arr2 = ['d', 'e', 'f'];
const arr3 = arr1.concat(arr2);

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
const subs = animals.slice(2, 4);

const found = animals.indexOf('camel');
const find = animals.includes('camel');
const notFound = animals.includes('eagle');

function calcRectARea(width, height){
    return width*height;
}

function funct1(a, b){
    return a*b;
}

funct2 = (a, b) => a*b;

const months = ['March', 'Jan', 'Feb', 'Dec'];

months.sort();
console.log(months);

const arr = [1, 30, 4, 21, 10000];
arr.sort();

console.log(arr);

arr1.forEach((element) => console.log(element));

const ar = Array.from({length: 10}, () => Math.floor(Math.random()*100));
console.log(ar);

ar.sort((a,b) => a-b);

console.log(ar);

ar.sort((a,b) => b-a);

const items = [
    {name: "Edward", value: 21},
    {name: "Sharpe", value: 37},
    {name: "And", value: 16}
];

items.sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB){
    return 1;
}
return 0;
});

try{
    throw new TypeError("Oops");
} catch (e){
    console.log(e.name); //print TypeError
    console.log(e.message); //print Oops
} finally {
    //finallyStatements
}

class Rectangle {
    constructor(height, width){
        this.height = height;
        this.width = width;
    }
    get area(){
    return this.calcArea();
    }
    calcArea(){
        return this.height*this.width;
    }
}

const square = new Rectangle(3, 4);
console.log(square.area);

console.log(ar);

console.log(arr3);
console.log(subs);
console.log(found);
console.log(find);
console.log(notFound);
console.log(calcRectARea(5, 6));
console.log(funct1(3, 4));
console.log(funct2(3, 4));





