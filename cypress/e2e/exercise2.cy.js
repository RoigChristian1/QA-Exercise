describe('Exercise 1', () => {
  const baseUrl = 'http://api-url';

  const authToken = () => {
    //Implement a function to obtain the proper token for the methods
  };

  it('Verifying HTTP status 403 for countryCode RU on all endpoints', () => {
    const authorizedEndpoints = [
      '/rest/Endpoint1',
      '/rest/Endpoint2',
      // ...
      '/rest/Endpoint150',
    ];
    authorizedEndpoints.forEach((endpoint) => {
      cy.request({
        method: 'GET',
        url: `${baseUrl}${endpoint}?countryCode=RU&languageCode=en&searchText=example`,
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(403)
      });
    });
  });
})