import { UsersClient } from "../proto/users_grpc_pb";
import { SitesClient } from "../proto/sites_grpc_pb";
import { credentials } from "grpc";

const port = 3000;

export const userClient = new UsersClient(
    `localhost:${port}`,
    credentials.createInsecure()
);


export const siteClient = new SitesClient(
    `localhost:${port}`,
    credentials.createInsecure()
);



export const noop = () => { };
