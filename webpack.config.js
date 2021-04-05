const path = require('path');

module.exports = {
    entry: './build/src/gdprConsent/gdpr-consent.js',
    output: {
        filename: 'gdpr-consent.js',
        path: path.resolve(__dirname, 'assets', 'scripts')
    }
};