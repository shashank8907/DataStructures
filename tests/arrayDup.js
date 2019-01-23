/*

Givenan array of n integers in which each element is in the range of 1 to n-1, 
input n = 7    |    1,4,3,5,6,6,2
output =6
*/
/*
So there is an array and from that array we have to check find dup element

there are 4 ways 
1) just search 
2) sort and search
3) store and flag
4)-ve +ve and flag
*/

function searchDup1(nums) {
    //Just search
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                console.log(nums[j], " is Dup1", )
            }

        }
    }
}


function searchDup2(nums) {
    //sort and search
    nums.sort();
    console.log(nums)
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 1]) {
            console.log(nums[i], " is Dup2", )

        }
    }
}


function searchDup3(nums) {
    //store and flage
    //Create an array with same lenght and fill it with flase
    var lookUpArray = new Array(nums.length).fill(false);
    for (let i = 0; i < nums.length; i++) {
       //For every element in the array we make f to t of lookuparrys index
        if(lookUpArray[nums[i]] === false){
            lookUpArray[nums[i]] = true;
        }else{
            console.log(nums[i], " is Dup3", )
        }
    }
}

function searchDup3(nums) {
    // -ve +ve and flag
    //Create an array with same lenght and fill it with flase
    var lookUpArray = new Array(nums.length).fill(false);
    for (let i = 0; i < nums.length; i++) {
       //For every element in the array we make f to t of lookuparrys index
        if(lookUpArray[nums[i]] === false){
            lookUpArray[nums[i]] = true;
        }else{
            console.log(nums[i], " is Dup3", )
        }
    }
}




searchDup3([1, 4, 3, 5, 6, 6, 2]);