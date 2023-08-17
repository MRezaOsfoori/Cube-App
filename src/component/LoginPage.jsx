import FrontPageCenter from "../component/FrontPageCenter"
import style from "../style/ImageHeader.module.css"
import { Outlet, Link } from "react-router-dom";
import Main from "./Main"
import { useState } from "react";

const LoginPage = () => {
    const [enter, setenter] = useState(true)
    const [sign, setsign] = useState(false)

    return (
        <div className="cube">
            <div className="header justify-center md:flex hidden ">
            <Main />
        </div>
            <div className="flex  justify-center pt-20">
                <div className="md:mb-20 mb-10 mx-auto md:mx-2 justify-center flex">
                    <FrontPageCenter />
                </div>
            </div>
            <div className=" flex justify-center columns-3" >

                <div className="w-full"></div>
                <div>
                    <div className="w-full flex justify-center mb-8 ">

                        <div className="flex  justify-center w-5/6  ">
                            <div className={style.LoginEnter} onClick={() => { setenter(true); setsign(false) }} >
                                <Link to="/LoginPage/EnterPage" style={{ textDecoration: "none" }}> <p className="text-xl not-italic text-center font-bold leading-10 text-white mb-3">ورود
                                </p></Link>
                                {enter ? (<div className={style.LoginEnterBorderactive}></div>) : (<div className={style.LoginEnterBorder}></div>)}

                            </div>
                            <div className={style.LoginAdd} onClick={() => { setenter(false); setsign(true) }}>
                                <Link to="/LoginPage/SignUp" style={{ textDecoration: "none" }}> <p className="text-xl not-italic text-center font-bold leading-10 text-white mb-3">ثبت نام
                                </p></Link>
                                {sign ? (<div className={style.LoginAddBorderactive}></div>) : (<div className={style.LoginAddBorder}></div>)}
                            </div>
                        </div>
                    </div>
                    <Outlet />


                    {/*<LoginPageVerify/>
                    <FivePartInput/> */}
                </div>
                <div className="w-full"></div>



            </div>

        </div>)
}
export default LoginPage