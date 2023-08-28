import React, { useState, useContext } from "react";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

import Backdrop from "../../../../../../UI/Backdraw/Backdrop";
import Menu from "../../../../../../component/Menu/Menu";

import { Context } from "../../../../../../Context/context";

import { back, uploadFile } from "../../../../../../dummy";
import SwitchComponent from "../../../../../../UI/SwitchComponet/SwitchComponent";
import inputfile from "../../../../../../../src/assets/upload-file.png";

const BedRoom = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };

  // const [exchange, setExchange] = useState(false);
  // const [compo, setcompo] = useState(false);
  // const [menuHeight, setmenuHeight] = useState(0);
  // const [menubg, setmenubg] = useState(false);
  // const [numOfOwner, setNumOfOwner] = useState(0);

  const containerContext = useContext(Context);

  const toggleSearchHandler = () => {
    containerContext.close();
    if (containerContext.Open) {
      enableBodyScroll(document);
    } else {
      disableBodyScroll(document);
    }
  };

  return (
    <>
      <div className=" flex flex-col  py-[70px] px-[16px] bg-bubble-gum  overflow-scroll">
        <div className="rounded-xl h-[42px] flex ">
          <div className="flex justify-center items-center ">{back}</div>
          <div className="text-[20px] flex justify-center items-center  font-bold mx-[16px]  leading-[42px]">
            اتاق خواب
          </div>
        </div>
        <div className="w-full  flex flex-col pt-[60px] h-full overflow-aut p-2 ">
          <div className=" w-full relative " style={{ height: "100%" }}>
            <div
              className="flex flex-col  px-[16px] mt-[32px] rounded-xl  "
              style={{ backgroundColor: "#F3F5FC" }}
            >
              <div className=" flex flex-col  my-[16px] text-[16px] leading-[25px] font-medium ">
                <p> تعداد اتاق خواب :</p>

                <input
                  className="w-full flex text-right bg-white h-[48px] mt-[8px] px-[16px] text-[12px]"
                  placeholder="1"
                />
              </div>
            </div>

            <div
              className="flex flex-col   px-[16px] my-[16px]   rounded-xl"
              style={{ backgroundColor: "#F3F5FC" }}
            >
              <div className="text-[16px] my-[16px] font-medium">
                {" "}
                اتاق خواب 1
              </div>
              <div className=" flex flex-col    ">
                <div className="text-[16px]"> مساحت:</div>
                <input
                  className="w-full flex text-right bg-white h-[48px] mt-[8px] px-[16px] text-[12px]"
                  placeholder="2"
                />
              </div>
              <div className=" flex flex-col  my-[16px] text-[14px] ">
                <div className="text-[16px]"> ابعاد:</div>
                <input
                  className="w-full flex text-right bg-white h-[48px] mt-[8px] px-[16px] text-[12px]"
                  placeholder="0   "
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center h-[41px] col-span-1">
                  <div>
                    {" "}
                    <SwitchComponent />
                  </div>
                  <div className="text-[14px] mx-2 ">مصالح مصرفی</div>
                </div>
                <div className="flex items-center h-[41px]  col-span-1">
                  <div>
                    {" "}
                    <SwitchComponent />
                  </div>
                  <div className="text-[14px] mx-2 ">فرنیشر</div>
                </div>
              </div>
              <div>
                <div className="text-[20px] mt-[16px] mb-[8px] items-center  font-bold   leading-[42px] ">
                  تصاویر اتاق خواب را بارگذاری کنید:
                </div>
                <div className="text-[12px] mb-[24px]">
                  {" "}
                  فایل هایی با پسوندهای jpg,png,jpge قابل آپلود است.{" "}
                </div>
                <div className="py-4 flex ">
                  <div class="image-upload border flex items-center justify-center h-[80px] w-[93px]">
                    <label for="file-input">
                      <img src={inputfile} alt="hi" />
                    </label>

                    <input id="file-input" type="file" onChange={handleImageUpload} />
                  </div>
                  <div className="bg-blue">
                  {selectedImage && <img src={selectedImage} alt="Uploaded" className="h-48 w-48 mt-4 bg-white" />}
                  </div>
                </div>
              </div>

              <div className=" flex flex-col  my-[16px] text-[14px] leading-[25px]">
                <p> توضیحات و ظرات</p>

                <input
                  style={{ verticalAlign: "start" }}
                  className="w-full  text-right inline-block text-top  h-[120px] mt-[8px] px-[16px] text-[12px]  "
                  placeholder="متن  "
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className=" text-white flex justify-center items-center rounded-lg h-[48px] mb-[16px]"
          style={{ backgroundColor: "#2F5FE3" }}
        >
          <button>ثبت ملک</button>
        </div>
      </div>
    </>
  );
};

export default BedRoom;
