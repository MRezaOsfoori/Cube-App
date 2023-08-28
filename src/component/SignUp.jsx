import { useState } from "react";
import { Link } from "react-router-dom";
import { flag } from "../dummy";
import axios from "../axios";
const SignUp = () => {
    const [name, setname] = useState()
    const [number, setnumber] = useState()

    sessionStorage.setItem("number", number);

    const signUp=()=>{
        const person={name:name,number:number}
        axios.post("/Users.json",person).then((response)=>{
            console.log(response)
     }).catch((err)=>{
        console.log(err)
     })
        
   

    }

    return (
        <>
            <div >
                <div><div className="flex justify-center  h-10 mb-4">[]
                    <input className="w-full py-3 px-4 rounded-sm bg-gray" onChange={(event)=>setname(event.target.value)} placeholder="نام و نام خوانوادگی" required>
                    </input>
                </div>
                </div>
                <div>
                <div className="flex justify-center relative h-10  mb-6 ">
                       {flag}
                            <div className="absolute left-11 z-20  top-2.5"><p >۹۸+</p></div>
                        <input id="Num" type="text" onChange={(event)=>setnumber(event.target.value)} placeholder="۹۱۲۳۴۵۶۷۸۹" className="w-full text-left pt-1.5 pr-4 pl-20 rounded-sm bg-gray" >
                        </input>
                    </div>
                </div>
                <div>
                    <div className="flex justify-center  h-10 mb-6">
                        <button className="bg-button w-full rounded-sm" onClick={signUp}>

                            <Link to={"/LoginPage/LoginPageVerify"} style={{ textDecoration: "none" }}><p className=" text-center font-base leading-10 text-white">ادامه </p></Link>

                        </button>
                    </div>
                </div>
            </div>
        </>)
}
export default SignUp