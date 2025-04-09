export default class HashMap {
    constructor(capacity = 16, loadFactor = 0.75) {
        this.capacity = capacity;
        this.loadFactor = loadFactor;
        this.buckets = new Array(capacity).fill(null).map(() => []);
        this.size = 0;
    }

    hash(key) {
        let hashCode = 0;
        const prime = 31;
    
        for (let i = 0; i < key.length; i++) {
          hashCode = (hashCode * prime + key.charCodeAt(i)) % this.capacity;
        }
    
        return hashCode;
    }

    set(key, value) {
        const index = this.hash(key);
        const bucket = this.buckets[index];      

        for (let pair of bucket) {
            if (pair.key === key) {
              pair.value = value;
              return;
        }
    }

        bucket.push({ key, value });
        this.size++;

    if (this.size / this.capacity > this.loadFactor) {
        // this.resize();
        }
    }   
}