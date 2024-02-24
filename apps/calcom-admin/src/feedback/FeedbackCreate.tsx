import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const FeedbackCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Comment" source="comment" />
        <TextInput label="Rating" source="rating" />
        <NumberInput step={1} label="User ID" source="userId" />
      </SimpleForm>
    </Create>
  );
};
