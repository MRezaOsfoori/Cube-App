import React, { useEffect, useContext, useState } from "react";
import { useForm } from "react-hook-form";
import "../Owner/Owner.css";
import SaveBtn from "../../../UI/SaveBtn.jsx/SaveBtn";
import { data } from "autoprefixer";
import { Context } from "../../../Context/context";
import SwitchComponent from "../../../UI/SwitchComponet/SwitchComponent";

const ExchangePage = ({
  menuHeight,
  setmenuHeight,
  numOfOwner,
  setNumOfOwner,
}) => {
  const { register, handleSubmit } = useForm();
  const [exchangePay, setExchangePay] = useState(false);
  const [exchangeNeed, setExchangeNeed] = useState(false);
  const arraymalek = [];
  const containerContext = useContext(Context);

  const toggleSearchHandler = () => {
    containerContext.close();
  };

  const exchangePayHandler = () => {
    setExchangePay(!exchangePay);
  };
  const exchangeNeedHandler = () => {
    setExchangeNeed(!exchangeNeed);
  };

  for (let i = 1; i <= numOfOwner; i++) {
    arraymalek.push(i);
  }

  const handlechange = (e) => {
    setNumOfOwner(e.target.value);
  };
  let ownerData = [];
  const onSubmit = (d) => {
    data = JSON.stringify(d);
    localStorage.setItem("Owner", data);

    for (let i = 1; i <= numOfOwner; i++) {
      ownerData.push(d);
    }
    localStorage.setItem("Owners", ownerData);
  };

  useEffect(() => {
    setmenuHeight(850 * numOfOwner);
  }, [numOfOwner]);

  return (
    <>
      <div className="w-full  flex flex-col pt-[60px] h-full overflow-aut p-2 ">
        <div className=" w-full relative " style={{ height: "100%" }}>
          <div
            className="flex flex-col mx-[16px] px-[16px] mt-[32px] rounded-xl  "
            style={{ backgroundColor: "#F3F5FC" }}
          >
            <div className=" flex flex-col  my-[16px] text-[14px] leading-[25px] ">
              <p> تعداد درخواست :</p>

              <input
                className="w-full flex text-right bg-white h-[48px] mt-[8px] px-[16px] text-[12px]"
                placeholder="1"
                onChange={handlechange}
              />
            </div>
          </div>

          <form action="" onSubmit={handleSubmit(onSubmit)}>
            {arraymalek.map((item) => {
              return (
                <div
                  className="flex flex-col mx-[16px] px-[16px] mt-[32px]  mb-[24px] rounded-xl"
                  style={{ backgroundColor: "#F3F5FC" }}
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className=" flex flex-col  my-[16px] text-[14px] leading-[25px]">
                    <p> درخواست {item}</p>
                    <input
                      className="w-full flex text-right bg-white h-[48px] mt-[8px] px-[16px] text-[12px]"
                      placeholder="نوع کاربری "
                      {...register(`name`)}
                    />
                    <input
                      className="w-full flex text-right bg-white h-[48px] mt-[8px] px-[16px] text-[12px]"
                      placeholder=" نوع ملک"
                      {...register(`phoneNumber`)}
                    />
                    <input
                      className="w-full flex text-right bg-white h-[48px] mt-[8px] px-[16px] text-[12px]"
                      placeholder=" مساحت "
                      {...register(`phoneNumber`)}
                    />
                    <input
                      className="w-full flex text-right bg-white h-[48px] mt-[8px] px-[16px] text-[12px]"
                      placeholder=" بازه سنی "
                      {...register(`phoneNumber`)}
                    />
                  </div>

                 <div className="flex flex-col">
                 <div
                    className="  rounded-xl  h-[57px] flex justify-end flex-row-reverse items-center   "
                    onClick={exchangePayHandler}
                  >
                    <div className="text-[14px] text-gray-400 flex justify-center items-center  font-normal mx-[8px] h-[25px] leading-[24.8px]">
                      امکان پرداخت ما به التفاوت را دارم معادل:
                    </div>
                    <SwitchComponent exchange={exchangePay} />
                  
                  </div>
                  <input
                      className="w-full flex text-right bg-white h-[48px] mt-[8px] px-[16px] text-[12px]"
                      placeholder="60.000.000 میلیون تومان "
                    />
                 </div>
                 <div className="flex flex-col">
                 <div
                    className="  rounded-xl  h-[57px] flex justify-end flex-row-reverse items-center   "
                    onClick={exchangeNeedHandler}
                  >
                    <div className="text-[14px] text-gray-400 flex justify-center items-center  font-normal mx-[8px] h-[25px] leading-[24.8px]">
                      نیاز به دریافت  ما به التفاوت را دارم معادل:
                    </div>
                    <SwitchComponent exchange={exchangeNeed} />
                  
                  </div>
                  <input
                      className="w-full flex text-right bg-white h-[48px] mt-[8px] px-[16px] text-[12px]"
                      placeholder="60.000.000 میلیون تومان "
                    />
                 </div>

                  <div className=" flex flex-col  my-[16px] text-[14px] leading-[25px]">
                    <p> توضیحات و ظرات</p>

                    <input
                      style={{ verticalAlign: "start" }}
                      className="w-full  text-right inline-block text-top  h-[120px] mt-[8px] px-[16px] text-[12px]  "
                      placeholder="متن  "
                      {...register(`description`)}
                    />
                  </div>
                </div>
              );
            })}
            <button
              className="w-full"
              type="submit"
              onClick={toggleSearchHandler}
            >
              <SaveBtn />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ExchangePage;

