import { Server, ServerCredentials } from "grpc";
import { UsersService } from "../proto/users_grpc_pb";
import { SitesService } from "../proto/sites_grpc_pb";
import { UsersServer } from "./services/users";
import { SitesServer } from "./services/sites";

const server = new Server();
server.addService(UsersService, new UsersServer());
server.addService(SitesService, new SitesServer());

const port = 3000;
const uri = `localhost:${port}`;
console.log(`Listening on ${uri}`);
server.bind(uri, ServerCredentials.createInsecure());

server.start();
