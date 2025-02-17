import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import useAuthStore from "./context/authStore";
import { registerSW } from 'virtual:pwa-register';

const updateSW = registerSW({
  onNeedRefresh() {
    if (confirm('Nueva versión disponible. ¿Actualizar?')) {
      updateSW(true);
    }
  },
  onOfflineReady() {
    console.log('PWA lista para usarse sin conexión.');
  }
});

function Root() {
  const checkUser = useAuthStore((state) => state.checkUser);

  useEffect(() => {
    checkUser();
  }, [checkUser]);

  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);

serviceWorkerRegistration.register();