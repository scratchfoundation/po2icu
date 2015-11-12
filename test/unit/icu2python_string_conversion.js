var tap = require('tap');
var po2icu = require('../../lib/po2icu');

tap.test('icuToPython', function (t) {
    var icuString = 'We should start feeding our dog {string}.'; // Mad libs!
    var pythonString = po2icu.icuToPython(icuString, {'string': 'string'});
    t.equal(pythonString.match(/%s/g).length, 1);
    t.end();
});
