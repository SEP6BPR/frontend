
import { useIsAuthenticated } from "@azure/msal-react";
import { SignInButton } from "./SignInButton";
import { SignOutButton } from "./SignOutButton";
import LogedIn from "./LogedIn";
import Lists from "./Lists";
/**
 * Renders the navbar component with a sign-in button if a user is not authenticated
 */
export const PageLayout = (props) => {
    const isAuthenticated = useIsAuthenticated();

    return (
        <>

            {isAuthenticated ?

                <table>
                     <th>
                        <Lists />
                    </th>
                    <th>
                        <LogedIn />
                    </th>
                    <th>
                        <SignOutButton />
                    </th>
                </table>
                : <SignInButton />}
            {props.children}
        </>
    );
};