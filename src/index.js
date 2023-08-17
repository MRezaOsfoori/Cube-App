import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Dashboardmoamele from "../src/component/Dashboard/Dashboardmoamele";
import App from "./App";
import Dashboard from "./Containers/Dashboard";
import LoginPageVerify from "./component/LoginPageVerify";
import reportWebVitals from "./reportWebVitals";
import LoginPage from "./component/LoginPage";
import EnterPage from "./component/EnterPage";
import Dashboardkarbari from "../src/component/Dashboard/Dashboardkarbari";
import SignUp from "./component/SignUp";
import Dashboardmelk from "../src/component/Dashboard/Dashboardmelk";
import ContextProvider from "./Context/context";
import DashboardMainHeaderSwitcher from "../src/component/Dashboard/DashboardMainHeaderSwitcher";
import FilingLeft from "../src/component/Dashboard/FilingLeft";
import DashboardLeftFilingSide from "../src/component/Dashboard/DashboardLeftFilingSide";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SabtFile from "./Containers/SabtFile";
import MainDashDefault from "../src/MainDashDefault"
import SearchDesktopMobile from "./UI/SearchDesktopMobile";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/LoginPage" element={<LoginPage />}>
            <Route index element={<EnterPage />}/>
          <Route path="/LoginPage/EnterPage"  element={<EnterPage />}></Route>

            <Route path="/LoginPage/SignUp" element={<SignUp />}></Route>
            <Route
              path="/LoginPage/LoginPageVerify"
              element={<LoginPageVerify />}
            ></Route>
          </Route>
          <Route path="/Dashboard/0/SabtFile" element={<SabtFile />}></Route>

          <Route path="/Dashboard" element={<Dashboard />}>
            
            <Route index element={<MainDashDefault />} >
              
            </Route>
            
            <Route path="/Dashboard/0" element={<SearchDesktopMobile />}>
              

              <Route
                path="/Dashboard/0/DashboardLeftFilingSide"
                element={<DashboardLeftFilingSide />}
              >
                <Route
                  path="/Dashboard/0/DashboardLeftFilingSide/FilingSide"
                  element={<FilingLeft />}
                ></Route>
                <Route
                  path="/Dashboard/0/DashboardLeftFilingSide/Dashboardmoamele"
                  element={<Dashboardmoamele />}
                ></Route>
                <Route
                  path="/Dashboard/0/DashboardLeftFilingSide/DashboardvisitTime"
                  element={<Dashboardmoamele />}
                ></Route>
                 <Route
                  path="/Dashboard/0/DashboardLeftFilingSide/DashboardownerLand"
                  element={<Dashboardmoamele />}
                ></Route>




                <Route
                  path="/Dashboard/0/DashboardLeftFilingSide/Dashboardkarbari"
                  element={<Dashboardkarbari />}
                ></Route>
                <Route
                  path="/Dashboard/0/DashboardLeftFilingSide/Dashboardmelk"
                  element={<Dashboardmelk />}
                ></Route>
              </Route>
            </Route>
          </Route>

          <Route path="/" element={<App />}></Route>
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  </React.StrictMode>
);

reportWebVitals();
