import EmailPassword from "supertokens-node/recipe/emailpassword";
import Session from "supertokens-node/recipe/session";
import { TypeInput } from "supertokens-node/types";
import Dashboard from "supertokens-node/recipe/dashboard";
import "dotenv/config";

export function getApiDomain() {
  const apiPort = process.env.API_DOMAIN_PORT || 8080;
  const apiUrl = process.env.API_DOMAIN_URL || `http://localhost:${apiPort}`;
  return apiUrl;
}

export function getWebsiteDomain() {
  const websitePort = process.env.WEB_DOMAIN_PORT || 5173;
  const websiteUrl =
    process.env.WEB_DOMAIN_URL || `http://localhost:${websitePort}`;
  return websiteUrl;
}

export const SuperTokensConfig: TypeInput = {
  supertokens: {
    // this is the location of the SuperTokens core.
    connectionURI: "https://try.supertokens.com",
  },
  appInfo: {
    appName: "Qred Portal",
    apiDomain: getApiDomain(),
    websiteDomain: getWebsiteDomain(),
  },
  // recipeList contains all the modules that you want to
  // use from SuperTokens. See the full list here: https://supertokens.com/docs/guides
  recipeList: [
    EmailPassword.init(),
    Session.init({
      getTokenTransferMethod: () => "header",
    }),
    Dashboard.init(),
  ],
};
