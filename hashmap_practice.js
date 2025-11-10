import { LinkedList } from "./linked_list.js"

export class Hashmap {
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
        const index = this.hash(key);
        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bounds");
        } 
        else {
            // Empty bucket
            if (this.buckets[index] == null) {
                const newList = new LinkedList();
                newList.append([key, value])
                this.buckets[index] = newList;
            } 
            // Another item in bucket
            else if (this.buckets[index] != null & !this.buckets[index].contains(key)) {
                this.buckets[index].append([key, value])
            }
            // Collision
            else if (this.buckets[index].contains(key)) {
                oldKeyIndex = this.buckets[index].find(key)
                this.buckets[index].update(oldKeyIndex, [key, value])
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
        if (this.buckets[index] != null & !this.buckets[index].contains(key)) {
            const removalIndex = this.buckets[index].find(key);
            this.buckets[index].remove(removalIndex);
            return true;
        }
        return false;
    }

    get length () {
        let l = 0;
        for (i = 0; i <= this.capacity; i++) {
            l += this.buckets[i].size;
        }
        return l;
    }

    get clear () {
        for (i = 0; i <= this.capacity; i++) {
            let bucketSize = this.buckets[i].size
            for (k = 0; k <= bucketSize; k++)
                this.buckets[i].pop();
        }
        return;
    }

    get keys () {
        let keysArray = [];
        for (i = 0; i <= this.capacity; i++) {
            let bucketSize = this.buckets[i].size
            for (k = 0; k <= bucketSize; k++)
                key = this.buckets[i].at(k)[0];
                keysArray.append(key)
        }
        return keysArray;
    }

    get keys () {
        let valuesArray = [];
        for (i = 0; i <= this.capacity; i++) {
            let bucketSize = this.buckets[i].size
            for (k = 0; k <= bucketSize; k++)
                value = this.buckets[i].at(k)[1];
                valuesArray.append(value)
        }
        return valuesArray;
    }

    get entries () {
        let entryArray = [];
        for (i = 0; i <= this.capacity; i++) {
            let bucketSize = this.buckets[i].size
            for (k = 0; k <= bucketSize; k++)
                entry = this.buckets[i].at(k);
                entryArray.append(entry)
        }
        return entryArray;
    }
}