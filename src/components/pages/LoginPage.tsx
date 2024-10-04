import { AuthTemplate } from "../templates/AuthTemplate";
import { LoginForm } from "../organisms/LoginForm";

export const LoginPage: React.FC = () => (
  <AuthTemplate title="Log In">
    <LoginForm />
  </AuthTemplate>
);
