
import { useIsAuthenticated } from "@azure/msal-react";
import { SignInButton } from "./SignInButton";
import { SignOutButton } from "./SignOutButton";
import LogedIn from "./LogIn";

/**
 * Renders the navbar component with a sign-in button if a user is not authenticated
 */
export const PageLayout = (props) => {
    const isAuthenticated = useIsAuthenticated();

    return (
        <>

            {isAuthenticated ?
                <table id="tbl">
                    <td>
                        <LogedIn/>
                    </td>
                    <td>
                        <SignOutButton/>
                    </td>
                </table>
                : <SignInButton/>}
            {props.children}
        </>
    );
};