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
import { OAuthClientService } from "../oAuthClient.service";
import { OAuthClientCreateInput } from "./OAuthClientCreateInput";
import { OAuthClient } from "./OAuthClient";
import { OAuthClientFindManyArgs } from "./OAuthClientFindManyArgs";
import { OAuthClientWhereUniqueInput } from "./OAuthClientWhereUniqueInput";
import { OAuthClientUpdateInput } from "./OAuthClientUpdateInput";
import { AccessCodeFindManyArgs } from "../../accessCode/base/AccessCodeFindManyArgs";
import { AccessCode } from "../../accessCode/base/AccessCode";
import { AccessCodeWhereUniqueInput } from "../../accessCode/base/AccessCodeWhereUniqueInput";

export class OAuthClientControllerBase {
  constructor(protected readonly service: OAuthClientService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: OAuthClient })
  async createOAuthClient(
    @common.Body() data: OAuthClientCreateInput
  ): Promise<OAuthClient> {
    return await this.service.createOAuthClient({
      data: data,
      select: {
        clientSecret: true,
        id: true,
        logo: true,
        name: true,
        redirectUri: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [OAuthClient] })
  @ApiNestedQuery(OAuthClientFindManyArgs)
  async oAuthClients(@common.Req() request: Request): Promise<OAuthClient[]> {
    const args = plainToClass(OAuthClientFindManyArgs, request.query);
    return this.service.oAuthClients({
      ...args,
      select: {
        clientSecret: true,
        id: true,
        logo: true,
        name: true,
        redirectUri: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: OAuthClient })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async oAuthClient(
    @common.Param() params: OAuthClientWhereUniqueInput
  ): Promise<OAuthClient | null> {
    const result = await this.service.oAuthClient({
      where: params,
      select: {
        clientSecret: true,
        id: true,
        logo: true,
        name: true,
        redirectUri: true,
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
  @swagger.ApiOkResponse({ type: OAuthClient })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateOAuthClient(
    @common.Param() params: OAuthClientWhereUniqueInput,
    @common.Body() data: OAuthClientUpdateInput
  ): Promise<OAuthClient | null> {
    try {
      return await this.service.updateOAuthClient({
        where: params,
        data: data,
        select: {
          clientSecret: true,
          id: true,
          logo: true,
          name: true,
          redirectUri: true,
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
  @swagger.ApiOkResponse({ type: OAuthClient })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteOAuthClient(
    @common.Param() params: OAuthClientWhereUniqueInput
  ): Promise<OAuthClient | null> {
    try {
      return await this.service.deleteOAuthClient({
        where: params,
        select: {
          clientSecret: true,
          id: true,
          logo: true,
          name: true,
          redirectUri: true,
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
    @common.Param() params: OAuthClientWhereUniqueInput
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

        user: {
          select: {
            id: true,
          },
        },
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
    @common.Param() params: OAuthClientWhereUniqueInput,
    @common.Body() body: AccessCodeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      accessCodes: {
        connect: body,
      },
    };
    await this.service.updateOAuthClient({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/accessCodes")
  async updateAccessCodes(
    @common.Param() params: OAuthClientWhereUniqueInput,
    @common.Body() body: AccessCodeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      accessCodes: {
        set: body,
      },
    };
    await this.service.updateOAuthClient({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/accessCodes")
  async disconnectAccessCodes(
    @common.Param() params: OAuthClientWhereUniqueInput,
    @common.Body() body: AccessCodeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      accessCodes: {
        disconnect: body,
      },
    };
    await this.service.updateOAuthClient({
      where: params,
      data,
      select: { id: true },
    });
  }
}
