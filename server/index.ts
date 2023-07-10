import { Server, ServerCredentials } from "grpc";
import { SitesService } from "../proto/sites_grpc_pb";
import { SiteSectionsService } from "../proto/sitesections_grpc_pb";
import { SiteGroupsService } from "../proto/sitesgroups_grpc_pb";
import { SitesServer } from "./services/sites";
import { SiteSectionsServer } from "./services/sitesections";
import { SiteGroupsServer } from "./services/sitegroups";

const server = new Server();
server.addService(SitesService, new SitesServer());
server.addService(SiteSectionsService, new SiteSectionsServer());
server.addService(SiteGroupsService, new SiteGroupsServer());

const port = 3000;
const uri = `localhost:${port}`;
console.log(`Listening on ${uri}`);
server.bind(uri, ServerCredentials.createInsecure());

server.start();
