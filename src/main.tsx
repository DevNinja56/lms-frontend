import React from "react";
import ReactDOM from "react-dom/client";
import "./style/tailwind.scss";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store.ts";
import "react-phone-input-2/lib/style.css";
import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import MainLayout from "@route/MainLayout.tsx";
import PrivateRouteLayout from "@route/Private.tsx";
import PublicRouteLayout from "@route/Public.tsx";
import { ALL_ROUTES, ROUTES } from "@route/constants.route.ts";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "react-hot-toast";

const Main = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider
          router={createBrowserRouter(
            createRoutesFromElements(
              <>
                <Route element={<MainLayout />}>
                  {ALL_ROUTES.map(({ path, element: Component, auth }) =>
                    auth ? (
                      <Route
                        element={<PrivateRouteLayout />}
                        key={path + "auth"}
                      >
                        <Route path={path} element={<Component />} />
                      </Route>
                    ) : (
                      <Route
                        element={<PublicRouteLayout />}
                        key={path + "public"}
                      >
                        <Route path={path} element={<Component />} />
                      </Route>
                    )
                  )}
                </Route>
                <Route
                  path="*"
                  element={<Navigate to={ROUTES.HOMEPAGE} replace />}
                />
              </>
            )
          )}
        />
        <Toaster position="bottom-right" reverseOrder={false} />
      </PersistGate>
    </Provider>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(<Main />);
