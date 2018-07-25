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

## Prerequisites
Node version 7.10.1 or greater

If you are running an earlier version of node, you can update with the following commands:

```bash
sudo npm cache clean -f
sudo npm install n
(or 'sudo npm install -g n' should you wish to update node globally)
sudo n stable
```

Or, using NVM:

```bash
nvm install node --reinstall-packages-from=node
```

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

#### Test output examples

##### Typical test output

![Typical test results](https://github.com/redbadger/Puppeteer-lighthouse-jest/blob/master/screenshots/Screen%20Shot%202018-07-24%20at%2010.41.56.png?raw=true)


##### Failing test example

![Failing test output](https://github.com/redbadger/Puppeteer-lighthouse-jest/blob/master/screenshots/Screen%20Shot%202018-07-24%20at%2011.33.34.png?raw=true)


