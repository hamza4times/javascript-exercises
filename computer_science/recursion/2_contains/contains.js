/*
Write a function that searches for a value in a nested object. It returns true if the object contains that value.
Objects are compared by reference.
*/

const contains = function(object, value) {
  for (let i = 0; i < Object.values(object).length; i++){
    if (Object.values(object)[i].isArray || Object.values(object)[i] instanceof Object){ // fix Array to captial
      console.log("return contains(Object.values(object)[i], value);");
      console.log("Object keys: " + Object.keys(object));
      return contains(Object.values(object)[i], value);
    }
  };
  if(Object.values(object).includes(value) === false){
    console.log("return false");
    return false;
  } else {
    console.log("return Object.values(object).includes(value);");
    return Object.values(object).includes(value);
  }
};

// npm test -- contains.spec.js

const object = {
  num: 44,
  num2: 55,
  num44: -20220202,
  Ilove3: "44",
}

const object1 = {
    data: {
      duplicate: "e",
      stuff: {
        thing: {
          banana: NaN,
          moreStuff: {
            something: "foo",
          },
        },
      },
      info: {
        duplicate: "e",
        magicNumber: 44,
        empty: null,
      },
    },
  };

// console.log(contains(object, 55));
console.log(contains(object1, 44));
console.log(contains(object1, "44"));
console.log(contains(object1, "foo"));

// Do not edit below this line
module.exports = contains;