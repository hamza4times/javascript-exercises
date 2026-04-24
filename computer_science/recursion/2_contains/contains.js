const contains = function(object, value,) {
  for (let i = 0; i < Object.values(object).length; i++){
    if (Array.isArray(Object.values(object)[i]) || Object.values(object)[i] instanceof Object){
      console.log("Object keys: " + Object.keys(object)[i]);
      // for (let j = 0; j < Object.keys(object); j++){
        
      // }
      return contains(Object.values(object)[i], value);
    }else{
      console.log("This: !!!" + Object.values(object)[i]);
    }
  };
  return Object.values(object).includes(value);
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