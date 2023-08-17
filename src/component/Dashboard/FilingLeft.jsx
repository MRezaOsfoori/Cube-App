const FilingLeft = () => {
    return (
        <>
            <div className="row bg-blue p-3 rounded-xl mrt-4 ml-00 font-medium ">
                <div className=" w-full items-center">
                    <p className="mt-2 mb-0">تعداد مالکین:</p>
                    <input className="w-full mb-4 mt-1 bg-gray2 py-2 rounded-lg px-4" placeholder="2" type="text" />

                </div>

            </div>
            <div className="row bg-white rounded-xl mrt-4 ml-00 font-medium ">
                <div className=" w-full items-center">
                    <p className="mt-2 mb-0">مالک ۱</p>
                    <input className="w-full mb-4 mt-2 bg-gray2 py-2 rounded-lg px-4" placeholder="نام مالک" type="text" />
                    <input className="w-full mb-4 mt-2 bg-gray2 py-2 rounded-lg px-4" placeholder="شماره مالک" type="text" />
                    <p className="mt-2 mb-0">دیدگاه خود را وارد کنید:</p>
                    <input className="w-full mb-4 mt-2 bg-gray2 py-2 rounded-lg px-4" placeholder="عنوان  دیدگاه" type="text" />
                    <textarea className="w-full mb-4 mt-2 bg-gray2 py-2 rounded-lg px-4" placeholder="متن دیدگاه"></textarea>
                </div>

            </div>


        </>
    )
}

export default FilingLeft