it("login api test", () => {
    const credentials = {
      email: "eve.holt@reqres.in",
      password: "cityslicka",
    };
  
    cy.request("POST", 'https://reqres.in/api/login', credentials).then(
      (response) => {
        expect(response.status).to.equal(200);
        expect(response.body).to.have.property("token");
  
        // Store the token in test context
        cy.wrap(response.body.token).as("authToken");
  
        // Log the token to the console
        cy.log("Authentication token:", response.body.token);

        // Log full response body to the console
        cy.log("Response Body:", response.body);
      }
    );
  });