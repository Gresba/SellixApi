let apiRoot = "https://dev.sellix.io/v1";

let endPoint = '/categories';

fetch(`${apiRoot}${endPoint}`, {
  headers: {
    'Authorization': 'Bearer V2Mu5ZKnY0zLAOIrJLprSRdwmru6nR75BTsPcIEq1B6FRNYVfevZpYz7p56TERFz'
  }
})
  .then(result => result.json())
  .then(result => console.log(result));
