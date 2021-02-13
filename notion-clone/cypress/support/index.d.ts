/// <reference types="cypress" />

declare namespace Cypress{
    interface Chainable {
        getByAttr(key : string, value : string | number) : Chainable<Element>
        findByAttr(key : string, value : string | number) : Chainable<JQuery<HTMLElement>>
        typeTab(shiftKey ?: boolean, ctrlKey ?: boolean) : Chainable<JQuery<HTMLElement>>
        filterByAttr(key : string, value : string | number) : Chainable<JQuery<HTMLElement>>
    }

    
}