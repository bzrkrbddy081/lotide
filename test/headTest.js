const assert = require('chai').assert;
const assertEqual = require('../assertEqual');
//head
const head = require('../head');

describe("#head", () => {
  
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
});

it("returns 1 for ['1','2']", () => {
  assert.strictEqual(head([1,2]), 1); 
});


it("returns '5' for ['5']", () => {
  assert.strictEqual(head(['5']), '5'); 
});

// it("returns 'Hello' for ['Hello']", () => {
//   assert.strictEqual(head(['Hello'], ["Hello"])); 
// });



// //Test Code
// assertEqual(head([1,2]),1);
// assertEqual(head([7,5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");



