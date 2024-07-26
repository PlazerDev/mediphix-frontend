import {useAuthContext} from "@asgardeo/auth-react";
import PatientHome from "./patient/home/PatientHome.tsx";
import CustomButton from "./patient/CustomButton.tsx";
import {Link} from "react-router-dom";


function Home() {
    const {state} = useAuthContext();
    return (
        !state.isAuthenticated ?
            <GuestHomePage/>
            :
            <PatientHome/>

    );
}

function GuestHomePage() {
    const {signIn} = useAuthContext();

    return (
        <>
            <div>
                <h1>
                    This is the Home page. Go to login page by clicking{' '}
                    <Link to="/Login" className="text-[var(--accent)]">
                        Login page
                    </Link>
                </h1>
            </div>

            <div style={{minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
                <CustomButton onClick={() => signIn()} label={"Log In"}/>
            </div>
        </>
    )
}

export default Home
