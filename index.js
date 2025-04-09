import HashMap from "./hashmap.js";

const map = new HashMap();

console.log('Hash for "apple":', map.hash('apple'));
console.log('Hash for "banana":', map.hash('banana'));

map.set('apple', 'new apple');
map.set('banana', 'new banana');

console.log(map.buckets);
