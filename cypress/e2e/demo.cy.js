/// <reference types="Cypress" />

describe('Cypress E2E Testing Demo', () => {
  it('Assert Url', () => {
    cy.visit('https://example.com/')
  })
})