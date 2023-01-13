import { Routes } from '@blitzjs/next';
import Link from 'next/link';

export const UnAuthenticated = () => {
  const loginUrl = Routes.LoginPage();
  const signUpUrl = Routes.SignupPage();

  return (
    <div>
      <span>Usuário: Não autenticado</span>
      <br />
      <br />
      <Link href={loginUrl}>
        <button>Entrar</button>
      </Link>
      <br />
      <br />
      <Link href={signUpUrl}>
        <button>Criar nova conta</button>
      </Link>
    </div>
  );
};

export default UnAuthenticated;
