export {apiRequest}

const apiRequest = (baseUrl,endpoint,countryCode,authToken) => {
    cy.request({
        method: 'GET',
        url: `${baseUrl}${endpoint}?countryCode=${countryCode}&languageCode=en&searchText=example`,
        auth: { username, password },
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
        failOnStatusCode: false,
      })
}
