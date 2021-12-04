export const msalConfig = {
    auth: {
      clientId: "de9130c0-8045-412d-bfe1-6e333c3c44f4",
      authority: "https://login.microsoftonline.com/7901565c-95f2-4d34-bca7-ee89bd8b39ff", // This is a URL (e.g. https://login.microsoftonline.com/{your tenant ID})
      redirectUri: "https://notpiratebay.azurewebsites.net/",
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