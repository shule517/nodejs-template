'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
class Person {
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
exports.default = Person;
//# sourceMappingURL=person.js.map