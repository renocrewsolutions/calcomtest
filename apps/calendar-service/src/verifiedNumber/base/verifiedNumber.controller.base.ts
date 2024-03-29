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
import { VerifiedNumberService } from "../verifiedNumber.service";
import { VerifiedNumberCreateInput } from "./VerifiedNumberCreateInput";
import { VerifiedNumber } from "./VerifiedNumber";
import { VerifiedNumberFindManyArgs } from "./VerifiedNumberFindManyArgs";
import { VerifiedNumberWhereUniqueInput } from "./VerifiedNumberWhereUniqueInput";
import { VerifiedNumberUpdateInput } from "./VerifiedNumberUpdateInput";

export class VerifiedNumberControllerBase {
  constructor(protected readonly service: VerifiedNumberService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: VerifiedNumber })
  async createVerifiedNumber(
    @common.Body() data: VerifiedNumberCreateInput
  ): Promise<VerifiedNumber> {
    return await this.service.createVerifiedNumber({
      data: {
        ...data,

        team: data.team
          ? {
              connect: data.team,
            }
          : undefined,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        id: true,
        phoneNumber: true,

        team: {
          select: {
            id: true,
          },
        },

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [VerifiedNumber] })
  @ApiNestedQuery(VerifiedNumberFindManyArgs)
  async verifiedNumbers(
    @common.Req() request: Request
  ): Promise<VerifiedNumber[]> {
    const args = plainToClass(VerifiedNumberFindManyArgs, request.query);
    return this.service.verifiedNumbers({
      ...args,
      select: {
        id: true,
        phoneNumber: true,

        team: {
          select: {
            id: true,
          },
        },

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: VerifiedNumber })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async verifiedNumber(
    @common.Param() params: VerifiedNumberWhereUniqueInput
  ): Promise<VerifiedNumber | null> {
    const result = await this.service.verifiedNumber({
      where: params,
      select: {
        id: true,
        phoneNumber: true,

        team: {
          select: {
            id: true,
          },
        },

        user: {
          select: {
            id: true,
          },
        },
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
  @swagger.ApiOkResponse({ type: VerifiedNumber })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateVerifiedNumber(
    @common.Param() params: VerifiedNumberWhereUniqueInput,
    @common.Body() data: VerifiedNumberUpdateInput
  ): Promise<VerifiedNumber | null> {
    try {
      return await this.service.updateVerifiedNumber({
        where: params,
        data: {
          ...data,

          team: data.team
            ? {
                connect: data.team,
              }
            : undefined,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          id: true,
          phoneNumber: true,

          team: {
            select: {
              id: true,
            },
          },

          user: {
            select: {
              id: true,
            },
          },
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
  @swagger.ApiOkResponse({ type: VerifiedNumber })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteVerifiedNumber(
    @common.Param() params: VerifiedNumberWhereUniqueInput
  ): Promise<VerifiedNumber | null> {
    try {
      return await this.service.deleteVerifiedNumber({
        where: params,
        select: {
          id: true,
          phoneNumber: true,

          team: {
            select: {
              id: true,
            },
          },

          user: {
            select: {
              id: true,
            },
          },
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
