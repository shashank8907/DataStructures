//Stack using ES6


let Stack = (function () {
    const items = new WeakMap();
    class Stack {
        constructor() {
            items.set(this, []);
        }
        push(element) {
            let s = items.get(this);
            s.push(element);
        }
        pop() {
            let s = items.get(this);
            s.pop();
        }
        peek() {
            let s = items.get(this);
            return s[s.length - 1]
        }
        isEmpty() {
            let s = items.get(this);
            return s.length === 0;
        }
        size() {
            let s = items.get(this);
            return s.length;
        }
        clear() {
            let s = items.get(this);
            s = [];
        }
        print() {
            let s = items.get(this);
            console.log(s);
        }


    }
    return Stack
})();

var stack1 = new Stack();
var stack2 = new Stack();

//Stack 1
stack1.push(1);
stack1.push(2);
stack1.pop();
stack1.print()
console.log(stack1.items); //No access


//Stack 2
console.log("Stack 2");

stack2.push(5);
stack2.push(5);
stack2.push(6);
stack2.print()