import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  SelectInput,
  ReferenceInput,
  NumberInput,
} from "react-admin";

import { TeamTitle } from "../team/TeamTitle";

export const MembershipEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="Accepted" source="accepted" />
        <BooleanInput
          label="Disable Impersonation"
          source="disableImpersonation"
        />
        <SelectInput
          source="role"
          label="Role"
          choices={[
            { label: "MEMBER", value: "MEMBER" },
            { label: "ADMIN", value: "ADMIN" },
            { label: "OWNER", value: "OWNER" },
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
