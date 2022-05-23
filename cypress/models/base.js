import BasePage from "../page-objects/base.page.js";

const basePage = new BasePage();

export function navigateAndVerifyLink(link){
	cy.visit(link);
	cy.url().should("include", link);
}

export function verifyThatHelloButtonIsVisible(){
	basePage.helloButton().should("be.visible")
}

export function verifyThatWorldDivIsNotVisible(){
    basePage.worldSpan().should("not.be.visible")
}

export function verifyThatWorldDivIsVisible(){
    basePage.worldSpan().should("be.visible");  //in order for this to be more specific - need to add hidden/visible attributes to the DOM
}

export function clickHelloButton(){
    basePage.helloButton().click();
}

export function verifyThatTheElementContainsDesiredText(value){
    basePage.worldSpan().contains(value)
}
