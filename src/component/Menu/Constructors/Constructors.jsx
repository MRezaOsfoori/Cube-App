import React, { useEffect,useContext } from "react";
import { useForm } from "react-hook-form";
import "../Owner/Owner.css";
import SaveBtn from "../../../UI/SaveBtn.jsx/SaveBtn";
import { data } from "autoprefixer";
import { Context } from "../../../Context/context"

const Constructors = ({ menuHeight, setmenuHeight, numOfOwner, setNumOfOwner }) => {
  const { register, handleSubmit } = useForm();
  const arraymalek = [];
  const containerContext = useContext(Context);

  const toggleSearchHandler = () => {
    containerContext.close();
    
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
   localStorage.setItem("Owners",ownerData)
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
              <p> تعداد مالکین :</p>

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
                    <p> سازنده {item}</p>
                    <input
                      className="w-full flex text-right bg-white h-[48px] mt-[8px] px-[16px] text-[12px]"
                      placeholder="نام سازنده"
                      {...register(`name`)}
                    />
                    <input
                      className="w-full flex text-right bg-white h-[48px] mt-[8px] px-[16px] text-[12px]"
                      placeholder="شماره سازنده"
                      {...register(`phoneNumber`)}
                    />
                  </div>
                  <div className=" flex flex-col  my-[16px] text-[14px] leading-[25px]">
                    <p> توضیحات و نظرات</p>
                   
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
            <button className="w-full" type="submit" onClick={toggleSearchHandler}>
              <SaveBtn />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Constructors;
