class HomePage {
  openNavigationMenu() {
    cy.get("#open-navigation-menu-mobile").should("be.visible").click();
  }

  logout() {
    cy.contains("Log out").should("be.visible").click();
  }
}

export default HomePage;
