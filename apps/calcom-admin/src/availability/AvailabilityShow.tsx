import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
} from "react-admin";
import { EVENTTYPE_TITLE_FIELD } from "../eventType/EventTypeTitle";
import { SCHEDULE_TITLE_FIELD } from "../schedule/ScheduleTitle";

export const AvailabilityShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Date" source="date" />
        <TextField label="Days" source="days" />
        <TextField label="End Time" source="endTime" />
        <ReferenceField
          label="Event Type"
          source="eventtype.id"
          reference="EventType"
        >
          <TextField source={EVENTTYPE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Schedule"
          source="schedule.id"
          reference="Schedule"
        >
          <TextField source={SCHEDULE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Start Time" source="startTime" />
        <TextField label="User ID" source="userId" />
      </SimpleShowLayout>
    </Show>
  );
};
