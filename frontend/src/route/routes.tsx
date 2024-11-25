import { Navbar } from "@/components/base/Navbar";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import Profile from "@/pages/Profile";
import { createBrowserRouter } from "react-router-dom";

import { getSuperTokensRoutesForReactRouterDom } from "supertokens-auth-react/ui";
import { EmailPasswordPreBuiltUI } from "supertokens-auth-react/recipe/emailpassword/prebuiltui";
import * as reactRouterDom from "react-router-dom";

import SuperTokens from "supertokens-auth-react";
import EmailPassword from "supertokens-auth-react/recipe/emailpassword";
import Session from "supertokens-auth-react/recipe/session";

const supertokensRoutes = () =>
  getSuperTokensRoutesForReactRouterDom(reactRouterDom, [
    EmailPasswordPreBuiltUI,
  ]).map((route) => route.props);

const apiDomain = import.meta.env.VITE_API_DOMAIN;
const websiteDomain = import.meta.env.VITE_WEB_DOMAIN;

SuperTokens.init({
  appInfo: {
    appName: "Qred Portal",
    apiDomain: apiDomain,
    websiteDomain: websiteDomain,
    apiBasePath: "/auth",
    websiteBasePath: "/auth",
  },
  recipeList: [
    EmailPassword.init(),
    Session.init({
      tokenTransferMethod: "header",
    }),
  ],
  style: `
            [data-supertokens~=container] {
                --palette-primary: 47, 214, 122, 1;
                --palette-primaryBorder: 47, 214, 122, 1;
            }
            hover:[data-supertokens~=button] {
                --palette-primary: 47, 214, 122, 1;
            }
            [data-supertokens~=superTokensBranding] {
                display: none;
            }
            [data-supertokens~=inputWrapper] {
                height: 36px;
                border-color: 203, 213, 255, 1;
            }
        `,
});

const router = createBrowserRouter([
  ...supertokensRoutes(),
  {
    path: "/",
    element: <Navbar />,
    children: [
      { path: "/", element: <Home />, index: true },
      { path: "profile/:userId", element: <Profile /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
