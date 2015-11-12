var tap = require('tap');
var po2icu = require('../../lib/po2icu');

tap.test('icuToFormattedPythonString', function (t) {
    var icuString = 'If you are neutral in situations of injustice, you have chosen the side of {opressors_name}'; // -Desmond Tutu
    var pythonString = po2icu.icuToPython(icuString);
    t.equal(pythonString.match(/%\(opressors_name\)s/g).length, 1);
    t.end();
});
