import HashMap from "./hashmap.js";

const map = new HashMap();

console.log('Hash for "apple":', map.hash('apple'));
console.log('Hash for "banana":', map.hash('banana'));

map.set('apple', 'new apple');
map.set('banana', 'new banana');

console.log(map.buckets);

console.log('Get apple:', map.get('apple'));         
console.log('Has banana:', map.has('banana'));       
console.log('Remove apple:', map.remove('apple'));   
console.log('Length:', map.length());                
console.log('Keys:', map.keys());                    
console.log('Values:', map.values());                
console.log('Entries:', map.entries());             
map.clear();
console.log('After clear - length:', map.length()); 

