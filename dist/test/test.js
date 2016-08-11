'use strict';

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _person = require('../modules/person');

var _person2 = _interopRequireDefault(_person);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Person', () => {
    describe('name', () => {
        it('引数に応じて決まった文字列を返すこと1', () => {
            _assert2.default.equal(new _person2.default().toString(), 'unkown');
        });
        it('引数に応じて決まった文字列を返すこと2', () => {
            _assert2.default.equal(new _person2.default('shule').toString(), 'shule');
        });
    });
});
//# sourceMappingURL=test.js.map