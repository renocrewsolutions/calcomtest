/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { TeamService } from "../team.service";
import { TeamCreateInput } from "./TeamCreateInput";
import { Team } from "./Team";
import { TeamFindManyArgs } from "./TeamFindManyArgs";
import { TeamWhereUniqueInput } from "./TeamWhereUniqueInput";
import { TeamUpdateInput } from "./TeamUpdateInput";
import { AccessCodeFindManyArgs } from "../../accessCode/base/AccessCodeFindManyArgs";
import { AccessCode } from "../../accessCode/base/AccessCode";
import { AccessCodeWhereUniqueInput } from "../../accessCode/base/AccessCodeWhereUniqueInput";
import { ApiKeyFindManyArgs } from "../../apiKey/base/ApiKeyFindManyArgs";
import { ApiKey } from "../../apiKey/base/ApiKey";
import { ApiKeyWhereUniqueInput } from "../../apiKey/base/ApiKeyWhereUniqueInput";
import { CredentialFindManyArgs } from "../../credential/base/CredentialFindManyArgs";
import { Credential } from "../../credential/base/Credential";
import { CredentialWhereUniqueInput } from "../../credential/base/CredentialWhereUniqueInput";
import { EventTypeFindManyArgs } from "../../eventType/base/EventTypeFindManyArgs";
import { EventType } from "../../eventType/base/EventType";
import { EventTypeWhereUniqueInput } from "../../eventType/base/EventTypeWhereUniqueInput";
import { InstantMeetingTokenFindManyArgs } from "../../instantMeetingToken/base/InstantMeetingTokenFindManyArgs";
import { InstantMeetingToken } from "../../instantMeetingToken/base/InstantMeetingToken";
import { InstantMeetingTokenWhereUniqueInput } from "../../instantMeetingToken/base/InstantMeetingTokenWhereUniqueInput";
import { VerificationTokenFindManyArgs } from "../../verificationToken/base/VerificationTokenFindManyArgs";
import { VerificationToken } from "../../verificationToken/base/VerificationToken";
import { VerificationTokenWhereUniqueInput } from "../../verificationToken/base/VerificationTokenWhereUniqueInput";
import { MembershipFindManyArgs } from "../../membership/base/MembershipFindManyArgs";
import { Membership } from "../../membership/base/Membership";
import { MembershipWhereUniqueInput } from "../../membership/base/MembershipWhereUniqueInput";
import { ProfileFindManyArgs } from "../../profile/base/ProfileFindManyArgs";
import { Profile } from "../../profile/base/Profile";
import { ProfileWhereUniqueInput } from "../../profile/base/ProfileWhereUniqueInput";
import { AppRoutingFormsFormFindManyArgs } from "../../appRoutingFormsForm/base/AppRoutingFormsFormFindManyArgs";
import { AppRoutingFormsForm } from "../../appRoutingFormsForm/base/AppRoutingFormsForm";
import { AppRoutingFormsFormWhereUniqueInput } from "../../appRoutingFormsForm/base/AppRoutingFormsFormWhereUniqueInput";
import { VerifiedNumberFindManyArgs } from "../../verifiedNumber/base/VerifiedNumberFindManyArgs";
import { VerifiedNumber } from "../../verifiedNumber/base/VerifiedNumber";
import { VerifiedNumberWhereUniqueInput } from "../../verifiedNumber/base/VerifiedNumberWhereUniqueInput";
import { WebhookFindManyArgs } from "../../webhook/base/WebhookFindManyArgs";
import { Webhook } from "../../webhook/base/Webhook";
import { WebhookWhereUniqueInput } from "../../webhook/base/WebhookWhereUniqueInput";
import { WorkflowFindManyArgs } from "../../workflow/base/WorkflowFindManyArgs";
import { Workflow } from "../../workflow/base/Workflow";
import { WorkflowWhereUniqueInput } from "../../workflow/base/WorkflowWhereUniqueInput";

