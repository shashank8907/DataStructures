function Stack(){
    let items = [];
    //Push, peek, pop, isempty, clear, size, print
    this.push = function(element){
        items.push(element);
    }
    this.pop = function(){
        return items.pop();
    }
    this.peek = function(){
        return items[items.length - 1]
    }
    this.isEmpty = function(){
        return items.length === 0;
    }
    this.size = function(){
        return items.length;
    }
    this.clear= function(){
        this.items = [];
    }
    this.print= function(){
        console.log(items);
    }
}

var stack1 = new Stack();

stack1.push(1);
stack1.push(2);
stack1.push(3);
console.log(stack1.pop());
stack1.print()
console.log(stack1.items);//undefined because items is private variable
//This works prfectly except we cannot use this if we are dealing with high number of instances. because it uses creates items[] for each 
//We can refien this with es6 syntax --stack2.js
