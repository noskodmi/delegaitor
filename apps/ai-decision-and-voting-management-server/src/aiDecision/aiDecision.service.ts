import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AiDecisionServiceBase } from "./base/aiDecision.service.base";

@Injectable()
export class AiDecisionService extends AiDecisionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
