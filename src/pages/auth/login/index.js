import Layout from "src/core/layouts/default";
import { LoginForm } from "src/_modules/auth/components/login-form";
import { useRouter } from "next/router";
const LoginPage = () => {
  const router = useRouter();
  return (
    <Layout title="Log In">
      <LoginForm
        onSuccess={(_user) => {
          const next = router.query.next ? decodeURIComponent(router.query.next) : "/";
          return router.push(next);
        }}
      />
    </Layout>
  );
};
export default LoginPage;
