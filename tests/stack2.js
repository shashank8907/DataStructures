//Stack using ES6

class Stack {
    constructor() {
        this.items = [];
    }
    push(element) {
        this.items.push(element);
    }
    pop() {
        return this.items.pop();
    }
    peek() {
        return this.items[this.items.length - 1]
    }
    isEmpty() {
        return this.items.length === 0;
    }
    size() {
        return this.items.length;
    }
    clear() {
        
        this.items = [];
    }
    print() {
        console.log(this.items);
    }
}


var stack1 = new Stack();
var stack2 = new Stack();

//Stack i
stack1.push(1);
stack1.push(2);
stack1.push(3);
stack1.print()
console.log(stack1.items); //We can access items from outside, that's a drawback possible solution is in stack3


//Stack 2
console.log("Stack 2");

stack2.push(5);
stack2.push(5);
stack2.push(6);
stack2.print()