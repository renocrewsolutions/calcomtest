import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { EventTypeTitle } from "../eventType/EventTypeTitle";
import { ScheduleTitle } from "../schedule/ScheduleTitle";

export const AvailabilityEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="Date" source="date" />
        <NumberInput step={1} label="Days" source="days" />
        <DateTimeInput label="End Time" source="endTime" />
        <ReferenceInput
          source="eventType.id"
          reference="EventType"
          label="Event Type"
        >
          <SelectInput optionText={EventTypeTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="schedule.id"
          reference="Schedule"
          label="Schedule"
        >
          <SelectInput optionText={ScheduleTitle} />
        </ReferenceInput>
        <DateTimeInput label="Start Time" source="startTime" />
        <NumberInput step={1} label="User ID" source="userId" />
      </SimpleForm>
    </Edit>
  );
};
