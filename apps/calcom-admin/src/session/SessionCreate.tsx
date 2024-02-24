import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
  NumberInput,
} from "react-admin";

export const SessionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="Expires" source="expires" />
        <TextInput label="Session Token" source="sessionToken" />
        <NumberInput step={1} label="User ID" source="userId" />
      </SimpleForm>
    </Create>
  );
};
