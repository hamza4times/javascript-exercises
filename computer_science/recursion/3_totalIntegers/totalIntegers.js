/*Write a function that takes in an arbitrarily deep array or object and returns the total number of integers stored inside this array or object.

```javascript
totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]); // returns 7
totalIntegers({ a: 1, b: { a: [5, 10], b: 11 } }); // returns 4
```
*/

// npm test -- totalIntegers.spec.js
const totalIntegers = function(array) {
    console.log("Start");
    let counter = 0;
    if (Array.isArray(array)){
        console.log("array");
        console.log(array.length);
        for (let i = 0; i < 3; i++){ // replace 3 with array.length
            console.log("iteration");
            counter++;
            if (array[i].isArray || array[i] instanceof Object){
                return totalIntegers(array[i]);
            }
        }
        console.log(array.length);
    }else if (array instanceof Object){
        console.log("object");
        for (let i = 0; i < Object.values(array); i++){
            counter++;
            if (array[i].isArray || array[i] instanceof Object){
                return totalIntegers(array[i]);
            }
        }
    }else{
        console.log(counter);
        return counter;
    }
    return counter;
};

console.log(totalIntegers([1, 2, 3]));
  
// Do not edit below this line
module.exports = totalIntegers;
