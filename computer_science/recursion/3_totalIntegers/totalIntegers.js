/*Write a function that takes in an arbitrarily deep array or object and returns the total number of integers stored inside this array or object.

```javascript
totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]); // returns 7
totalIntegers({ a: 1, b: { a: [5, 10], b: 11 } }); // returns 4
```
*/

// npm test -- totalIntegers.spec.js
const totalIntegers = function(array, counter = 0){
    let length = array.length;
    // console.log("Start");
    if (Array.isArray(array)){
        // console.log("array path:");
        for (let i = 0; i < length; i++){ // replace 3 with array.length
            // console.log("iteration");
            counter++;
            // console.log(counter);
            if (Array.isArray(array[i]) || array[i] instanceof Object){
                counter--;
                return totalIntegers(array[i], counter);
            }
        }
    }else if (array instanceof Object){
        // console.log("object path:");
        for (let i = 0; i < Object.values(array); i++){
            counter++;
            if (Array.isArray(array[i]) || array[i] instanceof Object){
                return totalIntegers(array[i]);
            }
        }
    }else{
        return counter;
    }
    return counter;
};

console.log(totalIntegers([1, 2, 3]));
console.log(totalIntegers([1, 2, 3, [4, 5, 6, [7, 8, 9, 10]]]));
console.log(totalIntegers([1, 2, 3, [4, 5, 6, [7, 8, 9, 10, [11, 12, 13, 14, 15]]]]));
console.log(totalIntegers([1, 2, 3, [4, 5, 6, {a: 7, b: 8, c: 9, d: 10, e: [11, 12, 13, 14, 15]}]]));
  
// Do not edit below this line
module.exports = totalIntegers;
