import { FiMail, FiTrash } from "react-icons/fi";
import { GiPartyHat } from "react-icons/gi";
import {BiLogOut} from 'react-icons/bi'

const routes = [
    {
        link: "/",
        title: "Acara Anda",
        icon: <GiPartyHat />
    },
    {
        link: "/undangan",
        title: "Undangan Anda",
        icon: <FiMail />
    },
    {
        link: "/sampah",
        title: "Sampah",
        icon: <FiTrash />
    },
    {
        link: "/logout",
        title : "Logout" ,
        icon : <BiLogOut />
    }
]

export default routes