export class TeamControllerBase {
  constructor(protected readonly service: TeamService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Team })
  async createTeam(@common.Body() data: TeamCreateInput): Promise<Team> {
    return await this.service.createTeam({
      data: {
        ...data,

        parent: data.parent
          ? {
              connect: data.parent,
            }
          : undefined,
      },
      select: {
        appIconLogo: true,
        appLogo: true,
        bio: true,
        brandColor: true,
        calVideoLogo: true,
        createdAt: true,
        darkBrandColor: true,
        hideBookATeamMember: true,
        hideBranding: true,
        id: true,
        isPrivate: true,
        logo: true,
        logoUrl: true,
        metadata: true,
        name: true,
        orgUsers: true,

        parent: {
          select: {
            id: true,
          },
        },

        pendingPayment: true,
        slug: true,
        theme: true,
        timeFormat: true,
        timeZone: true,
        weekStart: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Team] })
  @ApiNestedQuery(TeamFindManyArgs)
  async teams(@common.Req() request: Request): Promise<Team[]> {
    const args = plainToClass(TeamFindManyArgs, request.query);
    return this.service.teams({
      ...args,
      select: {
        appIconLogo: true,
        appLogo: true,
        bio: true,
        brandColor: true,
        calVideoLogo: true,
        createdAt: true,
        darkBrandColor: true,
        hideBookATeamMember: true,
        hideBranding: true,
        id: true,
        isPrivate: true,
        logo: true,
        logoUrl: true,
        metadata: true,
        name: true,
        orgUsers: true,

        parent: {
          select: {
            id: true,
          },
        },

        pendingPayment: true,
        slug: true,
        theme: true,
        timeFormat: true,
        timeZone: true,
        weekStart: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Team })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async team(
    @common.Param() params: TeamWhereUniqueInput
  ): Promise<Team | null> {
    const result = await this.service.team({
      where: params,
      select: {
        appIconLogo: true,
        appLogo: true,
        bio: true,
        brandColor: true,
        calVideoLogo: true,
        createdAt: true,
        darkBrandColor: true,
        hideBookATeamMember: true,
        hideBranding: true,
        id: true,
        isPrivate: true,
        logo: true,
        logoUrl: true,
        metadata: true,
        name: true,
        orgUsers: true,

        parent: {
          select: {
            id: true,
          },
        },

        pendingPayment: true,
        slug: true,
        theme: true,
        timeFormat: true,
        timeZone: true,
        weekStart: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Team })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateTeam(
    @common.Param() params: TeamWhereUniqueInput,
    @common.Body() data: TeamUpdateInput
  ): Promise<Team | null> {
    try {
      return await this.service.updateTeam({
        where: params,
        data: {
          ...data,

          parent: data.parent
            ? {
                connect: data.parent,
              }
            : undefined,
        },
        select: {
          appIconLogo: true,
          appLogo: true,
          bio: true,
          brandColor: true,
          calVideoLogo: true,
          createdAt: true,
          darkBrandColor: true,
          hideBookATeamMember: true,
          hideBranding: true,
          id: true,
          isPrivate: true,
          logo: true,
          logoUrl: true,
          metadata: true,
          name: true,
          orgUsers: true,

          parent: {
            select: {
              id: true,
            },
          },

          pendingPayment: true,
          slug: true,
          theme: true,
          timeFormat: true,
          timeZone: true,
          weekStart: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Team })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteTeam(
    @common.Param() params: TeamWhereUniqueInput
  ): Promise<Team | null> {
    try {
      return await this.service.deleteTeam({
        where: params,
        select: {
          appIconLogo: true,
          appLogo: true,
          bio: true,
          brandColor: true,
          calVideoLogo: true,
          createdAt: true,
          darkBrandColor: true,
          hideBookATeamMember: true,
          hideBranding: true,
          id: true,
          isPrivate: true,
          logo: true,
          logoUrl: true,
          metadata: true,
          name: true,
          orgUsers: true,

          parent: {
            select: {
              id: true,
            },
          },

          pendingPayment: true,
          slug: true,
          theme: true,
          timeFormat: true,
          timeZone: true,
          weekStart: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/accessCodes")
  @ApiNestedQuery(AccessCodeFindManyArgs)
  async findAccessCodes(
    @common.Req() request: Request,
    @common.Param() params: TeamWhereUniqueInput
  ): Promise<AccessCode[]> {
    const query = plainToClass(AccessCodeFindManyArgs, request.query);
    const results = await this.service.findAccessCodes(params.id, {
      ...query,
      select: {
        client: {
          select: {
            id: true,
          },
        },

        code: true,
        expiresAt: true,
        id: true,
        scopes: true,

        team: {
          select: {
            id: true,
          },
        },

        userId: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/accessCodes")
  async connectAccessCodes(
    @common.Param() params: TeamWhereUniqueInput,
    @common.Body() body: AccessCodeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      accessCodes: {
        connect: body,
      },
    };
    await this.service.updateTeam({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/accessCodes")
  async updateAccessCodes(
    @common.Param() params: TeamWhereUniqueInput,
    @common.Body() body: AccessCodeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      accessCodes: {
        set: body,
      },
    };
    await this.service.updateTeam({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/accessCodes")
  async disconnectAccessCodes(
    @common.Param() params: TeamWhereUniqueInput,
    @common.Body() body: AccessCodeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      accessCodes: {
        disconnect: body,
      },
    };
    await this.service.updateTeam({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/apiKeys")
  @ApiNestedQuery(ApiKeyFindManyArgs)
  async findApiKeys(
    @common.Req() request: Request,
    @common.Param() params: TeamWhereUniqueInput
  ): Promise<ApiKey[]> {
    const query = plainToClass(ApiKeyFindManyArgs, request.query);
    const results = await this.service.findApiKeys(params.id, {
      ...query,
      select: {
        appField: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        expiresAt: true,
        hashedKey: true,
        id: true,
        lastUsedAt: true,
        note: true,

        team: {
          select: {
            id: true,
          },
        },

        userId: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/apiKeys")
  async connectApiKeys(
    @common.Param() params: TeamWhereUniqueInput,
    @common.Body() body: ApiKeyWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      apiKeys: {
        connect: body,
      },
    };
    await this.service.updateTeam({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/apiKeys")
  async updateApiKeys(
    @common.Param() params: TeamWhereUniqueInput,
    @common.Body() body: ApiKeyWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      apiKeys: {
        set: body,
      },
    };
    await this.service.updateTeam({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/apiKeys")
  async disconnectApiKeys(
    @common.Param() params: TeamWhereUniqueInput,
    @common.Body() body: ApiKeyWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      apiKeys: {
        disconnect: body,
      },
    };
    await this.service.updateTeam({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/children")
  @ApiNestedQuery(TeamFindManyArgs)
  async findChildren(
    @common.Req() request: Request,
    @common.Param() params: TeamWhereUniqueInput
  ): Promise<Team[]> {
    const query = plainToClass(TeamFindManyArgs, request.query);
    const results = await this.service.findChildren(params.id, {
      ...query,
      select: {
        appIconLogo: true,
        appLogo: true,
        bio: true,
        brandColor: true,
        calVideoLogo: true,
        createdAt: true,
        darkBrandColor: true,
        hideBookATeamMember: true,
        hideBranding: true,
        id: true,
        isPrivate: true,
        logo: true,
        logoUrl: true,
        metadata: true,
        name: true,
        orgUsers: true,

        parent: {
          select: {
            id: true,
          },
        },

        pendingPayment: true,
        slug: true,
        theme: true,
        timeFormat: true,
        timeZone: true,
        weekStart: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/children")
  async connectChildren(
    @common.Param() params: TeamWhereUniqueInput,
    @common.Body() body: TeamWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      children: {
        connect: body,
      },
    };
    await this.service.updateTeam({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/children")
  async updateChildren(
    @common.Param() params: TeamWhereUniqueInput,
    @common.Body() body: TeamWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      children: {
        set: body,
      },
    };
    await this.service.updateTeam({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/children")
  async disconnectChildren(
    @common.Param() params: TeamWhereUniqueInput,
    @common.Body() body: TeamWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      children: {
        disconnect: body,
      },
    };
    await this.service.updateTeam({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/credentials")
  @ApiNestedQuery(CredentialFindManyArgs)
  async findCredentials(
    @common.Req() request: Request,
    @common.Param() params: TeamWhereUniqueInput
  ): Promise<Credential[]> {
    const query = plainToClass(CredentialFindManyArgs, request.query);
    const results = await this.service.findCredentials(params.id, {
      ...query,
      select: {
        appField: {
          select: {
            id: true,
          },
        },

        billingCycleStart: true,
        id: true,
        invalid: true,
        key: true,
        paymentStatus: true,
        subscriptionId: true,

        team: {
          select: {
            id: true,
          },
        },

        typeField: true,
        userId: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/credentials")
  async connectCredentials(
    @common.Param() params: TeamWhereUniqueInput,
    @common.Body() body: CredentialWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      credentials: {
        connect: body,
      },
    };
    await this.service.updateTeam({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/credentials")
  async updateCredentials(
    @common.Param() params: TeamWhereUniqueInput,
    @common.Body() body: CredentialWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      credentials: {
        set: body,
      },
    };
    await this.service.updateTeam({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/credentials")
  async disconnectCredentials(
    @common.Param() params: TeamWhereUniqueInput,
    @common.Body() body: CredentialWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      credentials: {
        disconnect: body,
      },
    };
    await this.service.updateTeam({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/eventTypes")
  @ApiNestedQuery(EventTypeFindManyArgs)
  async findEventTypes(
    @common.Req() request: Request,
    @common.Param() params: TeamWhereUniqueInput
  ): Promise<EventType[]> {
    const query = plainToClass(EventTypeFindManyArgs, request.query);
    const results = await this.service.findEventTypes(params.id, {
      ...query,
      select: {
        afterEventBuffer: true,
        assignAllTeamMembers: true,
        beforeEventBuffer: true,
        bookingFields: true,
        bookingLimits: true,
        currency: true,
        description: true,

        destinationCalendar: {
          select: {
            id: true,
          },
        },

        disableGuests: true,
        durationLimits: true,
        eventName: true,

        hashedLink: {
          select: {
            id: true,
          },
        },

        hidden: true,
        hideCalendarNotes: true,
        id: true,
        isInstantEvent: true,
        length: true,
        locations: true,
        lockTimeZoneToggleOnBookingPage: true,
        metadata: true,
        minimumBookingNotice: true,
        offsetStart: true,
        onlyShowFirstAvailableSlot: true,
        ownerId: true,

        parent: {
          select: {
            id: true,
          },
        },

        periodCountCalendarDays: true,
        periodDays: true,
        periodEndDate: true,
        periodStartDate: true,
        periodType: true,
        position: true,
        price: true,

        profile: {
          select: {
            id: true,
          },
        },

        recurringEvent: true,
        requiresBookerEmailVerification: true,
        requiresConfirmation: true,

        schedule: {
          select: {
            id: true,
          },
        },

        schedulingType: true,
        seatsPerTimeSlot: true,
        seatsShowAttendees: true,
        seatsShowAvailabilityCount: true,
        slotInterval: true,
        slug: true,
        successRedirectUrl: true,

        team: {
          select: {
            id: true,
          },
        },

        timeZone: true,
        title: true,
        useEventTypeDestinationCalendarEmail: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/eventTypes")
  async connectEventTypes(
    @common.Param() params: TeamWhereUniqueInput,
    @common.Body() body: EventTypeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      eventTypes: {
        connect: body,
      },
    };
    await this.service.updateTeam({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/eventTypes")
  async updateEventTypes(
    @common.Param() params: TeamWhereUniqueInput,
    @common.Body() body: EventTypeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      eventTypes: {
        set: body,
      },
    };
    await this.service.updateTeam({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/eventTypes")
  async disconnectEventTypes(
    @common.Param() params: TeamWhereUniqueInput,
    @common.Body() body: EventTypeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      eventTypes: {
        disconnect: body,
      },
    };
    await this.service.updateTeam({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/instantMeetingTokens")
  @ApiNestedQuery(InstantMeetingTokenFindManyArgs)
  async findInstantMeetingTokens(
    @common.Req() request: Request,
    @common.Param() params: TeamWhereUniqueInput
  ): Promise<InstantMeetingToken[]> {
    const query = plainToClass(InstantMeetingTokenFindManyArgs, request.query);
    const results = await this.service.findInstantMeetingTokens(params.id, {
      ...query,
      select: {
        booking: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        expires: true,
        id: true,

        team: {
          select: {
            id: true,
          },
        },

        token: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/instantMeetingTokens")
  async connectInstantMeetingTokens(
    @common.Param() params: TeamWhereUniqueInput,
    @common.Body() body: InstantMeetingTokenWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      instantMeetingTokens: {
        connect: body,
      },
    };
    await this.service.updateTeam({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/instantMeetingTokens")
  async updateInstantMeetingTokens(
    @common.Param() params: TeamWhereUniqueInput,
    @common.Body() body: InstantMeetingTokenWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      instantMeetingTokens: {
        set: body,
      },
    };
    await this.service.updateTeam({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/instantMeetingTokens")
  async disconnectInstantMeetingTokens(
    @common.Param() params: TeamWhereUniqueInput,
    @common.Body() body: InstantMeetingTokenWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      instantMeetingTokens: {
        disconnect: body,
      },
    };
    await this.service.updateTeam({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/inviteTokens")
  @ApiNestedQuery(VerificationTokenFindManyArgs)
  async findInviteTokens(
    @common.Req() request: Request,
    @common.Param() params: TeamWhereUniqueInput
  ): Promise<VerificationToken[]> {
    const query = plainToClass(VerificationTokenFindManyArgs, request.query);
    const results = await this.service.findInviteTokens(params.id, {
      ...query,
      select: {
        createdAt: true,
        expires: true,
        expiresInDays: true,
        id: true,
        identifier: true,

        team: {
          select: {
            id: true,
          },
        },

        token: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/inviteTokens")
  async connectInviteTokens(
    @common.Param() params: TeamWhereUniqueInput,
    @common.Body() body: VerificationTokenWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      inviteTokens: {
        connect: body,
      },
    };
    await this.service.updateTeam({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/inviteTokens")
  async updateInviteTokens(
    @common.Param() params: TeamWhereUniqueInput,
    @common.Body() body: VerificationTokenWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      inviteTokens: {
        set: body,
      },
    };
    await this.service.updateTeam({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/inviteTokens")
  async disconnectInviteTokens(
    @common.Param() params: TeamWhereUniqueInput,
    @common.Body() body: VerificationTokenWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      inviteTokens: {
        disconnect: body,
      },
    };
    await this.service.updateTeam({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/members")
  @ApiNestedQuery(MembershipFindManyArgs)
  async findMembers(
    @common.Req() request: Request,
    @common.Param() params: TeamWhereUniqueInput
  ): Promise<Membership[]> {
    const query = plainToClass(MembershipFindManyArgs, request.query);
    const results = await this.service.findMembers(params.id, {
      ...query,
      select: {
        accepted: true,
        disableImpersonation: true,
        id: true,
        role: true,

        team: {
          select: {
            id: true,
          },
        },

        userId: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/members")
  async connectMembers(
    @common.Param() params: TeamWhereUniqueInput,
    @common.Body() body: MembershipWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      members: {
        connect: body,
      },
    };
    await this.service.updateTeam({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/members")
  async updateMembers(
    @common.Param() params: TeamWhereUniqueInput,
    @common.Body() body: MembershipWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      members: {
        set: body,
      },
    };
    await this.service.updateTeam({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/members")
  async disconnectMembers(
    @common.Param() params: TeamWhereUniqueInput,
    @common.Body() body: MembershipWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      members: {
        disconnect: body,
      },
    };
    await this.service.updateTeam({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/orgProfiles")
  @ApiNestedQuery(ProfileFindManyArgs)
  async findOrgProfiles(
    @common.Req() request: Request,
    @common.Param() params: TeamWhereUniqueInput
  ): Promise<Profile[]> {
    const query = plainToClass(ProfileFindManyArgs, request.query);
    const results = await this.service.findOrgProfiles(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,
        movedFromUserId: true,

        organization: {
          select: {
            id: true,
          },
        },

        uid: true,
        updatedAt: true,
        userId: true,
        username: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/orgProfiles")
  async connectOrgProfiles(
    @common.Param() params: TeamWhereUniqueInput,
    @common.Body() body: ProfileWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      orgProfiles: {
        connect: body,
      },
    };
    await this.service.updateTeam({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/orgProfiles")
  async updateOrgProfiles(
    @common.Param() params: TeamWhereUniqueInput,
    @common.Body() body: ProfileWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      orgProfiles: {
        set: body,
      },
    };
    await this.service.updateTeam({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/orgProfiles")
  async disconnectOrgProfiles(
    @common.Param() params: TeamWhereUniqueInput,
    @common.Body() body: ProfileWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      orgProfiles: {
        disconnect: body,
      },
    };
    await this.service.updateTeam({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/routingForms")
  @ApiNestedQuery(AppRoutingFormsFormFindManyArgs)
  async findRoutingForms(
    @common.Req() request: Request,
    @common.Param() params: TeamWhereUniqueInput
  ): Promise<AppRoutingFormsForm[]> {
    const query = plainToClass(AppRoutingFormsFormFindManyArgs, request.query);
    const results = await this.service.findRoutingForms(params.id, {
      ...query,
      select: {
        createdAt: true,
        description: true,
        disabled: true,
        fields: true,
        id: true,
        name: true,
        position: true,
        routes: true,
        settings: true,

        team: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
        userId: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/routingForms")
  async connectRoutingForms(
    @common.Param() params: TeamWhereUniqueInput,
    @common.Body() body: AppRoutingFormsFormWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      routingForms: {
        connect: body,
      },
    };
    await this.service.updateTeam({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/routingForms")
  async updateRoutingForms(
    @common.Param() params: TeamWhereUniqueInput,
    @common.Body() body: AppRoutingFormsFormWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      routingForms: {
        set: body,
      },
    };
    await this.service.updateTeam({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/routingForms")
  async disconnectRoutingForms(
    @common.Param() params: TeamWhereUniqueInput,
    @common.Body() body: AppRoutingFormsFormWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      routingForms: {
        disconnect: body,
      },
    };
    await this.service.updateTeam({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/verifiedNumbers")
  @ApiNestedQuery(VerifiedNumberFindManyArgs)
  async findVerifiedNumbers(
    @common.Req() request: Request,
    @common.Param() params: TeamWhereUniqueInput
  ): Promise<VerifiedNumber[]> {
    const query = plainToClass(VerifiedNumberFindManyArgs, request.query);
    const results = await this.service.findVerifiedNumbers(params.id, {
      ...query,
      select: {
        id: true,
        phoneNumber: true,

        team: {
          select: {
            id: true,
          },
        },

        userId: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/verifiedNumbers")
  async connectVerifiedNumbers(
    @common.Param() params: TeamWhereUniqueInput,
    @common.Body() body: VerifiedNumberWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      verifiedNumbers: {
        connect: body,
      },
    };
    await this.service.updateTeam({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/verifiedNumbers")
  async updateVerifiedNumbers(
    @common.Param() params: TeamWhereUniqueInput,
    @common.Body() body: VerifiedNumberWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      verifiedNumbers: {
        set: body,
      },
    };
    await this.service.updateTeam({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/verifiedNumbers")
  async disconnectVerifiedNumbers(
    @common.Param() params: TeamWhereUniqueInput,
    @common.Body() body: VerifiedNumberWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      verifiedNumbers: {
        disconnect: body,
      },
    };
    await this.service.updateTeam({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/webhooks")
  @ApiNestedQuery(WebhookFindManyArgs)
  async findWebhooks(
    @common.Req() request: Request,
    @common.Param() params: TeamWhereUniqueInput
  ): Promise<Webhook[]> {
    const query = plainToClass(WebhookFindManyArgs, request.query);
    const results = await this.service.findWebhooks(params.id, {
      ...query,
      select: {
        active: true,

        appField: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        eventTriggers: true,

        eventType: {
          select: {
            id: true,
          },
        },

        id: true,
        payloadTemplate: true,
        secret: true,
        subscriberUrl: true,

        team: {
          select: {
            id: true,
          },
        },

        userId: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/webhooks")
  async connectWebhooks(
    @common.Param() params: TeamWhereUniqueInput,
    @common.Body() body: WebhookWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      webhooks: {
        connect: body,
      },
    };
    await this.service.updateTeam({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/webhooks")
  async updateWebhooks(
    @common.Param() params: TeamWhereUniqueInput,
    @common.Body() body: WebhookWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      webhooks: {
        set: body,
      },
    };
    await this.service.updateTeam({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/webhooks")
  async disconnectWebhooks(
    @common.Param() params: TeamWhereUniqueInput,
    @common.Body() body: WebhookWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      webhooks: {
        disconnect: body,
      },
    };
    await this.service.updateTeam({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/workflows")
  @ApiNestedQuery(WorkflowFindManyArgs)
  async findWorkflows(
    @common.Req() request: Request,
    @common.Param() params: TeamWhereUniqueInput
  ): Promise<Workflow[]> {
    const query = plainToClass(WorkflowFindManyArgs, request.query);
    const results = await this.service.findWorkflows(params.id, {
      ...query,
      select: {
        id: true,
        name: true,
        position: true,

        team: {
          select: {
            id: true,
          },
        },

        time: true,
        timeUnit: true,
        trigger: true,
        userId: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/workflows")
  async connectWorkflows(
    @common.Param() params: TeamWhereUniqueInput,
    @common.Body() body: WorkflowWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      workflows: {
        connect: body,
      },
    };
    await this.service.updateTeam({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/workflows")
  async updateWorkflows(
    @common.Param() params: TeamWhereUniqueInput,
    @common.Body() body: WorkflowWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      workflows: {
        set: body,
      },
    };
    await this.service.updateTeam({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/workflows")
  async disconnectWorkflows(
    @common.Param() params: TeamWhereUniqueInput,
    @common.Body() body: WorkflowWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      workflows: {
        disconnect: body,
      },
    };
    await this.service.updateTeam({
      where: params,
      data,
      select: { id: true },
    });
  }
}
