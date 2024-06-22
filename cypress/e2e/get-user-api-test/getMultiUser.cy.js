describe("Multi Users API Testing", () => {
    it("fetches users - GET", () => {
      cy.request("/users?page=2").as("usersRequest");
      cy.get("@usersRequest").then((users) => {
        expect(users.status).to.eq(200);
        assert.isArray(users.body.data, "Users Response is an array");
      });
    });
  });