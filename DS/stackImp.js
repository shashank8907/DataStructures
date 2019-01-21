//Create a stack
var Stack = function(){
    this.count = 0;
    this.storage = {};

    //Add value onto the end of the stack
    this.push = function(value){
        this.storage[this.count] = value;
        this.count++; 
    } 

    //Remove and returns the value at the end of the stack 
    this.pop = function () { 
        if(this.count === 0){
            return undefined
        }
        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count]; 
        return result;

     }
     //Returns the size of the stack
     this.size = function(){
         return this.count;
     }
     //Returns the last element of the stack 
     this.peek = function(){
         return this.storage[this.count-1]
     }

}