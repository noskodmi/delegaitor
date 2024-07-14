import * as graphql from "@nestjs/graphql";
import { VoteResolverBase } from "./base/vote.resolver.base";
import { Vote } from "./base/Vote";
import { VoteService } from "./vote.service";

@graphql.Resolver(() => Vote)
export class VoteResolver extends VoteResolverBase {
  constructor(protected readonly service: VoteService) {
    super(service);
  }
}
