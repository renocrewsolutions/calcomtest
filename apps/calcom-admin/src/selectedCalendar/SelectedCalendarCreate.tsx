import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { CredentialTitle } from "../credential/CredentialTitle";

export const SelectedCalendarCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="credential.id"
          reference="Credential"
          label="Credential"
        >
          <SelectInput optionText={CredentialTitle} />
        </ReferenceInput>
        <TextInput label="External Id" source="externalId" />
        <TextInput label="Integration" source="integration" />
        <NumberInput step={1} label="User ID" source="userId" />
      </SimpleForm>
    </Create>
  );
};
