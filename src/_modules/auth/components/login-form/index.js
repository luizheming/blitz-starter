import { Routes } from "@blitzjs/next";
import { useMutation } from "@blitzjs/rpc";
import { AuthenticationError } from "blitz";
import Link from "next/link";
import { Form, FORM_ERROR } from "src/core/components/Form";
import { LabeledTextField } from "src/core/components/form/components/labeled-textfield";
import login from "src/_modules/auth/mutations/login";
import { Login } from "src/_modules/auth/validations";

export const LoginForm = (props) => {
  const [loginMutation] = useMutation(login);

  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = async (values) => {
    try {
      const user = await loginMutation(values);
      props.onSuccess?.(user);
    } catch (error) {
      if (error instanceof AuthenticationError) {
        return {
          [FORM_ERROR]: "Sorry, those credentials are invalid",
        };
      } else {
        return {
          [FORM_ERROR]:
            "Sorry, we had an unexpected error. Please try again. - " + error.toString(),
        };
      }
    }
  };

  return (
    <div>
      <h1>Entrar</h1>

      <Form
        submitText="Entrar"
        schema={Login}
        initialValues={initialValues}
        onSubmit={onSubmit}
      >
        <LabeledTextField name="email" label="Email" placeholder="Email" />
        <LabeledTextField name="password" label="Senha" placeholder="Senha" type="password" />
        <div>
          <Link href={Routes.ForgotPasswordPage()}>
            <a>Esqueceu a senha?</a>
          </Link>
        </div>
      </Form>

      <div>
        <br />
        <Link href={Routes.SignupPage()}>
          <button>Criar nova Conta</button>
        </Link>
      </div>
    </div>
  );
};
export default LoginForm;
