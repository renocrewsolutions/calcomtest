import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const AccountCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Access Token" source="accessToken" />
        <NumberInput step={1} label="Expires At" source="expiresAt" />
        <TextInput label="Id Token" source="idToken" />
        <TextInput label="Provider" source="provider" />
        <TextInput label="Provider Account Id" source="providerAccountId" />
        <TextInput label="Refresh Token" source="refreshToken" />
        <TextInput label="Scope" source="scope" />
        <TextInput label="Session State" source="sessionState" />
        <TextInput label="Token Type" source="tokenType" />
        <TextInput label="Type Field" source="typeField" />
        <NumberInput step={1} label="User ID" source="userId" />
      </SimpleForm>
    </Create>
  );
};
