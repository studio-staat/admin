import { Container } from "../extends";
import { useUsers } from "../hooks";

export const UsersList = Container(() => {
  const { loading, error, users }: any = useUsers();
  if (!users || !users.length) return false;
  return (
    <div>
      {users.map((user) => {
        return (
          <div key={`key${user.userName}$[user.userId]`}>
            {user.userName} [ID{user.userId}]
          </div>
        );
      })}
    </div>
  );
});
//getUsers
