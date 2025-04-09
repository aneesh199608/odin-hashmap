import HashMap from "./hashmap.js";

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
test.set('lion', 'golden');

console.log('Initial size:', test.length());
console.log('Initial capacity:', test.capacity);

test.set('apple', 'crimson');
test.set('banana', 'bright yellow');
test.set('grape', 'dark purple');

console.log('After overwrites - size:', test.length());
console.log('After overwrites - apple:', test.get('apple'));
console.log('New load:', test.length() / test.capacity);

test.set('moon', 'silver');

console.log('After adding moon - size:', test.length());
console.log('New capacity (should be 32):', test.capacity);
console.log('New load:', test.length() / test.capacity);

console.log('Has dog:', test.has('dog'));
console.log('Get jacket:', test.get('jacket')); 
console.log('Remove frog:', test.remove('frog'));
console.log('Length after removal:', test.length());

console.log('Keys:', test.keys());
console.log('Values:', test.values());
console.log('Entries:', test.entries());

test.clear();
console.log('After clear - size:', test.length());
console.log('After clear - keys:', test.keys());
