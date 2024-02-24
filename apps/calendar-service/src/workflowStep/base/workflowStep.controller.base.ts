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
import { WorkflowStepService } from "../workflowStep.service";
import { WorkflowStepCreateInput } from "./WorkflowStepCreateInput";
import { WorkflowStep } from "./WorkflowStep";
import { WorkflowStepFindManyArgs } from "./WorkflowStepFindManyArgs";
import { WorkflowStepWhereUniqueInput } from "./WorkflowStepWhereUniqueInput";
import { WorkflowStepUpdateInput } from "./WorkflowStepUpdateInput";
import { WorkflowReminderFindManyArgs } from "../../workflowReminder/base/WorkflowReminderFindManyArgs";
import { WorkflowReminder } from "../../workflowReminder/base/WorkflowReminder";
import { WorkflowReminderWhereUniqueInput } from "../../workflowReminder/base/WorkflowReminderWhereUniqueInput";

export class WorkflowStepControllerBase {
  constructor(protected readonly service: WorkflowStepService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: WorkflowStep })
  async createWorkflowStep(
    @common.Body() data: WorkflowStepCreateInput
  ): Promise<WorkflowStep> {
    return await this.service.createWorkflowStep({
      data: {
        ...data,

        workflow: {
          connect: data.workflow,
        },
      },
      select: {
        action: true,
        emailSubject: true,
        id: true,
        includeCalendarEvent: true,
        numberRequired: true,
        numberVerificationPending: true,
        reminderBody: true,
        sender: true,
        sendTo: true,
        stepNumber: true,
        template: true,

        workflow: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [WorkflowStep] })
  @ApiNestedQuery(WorkflowStepFindManyArgs)
  async workflowSteps(@common.Req() request: Request): Promise<WorkflowStep[]> {
    const args = plainToClass(WorkflowStepFindManyArgs, request.query);
    return this.service.workflowSteps({
      ...args,
      select: {
        action: true,
        emailSubject: true,
        id: true,
        includeCalendarEvent: true,
        numberRequired: true,
        numberVerificationPending: true,
        reminderBody: true,
        sender: true,
        sendTo: true,
        stepNumber: true,
        template: true,

        workflow: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: WorkflowStep })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async workflowStep(
    @common.Param() params: WorkflowStepWhereUniqueInput
  ): Promise<WorkflowStep | null> {
    const result = await this.service.workflowStep({
      where: params,
      select: {
        action: true,
        emailSubject: true,
        id: true,
        includeCalendarEvent: true,
        numberRequired: true,
        numberVerificationPending: true,
        reminderBody: true,
        sender: true,
        sendTo: true,
        stepNumber: true,
        template: true,

        workflow: {
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
  @swagger.ApiOkResponse({ type: WorkflowStep })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateWorkflowStep(
    @common.Param() params: WorkflowStepWhereUniqueInput,
    @common.Body() data: WorkflowStepUpdateInput
  ): Promise<WorkflowStep | null> {
    try {
      return await this.service.updateWorkflowStep({
        where: params,
        data: {
          ...data,

          workflow: {
            connect: data.workflow,
          },
        },
        select: {
          action: true,
          emailSubject: true,
          id: true,
          includeCalendarEvent: true,
          numberRequired: true,
          numberVerificationPending: true,
          reminderBody: true,
          sender: true,
          sendTo: true,
          stepNumber: true,
          template: true,

          workflow: {
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
  @swagger.ApiOkResponse({ type: WorkflowStep })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteWorkflowStep(
    @common.Param() params: WorkflowStepWhereUniqueInput
  ): Promise<WorkflowStep | null> {
    try {
      return await this.service.deleteWorkflowStep({
        where: params,
        select: {
          action: true,
          emailSubject: true,
          id: true,
          includeCalendarEvent: true,
          numberRequired: true,
          numberVerificationPending: true,
          reminderBody: true,
          sender: true,
          sendTo: true,
          stepNumber: true,
          template: true,

          workflow: {
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

  @common.Get("/:id/workflowReminders")
  @ApiNestedQuery(WorkflowReminderFindManyArgs)
  async findWorkflowReminders(
    @common.Req() request: Request,
    @common.Param() params: WorkflowStepWhereUniqueInput
  ): Promise<WorkflowReminder[]> {
    const query = plainToClass(WorkflowReminderFindManyArgs, request.query);
    const results = await this.service.findWorkflowReminders(params.id, {
      ...query,
      select: {
        booking: {
          select: {
            id: true,
          },
        },

        cancelled: true,
        id: true,
        isMandatoryReminder: true,
        method: true,
        referenceId: true,
        scheduled: true,
        scheduledDate: true,
        seatReferenceId: true,

        workflowStep: {
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

  @common.Post("/:id/workflowReminders")
  async connectWorkflowReminders(
    @common.Param() params: WorkflowStepWhereUniqueInput,
    @common.Body() body: WorkflowReminderWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      workflowReminders: {
        connect: body,
      },
    };
    await this.service.updateWorkflowStep({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/workflowReminders")
  async updateWorkflowReminders(
    @common.Param() params: WorkflowStepWhereUniqueInput,
    @common.Body() body: WorkflowReminderWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      workflowReminders: {
        set: body,
      },
    };
    await this.service.updateWorkflowStep({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/workflowReminders")
  async disconnectWorkflowReminders(
    @common.Param() params: WorkflowStepWhereUniqueInput,
    @common.Body() body: WorkflowReminderWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      workflowReminders: {
        disconnect: body,
      },
    };
    await this.service.updateWorkflowStep({
      where: params,
      data,
      select: { id: true },
    });
  }
}
