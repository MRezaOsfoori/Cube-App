import React from "react";


const ListItem = () => {
  return (
    <div className="flex flex-col   items-center rounded-lg h-[89px] bg-white hover:bg-grayblue">
      <div className="text-[12px]  flex flex-1 items-center justify-center font-medium fs-[14px]  ">
        {" "}
        eee
      </div>
      <div className="flex w-full h-[40px] items-center justify-center  ">
      <div className="w-1/2 h-full flex items-center justify-center border border-white border-t-slate-100 border-r-slate-200  ">
        
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg" 
          >
            <path
              d="M15.9213 10.5915L12.0273 8.45925C11.5225 8.175 10.9225 8.18025 10.4237 8.472C9.9235 8.7645 9.62575 9.28425 9.62575 9.86325V14.1375C9.62575 14.7165 9.9235 15.2362 10.4237 15.5287C10.6787 15.678 10.9593 15.7515 11.239 15.7515C11.5075 15.7515 11.776 15.6833 12.0197 15.546L15.9288 13.4055C16.444 13.116 16.7507 12.591 16.7507 12.0008C16.7507 11.4105 16.444 10.8855 15.922 10.5922L15.9213 10.5915ZM15.2005 12.0938L11.2915 14.235C11.2773 14.2425 11.2337 14.2665 11.1812 14.2343C11.1258 14.202 11.1258 14.154 11.1258 14.1383V9.864C11.1258 9.84825 11.1258 9.80025 11.1812 9.768C11.2015 9.756 11.2203 9.75225 11.2368 9.75225C11.2638 9.75225 11.2855 9.76425 11.299 9.77175L15.193 11.9047C15.2072 11.913 15.25 11.937 15.25 12.0023C15.25 12.0675 15.2065 12.0915 15.2005 12.096V12.0938ZM12.625 3C7.66225 3 3.625 7.03725 3.625 12C3.625 16.9628 7.66225 21 12.625 21C17.5878 21 21.625 16.9628 21.625 12C21.625 7.03725 17.5878 3 12.625 3ZM12.625 19.5C8.4895 19.5 5.125 16.1355 5.125 12C5.125 7.8645 8.4895 4.5 12.625 4.5C16.7605 4.5 20.125 7.8645 20.125 12C20.125 16.1355 16.7605 19.5 12.625 19.5Z"
              fill="#2F5FE3"
            />
          </svg>
        </div>
        <div className="w-1/2 h-full  flex items-center justify-center border border-white border-t-slate-100 ">
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.2422 13.2436L18.8665 8.11722C18.4633 6.61539 17.5869 5.29626 16.3768 4.3695C15.1666 3.44274 13.692 2.96155 12.1875 3.0024C10.6829 3.04326 9.23473 3.60382 8.0731 4.59498C6.91146 5.58614 6.10305 6.95103 5.77635 8.47268L4.71127 13.4334C4.59362 13.9815 4.59634 14.55 4.71922 15.0969C4.84211 15.6438 5.08203 16.1551 5.42126 16.5932C5.76049 17.0312 6.19038 17.3847 6.67918 17.6276C7.16799 17.8705 7.70322 17.9966 8.24538 17.9966H9.05197C9.21816 18.8442 9.66216 19.6063 10.3087 20.1536C10.9553 20.701 11.7648 21 12.5998 21C13.4349 21 14.2444 20.701 14.8909 20.1536C15.5375 19.6063 15.9815 18.8442 16.1477 17.9966H16.7545C17.3126 17.9966 17.8631 17.863 18.3631 17.6062C18.8631 17.3494 19.2991 16.9763 19.6368 16.5162C19.9746 16.056 20.205 15.5212 20.3102 14.9535C20.4153 14.3858 20.3916 13.8006 20.2422 13.2436ZM12.5998 19.4964C12.1522 19.4945 11.716 19.3494 11.3511 19.0809C10.9861 18.8124 10.7101 18.4337 10.5609 17.9966H14.6388C14.4896 18.4337 14.2136 18.8124 13.8486 19.0809C13.4836 19.3494 13.0475 19.4945 12.5998 19.4964ZM18.4835 15.6081C18.2818 15.8853 18.0204 16.11 17.7201 16.2643C17.4198 16.4185 17.0889 16.4981 16.7537 16.4968H8.24538C7.92012 16.4967 7.59903 16.421 7.3058 16.2752C7.01257 16.1294 6.7547 15.9173 6.55121 15.6545C6.34771 15.3917 6.2038 15.0849 6.1301 14.7568C6.05639 14.4287 6.05476 14.0877 6.12534 13.7588L7.18971 8.79739C7.44628 7.60218 8.08124 6.5301 8.99366 5.75157C9.90607 4.97305 11.0436 4.53276 12.2253 4.50069C13.4071 4.46863 14.5653 4.84663 15.5158 5.57461C16.4664 6.30259 17.1546 7.33877 17.4713 8.51842L18.847 13.6448C18.9379 13.9788 18.9524 14.3302 18.8893 14.671C18.8262 15.0118 18.6873 15.3326 18.4835 15.6081Z"
              fill="#2F5FE3"
            />
          </svg>
        </div>
        
      </div>
    </div>
  );
};

export default ListItem;