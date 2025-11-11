import { HashMap } from "./hashmap_practice.js";

const test = new HashMap();

test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden')
test.set('lion', 'golden_overwrite')
test.set('ice cream', 'white_overwrite')
test.set('moon', 'silver')


console.log(test.entries);
console.log(test.get('lion'));
console.log(test.has('lion'));
console.log(test.remove('lion'));
console.log(test.entries);