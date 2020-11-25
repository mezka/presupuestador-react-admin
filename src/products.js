import React from 'react';
import { List, Datagrid, TextField, NumberField, DateField, ReferenceArrayField, SingleFieldList, ChipField } from 'react-admin';

export const ProductsList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <NumberField source="id" />
      <TextField source="modelname" />
      <NumberField source="price" />
      <DateField source="updatedAt" />
      <ReferenceArrayField reference="categories" source="categories">
        <SingleFieldList>
          <ChipField source="name" />
        </SingleFieldList>
      </ReferenceArrayField>
    </Datagrid>
  </List>
);