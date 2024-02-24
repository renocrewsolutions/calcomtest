import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  BooleanField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const UserList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Users"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Access Codes" source="accessCodes" />
        <TextField label="Accounts" source="accounts" />
        <BooleanField
          label="Allow Dynamic Booking"
          source="allowDynamicBooking"
        />
        <BooleanField label="Allow Seo Indexing" source="allowSEOIndexing" />
        <TextField label="Api Keys" source="apiKeys" />
        <TextField label="App Theme" source="appTheme" />
        <TextField label="Availability" source="availability" />
        <TextField label="Avatar" source="avatar" />
        <TextField label="Avatar Url" source="avatarUrl" />
        <BooleanField label="Away" source="away" />
        <TextField label="Backup Codes" source="backupCodes" />
        <TextField label="Bio" source="bio" />
        <TextField label="Booking Redirects" source="bookingRedirects" />
        <TextField label="Booking Redirects To" source="bookingRedirectsTo" />
        <TextField label="Bookings" source="bookings" />
        <TextField label="Brand Color" source="brandColor" />
        <TextField label="Buffer Time" source="bufferTime" />
        <BooleanField
          label="Completed Onboarding"
          source="completedOnboarding"
        />
        <DateField source="createdDate" label="Created Date" />
        <TextField label="Credentials" source="credentials" />
        <TextField label="Dark Brand Color" source="darkBrandColor" />
        <TextField label="Default Schedule Id" source="defaultScheduleId" />
        <TextField
          label="Destination Calendar ID"
          source="destinationCalendarId"
        />
        <BooleanField
          label="Disable Impersonation"
          source="disableImpersonation"
        />
        <TextField label="Email" source="email" />
        <TextField label="Email Verified" source="emailVerified" />
        <TextField label="End Time" source="endTime" />
        <TextField label="Feedback" source="feedback" />
        <BooleanField label="Hide Branding" source="hideBranding" />
        <TextField label="Hosts" source="hosts" />
        <TextField label="ID" source="id" />
        <TextField label="Identity Provider" source="identityProvider" />
        <TextField label="Identity Provider Id" source="identityProviderId" />
        <TextField label="Impersonated By" source="impersonatedBy" />
        <TextField label="Impersonated Users" source="impersonatedUsers" />
        <TextField label="Invited To" source="invitedTo" />
        <TextField label="Locale" source="locale" />
        <BooleanField label="Locked" source="locked" />
        <TextField label="Metadata" source="metadata" />
        <TextField label="Moved To Profile ID" source="movedToProfileId" />
        <TextField label="Name" source="name" />
        <TextField label="Organization ID" source="organizationId" />
        <TextField label="Owned Event Types" source="ownedEventTypes" />
        <TextField label="Password ID" source="passwordId" />
        <TextField label="Profiles" source="profiles" />
        <BooleanField
          label="Receive Monthly Digest Email"
          source="receiveMonthlyDigestEmail"
        />
        <TextField label="Role" source="role" />
        <TextField label="Routing Forms" source="routingForms" />
        <TextField label="Schedules" source="schedules" />
        <TextField label="Selected Calendars" source="selectedCalendars" />
        <TextField label="Sessions" source="sessions" />
        <TextField label="Start Time" source="startTime" />
        <TextField label="Teams" source="teams" />
        <TextField label="Theme" source="theme" />
        <TextField label="Time Format" source="timeFormat" />
        <TextField label="Time Zone" source="timeZone" />
        <TextField label="Trial Ends At" source="trialEndsAt" />
        <BooleanField label="Two Factor Enabled" source="twoFactorEnabled" />
        <TextField label="Two Factor Secret" source="twoFactorSecret" />
        <TextField label="Username" source="username" />
        <BooleanField label="Verified" source="verified" />
        <TextField label="Verified Numbers" source="verifiedNumbers" />
        <TextField label="Webhooks" source="webhooks" />
        <TextField label="Week Start" source="weekStart" />
        <TextField label="Workflows" source="workflows" />
      </Datagrid>
    </List>
  );
};
