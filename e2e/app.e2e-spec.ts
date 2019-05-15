import { Ng2RealApp } from './app.po';

describe('CPC-fe-test', () => {
	let page: Ng2RealApp;

	beforeEach(() => {
		page = new Ng2RealApp();
	});

	it('should display message saying app works', () => {
		page.navigateTo();
		expect(page.getParagraphText()).toContain('CPC-fe-test');
	});
});
