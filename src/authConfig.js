export const msalConfig = {
    auth: {
      clientId: "acb9f496-0d22-4f81-8475-f399bd52f9c2",
      authority: "https://login.microsoftonline.com",
      /*redirectUri: "https://notpiratebay.azurewebsites.net/",*/
      redirectUri: "http://localhost:3000",
    },
    cache: {
      cacheLocation: "sessionStorage", // This configures where your cache will be stored
      storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    }
  };
  
  // Add scopes here for ID token to be used at Microsoft identity platform endpoints.
  export const loginRequest = {
   scopes: ["User.Read"]
  };
  
  // Add the endpoints here for Microsoft Graph API services you'd like to use.
  export const graphConfig = {
      graphMeEndpoint: "https://graph.microsoft.com"
  };