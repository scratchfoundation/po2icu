var tap = require('tap');
var po2icu = require('../../lib/po2icu');

tap.test('pythonDigitToICU', function (t) {
    var pythonPoString = 'IIIIIIII would walk %d miles and IIIIII would walk %d more'; //Just to BEEEE the {person} who walked %d miles to fall down at your DOOOOOOOOORRRRRRR.
    var icuString = po2icu.pythonToICU(pythonPoString);
    t.equal(icuString.match(/\{digit, number\}/g).length, 2);
    t.end();
});
