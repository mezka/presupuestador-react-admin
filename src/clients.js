import React from "react";
import { List, Datagrid, TextField, EmailField, DateField, NumberField } from 'react-admin';

export const ClientsList = props => (
  <List {...props}>
      <Datagrid rowClick="edit">
          <TextField source="id" />
          <TextField source="name" />
          <TextField source="phonenumber0" />
          <TextField source="phonenumber1" />
          <TextField source="phonenumber2" />
          <TextField source="address0" />
          <TextField source="address1" />
          <TextField source="address2" />
          <EmailField source="email0" />
          <EmailField source="email1" />
          <EmailField source="email2" />
          <TextField source="taxcategory" />
          <NumberField source="taxpercent" />
          <TextField source="cuil" />
          <DateField source="createdAt" />
          <DateField source="updatedAt" />
      </Datagrid>
  </List>
);

