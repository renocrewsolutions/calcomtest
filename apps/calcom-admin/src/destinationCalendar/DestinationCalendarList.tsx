import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { CREDENTIAL_TITLE_FIELD } from "../credential/CredentialTitle";
import { EVENTTYPE_TITLE_FIELD } from "../eventType/EventTypeTitle";

export const DestinationCalendarList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"DestinationCalendars"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <ReferenceField
          label="Credential"
          source="credential.id"
          reference="Credential"
        >
          <TextField source={CREDENTIAL_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Event Type"
          source="eventtype.id"
          reference="EventType"
        >
          <TextField source={EVENTTYPE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="External Id" source="externalId" />
        <TextField label="ID" source="id" />
        <TextField label="Integration" source="integration" />
        <TextField label="Primary Email" source="primaryEmail" />
        <TextField label="User ID" source="userId" />
      </Datagrid>
    </List>
  );
};
