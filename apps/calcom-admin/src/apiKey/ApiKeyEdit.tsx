import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { AppModelTitle } from "../appModel/AppModelTitle";
import { TeamTitle } from "../team/TeamTitle";

export const ApiKeyEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
