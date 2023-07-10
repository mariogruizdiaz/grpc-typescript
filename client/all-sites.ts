import { Empty } from "google-protobuf/google/protobuf/empty_pb";
import { siteClient } from "./utils";
import { Site } from "../proto/sites_pb";

export default function allUsers() {
  return new Promise<Site[]>((resolve, reject) => {
    const stream = siteClient.getSites(new Empty());
    const sites: Site[] = [];
    stream.on("data", (user) => sites.push(user));
    stream.on("error", reject);
    stream.on("end", () => resolve(sites));
  });
}
