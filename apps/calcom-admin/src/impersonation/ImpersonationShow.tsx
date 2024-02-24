import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const ImpersonationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Impersonated By ID" source="impersonatedById" />
        <TextField label="Impersonated User ID" source="impersonatedUserId" />
      </SimpleShowLayout>
    </Show>
  );
};
