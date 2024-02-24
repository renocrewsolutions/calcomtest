import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const FeedbackList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Feedbacks"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Comment" source="comment" />
        <DateField source="date" label="Date" />
        <TextField label="ID" source="id" />
        <TextField label="Rating" source="rating" />
        <TextField label="User ID" source="userId" />
      </Datagrid>
    </List>
  );
};
