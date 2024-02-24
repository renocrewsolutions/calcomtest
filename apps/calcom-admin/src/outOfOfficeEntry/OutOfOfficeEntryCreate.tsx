import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  NumberInput,
  TextInput,
} from "react-admin";

export const OutOfOfficeEntryCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="End" source="end" />
        <DateTimeInput label="Start" source="start" />
        <NumberInput step={1} label="To User ID" source="toUserId" />
        <NumberInput step={1} label="User ID" source="userId" />
        <TextInput label="Uuid" source="uuid" />
      </SimpleForm>
    </Create>
  );
};
