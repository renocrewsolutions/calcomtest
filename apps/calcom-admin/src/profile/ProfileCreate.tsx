import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { EventTypeTitle } from "../eventType/EventTypeTitle";
import { TeamTitle } from "../team/TeamTitle";

export const ProfileCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="eventTypes"
          reference="EventType"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EventTypeTitle} />
        </ReferenceArrayInput>
        <NumberInput
          step={1}
          label="Moved From User ID"
          source="movedFromUserId"
        />
        <ReferenceInput
          source="organization.id"
          reference="Team"
          label="Organization"
        >
          <SelectInput optionText={TeamTitle} />
        </ReferenceInput>
        <TextInput label="Uid" source="uid" />
        <NumberInput step={1} label="User ID" source="userId" />
        <TextInput label="Username" source="username" />
      </SimpleForm>
    </Create>
  );
};
