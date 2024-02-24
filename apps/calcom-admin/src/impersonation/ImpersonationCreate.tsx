import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const ImpersonationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
