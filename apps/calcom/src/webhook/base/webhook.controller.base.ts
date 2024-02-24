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
import { WebhookService } from "../webhook.service";
import { WebhookCreateInput } from "./WebhookCreateInput";
import { Webhook } from "./Webhook";
import { WebhookFindManyArgs } from "./WebhookFindManyArgs";
import { WebhookWhereUniqueInput } from "./WebhookWhereUniqueInput";
import { WebhookUpdateInput } from "./WebhookUpdateInput";

export class WebhookControllerBase {
  constructor(protected readonly service: WebhookService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Webhook })
  async createWebhook(
    @common.Body() data: WebhookCreateInput
  ): Promise<Webhook> {
    return await this.service.createWebhook({
      data: {
        ...data,

        appField: data.appField
          ? {
              connect: data.appField,
            }
          : undefined,

        eventType: data.eventType
          ? {
              connect: data.eventType,
            }
          : undefined,

        team: data.team
          ? {
              connect: data.team,
            }
          : undefined,
      },
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
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Webhook] })
  @ApiNestedQuery(WebhookFindManyArgs)
  async webhooks(@common.Req() request: Request): Promise<Webhook[]> {
    const args = plainToClass(WebhookFindManyArgs, request.query);
    return this.service.webhooks({
      ...args,
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
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Webhook })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async webhook(
    @common.Param() params: WebhookWhereUniqueInput
  ): Promise<Webhook | null> {
    const result = await this.service.webhook({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Webhook })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateWebhook(
    @common.Param() params: WebhookWhereUniqueInput,
    @common.Body() data: WebhookUpdateInput
  ): Promise<Webhook | null> {
    try {
      return await this.service.updateWebhook({
        where: params,
        data: {
          ...data,

          appField: data.appField
            ? {
                connect: data.appField,
              }
            : undefined,

          eventType: data.eventType
            ? {
                connect: data.eventType,
              }
            : undefined,

          team: data.team
            ? {
                connect: data.team,
              }
            : undefined,
        },
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
  @swagger.ApiOkResponse({ type: Webhook })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteWebhook(
    @common.Param() params: WebhookWhereUniqueInput
  ): Promise<Webhook | null> {
    try {
      return await this.service.deleteWebhook({
        where: params,
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
