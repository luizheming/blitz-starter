import { useCurrentUser } from "src/_modules/users/hooks/useCurrentUser";
import { Authenticated } from './components/authenticated';

import UnAuthenticated from './components/unauthenticated';

export const HomePage = () => {
  const currentUser = useCurrentUser();
  return (
    <>
      {currentUser ? (
        <Authenticated />
      ) : (
        <UnAuthenticated />
      )}
    </>
  );
};

export default HomePage;
