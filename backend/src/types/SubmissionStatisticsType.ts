import { Arg, Field, Int, ObjectType } from "type-graphql";
import { Submission } from "../models/Submission";
import { SubmissionStat } from "../types/SubmissionStat";

@ObjectType()
export default class SubmissionStatisticsType {
  @Field((type) => [SubmissionStat])
  async age() {
    return await this.submissions_stats("age");
  }
  @Field((type) => [SubmissionStat])
  async gender() {
    return await this.submissions_stats("gender");
  }
  @Field((type) => [SubmissionStat])
  async country() {
    return await this.submissions_stats("country");
  }
  @Field((type) => [SubmissionStat])
  async experience_rating() {
    return await this.submissions_stats("experience_rating");
  }

  @Field((type) => Int)
  async total_submissions() {
    return await Submission.createQueryBuilder("submission").getCount();
  }

  async submissions_stats(@Arg("name", (type) => String) name: String) {
    const total = await Submission.createQueryBuilder("submission")
      .where(`${name} is not null`)
      .getCount();

    const data = await Submission.createQueryBuilder("submission")
      .select(`${name}`, "name")
      .addSelect(`count(${name})`, "count")
      .groupBy(`submission.${name}`)
      .where(`${name} is not null`)
      .getRawMany();

    const result = data.map((record) => {
      return new SubmissionStat(
        record.name,
        record.count,
        (100 * record.count) / total
      );
    });
    return result;
  }
}
