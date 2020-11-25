import React from "react";
import { Admin, Resource, ListGuesser } from 'react-admin';
import { restClient, authClient } from 'ra-data-feathers';
import feathersClient from './feathersClient';
import { UsersList, UserCreate, UserEdit } from './users';
import { ClientsList } from './clients';
import { EstimatesList } from './estimates';
import { EstimateItemsList } from './estimateItems';
import { ProductsList } from './products';

const restClientOptions = {};

const authClientOptions = {
  authenticate: { strategy: 'local' }
};

const App = () => (
<Admin dataProvider={restClient(feathersClient, restClientOptions)} authProvider={authClient(feathersClient, authClientOptions)}>
  <Resource name="users" list={ UsersList } create={ UserCreate } edit={ UserEdit }/>
  <Resource name="clients" list={ ClientsList } />
  <Resource name="estimates" list={ EstimatesList } />
  <Resource name="estimateitems" list={ EstimateItemsList }/>
  <Resource name="products" list={ ProductsList } />
  <Resource name="categories" list={ ListGuesser } />
</Admin>);

export default App;