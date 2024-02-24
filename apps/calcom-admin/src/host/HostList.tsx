import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { EVENTTYPE_TITLE_FIELD } from "../eventType/EventTypeTitle";

export const HostList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Hosts"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <ReferenceField
          label="Event Type"
          source="eventtype.id"
          reference="EventType"
        >
          <TextField source={EVENTTYPE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <BooleanField label="Is Fixed" source="isFixed" />
        <TextField label="Priority" source="priority" />
        <TextField label="User ID" source="userId" />
      </Datagrid>
    </List>
  );
};
