import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { AppRoutingFormsFormResponseTitle } from "../appRoutingFormsFormResponse/AppRoutingFormsFormResponseTitle";
import { TeamTitle } from "../team/TeamTitle";

export const AppRoutingFormsFormCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Description" source="description" />
        <BooleanInput label="Disabled" source="disabled" />
        <div />
        <TextInput label="Name" source="name" />
        <NumberInput step={1} label="Position" source="position" />
        <ReferenceArrayInput
          source="responses"
          reference="AppRoutingFormsFormResponse"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AppRoutingFormsFormResponseTitle} />
        </ReferenceArrayInput>
        <div />
        <div />
        <ReferenceInput source="team.id" reference="Team" label="Team">
          <SelectInput optionText={TeamTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="User ID" source="userId" />
      </SimpleForm>
    </Create>
  );
};
