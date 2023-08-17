import Dashboard from "./Containers/Dashboard"
import SearchDesktopMobile from "./UI/SearchDesktopMobile"
import DashboardLeftFilingSide from "./component/Dashboard/DashboardLeftFilingSide"
import FilingLeft from "../src/component/Dashboard/FilingLeft"
import SabtFile from "./Containers/SabtFile"
import { useMediaQuery } from "@uidotdev/usehooks";

import FilingRight from "./component/Dashboard/FilingRight"
const MainDashDefault = () => {
    const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");

    return (
        <>
            {/* <Dashboard/> */}
            {isSmallDevice ? null : <div>
                <SearchDesktopMobile />
                <div className="row flex">

                    {isSmallDevice ? <SabtFile /> : <div className="col-6 pr-00"> <FilingRight /> </div>}
                    <div className="col-6">
                        <FilingLeft />
                    </div>
                </div>
            </div>}


        </>
    )
}
export default MainDashDefault