import { useState } from "react"

const Switchbuttom = () => {
    const [Sbuttom, setSbuttom] = useState("bg-white absolute top-1 left-1 rounded-full")
    const [Sbuttomc, setSbuttomc] = useState("bg-blue relative mb-10 rounded-3xl")
    return (
        <>
            <div onClick={() => { setSbuttom("bg-gray absolute top-1 left-1 rounded-full"); setSbuttomc("bg-white relative mb-10 rounded-3xl") }} className={Sbuttomc} style={{ width: "55px", height: "33px" }}>
                <div className={Sbuttom} style={{ width: "25px", height: "25px" }}></div>
            </div>
        </>
    )
}
export default Switchbuttom