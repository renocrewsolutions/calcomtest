import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const SessionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Sessions"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Expires" source="expires" />
        <TextField label="ID" source="id" />
        <TextField label="Session Token" source="sessionToken" />
        <TextField label="User ID" source="userId" />
      </Datagrid>
    </List>
  );
};
