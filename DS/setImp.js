// Set
/** 
 set DS is like an array but no dup items and the values are in no perticular order
 
 ES6 has a built in set object -- but doesn'rcontain all the methods that are common to sets so 
 you may want to impliment the part of the set itself depending on 
 what you are using it for


 methods that are part of ES6: values, add, delete , size(property)
 not in ES6 sets: union(combine sets and remove duplicates),


*/
function MySet(){
    //using this for storing unique eleements and return it 
    var collection = [] 

    this.values = function(){
        return collection;
    }

    this.has = function (element) { 
        //We check if the element is present is already present 
        //in the collection or not
        return(collection.indexOf(element)!==-1)//returns true if the element is not present
     }

     this.add = function(eleement){
         if(!this.has(eleement)){
            //enters this block if the element is not present in the collection
            collection.push(eleement);
            return true //Implies that the element has been added 
         }
     }

}

