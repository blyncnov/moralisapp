import { useMoralis } from "react-moralis";
import { useRouter } from "next/router"

const Dashboard = () => {
    const Router = useRouter();
    const { logout } = useMoralis();

    const redirectToLogin = () => {
        Router.push("/login");
        logout();
    };

    return (
        <>
            <button onClick={redirectToLogin}>Logout</button>
        </>
    );
};

export default Dashboard;
