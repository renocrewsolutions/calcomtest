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
import { InstantMeetingTokenService } from "../instantMeetingToken.service";
import { InstantMeetingTokenCreateInput } from "./InstantMeetingTokenCreateInput";
import { InstantMeetingToken } from "./InstantMeetingToken";
import { InstantMeetingTokenFindManyArgs } from "./InstantMeetingTokenFindManyArgs";
import { InstantMeetingTokenWhereUniqueInput } from "./InstantMeetingTokenWhereUniqueInput";
import { InstantMeetingTokenUpdateInput } from "./InstantMeetingTokenUpdateInput";

export class InstantMeetingTokenControllerBase {
  constructor(protected readonly service: InstantMeetingTokenService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: InstantMeetingToken })
  async createInstantMeetingToken(
    @common.Body() data: InstantMeetingTokenCreateInput
  ): Promise<InstantMeetingToken> {
    return await this.service.createInstantMeetingToken({
      data: {
        ...data,

        booking: data.booking
          ? {
              connect: data.booking,
            }
          : undefined,

        team: {
          connect: data.team,
        },
      },
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
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [InstantMeetingToken] })
  @ApiNestedQuery(InstantMeetingTokenFindManyArgs)
  async instantMeetingTokens(
    @common.Req() request: Request
  ): Promise<InstantMeetingToken[]> {
    const args = plainToClass(InstantMeetingTokenFindManyArgs, request.query);
    return this.service.instantMeetingTokens({
      ...args,
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
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: InstantMeetingToken })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async instantMeetingToken(
    @common.Param() params: InstantMeetingTokenWhereUniqueInput
  ): Promise<InstantMeetingToken | null> {
    const result = await this.service.instantMeetingToken({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: InstantMeetingToken })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateInstantMeetingToken(
    @common.Param() params: InstantMeetingTokenWhereUniqueInput,
    @common.Body() data: InstantMeetingTokenUpdateInput
  ): Promise<InstantMeetingToken | null> {
    try {
      return await this.service.updateInstantMeetingToken({
        where: params,
        data: {
          ...data,

          booking: data.booking
            ? {
                connect: data.booking,
              }
            : undefined,

          team: {
            connect: data.team,
          },
        },
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
  @swagger.ApiOkResponse({ type: InstantMeetingToken })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteInstantMeetingToken(
    @common.Param() params: InstantMeetingTokenWhereUniqueInput
  ): Promise<InstantMeetingToken | null> {
    try {
      return await this.service.deleteInstantMeetingToken({
        where: params,
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
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
