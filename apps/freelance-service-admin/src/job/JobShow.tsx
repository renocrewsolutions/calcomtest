import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { USER_TITLE_FIELD } from "../user/UserTitle";
import { JOB_TITLE_FIELD } from "./JobTitle";

export const JobShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Budget" source="budget" />
        <ReferenceField label="Client" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="Title" source="title" />
        <ReferenceManyField reference="Bid" target="jobId" label="Bids">
          <Datagrid rowClick="show">
            <TextField label="Amount" source="amount" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Freelancer"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <ReferenceField label="Job" source="job.id" reference="Job">
              <TextField source={JOB_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Proposal" source="proposal" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Review" target="jobId" label="Reviews">
          <Datagrid rowClick="show">
            <ReferenceField label="Client" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Content" source="content" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Freelancer"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <ReferenceField label="Job" source="job.id" reference="Job">
              <TextField source={JOB_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Rating" source="rating" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Transaction"
          target="jobId"
          label="Transactions"
        >
          <Datagrid rowClick="show">
            <TextField label="Amount" source="amount" />
            <ReferenceField label="Client" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Freelancer"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <ReferenceField label="Job" source="job.id" reference="Job">
              <TextField source={JOB_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="transactionDate" label="Transaction Date" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
