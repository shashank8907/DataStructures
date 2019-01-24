// Set
/** 
 set DS is like an array but no dup items and the values are in no perticular order
 
 ES6 has a built in set object -- but doesn'rcontain all the methods that are common to sets so 
 you may want to impliment the part of the set itself depending on 
 what you are using it for


 methods that are part of ES6: values, add, delete , size(property)
 not in ES6 sets: union(combine sets and remove duplicates),


*/
function MySet() {
    //using this for storing unique eleements and return it 
    var collection = []

    this.values = function () {
        return collection;
    }

    this.has = function (element) {
        //We check if the element is present is already present 
        //in the collection or not
        return (collection.indexOf(element) !== -1) //returns true if the element is present
    }

    this.add = function (eleement) {
        if (!this.has(eleement)) {
            //enters this block if the element is not present in the collection
            collection.push(eleement);
            return true //Implies that the element has been added
        }
        return false //No [need of else block because...
    }

    //To remove and element
    this.remove = function (element) {
        if (this.has(element)) {
            //enters this block if the element is present in the collection
            index = collection.indexOf(element); //okay for now
            collection.splice(index, 1);
            return true //Implies that the element has been removed
        }
        return false //No [need of else block because...
    }

    this.size = function () {
        return collection.length;
    }

    //Bellow following functions are not in the ES6 
    //Which require working with two sets


    //This method will return union on two sets
    this.union = function (otherSet) {
        //This function is called on set and another set is sent as parameter
        //And both the sets are created using Myset()

        var firstSet = this.values();
        var secondSet = otherSet.values();

        //Create another array to store result

        var unionSet = new MySet();

        firstSet.forEach(element => {
            unionSet.add(element)
        });


        secondSet.forEach(element => {
            unionSet.add(element)
        });
        return unionSet;

    }

    this.intersect = function (otherSet) {
        var firstSet = this.values();
        var intersect = new MySet();
        //Intersection we only add elements which are common in the both sets
        //We need to add elements in intersect set such that only common elements
        // in both of them gets added 
        //First we iterate each element in the firstSet
        firstSet.forEach(element => {
            if (otherSet.has(element)) {
                //That means the secondSet and first set has same element
                intersect.add(element);
            }
        });
        return intersect;

    }

    this.difference = function (otherSet) {
        //  this basically returns a difference of a set
        //all the items that are there in one set but not the other set
        var firstSet = this.values();
        var secondSet = otherSet.values();
        var difference = new MySet();
        //Difference means extra elements in firstset
        firstSet.forEach(element => {
            if (otherSet.has(element) == false) {
                difference.add(element);
            }
        });
        return difference;
    }
    this.subSet = function (otherSet) {
        //Here we check of other set is subset of called-on set
        var firstSet = this.values();
        //The Question is is firstset subset of tghis other set
       return firstSet.every( 
            //every return true if every element in firstSet 
            //satisfies the condition in the function
            function (value) {
                //This function should return boolean
                return otherSet.has(value);
            }
        );

    }
}

var myset1 = new MySet();
myset1.add(1);
myset1.add(2);
myset1.add(3);
var myset2 = new MySet();
myset2.add(22);
myset2.add(3);
myset2.add(2);
myset2.add(1);

console.log(myset1.subSet(myset2))