import { Link } from "react-router-dom";
import Malek from "../Dashboard/Malek"
import React, { useState } from "react";

const FilingRight = () => {
    const [exchange, setExchange] = useState(false);

    const exchangeHandler = () => {
        setExchange(!exchange);
    };
    return (
        <>
            <Link to={"/Dashboard/0/DashboardLeftFilingSide/FilingSide"} style={{ textDecoration: "none" }}>
                <div className="row bg-white rounded-xl mrt-4 ">
                    <Malek maleksvg={""}
                        malektitle={"نام  و شماره مالک"} />
                </div>
            </Link>

            <div className="row bg-white rounded-xl mrt-4 ">
                <Link to={"/Dashboard/0/DashboardLeftFilingSide/Dashboardmoamele"} style={{ textDecoration: "none", paddingLeft: "0px", paddingRight: "0px" }}>
                    <Malek maleksvg={""}
                        malektitle={"نوع معامله"} />

                </Link>
                <hr className="my-0 py-0 mx-auto" style={{ width: "94%" }} />
                <Link to={"/Dashboard/0/DashboardLeftFilingSide/Dashboardkarbari"} style={{ textDecoration: "none", paddingLeft: "0px", paddingRight: "0px" }}>
                    <Malek maleksvg={""}
                        malektitle={"نوع کاربری"} />
                </Link>
                <hr className="my-0 py-0 mx-auto " style={{ width: "94%" }} />
                <Link to={"/Dashboard/0/DashboardLeftFilingSide/Dashboardmelk"} style={{ textDecoration: "none", paddingLeft: "0px", paddingRight: "0px" }}>
                <Malek maleksvg={""}
                    malektitle={"نوع ملک"} /> </Link> <hr className="my-0 py-0 mx-auto" style={{ width: "94%" }} />
            <div className="flex prl font-medium " >
                <div className="flex justify-start w-full items-center mx-1 my-1  rounded-lg px-2 py-3" >

                    <div className="flex justify-center items-center " onClick={exchangeHandler}>
                        <svg style={exchange ? { backgroundColor: "white" } : { backgroundColor: "#CDDAFF" }}
                            className="z-10 rounded-xl "
                            width="36"
                            height="25"
                            viewBox="0 0 36 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {exchange ? (
                                <circle cx="12" cy="12.5" r="8" fill="#858D9D" />
                            ) : (
                                <circle
                                    className="z-20"
                                    cx="24"
                                    cy="12.5"
                                    r="8"
                                    fill="#2F5FE3"
                                />
                            )}
                            <path
                                d="M1 12.5C1 6.42487 5.92487 1.5 12 1.5H24C30.0751 1.5 35 6.42487 35 12.5C35 18.5751 30.0751 23.5 24 23.5H12C5.92487 23.5 1 18.5751 1 12.5Z"
                                stroke={exchange ? "#858D9D" : "#2F5FE3"}
                                stroke-width="2"
                            />
                        </svg>
                    </div>
                    <div className={exchange ? "text-gray500 mr-2" : "text- mr-2"} >درخواست معاوضه دارم</div>
                </div>
            </div>
        </div >

        </>
    )
}

export default FilingRight