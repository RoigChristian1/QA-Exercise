describe('Exercise 1', () => {
  const baseUrl = 'http://api-url';

  const authToken = () => {
    //Implement a function to obtain the proper token for the methods
  };

  const authorizedEndpoints = [
    '/rest/Endpoint1',
    '/rest/Endpoint2',
    // ...
    '/rest/Endpoint150',
  ];

  it('Verifying HTTP status 403 for countryCode RU on all endpoints', () => {
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
  })

    it('Verifying HTTP status 200 for countryCode EX on all endpoints', () => {
      authorizedEndpoints.forEach((endpoint) => {
        cy.request({
          method: 'GET',
          url: `${baseUrl}${endpoint}?countryCode=EX&languageCode=en&searchText=example`,
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
          failOnStatusCode: false,
        }).then((response) => {
          expect(response.status).to.eq(200)
        });
      });
  });
})