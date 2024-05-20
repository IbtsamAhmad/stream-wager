import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Components/Header/Header.jsx";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import "./app.scss";
import { ConfigProvider } from "antd";
import Home from "./pages/Home.jsx";
import Footer from "./Components/Footer/Footer.jsx";

function App() {
  return (
    <>
      <Router>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#2D5B7C",
              borderRadius: 4,
            },
            components: {
              Radio: {
                buttonSolidCheckedColor: "#2D5B7C",
                buttonCheckedBg: "#2D5B7C",
              },
              Button: {
                colorTextLightSolid: "#fff",
              },
              Tag: {
                defaultColor: "#2D5B7C",
                defaultBg: "#2D5B7C",
              },
            },
          }}
        >
          <div className="app-container">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
            <Footer/>
          </div>
        </ConfigProvider>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
