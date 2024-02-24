import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  BooleanField,
  TextField,
  ReferenceField,
} from "react-admin";
import { TEAM_TITLE_FIELD } from "../team/TeamTitle";

export const MembershipShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <BooleanField label="Accepted" source="accepted" />
        <BooleanField
          label="Disable Impersonation"
          source="disableImpersonation"
        />
        <TextField label="ID" source="id" />
        <TextField label="Role" source="role" />
        <ReferenceField label="Team" source="team.id" reference="Team">
          <TextField source={TEAM_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="User ID" source="userId" />
      </SimpleShowLayout>
    </Show>
  );
};
