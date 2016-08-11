'use strict';

export default class Person {
    constructor(name = 'unkown') {
        this.name = name;
    }

    speak() {
        console.log(this.name);
    }

    toString() {
        return this.name;
    }
}
