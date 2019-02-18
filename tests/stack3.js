//Stack using ES6


let _items = Symbol();
class Stack {
    constructor() {
        this[_items] = [];
    }
    push(element) {
        this[_items].push(element);
    }
    pop() {
        return this[_items].pop();
    }
    peek() {
        return this[_items][this[_items].length - 1]
    }
    isEmpty() {
        return this[_items].length === 0;
    }
    size() {
        return this[_items].length;
    }
    clear() {
        
        this[_items] = [];
    }
    print() {
        console.log(this[_items]);
    }
}


var stack1 = new Stack();
var stack2 = new Stack();

//Stack 1
stack1.push(1);
stack1.push(2);
stack1.push(3);
console.log(stack1._items); //Now can't access _this directly that is.

//We can still access using Object.getOwnPropertySymbols(instanceObj) //Complete private variable can be achieved through WeakMap()
let objectSymbol = Object.getOwnPropertySymbols(stack1);
console.log(objectSymbol.length);
stack1[objectSymbol[0]].pop()
stack1.print()


//Stack 2
console.log("Stack 2");
objectSymbol = Object.getOwnPropertySymbols(stack2);
stack2.push(5);
stack2.push(5);
stack2.push(6);
stack2[objectSymbol[0]].pop()
stack2.print()
