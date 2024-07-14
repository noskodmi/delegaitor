/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Response as PrismaResponse } from "@prisma/client";

export class ResponseServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.ResponseCountArgs, "select">): Promise<number> {
    return this.prisma.response.count(args);
  }

  async responses(
    args: Prisma.ResponseFindManyArgs
  ): Promise<PrismaResponse[]> {
    return this.prisma.response.findMany(args);
  }
  async response(
    args: Prisma.ResponseFindUniqueArgs
  ): Promise<PrismaResponse | null> {
    return this.prisma.response.findUnique(args);
  }
  async createResponse(
    args: Prisma.ResponseCreateArgs
  ): Promise<PrismaResponse> {
    return this.prisma.response.create(args);
  }
  async updateResponse(
    args: Prisma.ResponseUpdateArgs
  ): Promise<PrismaResponse> {
    return this.prisma.response.update(args);
  }
  async deleteResponse(
    args: Prisma.ResponseDeleteArgs
  ): Promise<PrismaResponse> {
    return this.prisma.response.delete(args);
  }
}
