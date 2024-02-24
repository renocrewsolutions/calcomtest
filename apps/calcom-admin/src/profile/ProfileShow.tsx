import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
} from "react-admin";

import { DESTINATIONCALENDAR_TITLE_FIELD } from "../destinationCalendar/DestinationCalendarTitle";
import { HASHEDLINK_TITLE_FIELD } from "../hashedLink/HashedLinkTitle";
import { EVENTTYPE_TITLE_FIELD } from "../eventType/EventTypeTitle";
import { PROFILE_TITLE_FIELD } from "./ProfileTitle";
import { SCHEDULE_TITLE_FIELD } from "../schedule/ScheduleTitle";
import { TEAM_TITLE_FIELD } from "../team/TeamTitle";

export const ProfileShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Moved From User ID" source="movedFromUserId" />
        <ReferenceField label="Organization" source="team.id" reference="Team">
          <TextField source={TEAM_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Uid" source="uid" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="User ID" source="userId" />
        <TextField label="Username" source="username" />
        <ReferenceManyField
          reference="EventType"
          target="profileId"
          label="EventTypes"
        >
          <Datagrid rowClick="show">
            <TextField label="After Event Buffer" source="afterEventBuffer" />
            <BooleanField
              label="Assign All Team Members"
              source="assignAllTeamMembers"
            />
            <TextField label="Before Event Buffer" source="beforeEventBuffer" />
            <TextField label="Booking Fields" source="bookingFields" />
            <TextField label="Booking Limits" source="bookingLimits" />
            <TextField label="Currency" source="currency" />
            <TextField label="Description" source="description" />
            <ReferenceField
              label="Destination Calendar"
              source="destinationcalendar.id"
              reference="DestinationCalendar"
            >
              <TextField source={DESTINATIONCALENDAR_TITLE_FIELD} />
            </ReferenceField>
            <BooleanField label="Disable Guests" source="disableGuests" />
            <TextField label="Duration Limits" source="durationLimits" />
            <TextField label="Event Name" source="eventName" />
            <ReferenceField
              label="Hashed Link"
              source="hashedlink.id"
              reference="HashedLink"
            >
              <TextField source={HASHEDLINK_TITLE_FIELD} />
            </ReferenceField>
            <BooleanField label="Hidden" source="hidden" />
            <BooleanField
              label="Hide Calendar Notes"
              source="hideCalendarNotes"
            />
            <TextField label="ID" source="id" />
            <BooleanField label="Is Instant Event" source="isInstantEvent" />
            <TextField label="Length" source="length" />
            <TextField label="Locations" source="locations" />
            <BooleanField
              label="Lock Time Zone Toggle On Booking Page"
              source="lockTimeZoneToggleOnBookingPage"
            />
            <TextField label="Metadata" source="metadata" />
            <TextField
              label="Minimum Booking Notice"
              source="minimumBookingNotice"
            />
            <TextField label="Offset Start" source="offsetStart" />
            <BooleanField
              label="Only Show First Available Slot"
              source="onlyShowFirstAvailableSlot"
            />
            <TextField label="Owner ID" source="ownerId" />
            <ReferenceField
              label="Parent"
              source="eventtype.id"
              reference="EventType"
            >
              <TextField source={EVENTTYPE_TITLE_FIELD} />
            </ReferenceField>
            <BooleanField
              label="Period Count Calendar Days"
              source="periodCountCalendarDays"
            />
            <TextField label="Period Days" source="periodDays" />
            <TextField label="Period End Date" source="periodEndDate" />
            <TextField label="Period Start Date" source="periodStartDate" />
            <TextField label="Period Type" source="periodType" />
            <TextField label="Position" source="position" />
            <TextField label="Price" source="price" />
            <ReferenceField
              label="Profile"
              source="profile.id"
              reference="Profile"
            >
              <TextField source={PROFILE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Recurring Event" source="recurringEvent" />
            <BooleanField
              label="Requires Booker Email Verification"
              source="requiresBookerEmailVerification"
            />
            <BooleanField
              label="Requires Confirmation"
              source="requiresConfirmation"
            />
            <ReferenceField
              label="Schedule"
              source="schedule.id"
              reference="Schedule"
            >
              <TextField source={SCHEDULE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Scheduling Type" source="schedulingType" />
            <TextField label="Seats Per Time Slot" source="seatsPerTimeSlot" />
            <BooleanField
              label="Seats Show Attendees"
              source="seatsShowAttendees"
            />
            <BooleanField
              label="Seats Show Availability Count"
              source="seatsShowAvailabilityCount"
            />
            <TextField label="Slot Interval" source="slotInterval" />
            <TextField label="Slug" source="slug" />
            <TextField
              label="Success Redirect Url"
              source="successRedirectUrl"
            />
            <ReferenceField label="Team" source="team.id" reference="Team">
              <TextField source={TEAM_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Time Zone" source="timeZone" />
            <TextField label="Title" source="title" />
            <BooleanField
              label="Use Event Type Destination Calendar Email"
              source="useEventTypeDestinationCalendarEmail"
            />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
