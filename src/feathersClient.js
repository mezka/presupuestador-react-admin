import feathers from '@feathersjs/feathers';
import rest from '@feathersjs/rest-client';
import auth from '@feathersjs/authentication-client';

const feathersClient = feathers();
const apiUrl = process.env.NODE_ENV === 'production'?'/api':'/';
const restClient = rest(apiUrl);

feathersClient.configure(restClient.fetch(fetch));

feathersClient.configure(auth({
  storageKey: 'token'
}))

export default feathersClient;
