'use strict';

var _person = require('./modules/person');

var _person2 = _interopRequireDefault(_person);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const jake = new _person2.default('Jake');
const non = new _person2.default();

jake.speak();
non.speak();

console.log('test');
//# sourceMappingURL=index.js.map