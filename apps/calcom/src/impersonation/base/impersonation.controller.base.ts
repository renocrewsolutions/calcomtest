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
import { ImpersonationService } from "../impersonation.service";
import { ImpersonationCreateInput } from "./ImpersonationCreateInput";
import { Impersonation } from "./Impersonation";
import { ImpersonationFindManyArgs } from "./ImpersonationFindManyArgs";
import { ImpersonationWhereUniqueInput } from "./ImpersonationWhereUniqueInput";
import { ImpersonationUpdateInput } from "./ImpersonationUpdateInput";

export class ImpersonationControllerBase {
  constructor(protected readonly service: ImpersonationService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Impersonation })
  async createImpersonation(
    @common.Body() data: ImpersonationCreateInput
  ): Promise<Impersonation> {
    return await this.service.createImpersonation({
      data: data,
      select: {
        createdAt: true,
        id: true,
        impersonatedById: true,
        impersonatedUserId: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Impersonation] })
  @ApiNestedQuery(ImpersonationFindManyArgs)
  async impersonations(
    @common.Req() request: Request
  ): Promise<Impersonation[]> {
    const args = plainToClass(ImpersonationFindManyArgs, request.query);
    return this.service.impersonations({
      ...args,
      select: {
        createdAt: true,
        id: true,
        impersonatedById: true,
        impersonatedUserId: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Impersonation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async impersonation(
    @common.Param() params: ImpersonationWhereUniqueInput
  ): Promise<Impersonation | null> {
    const result = await this.service.impersonation({
      where: params,
      select: {
        createdAt: true,
        id: true,
        impersonatedById: true,
        impersonatedUserId: true,
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
  @swagger.ApiOkResponse({ type: Impersonation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateImpersonation(
    @common.Param() params: ImpersonationWhereUniqueInput,
    @common.Body() data: ImpersonationUpdateInput
  ): Promise<Impersonation | null> {
    try {
      return await this.service.updateImpersonation({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          impersonatedById: true,
          impersonatedUserId: true,
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
  @swagger.ApiOkResponse({ type: Impersonation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteImpersonation(
    @common.Param() params: ImpersonationWhereUniqueInput
  ): Promise<Impersonation | null> {
    try {
      return await this.service.deleteImpersonation({
        where: params,
        select: {
          createdAt: true,
          id: true,
          impersonatedById: true,
          impersonatedUserId: true,
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