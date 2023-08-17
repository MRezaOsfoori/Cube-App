import { useState } from "react"

import { Link} from "react-router-dom"
const DashboardMainHeaderSwitcher = () => {
    const [sabt, setsabt] = useState("bg-white my-2 py-2 mb-0.5 rounded-xl  ml-4 px-6")
    const [search, setsearch] = useState("bg-white my-2 py-2 mb-0.5 rounded-xl mr-2 ml-4 px-6")

    return (
        <>
            <div className="flex align-middle  mt-2 mr-1  pt-2 ">
                <Link to={"/Dashboard/0/DashboardLeftFilingSide"}  style={{ color: "black", textDecoration: "none" }}>  <button onClick={() => { setsabt("bg-blue text-white my-2 duration-500 py-2 mb-0.5 rounded-xl mx-2 px-6"); setsearch("bg-white my-2 py-2 mb-0.5 rounded-xl ml-4 mr-2 px-6") }} className="text-right bg-white rounded-r-xl text-base not-italic font-bold  pt-1 leading-10 "><p className={sabt}>ثبت فایل</p></button></Link>
                <Link to={"/Dashboard/0"}  style={{ color: "black", textDecoration: "none" }}><button onClick={() => { setsearch("bg-blue my-2 text-white duration-500 py-2 mb-0.5 rounded-xl mr-2 ml-4 px-6"); setsabt("bg-white my-2 py-2 mb-0.5 rounded-xl mx-2 px-6") }} className="text-right bg-white rounded-l-xl text-base not-italic font-bold  pt-1 leading-10"><p className={search}>جستجوی فایل</p></button></Link>
            </div>

        </>
    )
}
export default DashboardMainHeaderSwitcher