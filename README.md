# Puppeteer-lighthouse-jest
A starter suite of tests utilising Puppeteer to drive non-functional tests through a Lighthouse audit

### Set the url to test against

In the test.js file, update the following variable to reflect your chosen url

```
const url = '<Your URL goes here>';
```

### Install all dependencies

```bash
npm install
```

### Run the tests

```bash
npm test
```

#### This suite provides a basic overview of the Lighthouse audit. In the event of test failures, additional information can be found by running a comprehensive Lighthouse audit

```bash
lighthouse <url> --view
```
