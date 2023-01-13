import { useCurrentUser } from 'src/_modules/users/hooks/useCurrentUser';
import { useMutation } from '@blitzjs/rpc';
import logout from 'src/_modules/auth/mutations/logout';

export const Authenticated = () => {
  const currentUser = useCurrentUser();
  const [logoutMutation] = useMutation(logout);
  const { email, role } = currentUser;

  return (
    <div>
      <span>Usuário: {email}</span><br />
      <span>Perfil: {role}</span><br />
      <br />
      <button onClick={() => logoutMutation()}>Sair</button>
    </div>
  );
};
