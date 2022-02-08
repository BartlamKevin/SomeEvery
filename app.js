/*accepts an array and returns:
-true if the array contains at least one odd number
-otherwise it returns false

Examples:
    hasOddNumber([1,2,2,2,2,2,4]) // true
    hasOddNumber([2,2,2,2,2,4]) // false
*/
function hasOddNumber(numArr) {
    return numArr.some(function(numVal){
        numVal % 2 !== 0; //remainder is not 0
    });
}

/*which accepts a number and returns:
-true if that number contains at least one zero. 
-otherwise it returns false

Examples:
    hasAZero(3332123213101232321) // true
    hasAZero(1212121) // false
*/
function hasAZero(number){
    return number.toString().split("").some(function(numStr){//converts to string then splits and search for 0
        return numStr === "0"
    });
}

/*which accepts an array and returns:
-true if every single number in the array is odd
-if any of the values in the array are not odd, the function should return false.

Examples:
    hasOnlyOddNumbers([1,3,5,7]) // true
    hasOnlyOddNumbers([1,2,3,5,7]) // false
*/

function hasOnlyOddNumbers(numArr){
    return numArr.every(function(numVal){
        return numVal % 2 !== 0;
    });
}

/*which accepts an array and returns:
-true if there are no duplicate values
-if there are any duplicates, the function should return false.

Examples:
    hasNoDuplicates([1,2,3,1]) // false
    hasNoDuplicates([1,2,3]) // true
*/

function hasNoDuplicates(arr){
    return arr.every(function(arrVal){
        return arr.indexOf(arrVal) === arr.lastIndexOf(arrVal);//index of is first instance and last index of will either be the second instance or the original instance
    });
}

/*which accepts an array of objects and a key, and returns:
-true if every single object in the array contains that key
-otherwise it returns false

Examples:
    var arr = [
        {title: "Instructor", first: 'Elie', last:"Schoppik"}, 
        {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true}, 
        {title: "Instructor", first: 'Matt', last:"Lane"}, 
        {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
    ]
    
    hasCertainKey(arr,'first') // true
    hasCertainKey(arr,'isCatOwner') // false
*/

function hasCertainKey(arrOfObj, key){
    return arrOfObj.every(function(valOfArrKey){
        return key in valOfArrKey;
    })
}

/*which accepts an array of objects and a key, and a value, and returns:
-true if every single object in the array contains that value for the specific key
-otherwise it returns false

Examples:
    var arr = [
        {title: "Instructor", first: 'Elie', last:"Schoppik"}, 
        {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true}, 
        {title: "Instructor", first: 'Matt', last:"Lane"}, 
        {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
    ]
    
    hasCertainValue(arr,'title','Instructor') // true
    hasCertainValue(arr,'first','Elie') // false
    
*/

function hasCertainValue(arr, key, searchValOfKey){
    return arr.every(function(val){
        return val[key] === searchValOfKey;//searches through the arr for the key and the value of the key and checks to see if the value
    });
}
