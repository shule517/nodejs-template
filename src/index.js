'use strict';

import Person from './modules/person';

const jake = new Person('Jake');
const non = new Person();

jake.speak();
non.speak();

console.log('test');
