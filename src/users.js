import React from "react";
import { Create, Edit, List, SimpleForm, TextInput, PasswordInput, Datagrid, TextField, EmailField, DateField } from 'react-admin';

export const UserCreate = (props) => (
    <Create {...props} title="Create user ...">
        <SimpleForm>
            <TextInput source="email" />
            <TextInput source="name" />
            <PasswordInput source="password" />
        </SimpleForm>
    </Create>
);

export const UserEdit = (props) => (
  <Edit {...props} title="Edit user ...">
    <SimpleForm>
      <TextInput source="email" />
      <TextInput source="name" />
      <PasswordInput source="password" />
    </SimpleForm>
  </Edit>
);

export const UsersList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
        <TextField source="id" />
        <EmailField source="email" />
        <TextField source="name" />
        <DateField source="createdAt" />
        <DateField source="updatedAt" />
    </Datagrid>
  </List>
);
