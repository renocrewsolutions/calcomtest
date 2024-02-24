import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  DateTimeInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { OAuthClientTitle } from "../oAuthClient/OAuthClientTitle";
import { TeamTitle } from "../team/TeamTitle";

export const AccessCodeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="client.id"
          reference="OAuthClient"
          label="Client"
        >
          <SelectInput optionText={OAuthClientTitle} />
        </ReferenceInput>
        <TextInput label="Code" source="code" />
        <DateTimeInput label="Expires At" source="expiresAt" />
        <SelectArrayInput
          label="Scopes"
          source="scopes"
          choices={[
            { label: "READ_BOOKING", value: "READ_BOOKING" },
            { label: "READ_PROFILE", value: "READ_PROFILE" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <ReferenceInput source="team.id" reference="Team" label="Team">
          <SelectInput optionText={TeamTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="User ID" source="userId" />
      </SimpleForm>
    </Edit>
  );
};
