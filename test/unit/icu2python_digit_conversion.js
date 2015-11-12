var tap = require('tap');
var po2icu = require('../../lib/po2icu');

tap.test('icuDigitToPython', function (t) {
    var icuString = 'Cuz you know Id walk {digit, number} miles if I could just, see, you... TONIIIIIIIGHT'; //BA DA BA DA DA BA DA DA, DUM DA DA DA BA DA DA BA DA DAAAAAAAA
    var poString = po2icu.icuToPython(icuString, {'number': 'digit'});
    t.equal(poString.match(/%d/g).length, 1);
    t.end();
});
