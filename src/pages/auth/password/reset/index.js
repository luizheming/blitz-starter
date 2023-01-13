import { useEffect, useState } from "react";
import Layout from "src/core/layouts/default";
import { LabeledTextField } from "src/core/components/form/components/labeled-textfield";
import { Form, FORM_ERROR } from "src/core/components/Form";
import { ResetPassword } from "src/_modules/auth/validations";
import resetPassword from "src/_modules/auth/mutations/resetPassword";
import { Routes } from "@blitzjs/next";
import { useRouter } from "next/router";
import { useMutation } from "@blitzjs/rpc";
import Link from "next/link";
const ResetPasswordPage = () => {
  const [token, setToken] = useState("");
  const router = useRouter();
  const [resetPasswordMutation, { isSuccess }] = useMutation(resetPassword);
  useEffect(() => {
    setToken(router.query.token);
  }, [router.isReady]);

  const initialValues = {
    password: "",
    passwordConfirmation: "",
    token,
  };

  const onSubmit = async (values) => {
    try {
      await resetPasswordMutation({
        ...values,
        token,
      });
    } catch (error) {
      if (error.name === "ResetPasswordError") {
        return {
          [FORM_ERROR]: error.message,
        };
      } else {
        return {
          [FORM_ERROR]: "Sorry, we had an unexpected error. Please try again.",
        };
      }
    }
  };

  return (
    <div>
      <h1>Criar uma nova senha</h1>

      {isSuccess ? (
        <div>
          <h2>A senha foi cadastrada com sucesso</h2>
          <p>
            Ir para o <Link href={Routes.Home()}>início</Link>
          </p>
        </div>
      ) : (
        <Form
          submitText="Criar senha"
          schema={ResetPassword}
          initialValues={initialValues}
          onSubmit={onSubmit}
        >
          <LabeledTextField name="password" label="Nova senha" type="password" />
          <LabeledTextField
            name="passwordConfirmation"
            label="Confirmação"
            type="password"
          />
        </Form>
      )}
    </div>
  );
};
ResetPasswordPage.redirectAuthenticatedTo = "/";
ResetPasswordPage.getLayout = (page) => <Layout title="Recuperar a senha">{page}</Layout>;
export default ResetPasswordPage;
