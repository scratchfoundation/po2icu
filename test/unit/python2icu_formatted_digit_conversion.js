var tap = require('tap');
var po2icu = require('../../lib/po2icu');

tap.test('pythonFormattedDigitToICU', function (t) {
    var pythonPoString = 'A woodchuck would chuck %(woodchuckings)d woods.';
    var icuString = po2icu.pythonToICU(pythonPoString);
    t.equal(icuString.match(/\{woodchuckings, number\}/g).length, 1);
    t.end();
});
