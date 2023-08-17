import { useState } from "react"
import FivePartInput from "./Input5part"
import { Link } from "react-router-dom"
const LoginPageVerify = (props) => {

    // const [Number,setNumber]=useState();
    // setNumber(props.number)
    // console.log(Number)
    const number=sessionStorage.getItem("number")
    return (
        <>
            <div>
                <div><h1 className="text-xl leading-10 font-bold  text-white">کد تایید را وارد کنید</h1></div>
                <div className="mb-4">
                    <p className="text-sm font-normal leading-10 text-white">کد تایید برای شماره {number} پیامک شد</p>
                </div>
                <div>
                 
                    <div className="flex justify-between  h-10 mb-6">
                        <FivePartInput />

                        
                    </div>
                </div>
                <div>
                        <div className="flex justify-center  h-10 mb-6">
                            <button className="bg-button w-full rounded-sm">

                                <Link to={"/Dashboard"} style={{ textDecoration: "none" }}><p className=" text-center font-base leading-10 text-white">ادامه </p></Link>

                            </button>
                        </div>
                    </div>
            </div>
        </>)
}
export default LoginPageVerify