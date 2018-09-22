class Sorter {

    constructor() {
        this.compareFunction = (a, b) => a - b;
        this.elements = [];
    }

    add(element) {
        this.elements.push(element);
    }

    at(index) {
       return this.elements[index];
    }

    get length() {
        return this.elements.length;
    }

    toArray() {
        return this.elements;
    }

    sort(indices) {
       let elementsForSorting = [];
       indices.sort();
       indices.forEach( i => elementsForSorting.push(this.elements[i]));
       elementsForSorting.sort(this.compareFunction);
       for(const [i, value] of indices.entries()){
           this.elements.splice(value, 1, elementsForSorting[i]);
       }
    }

    setComparator(compareFunction) {
        this.compareFunction = compareFunction;
    }
}

module.exports = Sorter;