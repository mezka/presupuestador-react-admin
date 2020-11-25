import feathers from '@feathersjs/feathers';
import rest from '@feathersjs/rest-client';
import auth from '@feathersjs/authentication-client';

const feathersClient = feathers();
const restClient = rest('http://localhost:3030');

feathersClient.configure(restClient.fetch(fetch));

feathersClient.configure(auth({
  storageKey: 'token'
}))

export default feathersClient;
