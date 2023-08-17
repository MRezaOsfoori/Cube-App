import DashboardHeader from "../component/Dashboard/DashboardHeader"
import { PanelTitleList } from "../dummy"
import { Outlet } from "react-router-dom"
import Frame from "../UI/Frame"
const Dashboard = () => {

    return (
        <>
            
                <div className="my-10 mx-auto  bg-white w-3/4">
                    <DashboardHeader />
                    <div className="flex row  justify-around">


                        <div className="rounded-2xl  overflow-aut bg-dashboardRight flex flex-wrap justify-around h-[600px] p-3 col-md-4 content-start">
                            {PanelTitleList.map((item, index) => {
                                return <div className="">
                                    <Frame title={item} id={index} />
                                </div>

                            })}
                        </div>

                        <div className="shrink-0 rounded-2xl bg-dashboardRight col-11 pr-md-[40px] col-md-7">

                            <Outlet />

                        </div>
                    </div>
                </div>


        </>
    )
}
export default Dashboard