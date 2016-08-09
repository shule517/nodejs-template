'use strict';

var _person = require('./modules/person');

var _person2 = _interopRequireDefault(_person);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

const jake = new _person2.default('Jake');
const non = new _person2.default();

jake.speak();
non.speak();

console.log('test');

class Test {
    sleep(msec, val) {
        console.log('sleep(' + val + ')');
        return new Promise(function (resolve, reject) {
            setTimeout(resolve, msec, val);
        });
    }

    main() {
        var _this = this;

        return _asyncToGenerator(function* () {
            console.log('----- start ----');
            let result1 = yield _this.sleep(3000, 'a1');
            console.log('result1 = ' + result1);
            let result2 = yield _this.sleep(3000, 'a2');
            console.log('result2 = ' + result2);
            console.log('----- end -----');
        })();
    }
}
var test = new Test();
test.main();
//# sourceMappingURL=index.js.map