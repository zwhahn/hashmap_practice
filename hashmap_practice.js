import { LinkedList } from "./linked_list.js"

export class HashMap {
    constructor (loadFactor = 0.75, capacity = 16) {
        this.loadFactor = loadFactor;
        this.capacity = capacity;
        this.buckets = new Array( capacity );
    }

    hash (key) {
        // from The Odin Project
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }

        return hashCode;
    }

    set (key, value) {
        console.log("--------- NEW SET --------")
        console.log("key, value: ", key, value)
        const index = this.hash(key) % this.capacity;
        // console.log('legnth:', this.buckets.length)
        console.log('index', index);
        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bounds");
        } 
        else {
            // Empty bucket
            if (this.buckets[index] == null) {
                console.log("Empty");
                const newList = new LinkedList();
                newList.append([key, value])
                this.buckets[index] = newList;
            } 
            // Another item in bucket
            else if (this.buckets[index] != null && !this.buckets[index].contains([key, value])) {
                console.log("Item already in bucket");
                this.buckets[index].append([key, value])
                // console.log(this.buckets[index])
            }
            // Collision
            else if (this.buckets[index].contains([key, value])) {
                console.log("Collision");
                const oldKeyIndex = this.buckets[index].find(key);
                console.log("oldKeyIndex: ", oldKeyIndex)
                this.buckets[index].update(oldKeyIndex, [key, value]);
            }
        }
    }
    
    get (key) {
        const index = this.hash(key);
        const node = this.buckets[index].find(key);
        if (node == null) {
            return null
        }
        else {
            return node[1];
        }
    }

    has (key) {
        const index = this.hash(key);
        return this.buckets[index].find(key);
    }

    remove (key) {
        const index = this.hash(key);
        if (this.buckets[index] != null && !this.buckets[index].contains(key)) {
            const removalIndex = this.buckets[index].find(key);
            this.buckets[index].remove(removalIndex);
            return true;
        }
        return false;
    }

    get length () {
        let l = 0;
        for (let i = 0; i < this.capacity; i++) {
            if (this.buckets[i] != null){
                // console.log(this.buckets[i])
                l += this.buckets[i].size;
            }
        }
        return l;
    }

    get clear () {
        for (let i = 0; i < this.capacity; i++) {
            let bucketSize = this.buckets[i].size
            for (k = 0; k <= bucketSize; k++)
                this.buckets[i].pop();
        }
        return;
    }

    get keys () {
        let keysArray = [];
        for (let i = 0; i < this.capacity; i++) {
            let bucketSize = this.buckets[i].size
            for (let k = 0; k <= bucketSize; k++)
                key = this.buckets[i].at(k)[0];
                keysArray.append(key)
        }
        return keysArray;
    }

    get keys () {
        let valuesArray = [];
        for (let i = 0; i < this.capacity; i++) {
            let bucketSize = this.buckets[i].size
            for (let k = 0; k <= bucketSize; k++)
                value = this.buckets[i].at(k)[1];
                valuesArray.append(value)
        }
        return valuesArray;
    }

    get entries () {
        let entryArray = [];
        let entry = '';
        // Loop over buckets
        for (let i = 0; i < this.capacity; i++) {
            // Check if bucket is empty
            if (this.buckets[i] != null){
                let bucketSize = this.buckets[i].size;
                // Loop over elements in bucket
                for (let k = 0; k < bucketSize; k++) {
                    entry = this.buckets[i].at(k).value;
                    entryArray.push(entry)
                }
            }
        }
        return entryArray;
    }
}