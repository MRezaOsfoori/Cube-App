import Main from "../component/Main";
import React from "react";
import ImageGroup from "../UI/ImageGroup";
import FrontPageCenter from "../component/FrontPageCenter";
import PanelR from "../component/PanelR";
import PanelL from "../component/PanelL";
import { useState } from "react";
import { useMediaQuery } from "@uidotdev/usehooks";


const CubeMain = (e) => {

    const [p1, setp1] = useState(false);
    const [img1, setimg1] = useState(false);

    const [img2, setimg2] = useState(false);
    const [p2, setp2] = useState(false);

    const [img3, setimg3] = useState(false);
    const [p3, setp3] = useState(false);

    const [img4, setimg4] = useState(false);
    const [p4, setp4] = useState(false);

    const [img5, setimg5] = useState(false);
    const [p5, setp5] = useState(false);

    const [img6, setimg6] = useState(false);
    const [p6, setp6] = useState(false);

    const [class1, setclass1] = useState("col-8 mx-auto  col-md-2 order-md-2")
    const [class2, setclass2] = useState("col-8 col-md-2  mx-auto order-md-5 md:block")
    const [tot, settot] = useState(true)
    const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");

    return (
        <>
            <div className="App reletive cube" onClick={(e) => {
                if (e.target.id === "callbacksvg") {
                    setclass1("col-8 mx-auto  col-md-2 order-md-2");
                    setclass2("col-8 col-md-2  mx-auto order-md-5 md:block"); settot(false)
                }
            }}>
                <Main />

                <div className=" flex  w-full m-0 row md:pt-36 pt-20 h-full max-md:relative">

                    <div className="col-md-2 order-md-1 md:block max-md:absolute max-md:top-[25.1rem] md:relative">
                        {(p1 || img1) & tot ? (
                            <div
                                onMouseEnter={() => {
                                    setp1(true);
                                }}
                                onMouseLeave={() => {
                                    setp1(false);
                                }}
                            >
                                <PanelL
                                    header={"ملک و مستغلات"}
                                    items={[
                                        "پنل مشاور",
                                        "پنل مدیران معاملات",
                                        "پنل فروشنده",
                                        "پنل خریدار",
                                        "پنل موجر",
                                        "پنل مستاجر",
                                        "پنل سازنده",
                                        "پنل مالکین کلنگی",
                                    ]}
                                />
                            </div>
                        ) : (img2 || p2) &tot ? (
                            <div
                                onMouseEnter={() => {
                                    setp2(true);
                                }}
                                onMouseLeave={() => {
                                    setp2(false);
                                }}
                            >
                                <PanelL
                                    header={"حقوقی"}
                                    items={[
                                        "پنل مشاور",
                                        "پنل مدیران معاملات",
                                        "پنل فروشنده",
                                        "پنل خریدار",
                                        "پنل موجر",
                                        "پنل مستاجر",
                                        "پنل سازنده",
                                        "پنل مالکین کلنگی",
                                    ]}
                                />
                            </div>
                        ) : (img3 || p3) &tot ? (
                            <div
                                onMouseEnter={() => {
                                    setp3(true);

                                }}
                                onMouseLeave={() => {
                                    setp3(false);
                                }}
                            >
                                <PanelL
                                    header={"زنجیره تامین و خدمات "}
                                    items={[
                                        "پنل مشاور",
                                        "پنل مدیران معاملات",
                                        "پنل فروشنده",
                                        "پنل خریدار",
                                        "پنل موجر",
                                        "پنل مستاجر",
                                        "پنل سازنده",
                                        "پنل مالکین کلنگی",
                                    ]}
                                />
                            </div>
                        ) : null}
                    </div>
                    <div className={class1}
                    >
                        <div
                            className="max-md:mb-4 md:mb-20"
                            onClick={() => {
                                if (isSmallDevice) {
                                    setclass1("col-8 mx-auto  col-md-2 order-md-2 translate-x-[-112%]");
                                    setclass2("col-8 col-md-2  mx-auto order-md-5 md:block translate-x-[-112%]")
                                    setimg1(true)
                                    setimg2(false)
                                    setimg3(false)
                                    setimg4(false)
                                    setimg5(false)
                                    setimg6(false)
                                    settot(true)
                                }
                            }}
                            onMouseEnter={() => {
                                if (!isSmallDevice) {
                                    return (
                                        setimg1(true),
                                        setimg2(false),
                                        setimg3(false),
                                        setimg4(false),
                                        setimg5(false),
                                        setimg6(false),
                                        settot(true)
                                    );
                                }
                            }}
                            onMouseLeave={() => {
                                if (!isSmallDevice) {
                                    setTimeout(() => {
                                        setimg1(false);
                                        settot(true)
                                    }, 200);

                                }
                            }}

                        >
                            <ImageGroup
                                ImageGroupHeader={"ملک و مستغلات"}
                                ImageGroupparagrph={"خرید، فروش، اجاره،  ساخت و ساز"}
                                ImageSvg={
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clip-path="url(#clip0_59_17)">
                                            <path
                                                d="M14 18H10C8.897 18 8 17.103 8 16V12C8 10.897 8.897 10 10 10H14C15.103 10 16 10.897 16 12V16C16 17.103 15.103 18 14 18ZM10 12V16H14.002L14 12H10ZM19 24H5C2.243 24 0 21.757 0 19V9.724C0 8.059 0.824 6.509 2.204 5.579L9.203 0.854999C10.902 -0.291001 13.098 -0.291001 14.797 0.854999L21.797 5.579C23.176 6.509 24 8.058 24 9.724V19C24 21.757 21.757 24 19 24ZM12 1.997C11.416 1.997 10.832 2.169 10.322 2.514L3.322 7.237C2.494 7.795 2 8.724 2 9.723V18.999C2 20.653 3.346 21.999 5 21.999H19C20.654 21.999 22 20.653 22 18.999V9.724C22 8.725 21.506 7.795 20.679 7.238L13.678 2.514C13.168 2.169 12.584 1.997 12 1.997Z"
                                                fill="white"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_59_17">
                                                <rect width="24" height="24" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                }
                            />
                        </div>
                        <div
                            className=" max-md:mb-4  md:mb-20 mx-auto"
                            onClick={() => {
                                if (isSmallDevice) {
                                    setclass1("col-8 mx-auto  col-md-2 order-md-2 translate-x-[-112%]");
                                    setclass2("col-8 col-md-2  mx-auto order-md-5 md:block translate-x-[-112%]")
                                    setimg1(false)
                                    setimg2(true)
                                    setimg3(false)
                                    setimg4(false)
                                    setimg5(false)
                                    setimg6(false)
                                    settot(true)
                                }
                            }}
                            onMouseEnter={() => {
                                if (!isSmallDevice) {
                                    return (
                                        setimg1(false),
                                        setimg2(true),
                                        setimg3(false),
                                        setimg4(false),
                                        setimg5(false),
                                        setimg6(false),
                                        settot(true)
                                    );
                                }
                            }}
                            onMouseLeave={() => {
                                if (!isSmallDevice) {
                                    setTimeout(() => {
                                        setimg2(false)
                                        settot(true)
                                    }, 200);

                                }
                            }}
                        >
                            <ImageGroup
                                ImageGroupHeader={"حقوقی"}
                                ImageGroupparagrph={"خرید، فروش، اجاره،  ساخت و ساز"}
                                ImageSvg={
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clip-path="url(#clip0_59_27)">
                                            <path
                                                d="M23.704 10.806C23.313 10.415 22.681 10.415 22.29 10.806L21.741 11.355L12.659 2.273L13.208 1.724C13.599 1.333 13.599 0.701 13.208 0.31C12.817 -0.0809997 12.185 -0.0809997 11.794 0.31L4.79401 7.31C4.40301 7.701 4.40301 8.333 4.79401 8.724C4.98901 8.919 5.24501 9.017 5.50101 9.017C5.75701 9.017 6.01301 8.919 6.20801 8.724L6.78901 8.143L10.616 11.97L0.293006 22.293C-0.0979941 22.684 -0.0979941 23.316 0.293006 23.707C0.488006 23.902 0.744006 24 1.00001 24C1.25601 24 1.51201 23.902 1.70701 23.707L12.03 13.384L15.871 17.225L15.291 17.805C14.9 18.196 14.9 18.828 15.291 19.219C15.486 19.414 15.742 19.512 15.998 19.512C16.254 19.512 16.51 19.414 16.705 19.219L23.705 12.219C24.096 11.828 24.096 11.196 23.705 10.805L23.704 10.806ZM14.616 13.143L10.944 9.471L13.986 6.429L17.658 10.101C16.869 10.89 15.463 12.296 14.616 13.143ZM11.245 3.687L12.572 5.014L9.53001 8.056L8.20301 6.729L11.245 3.687ZM16.031 14.557C16.88 13.708 18.285 12.303 19.073 11.515L20.327 12.769L17.285 15.811L16.031 14.557Z"
                                                fill="white"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_59_27">
                                                <rect width="24" height="24" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                }
                            />
                        </div>
                        <div
                            className=" max-md:mb-4  md:mb-20 mx-auto "
                            onClick={() => {
                                if (isSmallDevice) {
                                    setclass1("col-8 mx-auto  col-md-2 order-md-2 translate-x-[-112%]");
                                    setclass2("col-8 col-md-2  mx-auto order-md-5 md:block translate-x-[-112%]")
                                    setimg1(false)
                                    setimg2(false)
                                    setimg3(true)
                                    setimg4(false)
                                    setimg5(false)
                                    setimg6(false)
                                    settot(true)
                                }
                            }}
                            onMouseEnter={() => {
                                if (!isSmallDevice) {
                                    return (
                                        setimg1(false),
                                        setimg2(false),
                                        setimg3(true),
                                        setimg4(false),
                                        setimg5(false),
                                        setimg6(false),
                                        settot(true)
                                    );
                                }
                            }}
                            onMouseLeave={() => {
                                if (!isSmallDevice) {
                                    setTimeout(() => {
                                        setimg3(false)
                                        settot(true)
                                    }, 200);

                                }
                            }}
                        >
                            <ImageGroup
                                ImageGroupHeader={"زنجیره تامین و خدمات "}
                                ImageGroupparagrph={"خرید، فروش، اجاره،  ساخت و ساز"}
                                ImageSvg={
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clip-path="url(#clip0_59_37)">
                                            <path
                                                d="M7.83499 16.17C7.60499 15.94 7.38899 15.688 7.19399 15.422C6.86899 14.976 6.96699 14.35 7.41399 14.025C7.85999 13.7 8.48499 13.798 8.81099 14.244C8.93999 14.422 9.08499 14.593 9.24799 14.755C10.051 15.558 11.118 16 12.253 16C13.388 16 14.456 15.558 15.258 14.755L20.758 9.25499C22.415 7.59799 22.415 4.90099 20.758 3.24399C19.101 1.587 16.404 1.587 14.747 3.24399L13.689 4.30199C13.298 4.693 12.666 4.693 12.275 4.30199C11.884 3.911 11.884 3.279 12.275 2.888L13.333 1.83C15.77 -0.608005 19.735 -0.608005 22.172 1.83C24.609 4.26699 24.609 8.23199 22.172 10.669L16.672 16.169C15.492 17.35 13.922 18 12.253 18C10.584 18 9.01399 17.35 7.83499 16.17ZM6.25299 24C7.92299 24 9.49199 23.35 10.672 22.169L11.73 21.111C12.121 20.721 12.121 20.088 11.73 19.697C11.34 19.306 10.707 19.307 10.316 19.697L9.25699 20.755C8.45399 21.558 7.38699 22 6.25199 22C5.11699 22 4.04999 21.558 3.24699 20.755C2.44399 19.952 2.00199 18.885 2.00199 17.75C2.00199 16.615 2.44399 15.547 3.24699 14.745L8.74699 9.24499C9.54999 8.44199 10.617 7.99999 11.752 7.99999C12.887 7.99999 13.955 8.44199 14.757 9.24499C14.917 9.40599 15.063 9.57699 15.193 9.75499C15.517 10.202 16.142 10.302 16.59 9.97599C17.037 9.65099 17.136 9.026 16.811 8.57899C16.621 8.317 16.406 8.06599 16.172 7.83199C14.991 6.64999 13.421 5.99999 11.752 5.99999C10.083 5.99999 8.51299 6.64999 7.33299 7.83099L1.83399 13.331C0.652991 14.511 0.00299072 16.081 0.00299072 17.75C0.00299072 19.419 0.652991 20.989 1.83399 22.169C3.01399 23.35 4.58299 24 6.25299 24Z"
                                                fill="white"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_59_37">
                                                <rect width="24" height="24" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                }
                            />
                        </div>
                    </div>

                    <div className=" col-md-4 flex order-first order-md-3 justify-center">
                        <FrontPageCenter />
                    </div>
                    <div className={class2}>
                        <div
                            className="max-md:mb-4  md:mb-20 "
                            onClick={() => {
                                if (isSmallDevice) {
                                    setclass1("col-8 mx-auto  col-md-2 order-md-2 translate-x-[-112%]");
                                    setclass2("col-8 col-md-2  mx-auto order-md-5 md:block translate-x-[-112%]")
                                    setimg1(false)
                                    setimg2(false)
                                    setimg3(false)
                                    setimg4(true)
                                    setimg5(false)
                                    setimg6(false)
                                    settot(true)
                                }
                            }}
                            onMouseEnter={() => {
                                if (!isSmallDevice) {
                                    return (
                                        setimg1(false),
                                        setimg2(false),
                                        setimg3(false),
                                        setimg4(true),
                                        setimg5(false),
                                        setimg6(false),
                                        settot(true)
                                    );
                                }
                            }}
                            onMouseLeave={() => {
                                if (!isSmallDevice) {
                                    setTimeout(() => {
                                        setimg4(false)
                                        settot(true)
                                    }, 200);

                                }
                            }}
                        >
                            <ImageGroup
                                ImageGroupHeader={"آموزش"}
                                ImageGroupparagrph={"خرید، فروش، اجاره،  ساخت و ساز"}
                                ImageSvg={
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clip-path="url(#clip0_59_47)">
                                            <path
                                                d="M19 24H5C3.67441 23.9984 2.40356 23.4711 1.46622 22.5338C0.528882 21.5964 0.00158786 20.3256 0 19L0 5C0.00158786 3.67441 0.528882 2.40356 1.46622 1.46622C2.40356 0.528882 3.67441 0.00158786 5 0L19 0C20.3256 0.00158786 21.5964 0.528882 22.5338 1.46622C23.4711 2.40356 23.9984 3.67441 24 5V19C23.9984 20.3256 23.4711 21.5964 22.5338 22.5338C21.5964 23.4711 20.3256 23.9984 19 24ZM5 2C4.20435 2 3.44129 2.31607 2.87868 2.87868C2.31607 3.44129 2 4.20435 2 5V19C2 19.7956 2.31607 20.5587 2.87868 21.1213C3.44129 21.6839 4.20435 22 5 22H19C19.7956 22 20.5587 21.6839 21.1213 21.1213C21.6839 20.5587 22 19.7956 22 19V5C22 4.20435 21.6839 3.44129 21.1213 2.87868C20.5587 2.31607 19.7956 2 19 2H5ZM9.342 17.005C8.92513 17.0036 8.51601 16.8922 8.156 16.682C7.80034 16.4784 7.50515 16.184 7.30063 15.8289C7.09611 15.4738 6.9896 15.0708 6.992 14.661V9.339C6.99166 8.92914 7.09911 8.52641 7.30358 8.1712C7.50805 7.81599 7.80234 7.52079 8.15692 7.31524C8.5115 7.10968 8.9139 7.00099 9.32376 7.00007C9.73361 6.99915 10.1365 7.10604 10.492 7.31L15.77 9.945C16.1366 10.1429 16.4436 10.4353 16.6592 10.7918C16.8748 11.1483 16.9912 11.556 16.9962 11.9726C17.0012 12.3892 16.8946 12.7995 16.6877 13.1611C16.4807 13.5227 16.1808 13.8223 15.819 14.029L10.443 16.716C10.1077 16.9073 9.728 17.0069 9.342 17.005ZM9.317 9.005C9.26189 9.00498 9.20774 9.01946 9.16 9.047C9.10814 9.07585 9.0651 9.11826 9.0355 9.1697C9.00591 9.22114 8.99087 9.27966 8.992 9.339V14.661C8.99234 14.7195 9.00788 14.7768 9.03709 14.8274C9.0663 14.8781 9.10818 14.9202 9.15861 14.9498C9.20905 14.9794 9.2663 14.9953 9.32475 14.996C9.3832 14.9968 9.44084 14.9823 9.492 14.954L14.868 12.266C14.908 12.2347 14.9399 12.1941 14.9608 12.1478C14.9817 12.1015 14.991 12.0507 14.988 12C14.9893 11.9405 14.9742 11.8818 14.9444 11.8304C14.9146 11.7789 14.8712 11.7365 14.819 11.708L9.545 9.073C9.47624 9.03082 9.39763 9.00737 9.317 9.005Z"
                                                fill="white"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_59_47">
                                                <rect width="24" height="24" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                }
                            />
                        </div>
                        <div
                            className=" max-md:mb-4 md:mb-20 "
                            onClick={() => {
                                if (isSmallDevice) {
                                    setclass1("col-8 mx-auto  col-md-2 order-md-2 translate-x-[-112%]");
                                    setclass2("col-8 col-md-2  mx-auto order-md-5 md:block translate-x-[-112%]")
                                    setimg1(false)
                                    setimg2(false)
                                    setimg3(false)
                                    setimg4(false)
                                    setimg5(true)
                                    setimg6(false)
                                    settot(true)
                                }
                            }}
                            onMouseEnter={() => {
                                if (!isSmallDevice) {
                                    return (
                                        setimg1(false),
                                        setimg2(false),
                                        setimg3(false),
                                        setimg4(false),
                                        setimg5(true),
                                        setimg6(false),
                                        settot(true)
                                    );
                                }
                            }}
                            onMouseLeave={() => {
                                if (!isSmallDevice) {
                                    setTimeout(() => {
                                        setimg5(false)
                                        settot(true)
                                    }, 200);

                                }
                            }}
                        >
                            <ImageGroup
                                ImageGroupHeader={"مدیریت ساختمان"}
                                ImageGroupparagrph={"خرید، فروش، اجاره،  ساخت و ساز"}
                                ImageSvg={
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clip-path="url(#clip0_59_57)">
                                            <path
                                                d="M19 15H18C17.447 15 17 14.553 17 14C17 13.447 17.447 13 18 13H19C19.553 13 20 13.447 20 14C20 14.553 19.553 15 19 15ZM20 18C20 17.447 19.553 17 19 17H18C17.447 17 17 17.447 17 18C17 18.553 17.447 19 18 19H19C19.553 19 20 18.553 20 18ZM16 6C16 5.447 15.553 5 15 5H14C13.447 5 13 5.447 13 6C13 6.553 13.447 7 14 7H15C15.553 7 16 6.553 16 6ZM20 6C20 5.447 19.553 5 19 5H18C17.447 5 17 5.447 17 6C17 6.553 17.447 7 18 7H19C19.553 7 20 6.553 20 6ZM20 10C20 9.447 19.553 9 19 9H18C17.447 9 17 9.447 17 10C17 10.553 17.447 11 18 11H19C19.553 11 20 10.553 20 10ZM24 19V5C24 2.243 21.757 0 19 0H14C11.243 0 9 2.243 9 5C9 5.553 9.447 6 10 6C10.553 6 11 5.553 11 5C11 3.346 12.346 2 14 2H19C20.654 2 22 3.346 22 5V19C22 20.654 20.654 22 19 22H18C17.447 22 17 22.447 17 23C17 23.553 17.447 24 18 24H19C21.757 24 24 21.757 24 19ZM16 19.5V15.348C16 13.8 15.301 12.366 14.081 11.41L11.081 9.061C9.267 7.643 6.733 7.642 4.919 9.061L1.919 11.409C0.699 12.364 0 13.799 0 15.347V19.499C0 21.98 2.019 23.999 4.5 23.999H11.5C13.981 23.999 16 21.981 16 19.5ZM9.849 10.637L12.849 12.985C13.58 13.558 14 14.42 14 15.348V19.5C14 20.879 12.879 22 11.5 22H4.5C3.121 22 2 20.879 2 19.5V15.348C2 14.419 2.42 13.558 3.151 12.985L6.151 10.638C6.695 10.212 7.347 9.999 8 9.999C8.653 9.999 9.305 10.212 9.849 10.637ZM10 18V16C10 15.448 9.552 15 9 15H7C6.448 15 6 15.448 6 16V18C6 18.552 6.448 19 7 19H9C9.552 19 10 18.552 10 18Z"
                                                fill="white"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_59_57">
                                                <rect width="24" height="24" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                }
                            />
                        </div>
                        <div
                            className=" max-md:mb-4 md:mb-20 "
                            onClick={() => {
                                if (isSmallDevice) {
                                    setclass1("col-8 mx-auto  col-md-2 order-md-2 translate-x-[-112%]");
                                    setclass2("col-8 col-md-2  mx-auto order-md-5 md:block translate-x-[-112%]")
                                    setimg1(false)
                                    setimg2(false)
                                    setimg3(false)
                                    setimg4(false)
                                    setimg5(false)
                                    setimg6(true)
                                    settot(true)
                                }
                            }}
                            onMouseEnter={() => {
                                if (!isSmallDevice) {
                                    return (
                                        setimg1(false),
                                        setimg2(false),
                                        setimg3(false),
                                        setimg4(false),
                                        setimg5(false),
                                        setimg6(true),
                                        settot(true)
                                    );
                                }
                            }}
                            onMouseLeave={() => {
                                if (!isSmallDevice) {
                                    setTimeout(() => {
                                        setimg6(false)
                                        settot(true)
                                    }, 200);

                                }
                            }}
                        >
                            <ImageGroup
                                ImageGroupHeader={"آگهی و تبلیغات"}
                                ImageGroupparagrph={"خرید، فروش، اجاره،  ساخت و ساز"}
                                ImageSvg={
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clip-path="url(#clip0_59_67)">
                                            <path
                                                d="M17 0C16.7348 0 16.4804 0.105357 16.2929 0.292893C16.1054 0.48043 16 0.734784 16 1C16 3.949 13.417 5 11 5H4C2.93913 5 1.92172 5.42143 1.17157 6.17157C0.421427 6.92172 0 7.93913 0 9L0 11C0.00218416 11.5987 0.139462 12.1893 0.401603 12.7276C0.663743 13.2659 1.04399 13.7381 1.514 14.109L5.086 22.081C5.34004 22.6521 5.75417 23.1373 6.27827 23.4779C6.80237 23.8185 7.41396 23.9998 8.039 24C8.53631 23.9997 9.02565 23.875 9.46247 23.6373C9.89929 23.3996 10.2697 23.0564 10.54 22.639C10.8104 22.2215 10.972 21.7431 11.0103 21.2473C11.0485 20.7515 10.9621 20.2539 10.759 19.8L8.559 15H11C13.417 15 16 16.051 16 19C16 19.2652 16.1054 19.5196 16.2929 19.7071C16.4804 19.8946 16.7348 20 17 20C17.2652 20 17.5196 19.8946 17.7071 19.7071C17.8946 19.5196 18 19.2652 18 19V1C18 0.734784 17.8946 0.48043 17.7071 0.292893C17.5196 0.105357 17.2652 0 17 0ZM8.937 20.619C9.00324 20.7686 9.03109 20.9323 9.01804 21.0954C9.005 21.2585 8.95145 21.4157 8.86227 21.5529C8.77309 21.69 8.65109 21.8027 8.50733 21.8808C8.36357 21.9589 8.20259 21.9999 8.039 22C7.8004 21.9998 7.56697 21.9304 7.36709 21.8001C7.1672 21.6698 7.00945 21.4842 6.913 21.266L4.105 15H6.359L8.937 20.619ZM16 14.6C14.5713 13.4992 12.8024 12.9331 11 13H4C3.46957 13 2.96086 12.7893 2.58579 12.4142C2.21071 12.0391 2 11.5304 2 11V9C2 8.46957 2.21071 7.96086 2.58579 7.58579C2.96086 7.21071 3.46957 7 4 7H11C12.8018 7.0683 14.5706 6.50403 16 5.405V14.6ZM23.9 15.452C23.8413 15.5696 23.7601 15.6744 23.6609 15.7606C23.5617 15.8467 23.4465 15.9125 23.3218 15.9541C23.1972 15.9957 23.0656 16.0123 22.9345 16.0031C22.8035 15.9938 22.6755 15.9588 22.558 15.9L20.558 14.9C20.3206 14.7814 20.1401 14.5735 20.0561 14.3218C19.972 14.0701 19.9915 13.7954 20.11 13.558C20.2286 13.3206 20.4365 13.1401 20.6882 13.0561C20.9399 12.972 21.2146 12.9914 21.452 13.11L23.452 14.11C23.6882 14.2285 23.8678 14.4356 23.9518 14.6861C24.0357 14.9366 24.0171 15.2102 23.9 15.447V15.452ZM20.11 6.452C20.0512 6.33448 20.0162 6.20653 20.0069 6.07546C19.9977 5.9444 20.0143 5.81279 20.0559 5.68816C20.0975 5.56353 20.1633 5.44832 20.2494 5.34912C20.3356 5.24991 20.4404 5.16866 20.558 5.11L22.558 4.11C22.7954 3.99145 23.0701 3.97205 23.3218 4.05606C23.5735 4.14008 23.7815 4.32063 23.9 4.558C24.0186 4.79537 24.038 5.07011 23.9539 5.32178C23.8699 5.57346 23.6894 5.78145 23.452 5.9L21.452 6.9C21.3345 6.95876 21.2065 6.99378 21.0755 7.00306C20.9444 7.01234 20.8128 6.99571 20.6882 6.9541C20.5635 6.9125 20.4483 6.84674 20.3491 6.76058C20.2499 6.67443 20.1687 6.56957 20.11 6.452ZM20 10C20 9.73478 20.1054 9.48043 20.2929 9.29289C20.4804 9.10536 20.7348 9 21 9H23C23.2652 9 23.5196 9.10536 23.7071 9.29289C23.8946 9.48043 24 9.73478 24 10C24 10.2652 23.8946 10.5196 23.7071 10.7071C23.5196 10.8946 23.2652 11 23 11H21C20.7348 11 20.4804 10.8946 20.2929 10.7071C20.1054 10.5196 20 10.2652 20 10Z"
                                                fill="white"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_59_67">
                                                <rect width="24" height="24" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                }
                            />
                        </div>
                    </div>
                    <div className="col-md-2 order-md-5 md:block  max-md:absolute max-md:top-[25.1rem] md:relative ">
                        {(img4 || p4)&tot ? (
                            <div
                                onMouseEnter={() => {
                                    setp4(true);
                                }}
                                onMouseLeave={() => {
                                    setp4(false);
                                }}
                            >
                                <PanelR
                                    header={"آموزش"}
                                    items={[
                                        "پنل مشاور",
                                        "پنل مدیران معاملات",
                                        "پنل فروشنده",
                                        "پنل خریدار",
                                        "پنل موجر",
                                        "پنل مستاجر",
                                        "پنل سازنده",
                                        "پنل مالکین کلنگی",
                                    ]}
                                />
                            </div>
                        ) : (img5 || p5)&tot ? (
                            <div
                                onMouseEnter={() => {
                                    setp5(true);
                                }}
                                onMouseLeave={() => {
                                    setp5(false);
                                }}>
                                <PanelR
                                    header={"مدیریت ساختمان"}
                                    items={[
                                        "پنل مشاور",
                                        "پنل مدیران معاملات",
                                        "پنل فروشنده",
                                        "پنل خریدار",
                                        "پنل موجر",
                                        "پنل مستاجر",
                                        "پنل سازنده",
                                        "پنل مالکین کلنگی",
                                    ]}
                                />
                            </div>
                        ) : (img6 || p6)&tot ? (
                            <div
                                onMouseEnter={() => {
                                    setp6(true);
                                }}
                                onMouseLeave={() => {
                                    setp6(false);
                                }}>
                                <PanelR
                                    header={"آگهی و تبلیغات"}
                                    items={[
                                        "پنل مشاور",
                                        "پنل مدیران معاملات",
                                        "پنل فروشنده",
                                        "پنل خریدار",
                                        "پنل موجر",
                                        "پنل مستاجر",
                                        "پنل سازنده",
                                        "پنل مالکین کلنگی",
                                    ]}
                                /></div>
                        ) : null}
                    </div>

                </div>
            </div>
        </>
    )
}
export default CubeMain