import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  BooleanInput,
  NumberInput,
} from "react-admin";

import { EventTypeTitle } from "../eventType/EventTypeTitle";

export const HostCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="eventType.id"
          reference="EventType"
          label="Event Type"
        >
          <SelectInput optionText={EventTypeTitle} />
        </ReferenceInput>
        <BooleanInput label="Is Fixed" source="isFixed" />
        <NumberInput step={1} label="Priority" source="priority" />
        <NumberInput step={1} label="User ID" source="userId" />
      </SimpleForm>
    </Create>
  );
};
