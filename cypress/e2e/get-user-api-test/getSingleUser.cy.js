describe("GET Single Users API Testing", () => {
    it("fetches users - GET", () => {
        const requestBody = {
            email: "janet.weaver@reqres.in",
            first_name: "Janet",
            last_name: "Weaver",
            avatar: "https://reqres.in/img/faces/2-image.jpg"
        };
        cy.request("GET", "https://reqres.in/api/users/2").as("usersRequest");
        cy.get("@usersRequest").then((response) => {

            // Assert response code
            expect(response.status).to.eq(200);

            // Assert email, first_name, last_name, and avatar value
            expect(response.body.data.email).to.equal(requestBody.email);
            expect(response.body.data.first_name).to.equal(requestBody.first_name);
            expect(response.body.data.last_name).to.equal(requestBody.last_name);
            expect(response.body.data.avatar).to.equal(requestBody.avatar);

            // Log full response body to the console
            cy.log(JSON.stringify(response.body))
      });
    });
  });