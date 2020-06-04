const scanner = require('sonarqube-scanner');

scanner(
  {
    // this example uses local instance of SQ
    serverUrl: 'sonarcloud.io',
    options: {
      'sonar.projectVersion': '1.0.0',
      'sonar.sources': 'src',
      'sonar.tests': '__tests__',
      'sonar.typescript.lcov.reportPaths': 'coverage/lcov.info',
      'sonar.testExecutionReportPaths': 'test-report.xml',
    },
  },
  () => {
    // callback is required
  },
);
