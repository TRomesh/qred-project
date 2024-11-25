import { RouterProvider } from "react-router-dom";
import router from "./route/routes";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { SuperTokensWrapper } from "supertokens-auth-react";

function App() {
  return (
    <SuperTokensWrapper>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </SuperTokensWrapper>
  );
}

export default App;
