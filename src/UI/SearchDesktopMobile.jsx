import DashboardMainHeaderSwitcher from "../component/Dashboard/DashboardMainHeaderSwitcher"
import Menu from "../component/Menu/Menu"
import { useMediaQuery } from "@uidotdev/usehooks";
import Search from "../component/Menu/Search/Search";
import { Link, Outlet } from "react-router-dom";
const SearchDesktopMobile=()=>{
    const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");

    return(
        <>
        
        {isSmallDevice?<Search/>:<DashboardMainHeaderSwitcher/>}
        <Outlet/>
        </>
    )
}
export default SearchDesktopMobile