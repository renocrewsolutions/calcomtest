import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const ImpersonationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput
          step={1}
          label="Impersonated By ID"
          source="impersonatedById"
        />
        <NumberInput
          step={1}
          label="Impersonated User ID"
          source="impersonatedUserId"
        />
      </SimpleForm>
    </Edit>
  );
};
