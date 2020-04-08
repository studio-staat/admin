import { Container } from "../extends";
import { useUsers } from "../hooks";

export const UsersList = Container(() => {
  const { loading, error, users }: any = useUsers();
  if (!users || !users.length) return false;
  return (
    <ul>
      {users.map(user => {
        return (
          <li key={`key${user.userName}$[user.userId]`}>
            {user.userName} [ID{user.userId}]
          </li>
        );
      })}
    </ul>
  );
});
//getUsers
