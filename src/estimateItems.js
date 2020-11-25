import React from 'react';
import { List, Datagrid, TextField, NumberField, DateField, ReferenceField } from 'react-admin';

export const EstimateItemsList = props => (
  <List {...props}>
      <Datagrid rowClick="edit">
          <TextField source="id" />
          <NumberField source="discount" />
          <NumberField source="unitprice" />
          <NumberField source="quantity" />
          <DateField source="createdAt" />
          <DateField source="updatedAt" />
          <ReferenceField source="estimateid" reference="estimates">
            <NumberField source="id" />
          </ReferenceField>
          <NumberField source="productid" />
      </Datagrid>
  </List>
);