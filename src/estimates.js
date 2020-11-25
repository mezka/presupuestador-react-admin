import React from "react";
import { List, Datagrid, TextField, NumberField, DateField, ReferenceField, ReferenceArrayField } from 'react-admin';

export const EstimatesList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <NumberField source="validFor" />
      <DateField source="createdAt" />
      <DateField source="updatedAt" />
      <ReferenceArrayField label="EstimateItems" reference="estimateitems" source="estimateitems.id">
        <Datagrid>
          <DateField source="id" />
          <NumberField source="unitprice" />
        </Datagrid>
      </ReferenceArrayField>
      <ReferenceField source="user.id" reference="users">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="client.id" reference="clients">
        <TextField source="name" />
      </ReferenceField>
    </Datagrid>
  </List>
);


