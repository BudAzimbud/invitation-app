import { FiMail, FiTrash } from "react-icons/fi";
import { GiPartyHat } from "react-icons/gi";

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
    }
]

export default routes