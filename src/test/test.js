import assert from 'assert';
import Person from '../modules/person';

describe('Person', () => {
    describe('name', () => {
        it('引数に応じて決まった文字列を返すこと1', () => {
            assert.equal(new Person().toString(), 'unkown');
        });
        it('引数に応じて決まった文字列を返すこと2', () => {
            assert.equal(new Person('shule').toString(), 'shule');
        });
    });
});
