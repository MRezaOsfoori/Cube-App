import style from "../../style/ImageHeader.module.css"
const DashboardHeader = () => {
    return (
        <>
            <div className="relative flex w-full mx-auto shrink-0 rounded-2xl bg-dashBoard mb-4 mt-8 h-24 items-center  pr-6 ">
                <div className="flex  absolute top-0 left-[10%]">

                    <svg width="127" height="96" viewBox="0 0 127 104" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0H55.6948L127 104H71.3052L0 0Z" fill="url(#paint0_linear_284_763)" />
                        <defs>
                            <linearGradient id="paint0_linear_284_763" x1="98.5" y1="104" x2="76.7286" y2="5.6432" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#3E60B0" />
                                <stop offset="1" stop-color="#4B6CB7" />
                            </linearGradient>
                        </defs>
                    </svg>

                </div>
                <div className="flex  absolute top-0 left-0">

                    <svg width="113" height="96" viewBox="0 0 113 104" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.85992e-05 16C3.1471e-05 7.16344 7.16348 0 16 0H44.8492L113 104H16C7.16345 104 2.32806e-06 96.8366 5.19986e-06 88L2.85992e-05 16Z" fill="url(#paint0_linear_284_764)" />
                        <defs>
                            <linearGradient id="paint0_linear_284_764" x1="61.9371" y1="101.306" x2="39.6551" y2="-4.62562" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#4B6CB7" />
                                <stop offset="1" stop-color="#3E60AF" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                <div className="flex">
                    <img className={style.imgd} alt="" />
                    <div>
                        <p className={style.pd}>حمید حمیدی</p>
                        <p className={style.pd}>۰۹۱۲۳۴۵۶۷۸۹</p>
                    </div>
                </div>

            </div>
        </>
    )
}
export default DashboardHeader