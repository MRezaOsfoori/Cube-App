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
import MainDashDefault from "../src/MainDashDefault";
import SearchDesktopMobile from "./UI/SearchDesktopMobile";
import Properties from "./component/Menu/Properties/Properties";
import Branchs from "./component/Menu/Properties/Branchs/Branchs";
import ArchitechtureMaterial from "../src/component/Menu/Properties/Engineering/ArchitechtureMaterial/ArchitechtureMaterial";
import Engineering from "./component/Menu/Properties/Engineering/Engineering";
import BedRoom from "./component/Menu/Properties/Engineering/ArchitechtureMaterial/BedRoom/BedRoom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/LoginPage" element={<LoginPage />}>
            <Route index element={<EnterPage />} />
            <Route path="/LoginPage/EnterPage" element={<EnterPage />}></Route>

            <Route path="/LoginPage/SignUp" element={<SignUp />}></Route>
            <Route
              path="/LoginPage/LoginPageVerify"
              element={<LoginPageVerify />}
            ></Route>
          </Route>
          <Route path="/Dashboard/0/SabtFile" element={<SabtFile />}></Route>

          <Route path="/Dashboard" element={<Dashboard />}>
            <Route index element={<MainDashDefault />}></Route>

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
                  path="/Dashboard/0/DashboardLeftFilingSide/Dashboardkarbari"
                  element={<Dashboardkarbari />}
                ></Route>
                <Route
                  path="/Dashboard/0/DashboardLeftFilingSide/Dashboardlandtype"
                  element={<Dashboardkarbari />}
                ></Route>
                <Route
                  path="/Dashboard/0/DashboardLeftFilingSide/DashboardExchange"
                  element={<Dashboardkarbari />}
                ></Route>
                <Route
                  path="/Dashboard/0/DashboardLeftFilingSide/DashboardNeighborhood"
                  element={<Dashboardkarbari />}
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
                  path="/Dashboard/0/DashboardLeftFilingSide/DashboardArea"
                  element={<Dashboardmoamele />}
                ></Route>
                <Route
                  path="/Dashboard/0/DashboardLeftFilingSide/DashboardBuildingAge"
                  element={<Dashboardmoamele />}
                ></Route>
                <Route
                  path="/Dashboard/0/DashboardLeftFilingSide/DashboardPriceSale"
                  element={<Dashboardmoamele />}
                ></Route>
                <Route
                  path="/Dashboard/0/DashboardLeftFilingSide/DashboardTotalPrice"
                  element={<Dashboardmoamele />}
                ></Route>
                <Route
                  path="/Dashboard/0/DashboardLeftFilingSide/DashboardnumberOfStories"
                  element={<Dashboardmoamele />}
                ></Route>
                <Route
                  path="/Dashboard/0/DashboardLeftFilingSide/DashboardtotalUnits"
                  element={<Dashboardmoamele />}
                ></Route>
                <Route
                  path="/Dashboard/0/DashboardLeftFilingSide/DashboardstoriesUnits"
                  element={<Dashboardmoamele />}
                ></Route>
                <Route
                  path="/Dashboard/0/DashboardLeftFilingSide/DashboardroomNumber"
                  element={<Dashboardmoamele />}
                ></Route>
                <Route
                  path="/Dashboard/0/DashboardLeftFilingSide/DashboardlandDirection"
                  element={<Dashboardmoamele />}
                ></Route>
              </Route>
              <Route
                path="/Dashboard/0/DashboardLeftFilingSide/Dashboardmelk"
                element={<Dashboardmelk />}
              ></Route>
            </Route>
          </Route>

          <Route
            path="/Dashboard/0/DashboardLeftFilingSide/Dashboardproperties"
            element={<Properties />}
          >
            <Route path="engineering" element={<Engineering />}></Route>
          </Route>

          <Route
            path="/Dashboard/0/DashboardLeftFilingSide/Dashboardproperties/branchs"
            element={<Branchs />}
          ></Route>
          <Route path="Dashboard/0/DashboardLeftFilingSide/Dashboardproperties/engineering/architechtureMaterial">
            <Route index element={<ArchitechtureMaterial />} />
          </Route>
          <Route path="Dashboard/0/DashboardLeftFilingSide/Dashboardproperties/engineering/architechtureMaterial/bedRoom">
            <Route index element={<BedRoom />} />
          </Route>

          <Route path="/" element={<App />}></Route>
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  </React.StrictMode>
);

reportWebVitals();
