const assert = require('assert');
const { describe, it } = require('mocha');
const path = require('path');
const fs = require('fs');
const { TestUtils } = require('./testUtils');

const solutionsPath = path.join(__dirname, '../src');
const testPath = __dirname;
const tests = fs
  .readdirSync(testPath)
  .filter(v => v.endsWith('json'))
  .map(v => v.replace('.json', ''));

tests.forEach(testName => {
  // eslint-disable-next-line import/no-dynamic-require,global-require
  const importedModule = require(`${solutionsPath}/${testName}.js`);
  const method = importedModule[testName];
  // eslint-disable-next-line import/no-dynamic-require,global-require
  const testCases = require(`${testPath}/${testName}`);

  if (method) {
    describe(testName, () => {
      testCases.forEach(testCase => {
        it(`should return "${JSON.stringify(testCase.expected)}"`, () => {
          const fn = method(TestUtils, ...testCase.fnOuterArguments);
          const message = fn(...testCase.fnArguments);
          assert.deepStrictEqual(message, testCase.expected);
        });
      });
    });
  }
});
