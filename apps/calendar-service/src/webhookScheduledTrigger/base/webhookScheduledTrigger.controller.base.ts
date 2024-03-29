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
import { WebhookScheduledTriggerService } from "../webhookScheduledTrigger.service";
import { WebhookScheduledTriggerCreateInput } from "./WebhookScheduledTriggerCreateInput";
import { WebhookScheduledTrigger } from "./WebhookScheduledTrigger";
import { WebhookScheduledTriggerFindManyArgs } from "./WebhookScheduledTriggerFindManyArgs";
import { WebhookScheduledTriggerWhereUniqueInput } from "./WebhookScheduledTriggerWhereUniqueInput";
import { WebhookScheduledTriggerUpdateInput } from "./WebhookScheduledTriggerUpdateInput";

export class WebhookScheduledTriggerControllerBase {
  constructor(protected readonly service: WebhookScheduledTriggerService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: WebhookScheduledTrigger })
  async createWebhookScheduledTrigger(
    @common.Body() data: WebhookScheduledTriggerCreateInput
  ): Promise<WebhookScheduledTrigger> {
    return await this.service.createWebhookScheduledTrigger({
      data: data,
      select: {
        createdAt: true,
        id: true,
        jobName: true,
        payload: true,
        retryCount: true,
        startAfter: true,
        subscriberUrl: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [WebhookScheduledTrigger] })
  @ApiNestedQuery(WebhookScheduledTriggerFindManyArgs)
  async webhookScheduledTriggers(
    @common.Req() request: Request
  ): Promise<WebhookScheduledTrigger[]> {
    const args = plainToClass(
      WebhookScheduledTriggerFindManyArgs,
      request.query
    );
    return this.service.webhookScheduledTriggers({
      ...args,
      select: {
        createdAt: true,
        id: true,
        jobName: true,
        payload: true,
        retryCount: true,
        startAfter: true,
        subscriberUrl: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: WebhookScheduledTrigger })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async webhookScheduledTrigger(
    @common.Param() params: WebhookScheduledTriggerWhereUniqueInput
  ): Promise<WebhookScheduledTrigger | null> {
    const result = await this.service.webhookScheduledTrigger({
      where: params,
      select: {
        createdAt: true,
        id: true,
        jobName: true,
        payload: true,
        retryCount: true,
        startAfter: true,
        subscriberUrl: true,
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
  @swagger.ApiOkResponse({ type: WebhookScheduledTrigger })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateWebhookScheduledTrigger(
    @common.Param() params: WebhookScheduledTriggerWhereUniqueInput,
    @common.Body() data: WebhookScheduledTriggerUpdateInput
  ): Promise<WebhookScheduledTrigger | null> {
    try {
      return await this.service.updateWebhookScheduledTrigger({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          jobName: true,
          payload: true,
          retryCount: true,
          startAfter: true,
          subscriberUrl: true,
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
  @swagger.ApiOkResponse({ type: WebhookScheduledTrigger })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteWebhookScheduledTrigger(
    @common.Param() params: WebhookScheduledTriggerWhereUniqueInput
  ): Promise<WebhookScheduledTrigger | null> {
    try {
      return await this.service.deleteWebhookScheduledTrigger({
        where: params,
        select: {
          createdAt: true,
          id: true,
          jobName: true,
          payload: true,
          retryCount: true,
          startAfter: true,
          subscriberUrl: true,
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
