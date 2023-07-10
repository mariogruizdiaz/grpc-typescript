import { Empty } from "google-protobuf/google/protobuf/empty_pb";
import { siteSectionsClient } from "./utils";
import { Site } from "../proto/sites_pb";
import { SiteSection } from "../proto/sitesections_pb";

export default function allSiteSections() {
  return new Promise<SiteSection[]>((resolve, reject) => {
    const stream = siteSectionsClient.getSiteSections(new Empty());
    const siteSections: SiteSection[] = [];
    stream.on("data", (siteSection) => siteSections.push(siteSection));
    stream.on("error", reject);
    stream.on("end", () => resolve(siteSections));
  });
}
