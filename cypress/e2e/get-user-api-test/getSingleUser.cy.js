describe("GET Single Users API Testing", () => {
    it("fetches users - GET", () => {
        const requestBody = {
            email: "janet.weaver@reqres.in",
            first_name: "Janet",
            last_name: "Weaver",
            avatar: "https://reqres.in/img/faces/2-image.jpg"
        };
        cy.request("GET", "https://reqres.in/api/users/2")
        cy.get("@usersRequest").then((users) => {
            expect(users.status).to.eq(200);
            expect(response.body.data.email).to.equal(requestBody.email);
            expect(response.body.data.first_name).to.equal(requestBody.first_name);
            expect(response.body.data.last_name).to.equal(requestBody.last_name);
            expect(response.body.data.avatar).to.equal(requestBody.avatar);
      });
    });
  });