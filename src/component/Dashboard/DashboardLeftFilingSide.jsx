import FilingRight from "../Dashboard/FilingRight"
import { Outlet } from "react-router-dom"

import { useMediaQuery } from "@uidotdev/usehooks";
import SabtFile from "../../Containers/SabtFile";

const DashboardLeftFilingSide = () => {
    const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");

    return (
        <>
            <div className="row">
            {isSmallDevice?<SabtFile/>:<div className="col-6 pr-00"> <FilingRight /> </div>}

                {isSmallDevice?null:<div className="col-6"> <Outlet /></div>}
                

            </div>
        </>
    )
}
export default DashboardLeftFilingSide