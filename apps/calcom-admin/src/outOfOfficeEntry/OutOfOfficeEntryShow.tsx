import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const OutOfOfficeEntryShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="End" source="end" />
        <TextField label="ID" source="id" />
        <TextField label="Start" source="start" />
        <TextField label="To User ID" source="toUserId" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="User ID" source="userId" />
        <TextField label="Uuid" source="uuid" />
      </SimpleShowLayout>
    </Show>
  );
};
