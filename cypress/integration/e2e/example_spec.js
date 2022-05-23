
const { navigateAndVerifyLink, verifyThatWorldDivIsNotVisible, verifyThatHelloButtonIsVisible, clickHelloButton, verifyThatWorldDivIsVisible, verifyThatTheElementContainsDesiredText } = require("../../models/base");
const { consoleErrorVerification } = require("../../models/helpers");

describe('Login Tests', function () {

	beforeEach(() => {
	});

	it('hello-bad1', () => {
		navigateAndVerifyLink("cypress/fixtures/hello-bad1.html");
		verifyThatHelloButtonIsVisible();
		verifyThatWorldDivIsNotVisible();
		clickHelloButton();
		verifyThatWorldDivIsVisible();
		verifyThatTheElementContainsDesiredText("world");
	});

	it('hello-bad2', () => {
		navigateAndVerifyLink("cypress/fixtures/hello-bad2.html");
		verifyThatHelloButtonIsVisible();
		verifyThatWorldDivIsNotVisible();
		clickHelloButton();
		verifyThatWorldDivIsVisible();
		verifyThatTheElementContainsDesiredText("world");
	});

	it('hello-bad3', () => {
		navigateAndVerifyLink("cypress/fixtures/hello-bad3.html");
		verifyThatHelloButtonIsVisible();
		verifyThatWorldDivIsNotVisible();
		clickHelloButton();
		verifyThatWorldDivIsVisible();
		verifyThatTheElementContainsDesiredText("world");
	});

	it('hello-bad4', () => {
		navigateAndVerifyLink("cypress/fixtures/hello-bad4.html");
		verifyThatHelloButtonIsVisible();
		verifyThatWorldDivIsNotVisible();
		clickHelloButton();
		verifyThatWorldDivIsVisible();
		verifyThatTheElementContainsDesiredText("world");
	});

	it('hello-good', () => {
		navigateAndVerifyLink("cypress/fixtures/hello-good.html");
		verifyThatHelloButtonIsVisible();
		verifyThatWorldDivIsNotVisible();
		clickHelloButton();
		verifyThatWorldDivIsVisible();
		verifyThatTheElementContainsDesiredText("world");
	});

	afterEach(() => {
		consoleErrorVerification();
	});

});