import { useMutation } from "@blitzjs/rpc";
import forgotPassword from "src/_modules/auth/mutations/forgotPassword";
import { ForgotPassword } from "src/_modules/auth/validations";
import { Form, FORM_ERROR } from "src/core/components/Form";
import { LabeledTextField } from "src/core/components/form/components/labeled-textfield";
import Layout from "src/core/layouts/default";
const ForgotPasswordPage = () => {
  const [forgotPasswordMutation, { isSuccess }] = useMutation(forgotPassword);
  const initialValues = {
    email: "",
  };
  const onSubmit = async (values) => {
    try {
      await forgotPasswordMutation(values);
    } catch (error) {
      return {
        [FORM_ERROR]: "Sorry, we had an unexpected error. Please try again.",
      };
    }
  };

  return (
    <Layout title="Esqueceu a senha?">
      <h1>Esqueceu a senha?</h1>

      {isSuccess ? (
        <div>
          <h2>Request Submitted</h2>
          <p>
            If your email is in our system, you will receive instructions to reset your password
            shortly.
          </p>
        </div>
      ) : (
        <Form
          submitText="Recuperar senha"
          schema={ForgotPassword}
          initialValues={initialValues}
          onSubmit={onSubmit}
        >
          <LabeledTextField name="email" label="Email" placeholder="Email" />
        </Form>
      )}
    </Layout>
  );
};
export default ForgotPasswordPage;
