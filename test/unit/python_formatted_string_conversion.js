var tap = require('tap');
var po2icu = require('../../lib/po2icu');

tap.test('pythonToICU', function (t) {
    var pythonPoString = '%(my_best_friend)s would NEVER say that about me.';
    var icuString = po2icu.pythonToICU(pythonPoString);
    t.equal(icuString.match(/\{my_best_friend\}/g).length, 1);
    t.end();
});
