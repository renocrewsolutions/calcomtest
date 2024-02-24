import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { CredentialTitle } from "../credential/CredentialTitle";

export const SelectedCalendarEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
