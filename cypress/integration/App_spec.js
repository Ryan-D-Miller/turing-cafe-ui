describe('App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })
    it('Should confirm that it contains the header', () => {
        cy.get('h1').contains("Turing Cafe Reservations")
    })
    it('Should confirm that a form exists', () => {
        cy.get('div').get('form')
    })
    it('SHould confirm the correct elements render', () => {
        cy.get('section')
            .get('div')
            .contains('Leta')
    })
})