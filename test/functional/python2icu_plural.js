var tap = require('tap');
var po2icu = require('../../lib/po2icu');

tap.test('pythonDigitToICU', function (t) {
    var testFile = './test/fixtures/python.formatted.plural.po';
    var object = po2icu.poFileToICUSync('es', testFile);

    var icuIdealKey = '{minutes, plural,\n' +
        '    one {1 minute ago}\n' +
        '    other {{minutes} minutes ago}\n' +
        '}';
    var icuIdealValue = '{minutes, plural,\n' +
        '    one {hace 1 minuto}\n' +
        '    other {hace {minutes} minutos}\n' +
        '}';
    t.ok(object.hasOwnProperty(icuIdealKey));
    t.equal(icuIdealValue, object[icuIdealKey]);
    t.end();
});
