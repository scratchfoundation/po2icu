var tap = require('tap');
var po2icu = require('../../lib/po2icu');

tap.test('pythonToICU', function (t) {
    var pythonPoString = '%s is obviously the best person on Game of Thrones.';
    var icuString = po2icu.pythonToICU(pythonPoString);
    t.equal(icuString.match(/\{string\}/g).length, 1);
    t.end();
});
