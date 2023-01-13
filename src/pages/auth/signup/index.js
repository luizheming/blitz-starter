import { Routes } from "@blitzjs/next";
import { useRouter } from "next/router";
import { SignupForm } from "src/_modules/auth/components/signup-form";
import Layout from "src/core/layouts/default";
const SignupPage = () => {
  const router = useRouter();
  return (
    <Layout title="Criar nova conta">
      <SignupForm onSuccess={() => router.push(Routes.Home())} />
    </Layout>
  );
};
export default SignupPage;
