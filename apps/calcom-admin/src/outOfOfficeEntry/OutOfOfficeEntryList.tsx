import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const OutOfOfficeEntryList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"OutOfOfficeEntries"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="End" source="end" />
        <TextField label="ID" source="id" />
        <TextField label="Start" source="start" />
        <TextField label="To User ID" source="toUserId" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="User ID" source="userId" />
        <TextField label="Uuid" source="uuid" />
      </Datagrid>
    </List>
  );
};
