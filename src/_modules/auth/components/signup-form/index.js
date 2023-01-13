import { LabeledTextField } from "src/core/components/form/components/labeled-textfield";
import { Form, FORM_ERROR } from "src/core/components/Form";
import signup from "src/_modules/auth/mutations/signup";
import { Signup } from "src/_modules/auth/validations";
import { useMutation } from "@blitzjs/rpc";
export const SignupForm = (props) => {
  const [signupMutation] = useMutation(signup);

  const initialValues = {
    email: "",
    password: "",
  };
  const onSubmit = async (values) => {
    try {
      await signupMutation(values);
      props.onSuccess?.();
    } catch (error) {
      if (error.code === "P2002" && error.meta?.target?.includes("email")) {
        // This error comes from Prisma
        return {
          email: "This email is already being used",
        };
      } else {
        return {
          [FORM_ERROR]: error.toString(),
        };
      }
    }
  };

  return (
    <div>
      <h1>Criar nova conta</h1>

      <Form
        submitText="Continuar"
        schema={Signup}
        initialValues={initialValues}
        onSubmit={onSubmit}
      >
        <LabeledTextField name="email" label="Email" placeholder="Email" />
        <LabeledTextField name="password" label="Senha" placeholder="Senha" type="password" />
      </Form>
    </div>
  );
};
export default SignupForm;
