import grpc, { ServerReadableStream, ServerUnaryCall, ServerWritableStream, ServiceError, sendUnaryData } from "grpc";
import {
  ISitesServer,
  ISitesService,
  SitesService,
} from "../../proto/sites_grpc_pb";
import { Empty } from "google-protobuf/google/protobuf/empty_pb";
import { Site, SiteRequest } from "../../proto/sites_pb";
import { sites } from "../sitesDB";

export class SitesServer implements ISitesServer {
  createSite(
    call: ServerReadableStream<Empty>,
    callback: sendUnaryData<Empty>
  ) {
    console.log(`createUsers: creating new users from stream.`);
  
      let siteCount = 0;
  
      call.on("data", (u) => {
        siteCount++;
        sites.push(u);
      });
  
      call.on("end", () => {
        console.log(`Created ${siteCount} new user(s).`);
        callback(null, new Empty());
      });
  }

  getSite(call: ServerUnaryCall<SiteRequest>, callback: sendUnaryData<Site>) {
    const siteId = call.request.getId();
    const site = sites.find((u) => u.getId() === siteId);

    if (!site) {
      const error: ServiceError = {
        name: "User Missing",
        message: `User with ID ${siteId} does not exist.`,
      };
      callback(error, null);
      return;
    }

    console.log(`geSite: returning ${site.getSiteid()} (id: ${site.getId()}).`);
    callback(null, site);
  }

  getSites(call: ServerWritableStream<Empty>) {
    console.log(`getUsers: streaming all users.`);
    for (const site of sites) call.write(site);
    call.end();
  }
}