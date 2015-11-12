var tap = require('tap');
var po2icu = require('../../lib/po2icu');

tap.test('pythonFormattedPluralToICU', function (t) {
    var pythonPoStrings = [
        'A woodchuck would chuck one wood.',
        'A woodchuck would chuck %(woodchuckings)d woods.'
        //Just to BEEEE the {person} who walked %d miles to fall down at your DOOOOOOOOORRRRRRR.
    ];
    var pluralForms = [
        {'icuPlural': 'one', 'poPlural': 0},
        {'icuPlural': 'other', 'poPlural': 1}
    ];
    var icuString = po2icu.pythonPluralToICU(pythonPoStrings, pluralForms);
    var icuIdeal = '{woodchuckings, plural,\n' +
        '    one {A woodchuck would chuck one wood.}\n' +
        '    other {A woodchuck would chuck {woodchuckings} woods.}\n' +
        '}';
    t.equal(icuString, icuIdeal);
    t.end();
});
