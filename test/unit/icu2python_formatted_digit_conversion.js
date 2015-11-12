var tap = require('tap');
var po2icu = require('../../lib/po2icu');

tap.test('icuToPythonFormattedDigit', function (t) {
    var icuString = 'A woodchuck would chuck {woodchuckings, number} woods.';
    var pythonString = po2icu.icuToPython(icuString);
    t.equal(pythonString.match(/%\(woodchuckings\)d/g).length, 1);
    t.end();
});
