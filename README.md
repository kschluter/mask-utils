# Mask Utils
An NPM package that exports functions to mask values.

# Installation
    npm install mask-utils --save

# Usage
    var maskUtils = require('mask-utils');

    // Mask US Phone Number
    maskUtils.maskUSPhone('1234567890'); //=> (123) 456-7890

    // Mask US Zip Code
    maskUtils.maskUSZipCode('925630001') //=> 92563-0001

# License
MIT