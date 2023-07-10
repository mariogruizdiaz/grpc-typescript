import { User, UserRequest } from "../proto/users_pb";
import { userClient } from "./utils";

export default function getUsers(id: number) {
  return new Promise<User>((resolve, reject) => {
    const request = new UserRequest();
    request.setId(id);

    userClient.getUser(request, (err, user) => {
      if (err) reject(err);
      else resolve(user);
    });
  });
}
