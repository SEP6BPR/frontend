
import { useMsal } from "@azure/msal-react";



export const Lists = () => {
  const { accounts } = useMsal();
  const username = accounts[0] && accounts[0].username;
  return (
    <div>
      {username}
    </div>
  );
};
export default Lists;