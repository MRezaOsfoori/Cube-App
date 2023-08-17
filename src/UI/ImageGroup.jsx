
const ImageGroup = (props) => {


    return (
        <button className="flex w-full  mx-auto GROUP  shrink-0 relative items-center" >

            <div className="w-1.5 h-11 shrink-0 gROUPRIGHT"></div>


            <div className="gROUPLEFT z-100 mr-auto w-full h-20 shrink-0 ">
                <div className="absolute h-full  w-full   ">
                    <div className="flex gap-x-2 pt-2.5 pb-3 items-center pr-3">
                        <div className="">
                            {props.ImageSvg}
                        </div>
                        <p className="text-white lg:text-base text-base md:text-sm mb-0 mx:font-bold z-200 ">{props.ImageGroupHeader}</p>
                    </div>
                    <p className="text-white text-xs px-3 text-right font-normal">{props.ImageGroupparagrph}</p>
                </div>
            </div>





        </button>
    )

}

export default ImageGroup
