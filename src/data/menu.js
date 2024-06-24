import { PiGithubLogoDuotone } from "react-icons/pi";
import { PiYoutubeLogo } from "react-icons/pi";
import { PiCodepenLogoDuotone } from "react-icons/pi";
import { PiInstagramLogo } from "react-icons/pi";

import { GiRiceCooker } from "react-icons/gi";
import { IoFastFoodOutline } from "react-icons/io5";
import { FaBowlRice } from "react-icons/fa6";
import { PiBowlFood } from "react-icons/pi";
import { MdOutlineEventNote } from "react-icons/md";
import { GiNotebook } from "react-icons/gi";
import { LuDessert } from "react-icons/lu";
import { SlNote } from "react-icons/sl";
import { GiFruitBowl } from "react-icons/gi";

export const headerMenus = [
    {
        title: "한식 레시피",
        icon: <GiRiceCooker />,
        src: "/Search/한식 레시피"
    },
    {
        title: "양식 레시피",
        icon: <IoFastFoodOutline />,
        src: "/Search/양식 레시피"
    },
    {
        title: "일식 레시피",
        icon: <FaBowlRice />,
        src: "/Search/일식 레시피"
    },
    {
        title: "중식 레시피",
        icon: <PiBowlFood />,
        src: "/Search/중식 레시피"
    },
    {
        title: "디저트 레시피",
        icon: <LuDessert />,
        src: "/Search/디저트 레시피"
    },
    {
        title: "해외 레시피",
        icon: <MdOutlineEventNote />,
        src: "/Search/해외 레시피"
    },
    {
        title: "추천 레시피",
        icon: <GiNotebook />,
        src: "/Search/추천 레시피"
    },
    {
        title: "오늘 뭐 먹지?",
        icon: <SlNote />,
        src: "/Search/오늘 뭐 먹지?"
    },
    {
        title: "과일 디저트",
        icon: <GiFruitBowl />,
        src: "/Search/과일 디저트"
    },
]

export const searchKeyword = [
    {
        title: "디저트",
        src: "/Search/디저트"
    },
    {
        title: "요리 레시피",
        src: "/Search/요리 레시피"
    },
    {
        title: "노오븐 레시피",
        src: "/Search/노오븐 레시피"
    },
    {
        title: "3분요리",
        src: "/Search/3분요리"
    },
    {
        title: "간단 레시피",
        src: "/Search/간단 레시피"
    },
    {
        title: "한국 전통음식",
        src: "/Search/한국 전통음식"
    },
]

export const snsLink = [
    {
        title: "github",
        url: "https://github.com/sunhew",
        icon: < PiGithubLogoDuotone />
    },
    {
        title: "youtube",
        url: "https://github.com/sunhew",
        icon: < PiYoutubeLogo />
    },
    {
        title: "codepen",
        url: "https://github.com/sunhew",
        icon: < PiCodepenLogoDuotone />
    },
    {
        title: "instagram",
        url: "https://github.com/sunhew",
        icon: < PiInstagramLogo />
    },
]