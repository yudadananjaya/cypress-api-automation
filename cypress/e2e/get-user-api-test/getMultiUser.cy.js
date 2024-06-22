describe("GET Multi Users API Testing", () => {
    it("Should make an API request", () => {
      cy.request("GET", "https://reqres.in/api/users?page=2")
        .its("status")
        .should("equal", 200);
      cy.get("@usersRequest").then((users) => {
        expect(users.status).to.eq(200);
        assert.isArray(users.body.data, "Users Response is an array");
      });
    });
  });