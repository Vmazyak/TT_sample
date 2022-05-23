class BasePage {

    currentUrl() {
        return cy.url();
    }

    getTitle() {
        return cy.title();
    }

    button(value) {
        return cy.get(`button:contains(${value})`);
    }

    helloButton(){
        return cy.get("#button1");
    }

    worldSpan(){
        return cy.get("#div1");
    }

}
export default BasePage;