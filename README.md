# Puppeteer-lighthouse-jest
A starter suite of tests utilising Puppeteer to drive non-functional tests through a Lighthouse audit

### Properties tested within this suite (these can be added to)

- Accessibility overview
- Performance overview
- Progressive Web App overview
- Best Practices overview
- SEO overview
- Page load speed
- Colour contrast check
- Vulnerabile library check
- AltText on images check
- PageSpeed check
- ARIA attribute values check
- ARIA attributes check
- Duplicate elementId check
- Tab Index check no values > 0
- Logical tab order checck

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
