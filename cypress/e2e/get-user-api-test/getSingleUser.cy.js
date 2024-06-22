describe("GET Single Users API Testing", () => {
    it("fetches users - GET", () => {
        const requestBody = {
            email: "janet.weaver@reqres.in",
            first_name: "Janet",
            last_name: "Weaver",
            avatar: "https://reqres.in/img/faces/2-image.jpg"
        };
        cy.request("GET", "https://reqres.in/api/users/2").as("usersRequest");
        cy.get("@usersRequest").then((users) => {
            expect(users.status).to.eq(200);
            expect(users.body.data.email).to.equal(requestBody.email);
            expect(users.body.data.first_name).to.equal(requestBody.first_name);
            expect(users.body.data.last_name).to.equal(requestBody.last_name);
            expect(users.body.data.avatar).to.equal(requestBody.avatar);
      });
    });
  });