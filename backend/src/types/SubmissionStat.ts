import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class SubmissionStat {
  @Field()
  name: string;

  @Field()
  count: number;

  @Field()
  ratio: number;

  constructor(name: string, count: number, ratio:number) {
    this.name = name;
    this.count = count;
    this.ratio = ratio;
  }
}
