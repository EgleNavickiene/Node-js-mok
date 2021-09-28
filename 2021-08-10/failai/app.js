const fs = require('fs');

fs.writeFileSync('tekstas.txt', 'Labas Pasauli');

fs.appendFileSync('tekstas.txt', '\nkoks tu gražus!')