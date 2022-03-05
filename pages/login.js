import Login from "../components/Login";
import { useRouter } from "next/router";
import { useMoralis } from "react-moralis";
import Dashboard from "../components/dashboard";

const LoginPage = () => {
  const Router = useRouter();

  const redirectToDashboard = () => {
    Router.push("/dashboard");
  };

  const { isAuthenticated } = useMoralis();
  return <>{isAuthenticated ? redirectToDashboard() : <Login />}</>;
};

export default LoginPage;
