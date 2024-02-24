import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  TextInput,
  NumberInput,
  DateTimeInput,
  SelectInput,
} from "react-admin";

export const UserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <div />
        <BooleanInput
          label="Allow Dynamic Booking"
          source="allowDynamicBooking"
        />
        <BooleanInput label="Allow Seo Indexing" source="allowSEOIndexing" />
        <div />
        <TextInput label="App Theme" source="appTheme" />
        <div />
        <TextInput label="Avatar" source="avatar" />
        <TextInput label="Avatar Url" source="avatarUrl" />
        <BooleanInput label="Away" source="away" />
        <TextInput label="Backup Codes" source="backupCodes" />
        <TextInput label="Bio" source="bio" />
        <div />
        <div />
        <div />
        <TextInput label="Brand Color" source="brandColor" />
        <NumberInput step={1} label="Buffer Time" source="bufferTime" />
        <BooleanInput
          label="Completed Onboarding"
          source="completedOnboarding"
        />
        <div />
        <TextInput label="Dark Brand Color" source="darkBrandColor" />
        <NumberInput
          step={1}
          label="Default Schedule Id"
          source="defaultScheduleId"
        />
        <NumberInput
          step={1}
          label="Destination Calendar ID"
          source="destinationCalendarId"
        />
        <BooleanInput
          label="Disable Impersonation"
          source="disableImpersonation"
        />
        <TextInput label="Email" source="email" />
        <DateTimeInput label="Email Verified" source="emailVerified" />
        <NumberInput step={1} label="End Time" source="endTime" />
        <div />
        <BooleanInput label="Hide Branding" source="hideBranding" />
        <div />
        <SelectInput
          source="identityProvider"
          label="Identity Provider"
          choices={[
            { label: "CAL", value: "CAL" },
            { label: "GOOGLE", value: "GOOGLE" },
            { label: "SAML", value: "SAML" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Identity Provider Id" source="identityProviderId" />
        <div />
        <div />
        <NumberInput step={1} label="Invited To" source="invitedTo" />
        <TextInput label="Locale" source="locale" />
        <BooleanInput label="Locked" source="locked" />
        <div />
        <NumberInput
          step={1}
          label="Moved To Profile ID"
          source="movedToProfileId"
        />
        <TextInput label="Name" source="name" />
        <NumberInput step={1} label="Organization ID" source="organizationId" />
        <div />
        <NumberInput step={1} label="Password ID" source="passwordId" />
        <div />
        <BooleanInput
          label="Receive Monthly Digest Email"
          source="receiveMonthlyDigestEmail"
        />
        <SelectInput
          source="role"
          label="Role"
          choices={[
            { label: "USER", value: "USER" },
            { label: "ADMIN", value: "ADMIN" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <div />
        <div />
        <div />
        <div />
        <NumberInput step={1} label="Start Time" source="startTime" />
        <div />
        <TextInput label="Theme" source="theme" />
        <NumberInput step={1} label="Time Format" source="timeFormat" />
        <TextInput label="Time Zone" source="timeZone" />
        <DateTimeInput label="Trial Ends At" source="trialEndsAt" />
        <BooleanInput label="Two Factor Enabled" source="twoFactorEnabled" />
        <TextInput label="Two Factor Secret" source="twoFactorSecret" />
        <TextInput label="Username" source="username" />
        <BooleanInput label="Verified" source="verified" />
        <div />
        <div />
        <TextInput label="Week Start" source="weekStart" />
        <div />
      </SimpleForm>
    </Create>
  );
};
