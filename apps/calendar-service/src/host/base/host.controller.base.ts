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
import { HostService } from "../host.service";
import { HostCreateInput } from "./HostCreateInput";
import { Host } from "./Host";
import { HostFindManyArgs } from "./HostFindManyArgs";
import { HostWhereUniqueInput } from "./HostWhereUniqueInput";
import { HostUpdateInput } from "./HostUpdateInput";

export class HostControllerBase {
  constructor(protected readonly service: HostService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Host })
  async createHost(@common.Body() data: HostCreateInput): Promise<Host> {
    return await this.service.createHost({
      data: {
        ...data,

        eventType: {
          connect: data.eventType,
        },

        user: {
          connect: data.user,
        },
      },
      select: {
        eventType: {
          select: {
            id: true,
          },
        },

        id: true,
        isFixed: true,
        priority: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Host] })
  @ApiNestedQuery(HostFindManyArgs)
  async hosts(@common.Req() request: Request): Promise<Host[]> {
    const args = plainToClass(HostFindManyArgs, request.query);
    return this.service.hosts({
      ...args,
      select: {
        eventType: {
          select: {
            id: true,
          },
        },

        id: true,
        isFixed: true,
        priority: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Host })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async host(
    @common.Param() params: HostWhereUniqueInput
  ): Promise<Host | null> {
    const result = await this.service.host({
      where: params,
      select: {
        eventType: {
          select: {
            id: true,
          },
        },

        id: true,
        isFixed: true,
        priority: true,

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
  @swagger.ApiOkResponse({ type: Host })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateHost(
    @common.Param() params: HostWhereUniqueInput,
    @common.Body() data: HostUpdateInput
  ): Promise<Host | null> {
    try {
      return await this.service.updateHost({
        where: params,
        data: {
          ...data,

          eventType: {
            connect: data.eventType,
          },

          user: {
            connect: data.user,
          },
        },
        select: {
          eventType: {
            select: {
              id: true,
            },
          },

          id: true,
          isFixed: true,
          priority: true,

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
  @swagger.ApiOkResponse({ type: Host })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteHost(
    @common.Param() params: HostWhereUniqueInput
  ): Promise<Host | null> {
    try {
      return await this.service.deleteHost({
        where: params,
        select: {
          eventType: {
            select: {
              id: true,
            },
          },

          id: true,
          isFixed: true,
          priority: true,

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
