import { User } from "../proto/users_pb";
import { userClient, noop } from "./utils";

export default function createNewUsers(users: User[]) {
  const stream = userClient.createUser(noop);
  for (const user of users) {
    stream.write(user);
  }
  stream.end();
}
