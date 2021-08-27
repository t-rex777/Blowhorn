import { BiCertification, BiCodeBlock } from "react-icons/bi";
import { AiOutlineNotification } from "react-icons/ai";
import { GiCube, GiStoneBlock } from "react-icons/gi";
import { RiCoupon4Line } from "react-icons/ri";
export const features = [
  {
    img: <BiCertification size={20} className="feature__boxes__img" />,
    header: "Certification",
    info: "Each of our plan will provide you and your team with certifications.",
  },
  {
    img: <AiOutlineNotification size={20} className="feature__boxes__img" />,
    header: "Notification",
    info: "Send out notifications to all your customers to keep them engaged.",
  },
  {
    img: <GiCube size={20} className="feature__boxes__img" />,
    header: "Bundles",
    info: "High quality bundles of awesome tools to help you out.",
  },
  {
    img: <BiCodeBlock size={20} className="feature__boxes__img" />,
    header: "Developer tools",
    info: "Developer tools to help grow your application and keep it up-to-date .",
  },
  {
    img: <GiStoneBlock size={20} className="feature__boxes__img" />,
    header: "Building Blocks",
    info: "The right kind of building blocks to take your company to the next level.",
  },
  {
    img: <RiCoupon4Line size={20} className="feature__boxes__img" />,
    header: "Coupons",
    info: "Coupons system to provide special offers and discounts for your app.",
  },
];
