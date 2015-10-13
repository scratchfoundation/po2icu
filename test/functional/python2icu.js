var tap = require('tap');
var po2icu = require('../../lib/po2icu');

tap.test('pythonDigitToICU', function (t) {
    var testFile = './test/fixtures/python.formatted.po';
    var object = po2icu.poFileToICUSync('es', testFile);

    var icuIdealKey = '1 minute ago';
    var icuIdealValue = 'hace 1 minuto';
    t.ok(object.hasOwnProperty(icuIdealKey));
    t.equal(icuIdealValue, object[icuIdealKey]);
    t.end();
});