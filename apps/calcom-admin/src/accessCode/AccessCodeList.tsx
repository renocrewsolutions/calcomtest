import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { OAUTHCLIENT_TITLE_FIELD } from "../oAuthClient/OAuthClientTitle";
import { TEAM_TITLE_FIELD } from "../team/TeamTitle";

export const AccessCodeList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"AccessCodes"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <ReferenceField
          label="Client"
          source="oauthclient.id"
          reference="OAuthClient"
        >
          <TextField source={OAUTHCLIENT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Code" source="code" />
        <TextField label="Expires At" source="expiresAt" />
        <TextField label="ID" source="id" />
        <TextField label="Scopes" source="scopes" />
        <ReferenceField label="Team" source="team.id" reference="Team">
          <TextField source={TEAM_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="User ID" source="userId" />
      </Datagrid>
    </List>
  );
};
