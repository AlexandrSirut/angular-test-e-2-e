exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['SuperCalculator.js'],
    capabilities: {
        browserName: 'firefox'
    },
    onPrepare: function() {
        var jasmineReporters = require('jasmine-reporters');
        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
            consolidateAll: true,
            savePath: './testReport',
            filePrefix: 'report'
        }));
    }
}