import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { AppModelTitle } from "../appModel/AppModelTitle";
import { TeamTitle } from "../team/TeamTitle";

export const ApiKeyCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="appField.id"
          reference="AppModel"
          label="App Field"
        >
          <SelectInput optionText={AppModelTitle} />
        </ReferenceInput>
        <DateTimeInput label="Expires At" source="expiresAt" />
        <TextInput label="Hashed Key" source="hashedKey" />
        <DateTimeInput label="Last Used At" source="lastUsedAt" />
        <TextInput label="Note" source="note" />
        <ReferenceInput source="team.id" reference="Team" label="Team">
          <SelectInput optionText={TeamTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="User ID" source="userId" />
      </SimpleForm>
    </Create>
  );
};
