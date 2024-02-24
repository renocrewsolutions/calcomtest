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
import { VerificationTokenService } from "../verificationToken.service";
import { VerificationTokenCreateInput } from "./VerificationTokenCreateInput";
import { VerificationToken } from "./VerificationToken";
import { VerificationTokenFindManyArgs } from "./VerificationTokenFindManyArgs";
import { VerificationTokenWhereUniqueInput } from "./VerificationTokenWhereUniqueInput";
import { VerificationTokenUpdateInput } from "./VerificationTokenUpdateInput";

export class VerificationTokenControllerBase {
  constructor(protected readonly service: VerificationTokenService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: VerificationToken })
  async createVerificationToken(
    @common.Body() data: VerificationTokenCreateInput
  ): Promise<VerificationToken> {
    return await this.service.createVerificationToken({
      data: {
        ...data,

        team: data.team
          ? {
              connect: data.team,
            }
          : undefined,
      },
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
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [VerificationToken] })
  @ApiNestedQuery(VerificationTokenFindManyArgs)
  async verificationTokens(
    @common.Req() request: Request
  ): Promise<VerificationToken[]> {
    const args = plainToClass(VerificationTokenFindManyArgs, request.query);
    return this.service.verificationTokens({
      ...args,
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
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: VerificationToken })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async verificationToken(
    @common.Param() params: VerificationTokenWhereUniqueInput
  ): Promise<VerificationToken | null> {
    const result = await this.service.verificationToken({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: VerificationToken })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateVerificationToken(
    @common.Param() params: VerificationTokenWhereUniqueInput,
    @common.Body() data: VerificationTokenUpdateInput
  ): Promise<VerificationToken | null> {
    try {
      return await this.service.updateVerificationToken({
        where: params,
        data: {
          ...data,

          team: data.team
            ? {
                connect: data.team,
              }
            : undefined,
        },
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
  @swagger.ApiOkResponse({ type: VerificationToken })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteVerificationToken(
    @common.Param() params: VerificationTokenWhereUniqueInput
  ): Promise<VerificationToken | null> {
    try {
      return await this.service.deleteVerificationToken({
        where: params,
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
