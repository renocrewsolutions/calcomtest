import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const AccountList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Accounts"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Access Token" source="accessToken" />
        <TextField label="Expires At" source="expiresAt" />
        <TextField label="ID" source="id" />
        <TextField label="Id Token" source="idToken" />
        <TextField label="Provider" source="provider" />
        <TextField label="Provider Account Id" source="providerAccountId" />
        <TextField label="Refresh Token" source="refreshToken" />
        <TextField label="Scope" source="scope" />
        <TextField label="Session State" source="sessionState" />
        <TextField label="Token Type" source="tokenType" />
        <TextField label="Type Field" source="typeField" />
        <TextField label="User ID" source="userId" />
      </Datagrid>
    </List>
  );
};
