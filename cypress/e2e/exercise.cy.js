import {apiRequest} from '../support/commands'
import {authorizedEndpoints} from '../support/e2e.js'

describe('Exercise 1', () => {
  const baseUrl = 'http://api-url';
  beforeEach((() => {
     const getAuthToken = () => {
      //Implement a function to obtain the proper token for the methods
    };
  }))


  it('Verifying HTTP status 403 for countryCode RU on all endpoints', () => {
    const authToken = getAuthToken();
    authorizedEndpoints.forEach((endpoint) => {
      apiRequest(baseUrl,endpoint,'RU',authToken).then((response) => {
        expect(response.status).to.eq(403)
      });
    });
  })

    it('Verifying HTTP status 200 for countryCode EX on all endpoints', () => {
      const authToken = getAuthToken();
      authorizedEndpoints.forEach((endpoint) => {
        apiRequest(baseUrl,endpoint,'EX',authToken).then((response) => {
          expect(response.status).to.eq(200)
        });
      });
  });
})