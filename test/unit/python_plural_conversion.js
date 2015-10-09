var tap = require('tap');
var po2icu = require('../../lib/po2icu');

tap.test('pythonPluralToICU', function (t) {
    var pythonPoStrings = [
        'IIIIIIII would walk one mile and IIIIII would walk one mile more',
        'IIIIIIII would walk %d miles and IIIIII would walk %d more'
        //Just to BEEEE the {person} who walked %d miles to fall down at your DOOOOOOOOORRRRRRR.
    ];
    var pluralForms = [
        {'icuPlural': 'one', 'poPlural': 0},
        {'icuPlural': 'other', 'poPlural': 1}
    ];
    var icuString = po2icu.pythonPluralToICU(pythonPoStrings, pluralForms);
    var icuIdeal = '{digit, plural,\n' +
        '    one {IIIIIIII would walk one mile and IIIIII would walk one mile more}\n' +
        '    other {IIIIIIII would walk {digit} miles and IIIIII would walk {digit} more}\n' +
        '}';
    t.equal(icuString, icuIdeal);
    t.end();
});
