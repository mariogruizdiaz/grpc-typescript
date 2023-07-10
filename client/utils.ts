import { SitesClient } from "../proto/sites_grpc_pb";
import { SiteSectionsClient } from "../proto/sitesections_grpc_pb";
import { SiteGroupsClient } from "../proto/sitesgroups_grpc_pb";
import { credentials } from "grpc";

const port = 3000;



export const siteClient = new SitesClient(
    `localhost:${port}`,
    credentials.createInsecure()
);


export const siteSectionsClient = new SiteSectionsClient(
    `localhost:${port}`,
    credentials.createInsecure()
);

export const siteGroupsClient = new SiteGroupsClient(
    `localhost:${port}`,
    credentials.createInsecure()
);



export const noop = () => { };
