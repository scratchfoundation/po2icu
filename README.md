# po2icu
A Node module for converting po-formatted files and strings into ICU-formatted JSON objects.

### Usage

#### Convert a po-formatted string into an ICU-formatted JSON object.


*poStringToICUSync(domain, poString)*
```
var po2icu = require('po2icu');
var poContents = '<po-formatted string>';
var languageCode = 'es';
var icuContent = po2icu.poStringToICUSync(languageCode, poContents);
```


*poStringToICUAsync(domain, poString, callback)*
```
var po2icu = require('po2icu');
var poContents = '<po-formatted string>';
var languageCode = 'es';
var icuContent = po2icu.poStringToICUAsync(languageCode, poContents, function(err, data) {
  console.dir(data);
});
```


#### Convert a po-formatted file into an ICU-formatted JSON object.

*poFileToICUSync(domain, poFilePath)*
```
var po2icu = require('po2icu');
var poContents = '<path-to-pofile>';
var languageCode = 'es';
var icuContent = po2icu.poFileToICUSync(languageCode, poContents);
```


*poFileToICUAsync(domain, poFilePath, callback)*
```
var po2icu = require('po2icu');
var poContents = '<path-to-pofile>';
var languageCode = 'es';
var icuContent = po2icu.poFileToICUAsync(languageCode, poContents, function(err, data) {
  console.dir(data);
});
```
