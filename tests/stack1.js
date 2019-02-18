//This works prfectly except we cannot use this if we want to deal with high number of instances. because it uses creates items[] for each 
//We can refien this with es6 syntax --stack2.js

function Stack() {
    let items = [];
    //Push, peek, pop, isempty, clear, size, print
    this.push = function (element) {
        items.push(element);
    }
    this.pop = function () {
        return items.pop();
    }
    this.peek = function () {
        return items[items.length - 1]
    }
    this.isEmpty = function () {
        return items.length === 0;
    }
    this.size = function () {
        return items.length;
    }
    this.clear = function () {
        items = [];
    }
    this.print = function () {
        console.log(items);
    }
}

// Stack.prototype.push = function (element) {
//     this.items.push(element);//Cant use this because item is not accessable here 
// }

var stack1 = new Stack();
var stack2 = new Stack();

//Stack i
stack1.push(1);
stack1.push(2);
stack1.push(3);
console.log(stack1.pop());
stack1.print()
console.log(stack1.items); //undefined because items is private variable


//Stack 2
console.log("Stack 2");

stack2.push(5);
stack2.push(5);
stack2.push(6);
console.log(stack2.pop());
stack2.print()