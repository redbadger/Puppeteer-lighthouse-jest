'use strict';

const puppeteer = require('puppeteer');
const commonMethods = require("./methods");

let page;
let browser;
let lhr;

beforeAll(async () => {
    // can be run in a browser by changing this to 'headless: false'
    browser = await puppeteer.launch({headless: true});
    page = await browser.newPage();
});
afterAll(() => {
    browser.close();
});


describe('Google Lighthouse audit tests', async () => {
    beforeAll(async () => {
        // the url to be audited
        const url = '<enter your url here>';
        // kick off a Lighthouse audit on the above url
        lhr = await commonMethods.lighthouseAudit(browser, url);
    });

    // General accessibility overview score
    it('passes an accessibility audit through Lighthouse', async () => {
        const accessibilityScore = await commonMethods.getLighthouseResult(lhr, 'accessibility');
        // Tester can set their own thresholds for pass marks
        expect(accessibilityScore).toBeGreaterThanOrEqual(0.50);
    });

    // General performance overview score
    it('passes a performance audit through Lighthouse', async () => {
        const performanceScore = await commonMethods.getLighthouseResult(lhr, 'performance');
        // Tester can set their own thresholds for pass marks
        expect(performanceScore).toBeGreaterThan(0.50);
    });

    // General best practice for websites overview score
    it('passes a best practice audit through Lighthouse', async () => {
        const bestPracticeScore = await commonMethods.getLighthouseResult(lhr, 'bestPractices');
        // Tester can set their own thresholds for pass marks
        expect(bestPracticeScore).toBeGreaterThanOrEqual(0.50);
    });

    // These checks validate the aspects of a Progressive Web App,
    // as specified by the baseline [PWA Checklist]
    it('passes a Progressive Web App audit through Lighthouse', async () => {
        const progressiveWebAppScore = await commonMethods.getLighthouseResult(lhr, 'progressiveWebApp');
        // Tester can set their own thresholds for pass marks
        expect(progressiveWebAppScore).toBeGreaterThanOrEqual(0.50);
    });

    //These checks ensure that your page is optimized for search engine results ranking.
    it('passes an SEO audit through Lighthouse', async () => {
        const SEOScore = await commonMethods.getLighthouseResult(lhr, 'seo');
        expect(SEOScore).toBeGreaterThanOrEqual(0.50);
    });

    // Low-contrast text is difficult or impossible for many users to read
    it('passes a contrast check through Lighthouse', async () => {
        const contrastCheck = await commonMethods.getResult(lhr, 'contrast');
        // Some audit items are binary, so no threshold can be set
        expect(contrastCheck).toEqual('Pass');
    });

    // Informative elements should aim for short, descriptive alternate text
    it('contains alt text for all images', async () => {
        const altTextCheck = await commonMethods.getResult(lhr, 'altText');
        expect(altTextCheck).toEqual('Pass');
    });

    // Speed Index shows how quickly the contents of a page are visibly populated.
    it('passes the set threshold for page load speed', async () => {
        const pageSpeedScore = await commonMethods.getLighthouseResult(lhr, 'pageSpeed');
        expect(pageSpeedScore).toBeGreaterThanOrEqual(0.50);
    });

    // Assistive technologies, like screen readers, can't interpret ARIA attributes with invalid names
    it('contains valid ARIA attributes', async () => {
        const ariaAttributesCheck = await commonMethods.getResult(lhr, 'ariaAttributesCorrect');
        expect(ariaAttributesCheck).toEqual('Pass');
    });

    // Assistive technologies, like screen readers, can't interpret ARIA attributes with invalid values
    it('contains valid values for all ARIA attributes', async () => {
        const ariaAttributeValuesCheck = await commonMethods.getResult(lhr, 'ariaAttributeValuesCorrect');
        expect(ariaAttributeValuesCheck).toEqual('Pass');
    });

    // A value greater than 0 implies an explicit navigation ordering. Although technically valid,
    // this often creates frustrating experiences for users who rely on assistive technologies
    it('contains no tabIndex values above 0', async () => {
        const tabIndexCheck = await commonMethods.getResult(lhr, 'tabIndex');
        expect(tabIndexCheck).toEqual('Pass');
    });

    // Tabbing through the page follows the visual layout.
    // Users cannot focus elements that are offscreen
    it('has a logical tab order for assitive technology use', async () => {
        const logicalTabOrderCheck = await commonMethods.getResult(lhr, 'logicalTabOrder');
        expect(logicalTabOrderCheck).toEqual('Pass');
    });

    // Some third-party scripts may contain known security vulnerabilities
    // that are easily identified and exploited by attackers
    it('contains no known vulnerable libraries', async () => {
        const vulnerabilities = await commonMethods.getResult(lhr, 'vulnerabilities');
        expect(vulnerabilities).toEqual('Pass');
    });
});