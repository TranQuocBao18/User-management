import { Container } from "react-bootstrap";
import "./App.scss";
import Header from "./components/Header";
import { ToastContainer, toast } from "react-toastify";

import { useContext, useEffect } from "react";
import { UserContext } from "./context/UserContext.js";
import AppRoutes from "./routes/AppRoutes.js";

function App() {
  const { user, loginContext } = useContext(UserContext);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      loginContext(
        localStorage.getItem("email"),
        localStorage.getItem("token")
      );
    }
  }, []);

  return (
    <>
      <div className="app-container">
        <Header />
        <Container>
          <AppRoutes />
        </Container>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
