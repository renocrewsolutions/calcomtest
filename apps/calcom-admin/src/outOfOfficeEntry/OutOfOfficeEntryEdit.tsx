import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  NumberInput,
  TextInput,
} from "react-admin";

export const OutOfOfficeEntryEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="End" source="end" />
        <DateTimeInput label="Start" source="start" />
        <NumberInput step={1} label="To User ID" source="toUserId" />
        <NumberInput step={1} label="User ID" source="userId" />
        <TextInput label="Uuid" source="uuid" />
      </SimpleForm>
    </Edit>
  );
};
